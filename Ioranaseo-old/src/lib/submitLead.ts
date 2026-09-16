export const LEADS_WEBHOOK_URL =
  "https://n8n.iorana.dev/webhook/v1/leads-receptor";

export interface SubmitLeadParams {
  nombre?: string;
  telefono?: string;
  email?: string;
  asunto: string;
}

export async function submitLead({
  nombre,
  telefono,
  email,
  asunto,
}: SubmitLeadParams): Promise<boolean> {
  try {
    const response = await fetch(LEADS_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        project_id: "iorana",
        nombre: nombre?.trim() || "",
        telefono: telefono?.trim() || "",
        email: email?.trim() || "",
        metadata: {
          url_origen: window.location.href,
          asunto,
        },
      }),
    });
    return response.ok;
  } catch (error) {
    console.error("Error enviando lead a n8n:", error);
    return false;
  }
}
