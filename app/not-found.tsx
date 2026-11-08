import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Home, Layers, Image as ImageIcon, MessageSquare } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function NotFound() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <div className="flex flex-1 items-center justify-center py-20 sm:py-28 bg-[#F7F5F0]">
      <Container className="text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E0D7] text-xs font-semibold text-[#B58A58] mb-6 shadow-xs">
          <span>Error 404 • Page Not Found</span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#172B40] leading-tight mb-4">
          We Couldn&apos;t Find That Space.
        </h1>

        <p className="text-base sm:text-lg text-[#687381] leading-relaxed max-w-lg mx-auto mb-8">
          The link you followed may be outdated, or the specific project slug has moved. Explore our active trades or reach out directly.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="primary"
            size="md"
            href="/"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Return to Homepage
          </Button>

          <Button
            variant="outline"
            size="md"
            href="/services"
            leftIcon={<Layers className="w-4 h-4" />}
          >
            Browse Services
          </Button>

          <Button
            variant="secondary"
            size="md"
            href="/projects"
            leftIcon={<ImageIcon className="w-4 h-4" />}
          >
            View Projects
          </Button>

          <Button
            variant="whatsapp"
            size="md"
            href={whatsappUrl}
            isExternal
            leftIcon={<MessageSquare className="w-4 h-4" />}
          >
            Need Help on WhatsApp
          </Button>
        </div>
      </Container>
    </div>
  );
}
