import { NextResponse, after } from "next/server";
import {
  validateContactForm,
  type ContactFormData,
} from "@/components/sections/contact/types";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req: Request) {
  const baseUrl = process.env.MAUTIC_BASE_URL;
  const formId = process.env.MAUTIC_FORM_ID;
  const formName = process.env.MAUTIC_FORM_NAME;

  if (!baseUrl || !formId || !formName) {
    console.error("Mautic env vars missing");
    return NextResponse.json(
      { ok: false, error: "server_misconfigured" },
      { status: 500 },
    );
  }

  let data: ContactFormData;
  try {
    data = (await req.json()) as ContactFormData;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  const errors = validateContactForm(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // Mautic auto-prefixes "f_" to aliases that collide with reserved words,
  // and locks an alias once a field is created. Aliases below were confirmed
  // by reading the form's rendered HTML at /form/3.
  const body = new URLSearchParams();
  body.set("mauticform[formId]", formId);
  body.set("mauticform[formName]", formName);
  body.set("mauticform[return]", "");
  body.set("mauticform[f_name]", data.name.trim());
  body.set("mauticform[email]", data.email.trim());
  body.set("mauticform[company]", data.company.trim());
  body.set("mauticform[f_select]", data.projectType);
  body.set("mauticform[services]", data.services.join(", "));
  body.set("mauticform[f_message]", data.message.trim());

  const submitUrl = `${baseUrl.replace(/\/$/, "")}/form/submit?formId=${formId}`;

  // Submit to Mautic AFTER we respond to the client.
  // Why: Mautic's form submit can take 5–10s, which exceeds Vercel's 10s
  // hobby timeout. The contact is created reliably; we don't need to block
  // the user on a confirmation we already validated client-side.
  after(async () => {
    try {
      const res = await fetch(submitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "text/html,application/json",
        },
        body,
        redirect: "manual",
      });
      console.log("[mautic] status:", res.status);
      console.log(
        "[mautic] location:",
        res.headers.get("location") ?? "(none)",
      );
    } catch (err) {
      console.error("[mautic] request failed", err);
    }
  });

  return NextResponse.json({ ok: true });
}
