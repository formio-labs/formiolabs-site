import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Charmed — Support",
  description: "Support and contact information for the Charmed app by Formio Labs.",
};

const heading =
  "font-display mt-10 text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl";
const para = "mt-4 text-lg leading-relaxed text-stone-600";
const link =
  "text-violet-600 underline underline-offset-2 hover:text-violet-700";
const strong = "font-semibold text-stone-800";

export default function CharmedSupportPage() {
  return (
    <>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
        Charmed Support
      </h1>
      <p className={para}>Need help with Charmed? We&rsquo;re happy to assist.</p>

      <h2 className={heading}>Contact</h2>
      <p className={para}>
        Email us at{" "}
        <a className={link} href="mailto:charlie@formiolabs.com">
          charlie@formiolabs.com
        </a>{" "}
        and we&rsquo;ll get back to you. To help us resolve your issue quickly,
        please include your order email and, if your question is about an order,
        the date you placed it.
      </p>

      <h2 className={heading}>Common Questions</h2>
      <p className={para}>
        <span className={strong}>How do I collect charms?</span> Earn coins in the
        App, then spin to collect charms for your collection.
      </p>
      <p className={para}>
        <span className={strong}>How do I order a product?</span> Decorate a
        product with your charms, then check out to have it printed and shipped to
        you.
      </p>
      <p className={para}>
        <span className={strong}>Where&rsquo;s my order?</span> You&rsquo;ll
        receive a payment confirmation email after checkout. For questions about
        production or shipping, email us at the address above.
      </p>
      <p className={para}>
        <span className={strong}>Refunds.</span> For refund or order-issue
        requests, contact us at the email above.
      </p>

      <p className="mt-10 border-t border-stone-200/70 pt-6 text-lg text-stone-600">
        <Link className={link} href="/charmed/privacy">
          Privacy Policy
        </Link>
      </p>
    </>
  );
}
