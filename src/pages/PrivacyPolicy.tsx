import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy | Revenuxe Digital Marketing Agency"
        description="Learn how Revenuxe protects your privacy and handles your data. Read our comprehensive privacy policy covering data collection, usage, and your rights."
        keywords="privacy policy, data protection, privacy practices, GDPR compliance, data security, Revenuxe privacy"
      />
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <article className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: January 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-foreground/80">
              At Revenuxe, we respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Personal Information</h3>
            <p className="text-foreground/80 mb-4">We may collect the following personal information:</p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Business information (company name, position)</li>
              <li>Location data (city, region)</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Usage data and analytics</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-foreground/80 mb-4">We use collected information for:</p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Providing and improving our services</li>
              <li>Responding to inquiries and support requests</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Analyzing website usage and optimizing user experience</li>
              <li>Complying with legal obligations</li>
              <li>Preventing fraud and ensuring security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
            <p className="text-foreground/80 mb-4">
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p className="text-foreground/80">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies</h2>
            <p className="text-foreground/80">
              We use cookies and similar tracking technologies to enhance user experience, analyze site traffic, 
              and understand user behavior. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-foreground/80 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
              <li>File a complaint with supervisory authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data Retention</h2>
            <p className="text-foreground/80">
              We retain personal information only as long as necessary to fulfill the purposes outlined in this 
              policy or as required by law. When information is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
            <p className="text-foreground/80">
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect 
              personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to Privacy Policy</h2>
            <p className="text-foreground/80">
              We may update this Privacy Policy periodically. We will notify you of significant changes by posting 
              the new policy on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
            <p className="text-foreground/80">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              <br />
              Email: admin@revenuxe.com
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
