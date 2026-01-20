import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import ButtonLink from "./ButtonLink";
import Section from "./Section";

const heroImagePath = path.join(
  process.cwd(),
  "public",
  "images",
  "hero-placeholder.png"
);
const hasHeroImage = fs.existsSync(heroImagePath);

export default function Hero() {
  return (
    <Section className="py-16 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
            Turning product creation into a game.
          </h1>
          <p className="text-lg leading-relaxed text-stone-600">
            AI-powered creativity, brought to life as real-world products.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="mailto:hello@formiolabs.com"
              className="w-full sm:w-auto"
            >
              Get in Touch
            </ButtonLink>
            <ButtonLink
              href="https://www.linkedin.com/company/formio-labs/"
              variant="linkedin"
              className="w-full sm:w-auto"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45z" />
              </svg>
              LinkedIn
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-stone-200/70 bg-white/70 shadow-sm">
          {hasHeroImage ? (
            <Image
              src="/images/hero-placeholder.png"
              alt="Formio Labs hero placeholder"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-stone-100 via-white to-stone-200">
              <div
                className="absolute inset-6 rounded-2xl border border-stone-200/80 bg-white/60"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
