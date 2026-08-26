import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mizaan Shaikh — Full Stack Web Developer",
  description:
    "Portfolio of Mizaan Shaikh — Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Mizaan Shaikh",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Next.js Developer",
    "React Developer",
    "Mumbai",
    "Thane",
  ],
  authors: [{ name: "Mizaan Shaikh" }],
  openGraph: {
    title: "Mizaan Shaikh — Full Stack Web Developer",
    description: "Modern portfolio showcasing 30+ projects across websites, landing pages, and web apps.",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-bg-primary text-text-primary overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
