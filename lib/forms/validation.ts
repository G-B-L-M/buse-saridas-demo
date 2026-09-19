export type FormKind = "contact" | "callback" | "newsletter";
export type FormAvailability = { contact: boolean; newsletter: boolean };
export type FormPayload = {
  kind: FormKind; name: string; email: string; phone: string;
  preferredTime: string; subject: string; consent: true;
};
const string = (value: unknown) => typeof value === "string" ? value.trim() : "";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function validateForm(value: unknown): FormPayload | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const body = value as Record<string, unknown>;
  const kind = body.kind;
  if (kind !== "contact" && kind !== "callback" && kind !== "newsletter") return null;
  if (body.consent !== true) return null;
  const name = string(body.name), email = string(body.email), phone = string(body.phone);
  const preferredTime = string(body.preferredTime), subject = string(body.subject);
  if (name.length > 100 || email.length > 254 || phone.length > 40 || preferredTime.length > 160 || subject.length > 100) return null;
  if (kind !== "newsletter" && name.length < 2) return null;
  if (kind !== "callback" && !emailPattern.test(email)) return null;
  if (kind === "callback" && !/^\+?[\d\s().-]+$/.test(phone)) return null;
  const digits = phone.replace(/\D/g, "");
  if (kind === "callback" && (digits.length < 10 || digits.length > 13)) return null;
  return { kind, name: kind === "newsletter" ? "" : name, email: kind === "callback" ? "" : email,
    phone: kind === "callback" ? phone : "", preferredTime: kind === "callback" ? preferredTime : "",
    subject: kind === "contact" ? subject : "", consent: true };
}
