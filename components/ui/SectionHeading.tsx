import React from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {kicker && (
        <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B58A58] mb-2.5">
          {kicker}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#172B40] leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg text-[#687381] leading-relaxed ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

