import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  siteConfig,
  contactConfig,
  footerServices,
  footerCompany,
} from "@/data/siteConfig";
import { buildWhatsAppUrl, buildTelUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  const whatsappUrl = buildWhatsAppUrl();
  const telUrl = buildTelUrl();
  const currentYear = 2026;

  return (
    <footer className="bg-[#172B40] text-[#E9E3D9] border-t border-[#101E2E] mt-auto">
      {/* Upper Footer: Main Columns */}
      <Container size="wide" className="py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info (2 columns on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 shrink-0">
                <Image
                  src="/branding/symbol.svg"
                  alt="MAMA INTERIOR Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading text-2xl font-black tracking-wider text-white uppercase">
                    MAMA
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E98291] inline-block" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#5685C5] font-semibold -mt-0.5">
                  INTERIOR
                </span>
              </div>
            </div>
            <p className="text-sm text-[#E9E3D9]/80 leading-relaxed max-w-sm">
              Specialized electrical, bespoke woodwork, premium painting, and designer false ceiling execution for homes and workspaces.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#E9E3D9]/60">
              <ShieldCheck className="w-4 h-4 text-[#B58A58] shrink-0" />
              <span>Authentic project portfolio • Dedicated on-site craftsmanship</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-white">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[#E9E3D9]/75 hover:text-[#B58A58] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#E9E3D9]/75 hover:text-[#B58A58] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-white">
              Contact & Enquiries
            </h3>
            <ul className="space-y-3 text-sm text-[#E9E3D9]/80">
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#B58A58] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#B58A58] transition-colors font-medium text-white block"
                  >
                    Quick WhatsApp Chat
                  </a>
                  <span className="text-xs text-[#E9E3D9]/60">
                    Direct enquiry with photos
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#B58A58] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={telUrl}
                    className="hover:text-[#B58A58] transition-colors block"
                  >
                    {contactConfig.phoneDisplay}
                  </a>
                  {!contactConfig.verifiedStatus.isPhoneVerified && (
                    <span className="text-[11px] text-[#E9E3D9]/50 italic block">
                      Number pending confirmation
                    </span>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B58A58] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {contactConfig.serviceAreaSummary}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B58A58] shrink-0 mt-0.5" />
                <span className="text-xs">
                  {contactConfig.workingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-xs text-[#E9E3D9]/60">
        <Container size="wide" className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[11px] text-[#E9E3D9]/40 text-center sm:text-right">
            Content Integrity: Only verified contractor claims & authentic portfolio works published.
          </p>
        </Container>
      </div>
    </footer>
  );
}
