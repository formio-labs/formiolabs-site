import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantClasses = {
  primary:
    "bg-stone-900 text-stone-50 hover:bg-stone-800 focus-visible:outline-stone-900",
  secondary:
    "border border-stone-300 text-stone-900 hover:border-stone-900 hover:bg-stone-100 focus-visible:outline-stone-900",
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
