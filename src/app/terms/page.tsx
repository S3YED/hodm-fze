import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Hodm FZE",
  description: "Terms and conditions for using Hodm FZE services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white text-sm font-bold">H</div>
            <span>Hodm</span>
          </Link>
          <Link href="/" className="text-slate-600 hover:text-slate-900 transition font-medium">
            ← Back to Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
        <p className="text-slate-500 mb-8">Last updated: March 13, 2026</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              By accessing or using the services provided by Hodm FZE (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), 
              you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of the terms, 
              you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Description of Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Hodm FZE provides consulting services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Media strategy and digital presence consulting</li>
              <li>Corporate communications and public relations advisory</li>
              <li>Business scaling and growth strategy</li>
              <li>International market entry and free zone establishment support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Client Obligations</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Provide accurate and complete information as required for our services</li>
              <li>Cooperate with our team and respond to communications in a timely manner</li>
              <li>Pay all fees as agreed upon in your service agreement</li>
              <li>Use our services only for lawful purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Fees and Payment</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Payment terms will be specified in individual service agreements. Unless otherwise agreed:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Fees are due within 30 days of invoice date</li>
              <li>All fees are quoted in USD unless otherwise specified</li>
              <li>Late payments may incur additional charges</li>
              <li>Refunds are handled on a case-by-case basis as outlined in your service agreement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Unless otherwise specified in a service agreement:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>All deliverables created for clients become the client&apos;s property upon full payment</li>
              <li>We retain rights to our proprietary methodologies, tools, and frameworks</li>
              <li>We may use general knowledge gained during engagements for other clients</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Confidentiality</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We maintain strict confidentiality regarding all client information. We will not disclose 
              confidential information to third parties without your consent, except as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              To the maximum extent permitted by law, Hodm FZE shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use of our services. 
              Our total liability shall not exceed the fees paid by you in the twelve months preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Termination</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Either party may terminate a service engagement with 30 days written notice, unless otherwise 
              specified in your service agreement. Upon termination, you will be billed for all services 
              rendered up to the termination date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">9. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the United Arab 
              Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Sharjah, UAE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">10. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately 
              upon posting on this website. Your continued use of our services constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">11. Contact Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For questions about these Terms, please contact us at:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 text-slate-600">
              <p className="font-semibold text-slate-900">Hodm FZE</p>
              <p>Sharjah Publishing City Free Zone</p>
              <p>Sharjah, United Arab Emirates</p>
              <p className="mt-2">Email: <a href="mailto:info@hodmfze.com" className="text-blue-600 hover:underline">info@hodmfze.com</a></p>
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
            <Link href="/terms" className="text-blue-600 font-medium">Terms of Service</Link>
            <Link href="/privacy" className="text-slate-600 hover:text-slate-900 transition">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
