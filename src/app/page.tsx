"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Media Strategy",
    description: "Data-driven digital presence and brand positioning that resonates with your audience and delivers measurable growth.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-teal-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Communications",
    description: "Strategic corporate communications, PR frameworks, and messaging that builds trust and establishes thought leadership.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    gradient: "from-sky-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    title: "Scaling Advisory",
    description: "Expert guidance on growth strategies, market expansion, and operational scaling for businesses ready to reach the next level.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    title: "International Setup",
    description: "Comprehensive support for UAE and GCC market entry, free zone establishment, and cross-border business operations.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-orange-500 to-amber-500",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-slate-200/50 shadow-sm" : "bg-transparent"}`}>
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-600 to-teal-600 flex items-center justify-center text-white text-sm font-bold">H</div>
            <span>Hodm</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-600 hover:text-slate-900 transition font-medium">Services</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition font-medium">About</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition font-medium">Contact</a>
            <a href="#contact" className="btn-primary text-white px-5 py-2.5 rounded-full font-medium">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-slate-200/50 animate-fade-in">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl hover:bg-slate-100 transition font-medium">Services</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl hover:bg-slate-100 transition font-medium">About</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl hover:bg-slate-100 transition font-medium">Contact</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 rounded-xl btn-primary text-white text-center font-medium">Get Started</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                UAE-Based Consulting Firm
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
                Strategic Consulting for the{" "}
                <span className="gradient-text">Digital Age</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                We help businesses develop winning media strategies, enhance communications, 
                and scale internationally. Based in the UAE, trusted globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-center">
                  Start a Conversation
                </a>
                <a href="#services" className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full hover:bg-slate-50 transition font-semibold text-center">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-sky-100 to-teal-100 rounded-full blur-3xl opacity-60"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Business consulting team meeting"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Trusted Partner</div>
                    <div className="text-sm text-slate-500">Licensed in UAE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients/Trust Bar */}
      <section className="py-12 px-4 sm:px-6 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-slate-500 text-sm font-medium mb-8">TRUSTED BY BUSINESSES ACROSS THE REGION</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-60">
            <div className="text-2xl font-bold text-slate-400">TechCorp</div>
            <div className="text-2xl font-bold text-slate-400">MediaFlow</div>
            <div className="text-2xl font-bold text-slate-400">GrowthLab</div>
            <div className="text-2xl font-bold text-slate-400">ScaleUp</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive consulting services designed to accelerate your business growth and market presence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/50 overflow-hidden card-hover"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
                </div>
                <div className="relative p-6 sm:p-8 transition-colors duration-500 group-hover:text-white">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-200 leading-relaxed transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 gradient-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Modern office space"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100 hidden sm:block">
                <div className="text-3xl font-bold text-slate-900">2026</div>
                <div className="text-slate-500">Established</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
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
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">UAE</div>
                  <div className="text-slate-600">Headquarters</div>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">Global</div>
                  <div className="text-slate-600">Client Reach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Let&apos;s discuss how our expertise in media strategy, communications, and international 
              expansion can help you achieve your goals.
            </p>
            <a href="#contact" className="inline-flex btn-primary text-white px-8 py-4 rounded-full font-semibold">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Company Registration</h3>
                <p className="text-slate-600 mb-6">
                  Hodm FZE is a fully licensed and registered company in the United Arab Emirates, 
                  operating under the regulations of Sharjah Publishing City Free Zone Authority.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/50">
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-500">License No.</span>
                    <span className="text-slate-900 font-semibold">4427736.01</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-500">Formation Type</span>
                    <span className="text-slate-900 font-semibold">Free Zone Establishment</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-500">Location</span>
                    <span className="text-slate-900 font-semibold">Sharjah, UAE</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-500">Activity</span>
                    <span className="text-slate-900 font-semibold">E-Commerce & Consulting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 gradient-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Ready to elevate your business? Get in touch to discuss how we can help 
                you achieve your goals.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Email</div>
                    <a href="mailto:info@hodmfze.com" className="text-white hover:text-teal-400 transition font-medium">
                      info@hodmfze.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
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
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none transition"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary text-white py-4 rounded-xl font-semibold"
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
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-600 to-teal-600 flex items-center justify-center text-white text-sm font-bold">H</div>
              <span className="font-bold text-slate-900">Hodm FZE</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/terms" className="text-slate-600 hover:text-slate-900 transition">Terms of Service</Link>
              <Link href="/privacy" className="text-slate-600 hover:text-slate-900 transition">Privacy Policy</Link>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
            </div>
            <div className="text-slate-500 text-sm text-center md:text-right">
              © {new Date().getFullYear()} Hodm FZE<br className="md:hidden" />
              <span className="hidden md:inline"> · </span>
              License No. 4427736.01
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
