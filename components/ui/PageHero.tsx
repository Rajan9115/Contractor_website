import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  kicker?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
  className?: string;
}

export function PageHero({
  title,
  kicker,
  description,
  breadcrumbs = [{ label: "Home", href: "/" }],
  actions,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`relative bg-[#F7F5F0] border-b border-[#E5E0D7] py-4 sm:py-8 lg:py-12 ${className}`}
    >
      <Container size="wide">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumbs"
            className="mb-4 sm:mb-6 flex items-center space-x-1.5 text-xs sm:text-sm text-[#687381]"
          >
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;

              return (
                <div key={idx} className="flex items-center space-x-1.5">
                  {idx > 0 && (
                    <ChevronRight className="w-3.5 h-3.5 text-[#687381]/60" />
                  )}
                  {isLast || !crumb.href ? (
                    <span
                      aria-current="page"
                      className="font-medium text-[#172B40]"
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-[#172B40] transition-colors duration-150 underline-offset-4 hover:underline"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>
        )}

        {/* Content */}
        <div className="max-w-3xl">
          {kicker && (
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B58A58] mb-2">
              {kicker}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#172B40] leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base sm:text-lg text-[#687381] leading-relaxed">
              {description}
            </p>
          )}

          {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
        </div>
      </Container>
    </section>
  );
}

