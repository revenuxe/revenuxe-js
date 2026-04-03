import Link from "next/link";
import type { Metadata } from "next";

import { absoluteCanonicalUrl } from "@/lib/seo/canonical";

export async function generateMetadata(): Promise<Metadata> {
  const canonical = await absoluteCanonicalUrl("/thank-you");
  return {
    title: "Thank You | Revenuxe",
    description:
      "Thanks for contacting Revenuxe. We’ll reach out soon with the next steps for your AI digital marketing goals.",
    alternates: { canonical },
    openGraph: { url: canonical },
  };
}

const quotes = [
  "Your growth journey just started. We’ll be in touch soon.",
  "Thanks for reaching out. We’re preparing your plan right now.",
  "We received your inquiry. Expect a response within 24 hours (business days).",
  "Great choice. Let’s turn your marketing into measurable revenue.",
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function ThankYouPage() {
  const quote = getRandomQuote();

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl rounded-3xl border border-border bg-card/40 shadow-xl p-8 md:p-12">
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="text-primary text-3xl font-bold">✓</span>
          </div>

          <h1 className="mt-6 text-2xl md:text-3xl font-bold">
            Thank you for contacting Revenuxe
          </h1>
          <p className="mt-3 text-muted-foreground">{quote}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Link
              href="/"
              className="inline-flex justify-center items-center rounded-xl bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-95 transition"
            >
              Go to Home
            </Link>
            <Link
              href="/services"
              className="inline-flex justify-center items-center rounded-xl border border-border bg-background px-6 py-3 font-semibold hover:bg-muted transition"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-6 text-xs text-muted-foreground">
            Tip: If you don&apos;t hear from us within 24 business hours, check your email
            spam folder.
          </div>
        </div>
      </div>
    </div>
  );
}

