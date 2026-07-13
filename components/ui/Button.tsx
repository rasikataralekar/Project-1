"use client";

import { cn } from "@/lib/utils";
import { AMAZON_URL } from "@/constants/site";

type Variant = "primary" | "secondary" | "outline-light" | "gold";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  isAmazonLink?: boolean;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-black transition-colors duration-300",
  secondary:
    "bg-transparent border border-ink text-ink hover:bg-ink hover:text-white transition-colors duration-300",
  "outline-light":
    "bg-transparent border border-white/40 text-white hover:bg-white hover:text-ink transition-colors duration-300",
  gold: "bg-gradient-to-r from-gold-dark to-gold text-white hover:opacity-90 transition-opacity duration-300",
};

export default function Button({
  children,
  variant = "primary",
  className,
  isAmazonLink = false,
  href,
  icon,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium whitespace-nowrap";

  if (isAmazonLink) {
    return (
      <a
        href={AMAZON_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, variantStyles[variant], className)}
      >
        {children}
        {icon}
      </a>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn(baseStyles, variantStyles[variant], className)}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
    >
      {children}
      {icon}
    </button>
  );
}
