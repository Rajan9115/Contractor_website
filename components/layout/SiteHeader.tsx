"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageSquare, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { mainNavItems, siteConfig } from "@/data/siteConfig";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const whatsappUrl = buildWhatsAppUrl();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E5E0D7] transition-colors duration-200">
      <Container size="wide">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58] rounded px-1 -mx-1"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-heading text-2xl font-black tracking-tight text-[#172B40] uppercase">
                {siteConfig.shortName}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#B58A58] inline-block" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-[#687381] uppercase -mt-0.5 group-hover:text-[#B58A58] transition-colors">
              Contracting & Interiors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {mainNavItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              // If item has children (e.g. Services)
              if (item.children) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? "text-[#172B40] bg-[#E9E3D9]"
                          : "text-[#172B40] hover:text-[#B58A58] hover:bg-[#FFFFFF]"
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-0 top-full pt-2 w-72 z-50">
                        <div className="rounded-lg bg-[#FFFFFF] shadow-xl border border-[#E5E0D7] p-2 space-y-1">
                          {item.children.map((sub) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`block px-3 py-2 rounded-md transition-colors ${
                                  isSubActive
                                    ? "bg-[#F7F5F0] text-[#B58A58]"
                                    : "hover:bg-[#F7F5F0] text-[#172B40]"
                                }`}
                              >
                                <div className="text-sm font-medium">
                                  {sub.title}
                                </div>
                                {sub.description && (
                                  <div className="text-xs text-[#687381] line-clamp-1 mt-0.5">
                                    {sub.description}
                                  </div>
                                )}
                              </Link>
                            );
                          })}
                          <div className="pt-2 mt-1 border-t border-[#E5E0D7]">
                            <Link
                              href="/services"
                              className="block px-3 py-1.5 text-xs font-semibold text-[#B58A58] hover:underline"
                            >
                              Explore all services &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-[#172B40] bg-[#E9E3D9] font-semibold"
                      : "text-[#172B40] hover:text-[#B58A58] hover:bg-[#FFFFFF]"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Quick CTA Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="whatsapp"
              size="sm"
              href={whatsappUrl}
              isExternal
              leftIcon={<MessageSquare className="w-4 h-4" />}
              className="hidden sm:inline-flex"
            >
              WhatsApp Enquiry
            </Button>

            <Button
              variant="primary"
              size="sm"
              href="/contact"
              className="hidden md:inline-flex"
            >
              Get an Estimate
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-[#172B40] hover:text-[#B58A58] hover:bg-[#FFFFFF] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}

