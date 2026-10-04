import { type AnchorHTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type SiteButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function SiteButton({
  children,
  className,
  variant = "primary",
  ...props
}: SiteButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-[0_10px_30px_var(--button-shadow)] hover:-translate-y-0.5 hover:bg-primary/90",
        variant === "secondary" &&
          "border border-border bg-background text-foreground hover:border-primary hover:text-primary",
        variant === "light" &&
          "bg-background text-primary shadow-[0_10px_30px_var(--button-shadow-dark)] hover:-translate-y-0.5 hover:bg-secondary",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}