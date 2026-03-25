import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SEOHead } from "@/components/SEOHead";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Terms & Conditions — Revenuxe Service Agreement"
        description="Read Revenuxe's terms and conditions for digital marketing services. Understand our service agreements, payment terms, client responsibilities, and business policies."
        keywords="Revenuxe terms and conditions, service agreement, digital marketing terms"
        canonicalUrl="https://revenuxe.com/terms"
        noindex={true}
      />
      <Navigation />
      <PageHero title="Terms &" highlight="Conditions" subtitle="Last Updated: January 2024" />
      <main className="container mx-auto px-4 pb-16">
        <article className="max-w-4xl mx-auto prose prose-lg">

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-foreground/80">
              By accessing and using Revenuxe's services, you accept and agree to be bound by these Terms and Conditions. 
              If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
            <p className="text-foreground/80">
              Revenuxe provides digital marketing services including but not limited to SEO, social media marketing, 
              content marketing, PPC advertising, and web development. Specific deliverables and timelines will be 
              outlined in individual service agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Client Responsibilities</h2>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Provide accurate information and timely feedback</li>
              <li>Grant necessary access to platforms and accounts</li>
              <li>Review and approve deliverables within agreed timeframes</li>
              <li>Make payments according to the agreed schedule</li>
              <li>Ensure all provided content complies with applicable laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
            <p className="text-foreground/80 mb-4">
              Payment terms will be specified in individual service agreements. Generally:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Payments are due as per the invoice schedule</li>
              <li>Late payments may incur additional charges</li>
              <li>Refunds are subject to the terms in individual agreements</li>
              <li>All prices are exclusive of applicable taxes unless stated otherwise</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
            <p className="text-foreground/80">
              Upon full payment, clients receive ownership of custom deliverables created specifically for them. 
              Revenuxe retains rights to methodologies, templates, and pre-existing materials. We reserve the right 
              to showcase completed work in our portfolio unless otherwise agreed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Confidentiality</h2>
            <p className="text-foreground/80">
              Both parties agree to keep confidential information private and use it solely for the purpose of 
              delivering/receiving services. This obligation continues after the termination of the agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-foreground/80">
              Revenuxe shall not be liable for indirect, incidental, or consequential damages. Our total liability 
              shall not exceed the total fees paid for the specific service in question. We do not guarantee specific 
              results from marketing campaigns as outcomes depend on various external factors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
            <p className="text-foreground/80">
              Either party may terminate services with written notice as specified in the service agreement. 
              Clients are responsible for payment of services rendered up to the termination date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
            <p className="text-foreground/80">
              Revenuxe reserves the right to modify these terms at any time. Continued use of our services after 
              changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
            <p className="text-foreground/80">
              For questions about these Terms and Conditions, please contact us at revenuxe@gmail.com or call +91 9886285028
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
