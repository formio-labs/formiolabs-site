import ButtonLink from "@/components/ButtonLink";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-100 text-stone-900">
      <header className="border-b border-stone-200/70 bg-stone-50/80 backdrop-blur">
        <Section className="py-6">
          <a
            href="#top"
            className="text-base font-semibold tracking-tight text-violet-600 transition-colors hover:text-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:text-lg"
          >
            Formio Labs
          </a>
        </Section>
      </header>
      <main id="top" className="flex flex-col">
        <Hero />

        <Section className="border-t border-stone-200/70 py-14 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              What We Do
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-stone-600">
              <p>
                Formio Labs is a product studio building playful, game-inspired
                ways to create real-world products.
              </p>
              <p>
                We combine creativity, game design, and modern commerce to turn
                shopping into something people actually enjoy.
              </p>
            </div>
          </div>
        </Section>

        <Section className="border-t border-stone-200/70 py-14 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
                How We Build
              </h2>
              <p className="text-lg text-stone-600">Formio Labs blends:</p>
            </div>
            <div className="space-y-4">
              <ul className="list-disc space-y-3 pl-5 text-lg text-stone-600 marker:text-violet-600">
                <li>Game mechanics and progression systems</li>
                <li>AI-powered creative tools</li>
                <li>Modern fulfillment and commerce infrastructure</li>
              </ul>
              <p className="text-lg text-stone-600">
                The result is interactive product experiences that feel more
                like play than checkout.
              </p>
            </div>
          </div>
        </Section>

        <Section className="border-t border-stone-200/70 py-14 sm:py-20">
          <div className="rounded-3xl border border-stone-200/70 bg-white/80 p-8 shadow-sm sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-600">
              Current Product
            </p>
            <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Charmed &mdash; Private Beta
            </h3>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-stone-600">
              <p>
                Charmed is our first product: a game-driven system for creating
                and collecting real-world products.
              </p>
              <p>
                Users unlock digital charms, customize physical items, and bring
                them to life through on-demand production.
              </p>
            </div>
          </div>
        </Section>

        <Section className="border-t border-stone-200/70 py-14 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Who We&#39;re Building With
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-lg text-stone-600 marker:text-violet-600">
              <li>Fulfillment and production partners</li>
              <li>Brands exploring interactive or gamified commerce</li>
              <li>
                Engineers and designers excited by games, creativity, and
                real-world products
              </li>
            </ul>
          </div>
        </Section>

        <Section className="border-t border-stone-200/70 py-14 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              About Formio Labs
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-stone-600">
              <p>
                Formio Labs is an independent product studio focused on playful,
                creative commerce.
              </p>
              <p>
                We build systems that sit at the intersection of games,
                creativity, and shopping &mdash; starting with Charmed, and
                expanding from there.
              </p>
            </div>
          </div>
        </Section>

        <Section className="border-t border-stone-200/70 py-16 sm:py-20">
          <div className="rounded-3xl border border-stone-200/70 bg-white/80 p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
                  Interested in collaborating or learning more?
                </h2>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
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
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
