"use client";

import { useState } from "react";

const services = [
  {
    title: "Media Strategy",
    description: "Comprehensive digital presence and brand positioning strategies that resonate with your target audience and drive measurable results.",
    icon: "📊",
  },
  {
    title: "Communications Consulting",
    description: "Corporate communications, public relations, and messaging frameworks that build trust and establish thought leadership.",
    icon: "💬",
  },
  {
    title: "Scaling Advisory",
    description: "Data-driven growth strategies and market expansion planning for businesses ready to reach the next level.",
    icon: "📈",
  },
  {
    title: "International Setup",
    description: "Expert guidance on UAE and GCC market entry, free zone establishment, and cross-border business operations.",
    icon: "🌍",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-slate-200 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-slate-900">
            Hodm<span className="text-blue-600">.</span>
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-slate-600 hover:text-slate-900 transition">Services</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition">About</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-800 transition"
          >
            Get in Touch
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Strategic Consulting for the{" "}
              <span className="text-blue-600">Digital Age</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We help businesses navigate media strategy, communications, and international growth. 
              Based in the UAE, serving clients globally.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition font-medium"
              >
                Start a Conversation
              </a>
              <a
                href="#services"
                className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition font-medium"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive consulting services designed to accelerate your business growth and market presence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                About Hodm FZE
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Hodm FZE is a consulting firm established in Sharjah Publishing City Free Zone, 
                United Arab Emirates. We specialize in helping businesses develop effective media 
                strategies, enhance their communications, and scale internationally.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our team combines deep expertise in digital media, strategic communications, 
                and international business operations to deliver results that matter.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-2xl font-bold text-slate-900">UAE</div>
                  <div className="text-slate-600">Based</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <div className="text-2xl font-bold text-slate-900">Global</div>
                  <div className="text-slate-600">Reach</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">Company Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">License No.</span>
                    <span className="text-slate-900 font-medium">4427736.01</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Type</span>
                    <span className="text-slate-900 font-medium">Free Zone Establishment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Location</span>
                    <span className="text-slate-900 font-medium">Sharjah, UAE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Activity</span>
                    <span className="text-slate-900 font-medium">E-Commerce & Consulting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Ready to elevate your business? Get in touch to discuss how we can help 
                you achieve your goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Email</div>
                    <a href="mailto:info@hodmfze.com" className="text-white hover:text-blue-400">
                      info@hodmfze.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Address</div>
                    <div className="text-white">
                      Sharjah Publishing City Free Zone<br />
                      Sharjah, United Arab Emirates
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-slate-900 text-white py-4 rounded-lg hover:bg-slate-800 transition font-medium"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-600">
            © {new Date().getFullYear()} Hodm FZE. All rights reserved.
          </div>
          <div className="text-slate-500 text-sm">
            License No. 4427736.01 | Sharjah Publishing City Free Zone, UAE
          </div>
        </div>
      </footer>
    </div>
  );
}
