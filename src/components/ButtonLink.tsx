import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "linkedin";
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantClasses = {
  primary:
    "bg-stone-900 text-stone-50 hover:bg-stone-800 focus-visible:outline-stone-900",
  secondary:
    "border border-stone-300 text-stone-900 hover:border-stone-900 hover:bg-stone-100 focus-visible:outline-stone-900",
  linkedin:
    "bg-[#0a66c2] text-white hover:bg-[#0b5bb5] focus-visible:outline-[#0a66c2]",
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
