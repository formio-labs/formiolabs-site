import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charmed — Privacy Policy",
  description: "Privacy policy for the Charmed app by Formio Labs.",
};

const heading =
  "font-display mt-10 text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl";
const para = "mt-4 text-lg leading-relaxed text-stone-600";
const list =
  "mt-4 list-disc space-y-2 pl-5 text-lg leading-relaxed text-stone-600 marker:text-violet-600";
const link =
  "text-violet-600 underline underline-offset-2 hover:text-violet-700";
const strong = "font-semibold text-stone-800";

export default function CharmedPrivacyPage() {
  return (
    <>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
        Charmed Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-stone-500">Last updated: June 14, 2026</p>

      <p className={para}>
        Charmed (&ldquo;the App&rdquo;) is operated by Formio Labs Inc.
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). The App lets you
        collect digital charms, decorate physical products with them, and order
        those products printed and shipped to you. This policy explains what
        information we collect, how we use it, and the choices you have.
      </p>
      <p className={para}>
        If you have any questions, contact us at{" "}
        <a className={link} href="mailto:charlie@formiolabs.com">
          charlie@formiolabs.com
        </a>
        .
      </p>

      <h2 className={heading}>Information We Collect</h2>
      <p className={para}>
        <span className={strong}>
          Information you provide when you place an order.
        </span>{" "}
        To fulfill and ship a physical product, we collect the shipping details
        you enter in the order form: your full name, email address, and shipping
        address (street, city, province, and postal code).
      </p>
      <p className={para}>
        <span className={strong}>The design you create.</span> The product design
        you assemble in the App (the arrangement of charms on your selected
        product) is saved as an image so it can be printed on your order.
      </p>
      <p className={para}>
        <span className={strong}>Payment information.</span> Payments are
        processed by our payment provider,{" "}
        <a
          className={link}
          href="https://stripe.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stripe
        </a>
        . Your card number and payment credentials are entered on Stripe&rsquo;s
        secure checkout and are handled by Stripe &mdash; <em>we never receive or
        store your full card details</em>. We receive a confirmation of payment
        and limited transaction details (such as amount, currency, and tax) to
        record your order.
      </p>
      <p className={para}>
        <span className={strong}>Usage and analytics data.</span> We use Google
        Firebase Analytics to understand how the App is used and to improve it.
        This includes app interactions (such as screens viewed and actions
        taken), your device type and operating system version, app version, and a
        randomly generated identifier assigned to your app installation. Analytics
        may infer approximate (city/region-level) location from your IP address.
        We do <span className={strong}>not</span> attach your name, email, or
        address to analytics data.
      </p>
      <p className={para}>
        <span className={strong}>Anonymous account identifier.</span> When you
        first launch the App, we create an anonymous account through Firebase
        Authentication. This is an anonymous identifier used to securely associate
        your orders and uploaded designs with your installation. It is not linked
        to a name, email, or social login unless you choose to sign in to such an
        account in the future.
      </p>

      <h2 className={heading}>How We Use Your Information</h2>
      <ul className={list}>
        <li>To create, process, fulfill, and ship your product orders.</li>
        <li>To process payments and calculate applicable sales tax.</li>
        <li>
          To send you transactional emails, such as an order or payment
          confirmation.
        </li>
        <li>To operate, maintain, secure, and improve the App.</li>
        <li>
          To detect, prevent, and address fraud, abuse, or technical issues.
        </li>
        <li>
          To comply with our legal, accounting, and tax-reporting obligations.
        </li>
      </ul>

      <h2 className={heading}>How We Share Your Information</h2>
      <p className={para}>
        We share information only with the service providers needed to run the
        App and fulfill your orders. We do <span className={strong}>not</span>{" "}
        sell your personal information, and we do{" "}
        <span className={strong}>not</span> use it for cross-app advertising or
        tracking.
      </p>
      <ul className={list}>
        <li>
          <span className={strong}>Stripe</span> &mdash; payment processing and
          sales-tax calculation (
          <a
            className={link}
            href="https://stripe.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>
          ).
        </li>
        <li>
          <span className={strong}>Google Firebase</span> &mdash; app backend,
          order storage, design-image storage, anonymous authentication, and
          analytics (
          <a
            className={link}
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy &amp; security
          </a>
          ).
        </li>
        <li>
          <span className={strong}>Printful</span> &mdash; print-on-demand
          production and shipping. We share the shipping name, address, and the
          design image needed to produce and deliver your order (
          <a
            className={link}
            href="https://www.printful.com/policies/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>
          ).
        </li>
        <li>
          <span className={strong}>Resend</span> &mdash; sending transactional
          order and confirmation emails (
          <a
            className={link}
            href="https://resend.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy
          </a>
          ).
        </li>
      </ul>
      <p className={para}>
        We may also disclose information if required by law or to protect our
        rights, users, or the public.
      </p>

      <h2 className={heading}>Data Retention</h2>
      <p className={para}>
        We retain order and transaction records (including shipping details) for
        as long as needed to fulfill the order and to meet our legal, tax, and
        accounting obligations. Design images are retained to support order
        fulfillment and reprints. Analytics data is retained according to our
        analytics provider&rsquo;s default retention settings. You may request
        deletion of your personal information as described below.
      </p>

      <h2 className={heading}>Your Choices and Rights</h2>
      <p className={para}>
        Subject to applicable law (including Canada&rsquo;s Personal Information
        Protection and Electronic Documents Act, PIPEDA), you may request access
        to, correction of, or deletion of the personal information we hold about
        you. To make a request, email us at{" "}
        <a className={link} href="mailto:charlie@formiolabs.com">
          charlie@formiolabs.com
        </a>
        . We will respond within a reasonable time.
      </p>

      <h2 className={heading}>Children&rsquo;s Privacy</h2>
      <p className={para}>
        Charmed is not directed to children, and we do not knowingly collect
        personal information from children under the age of 13. If you believe a
        child has provided us with personal information, please contact us and we
        will delete it.
      </p>

      <h2 className={heading}>International Data Transfers</h2>
      <p className={para}>
        We use service providers (including Stripe, Google, Printful, and Resend)
        that may store and process information on servers located outside your
        province or country, including in the United States. By using the App, you
        understand that your information may be transferred to and processed in
        those locations.
      </p>

      <h2 className={heading}>Security</h2>
      <p className={para}>
        We use industry-standard safeguards, including encryption in transit
        (HTTPS/TLS) and access-controlled storage, to protect your information. No
        method of transmission or storage is completely secure, however, and we
        cannot guarantee absolute security.
      </p>

      <h2 className={heading}>Changes to This Policy</h2>
      <p className={para}>
        We may update this policy from time to time. When we do, we will revise
        the &ldquo;Last updated&rdquo; date at the top of this page. Material
        changes will be reflected here.
      </p>

      <h2 className={heading}>Contact Us</h2>
      <p className={para}>
        Formio Labs Inc.
        <br />
        Email:{" "}
        <a className={link} href="mailto:charlie@formiolabs.com">
          charlie@formiolabs.com
        </a>
      </p>
    </>
  );
}
