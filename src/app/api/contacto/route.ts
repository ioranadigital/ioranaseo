import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { CONTACTO_MOTIVOS } from './motivos';

const CONTACTO_EMAIL = process.env.IORANASEO_CONTACT_EMAIL || 'contacto@ioranaseo.com';
const ADMIN_EMAILS = (process.env.IORANASEO_ADMIN_EMAILS || '').split(',').map((e) => e.trim()).filter(Boolean);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOTIVE_LABELS = new Map(CONTACTO_MOTIVOS.map((m) => [m.value, m.label]));

const MAX_LENGTHS = { nombre: 100, email: 254, empresa: 150, telefono: 40, motivo: 60, mensaje: 600, utilizas: 300 };

const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_MAX = 5;
const attempts = new Map<string, { count: number; first: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  for (const [key, entry] of attempts) {
    if (now - entry.first > RATE_WINDOW_MS) attempts.delete(key);
  }
  const entry = attempts.get(ip);
  if (!entry) {
    attempts.set(ip, { count: 1, first: now });
    return false;
  }
  if (entry.count >= RATE_MAX) return true;
  entry.count += 1;
  return false;
}

function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function singleLine(value: string): string {
  return String(value).replace(/[\r\n\t]+/g, ' ').trim();
}

interface ContactPayload {
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  motivo: string;
  mensaje: string;
  utilizas: string;
  privacidad: boolean;
  website?: string;
}

function cleanPayload(raw: any): ContactPayload {
  const data: ContactPayload = {
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    motivo: '',
    mensaje: '',
    utilizas: '',
    privacidad: false,
  };

  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    const value = raw?.[field];
    (data as any)[field] = typeof value === 'string' ? value.trim().slice(0, max) : '';
  }

  data.website = typeof raw?.website === 'string' ? raw.website : '';
  data.privacidad = Boolean(raw?.privacidad);

  return data;
}

function validatePayload(data: ContactPayload): string[] {
  const errors: string[] = [];
  if (!data.nombre) errors.push('nombre');
  if (!data.email || !EMAIL_PATTERN.test(data.email)) errors.push('email');
  if (!data.empresa) errors.push('empresa');
  if (!MOTIVE_LABELS.has(data.motivo)) errors.push('motivo');
  if (!data.mensaje) errors.push('mensaje');
  if (!data.privacidad) errors.push('privacidad');
  return errors;
}

function generateEmailHtml(data: ContactPayload): string {
  const fields = [
    { label: 'Nombre', value: data.nombre },
    { label: 'Email', value: data.email },
    { label: 'Empresa', value: data.empresa },
    { label: 'Teléfono', value: data.telefono || 'No proporcionado' },
    { label: 'Motivo de contacto', value: MOTIVE_LABELS.get(data.motivo) || data.motivo },
    { label: 'Qué utilizas actualmente', value: data.utilizas || 'No especificado' },
  ];

  const fieldsHtml = fields
    .map(
      (f) => `
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #333;">
        ${escapeHtml(f.label)}
      </td>
      <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; color: #666;">
        ${escapeHtml(f.value)}
      </td>
    </tr>
  `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Nueva consulta de contacto — IORANA SEO</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2c3e50; margin-top: 0;">Nueva consulta de contacto</h2>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              ${fieldsHtml}
            </table>
          </div>

          <div style="background: #f0f4f8; padding: 20px; border-left: 4px solid #336FE6; border-radius: 4px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #2c3e50;">¿En qué podemos ayudarte?</h3>
            <p style="white-space: pre-wrap; color: #555;">${escapeHtml(data.mensaje)}</p>
          </div>

          <div style="color: #888; font-size: 12px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p>Este email fue enviado desde el formulario de contacto de IORANA SEO.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: false, reason: 'email_not_configured' }, { status: 503 });
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json({ ok: false, reason: 'rate_limited' }, { status: 429 });
    }

    const raw = await req.json().catch(() => ({}));
    const data = cleanPayload(raw);

    if (data.website) {
      // Honeypot: simulate success without sending
      return NextResponse.json({ ok: true });
    }

    const validationErrors = validatePayload(data);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { ok: false, reason: 'invalid_data', fields: validationErrors },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const response = await resend.emails.send({
      from: `IORANA SEO Contacto <${CONTACTO_EMAIL}>`,
      to: ADMIN_EMAILS.length > 0 ? ADMIN_EMAILS : CONTACTO_EMAIL,
      replyTo: data.email,
      subject: singleLine(`Nueva consulta: ${MOTIVE_LABELS.get(data.motivo)} — ${data.nombre}`).slice(0, 200),
      html: generateEmailHtml(data),
    });

    if (response.error) {
      console.error('Resend error:', response.error);
      return NextResponse.json({ ok: false, reason: 'send_failed' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ ok: false, reason: 'server_error' }, { status: 500 });
  }
}
