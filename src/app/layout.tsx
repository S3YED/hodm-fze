import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hodm FZE | Media Strategy & Business Consulting",
  description: "Strategic consulting for media, communications, and international business scaling. Based in Sharjah Publishing City Free Zone, UAE.",
  keywords: ["consulting", "media strategy", "communications", "UAE", "business scaling", "international setup", "Sharjah", "free zone"],
  authors: [{ name: "Hodm FZE" }],
  openGraph: {
    title: "Hodm FZE | Media Strategy & Business Consulting",
    description: "Strategic consulting for media, communications, and international business scaling.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
