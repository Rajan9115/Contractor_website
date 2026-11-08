"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, MessageSquare, ChevronRight } from "lucide-react";
import { mainNavItems, siteConfig, contactConfig } from "@/data/siteConfig";
import { buildWhatsAppUrl, buildTelUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Close when pathname changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname, isOpen, onClose]);

  // Handle escape key and focus trap basics
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeBtnRef.current?.focus();
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whatsappLink = buildWhatsAppUrl();
  const telLink = buildTelUrl();

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#172B40]/50 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#F7F5F0] shadow-2xl flex flex-col z-10 transition-transform duration-300 ease-out border-l border-[#E5E0D7]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E0D7] bg-[#FFFFFF]">
          <div className="flex flex-col">
            <span className="font-bold text-lg text-[#172B40] tracking-tight">
              {siteConfig.shortName}
            </span>
            <span className="text-xs text-[#B58A58] font-medium tracking-wide">
              Contracting & Interiors
            </span>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 -mr-2 text-[#172B40] hover:text-[#B58A58] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          <nav className="space-y-1">
            {mainNavItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <div key={item.href} className="py-1">
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#E9E3D9] text-[#172B40] font-semibold"
                        : "text-[#172B40] hover:bg-[#FFFFFF]"
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronRight className="w-4 h-4 text-[#687381]" />
                  </Link>

                  {/* Subcategories (e.g. Services) */}
                  {item.children && (
                    <div className="mt-1 ml-4 pl-3 border-l-2 border-[#E5E0D7] space-y-1">
                      {item.children.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block py-1.5 px-2 text-sm rounded transition-colors ${
                              isSubActive
                                ? "text-[#B58A58] font-semibold"
                                : "text-[#687381] hover:text-[#172B40]"
                            }`}
                          >
                            {sub.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Quick Contact Box */}
          <div className="pt-6 border-t border-[#E5E0D7]">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#687381] mb-3">
              Direct Assistance
            </p>
            <div className="space-y-2.5">
              <Button
                variant="whatsapp"
                fullWidth
                href={whatsappLink}
                isExternal
                leftIcon={<MessageSquare className="w-4 h-4" />}
                size="md"
              >
                Chat on WhatsApp
              </Button>
              <Button
                variant="outline"
                fullWidth
                href={telLink}
                isExternal={Boolean(contactConfig.phoneRaw)}
                leftIcon={<Phone className="w-4 h-4" />}
                size="md"
              >
                {contactConfig.phoneDisplay}
              </Button>
            </div>
            {!contactConfig.verifiedStatus.isPhoneVerified && (
              <p className="mt-2 text-[11px] text-[#687381] italic text-center">
                Phone details pending contractor verification
              </p>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="p-6 bg-[#FFFFFF] border-t border-[#E5E0D7] text-xs text-[#687381]">
          <p className="font-medium text-[#172B40]">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-[11px]">{siteConfig.tagline}</p>
        </div>
      </div>
    </div>
  );
}
