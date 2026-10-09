import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const CONTACTO_EMAIL = process.env.IORANASEO_CONTACT_EMAIL || 'contacto@neosuma.com';
const ADMIN_EMAILS = (process.env.IORANASEO_ADMIN_EMAILS || '').split(',').map((e) => e.trim()).filter(Boolean);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CUSTOMER_TYPES: Record<string, string> = { b2b: 'B2B', b2c: 'B2C', both: 'B2B y B2C' };

const MAX = { short: 150, url: 300, phone: 40, email: 254, notes: 600, list: 20 };

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

function str(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function strList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((v): v is string => typeof v === 'string')
    .map((v) => v.trim().slice(0, MAX.short))
    .filter(Boolean)
    .slice(0, MAX.list);
}

interface DiagnosticoPayload {
  business: {
    company: string;
    website: string;
    noWebsite: boolean;
    sector: string;
    market: string;
    customerType: string;
  };
  presence: { channels: string[]; profiles: Array<{ type: string; url: string }> };
  objectives: { selected: string[]; notes: string };
  contact: { name: string; email: string; phone: string; privacyAccepted: boolean };
  hp: string;
}

interface RawDiagnostico {
  business?: Record<string, unknown>;
  presence?: { channels?: unknown; profiles?: unknown };
  objectives?: { selected?: unknown; notes?: unknown };
  contact?: Record<string, unknown>;
  website?: unknown;
}

function cleanPayload(raw: RawDiagnostico | null | undefined): DiagnosticoPayload {
  const profiles: Array<Record<string, unknown> | null | undefined> = Array.isArray(raw?.presence?.profiles)
    ? raw.presence.profiles.slice(0, MAX.list)
    : [];
  return {
    business: {
      company: str(raw?.business?.company, MAX.short),
      website: str(raw?.business?.website, MAX.url),
      noWebsite: Boolean(raw?.business?.noWebsite),
      sector: str(raw?.business?.sector, MAX.short),
      market: str(raw?.business?.market, MAX.short),
      customerType: str(raw?.business?.customerType, 10),
    },
    presence: {
      channels: strList(raw?.presence?.channels),
      profiles: profiles
        .map((p) => ({ type: str(p?.type, MAX.short), url: str(p?.url, MAX.url) }))
        .filter((p: { type: string; url: string }) => p.type || p.url),
    },
    objectives: {
      selected: strList(raw?.objectives?.selected),
      notes: str(raw?.objectives?.notes, MAX.notes),
    },
    contact: {
      name: str(raw?.contact?.name, 100),
      email: str(raw?.contact?.email, MAX.email),
      phone: str(raw?.contact?.phone, MAX.phone),
      privacyAccepted: raw?.contact?.privacyAccepted === true,
    },
    hp: typeof raw?.website === 'string' ? raw.website : '',
  };
}

function validatePayload(d: DiagnosticoPayload): string[] {
  const errors: string[] = [];
  if (!d.business.company) errors.push('business.company');
  if (!d.business.noWebsite && !d.business.website) errors.push('business.website');
  if (!d.business.sector) errors.push('business.sector');
  if (d.presence.channels.length === 0) errors.push('presence.channels');
  if (d.objectives.selected.length === 0) errors.push('objectives.selected');
  if (!d.contact.name) errors.push('contact.name');
  if (!d.contact.email || !EMAIL_PATTERN.test(d.contact.email)) errors.push('contact.email');
  if (!d.contact.privacyAccepted) errors.push('contact.privacy');
  return errors;
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding: 10px 12px; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #333; vertical-align: top; width: 38%;">${escapeHtml(label)}</td>
      <td style="padding: 10px 12px; border-bottom: 1px solid #e0e0e0; color: #666;">${escapeHtml(value)}</td>
    </tr>`;
}

function section(title: string, rows: string): string {
  return `
    <h3 style="color: #2c3e50; margin: 24px 0 8px;">${escapeHtml(title)}</h3>
    <div style="background: #f8f9fa; padding: 8px; border-radius: 8px;">
      <table style="width: 100%; border-collapse: collapse;">${rows}</table>
    </div>`;
}

function generateEmailHtml(d: DiagnosticoPayload): string {
  const business = [
    row('Empresa / marca', d.business.company),
    row('Web', d.business.noWebsite ? 'No tiene web' : d.business.website),
    row('Sector', d.business.sector),
    row('Mercado', d.business.market || 'No especificado'),
    row('Tipo de cliente', CUSTOMER_TYPES[d.business.customerType] || 'No especificado'),
  ].join('');

  const presence = [
    row('Canales activos', d.presence.channels.join(', ')),
    ...d.presence.profiles.map((p) => row(p.type || 'Perfil', p.url || '—')),
  ].join('');

  const objectives = [
    row('Objetivos', d.objectives.selected.join(', ')),
    row('Notas', d.objectives.notes || 'Sin notas'),
  ].join('');

  const contact = [
    row('Nombre', d.contact.name),
    row('Email', d.contact.email),
    row('Teléfono', d.contact.phone || 'No proporcionado'),
  ].join('');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Nueva solicitud de diagnóstico — IORANA SEO</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 640px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2c3e50; margin-top: 0;">Nueva solicitud de diagnóstico</h2>
          ${section('Negocio', business)}
          ${section('Presencia digital', presence)}
          ${section('Objetivos', objectives)}
          ${section('Contacto', contact)}
          <div style="color: #888; font-size: 12px; padding-top: 20px; margin-top: 24px; border-top: 1px solid #e0e0e0;">
            <p>Enviado desde el asistente de diagnóstico de IORANA SEO.</p>
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

    if (data.hp) {
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
      from: `IORANA SEO Diagnóstico <${CONTACTO_EMAIL}>`,
      to: ADMIN_EMAILS.length > 0 ? ADMIN_EMAILS : CONTACTO_EMAIL,
      replyTo: data.contact.email,
      subject: singleLine(`Nuevo diagnóstico: ${data.business.company} — ${data.contact.name}`).slice(0, 200),
      html: generateEmailHtml(data),
    });

    if (response.error) {
      console.error('Resend error:', response.error);
      return NextResponse.json({ ok: false, reason: 'send_failed' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Diagnostico API error:', error);
    return NextResponse.json({ ok: false, reason: 'server_error' }, { status: 500 });
  }
}
