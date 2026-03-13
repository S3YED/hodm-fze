import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Hodm FZE",
  description: "Privacy policy for Hodm FZE services and website.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-600 to-teal-600 flex items-center justify-center text-white text-sm font-bold">H</div>
            <span>Hodm</span>
          </Link>
          <Link href="/" className="text-slate-600 hover:text-slate-900 transition font-medium">
            ← Back to Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last updated: March 13, 2026</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Hodm FZE (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting 
              your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you use our services or visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Business information (company name, job title)</li>
              <li>Billing and payment information</li>
              <li>Communications and correspondence with us</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-800 mb-3">Automatically Collected Information</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Provide, operate, and maintain our services</li>
              <li>Process transactions and send related information</li>
              <li>Communicate with you about our services, updates, and promotions</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage patterns to improve our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Legal Basis for Processing</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We process your personal data based on:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li><strong>Contract:</strong> Processing necessary to fulfill our contractual obligations to you</li>
              <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
              <li><strong>Consent:</strong> Where you have given explicit consent for specific processing activities</li>
              <li><strong>Legal Obligation:</strong> Processing necessary to comply with applicable laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Information Sharing</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li><strong>Service Providers:</strong> Third parties who assist us in operating our business (payment processors, hosting providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Data Security</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
              the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was 
              collected, including to satisfy legal, accounting, or reporting requirements. Typical retention periods:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Client records: 7 years after the end of the business relationship</li>
              <li>Marketing data: Until you unsubscribe or request deletion</li>
              <li>Website analytics: 26 months</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-4">
              To exercise these rights, please contact us using the information below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">9. Cookies</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
              You can control cookie settings through your browser preferences. Essential cookies required for 
              website functionality cannot be disabled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">10. International Transfers</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. 
              We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">11. Children&apos;s Privacy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect 
              personal information from children. If we become aware that we have collected data from a child, 
              we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">12. Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review 
              this Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">13. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 text-slate-600">
              <p className="font-semibold text-slate-900">Hodm FZE</p>
              <p>Sharjah Publishing City Free Zone</p>
              <p>Sharjah, United Arab Emirates</p>
              <p className="mt-2">Email: <a href="mailto:info@hodmfze.com" className="text-teal-600 hover:underline">info@hodmfze.com</a></p>
              <p>License No.: 4427736.01</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Hodm FZE. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/terms" className="text-slate-600 hover:text-slate-900 transition">Terms of Service</Link>
            <Link href="/privacy" className="text-teal-600 font-medium">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
