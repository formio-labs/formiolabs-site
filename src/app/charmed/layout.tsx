import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function CharmedLegalLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-100 text-stone-900">
      <header className="border-b border-stone-200/70 bg-stone-50/80 backdrop-blur">
        <Section className="py-6">
          <Link
            href="/"
            className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
          >
            <Image
              src="/logo.webp"
              alt="Formio Labs"
              width={300}
              height={104}
              className="h-[2.6rem] w-auto"
              priority
            />
          </Link>
        </Section>
      </header>
      <main>
        <Section className="py-14 sm:py-20">
          <article className="mx-auto max-w-3xl">{children}</article>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
