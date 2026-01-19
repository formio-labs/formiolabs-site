import Section from "./Section";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200/70">
      <Section className="py-8">
        <p className="text-sm text-stone-500">&copy; {year} Formio Labs</p>
      </Section>
    </footer>
  );
}
