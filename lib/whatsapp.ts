import { contactConfig } from "@/data/siteConfig";

/**
 * Builds a validated, URL-encoded WhatsApp click-to-chat URL.
 * Includes service and context prefilling.
 */
export function buildWhatsAppUrl(options?: {
  service?: string;
  project?: string;
  customMessage?: string;
}): string {
  const phone = contactConfig.whatsappRaw.replace(/\D/g, "");
  
  let text = options?.customMessage || "";
  
  if (!text) {
    if (options?.service && options?.project) {
      text = `Hello, I saw your project "${options.project}" under ${options.service} services and would like to enquire about getting an estimate for my space.`;
    } else if (options?.service) {
      text = `Hello, I would like to get an estimate for ${options.service} services for my property.`;
    } else {
      text = `Hello, I would like to enquire about your contracting and interior services.`;
    }
  }

  const encodedText = encodeURIComponent(text);

  // If contractor has not provided verified number yet, fallback to a clean web wa.me or standard placeholder
  if (!phone) {
    return `https://wa.me/?text=${encodedText}`;
  }

  return `https://wa.me/${phone}?text=${encodedText}`;
}

/**
 * Builds a tel: link for click-to-call if phone is available.
 */
export function buildTelUrl(): string {
  const phone = contactConfig.phoneRaw.replace(/\s+/g, "");
  return phone ? `tel:${phone}` : "#";
}

