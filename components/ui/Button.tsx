import React from "react";
import Link from "next/link";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "accent"
  | "whatsapp"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58] focus-visible:ring-offset-2 motion-reduce:transition-none disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm gap-1.5 min-h-[38px]",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2 min-h-[44px]",
    lg: "px-7 py-3.5 text-base sm:text-lg font-semibold gap-2.5 min-h-[50px]",
  };

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-[#172B40] text-white hover:bg-[#101E2E] shadow-sm hover:shadow active:translate-y-px",
    secondary:
      "bg-[#E9E3D9] text-[#172B40] hover:bg-[#DDD5C9] active:translate-y-px",
    outline:
      "border border-[#172B40] text-[#172B40] bg-transparent hover:bg-[#172B40]/5 active:translate-y-px",
    accent:
      "bg-[#B58A58] text-white hover:bg-[#9E7444] shadow-sm hover:shadow active:translate-y-px",
    whatsapp:
      "bg-[#21865B] text-white hover:bg-[#1B6F4B] shadow-sm hover:shadow active:translate-y-px",
    ghost:
      "text-[#172B40] bg-transparent hover:bg-[#E9E3D9]/60 active:translate-y-px",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
}

