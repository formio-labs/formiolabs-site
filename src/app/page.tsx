import Image from "next/image";
import ContactForm from "@/components/ContactForm";
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
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
                Interested in collaborating or learning more?
              </h2>
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
