import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Harish Jartarghar | Software Engineer Portfolio",
  description:
    "Software engineer with 2.7+ years of experience in developing SaaS applications and automation tools. Passionate about building scalable, high-performance applications.",
  keywords:
    "Harish Jartarghar, Software Engineer, React, Next.js, JavaScript, TypeScript, Frontend Developer, Web Developer, PhonePe, Tekion",
  authors: [{ name: "Harish Jartarghar" }],
  creator: "Harish Jartarghar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harishjartarghar.com",
    title: "Harish Jartarghar | Software Engineer Portfolio",
    description:
      "Software engineer with 2.7+ years of experience in developing SaaS applications and automation tools.",
    siteName: "Harish Jartarghar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harish Jartarghar | Software Engineer Portfolio",
    description:
      "Software engineer with 2.7+ years of experience in developing SaaS applications and automation tools.",
    creator: "@harishjartarghar",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f0f0f" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0" />
      </head>
      <body className="bg-black">
        {children}

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Harish Jartarghar",
              url: "https://harishjartarghar.com",
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "PhonePe India Pvt. Ltd. (Indus Appstore)",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "RV College of Engineering, Bangalore",
              },
              sameAs: ["https://github.com/harishjartarghar", "https://linkedin.com/in/harishjartarghar"],
            }),
          }}
        />
      </body>
    </html>
  )
}



import './globals.css'