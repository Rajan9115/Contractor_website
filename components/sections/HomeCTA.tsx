import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MessageSquare, Phone, ArrowRight, ShieldAlert } from "lucide-react";
import { buildWhatsAppUrl, buildTelUrl } from "@/lib/whatsapp";
import { contactConfig } from "@/data/siteConfig";

export function HomeCTA() {
  const whatsappUrl = buildWhatsAppUrl();
  const telUrl = buildTelUrl();

  return (
    <section className="bg-[#172B40] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative Warm Accent Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B58A58]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B58A58]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <Container className="relative z-10 text-center max-w-4xl">
        <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B58A58] mb-3">
          Get Started Today
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Have an Interior or Renovation Project in Mind?
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#E9E3D9]/80 leading-relaxed max-w-2xl mx-auto">
          Send your site photos, room dimensions, or design references on WhatsApp for direct contractor review, or request an in-person site measurement.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <Button
            variant="whatsapp"
            size="lg"
            href={whatsappUrl}
            isExternal
            leftIcon={<MessageSquare className="w-5 h-5" />}
          >
            Chat Directly on WhatsApp
          </Button>

          <Button
            variant="accent"
            size="lg"
            href="/contact"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Request Site Quotation
          </Button>

          <Button
            variant="outline"
            size="lg"
            href={telUrl}
            isExternal={Boolean(contactConfig.phoneRaw)}
            leftIcon={<Phone className="w-5 h-5" />}
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/60"
          >
            {contactConfig.phoneDisplay}
          </Button>
        </div>

        {/* Integrity reassurance */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-[#E9E3D9]/60">
          <ShieldAlert className="w-4 h-4 text-[#B58A58] shrink-0" />
          <span>
            Direct contractor consultation • Clear transparent estimates with no hidden surprises
          </span>
        </div>
      </Container>
    </section>
  );
}
