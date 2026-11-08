import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Zap, Hammer, Paintbrush, Layers } from "lucide-react";
import { ServiceDetail } from "@/types/service";

interface ServiceCardProps {
  service: ServiceDetail;
}

const iconMap = {
  Zap: Zap,
  Hammer: Hammer,
  Paintbrush: Paintbrush,
  Layers: Layers,
};

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Zap;

  return (
    <div className="group flex flex-col rounded-xl bg-white border border-[#E5E0D7] overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#B58A58]/50 motion-reduce:transition-none">
      {/* Image Preview with Aspect Ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E9E3D9]">
        <Image
          src={service.coverImage}
          alt={`Contractor work for ${service.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172B40]/70 via-transparent to-transparent opacity-60" />

        {/* Floating Category Icon Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#172B40] text-xs font-semibold shadow-sm">
          <IconComponent className="w-3.5 h-3.5 text-[#B58A58]" />
          <span>{service.shortTitle}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold text-[#172B40] tracking-tight group-hover:text-[#B58A58] transition-colors">
          <Link href={`/services/${service.slug}`} className="focus-visible:outline-none focus-visible:underline">
            {service.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm text-[#687381] leading-relaxed line-clamp-3">
          {service.summary}
        </p>

        {/* Confirmed Subcategory Tags */}
        <div className="mt-5 pt-4 border-t border-[#E5E0D7]">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#B58A58] mb-2">
            Scope & Disciplines
          </p>
          <div className="flex flex-wrap gap-1.5">
            {service.subcategories.slice(0, 3).map((sub, i) => (
              <span
                key={i}
                className="inline-block px-2.5 py-1 text-xs rounded-md bg-[#F7F5F0] text-[#172B40] font-medium border border-[#E5E0D7]"
              >
                {sub}
              </span>
            ))}
            {service.subcategories.length > 3 && (
              <span className="inline-block px-2 py-1 text-xs rounded-md text-[#687381] font-medium">
                +{service.subcategories.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Card CTA */}
        <div className="mt-6 pt-4 border-t border-[#E5E0D7] flex items-center justify-between text-sm font-semibold text-[#172B40] group-hover:text-[#B58A58]">
          <span>View service details</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
        </div>
      </div>
    </div>
  );
}

