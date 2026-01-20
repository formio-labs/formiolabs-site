import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "linkedin";
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-600 focus-visible:ring-offset-white";

const variantClasses = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-700",
  secondary:
    "border border-violet-600 text-violet-600 hover:bg-violet-50",
  linkedin:
    "bg-[#0a66c2] text-white hover:bg-[#0b5bb5]",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
