import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Campus Disha - Online Degree Admissions Platform',
  description: 'Authorized partner for 21+ Indian universities. End-to-end admission support, counselling & application help for online degree programs. Contact: +91 9469328661',
  keywords: 'online degrees, university admissions, higher education, campus disha, online education, UGC approved online degrees',
  authors: [{ name: 'Campus Disha' }],
  creator: 'Campus Disha',
  publisher: 'Campus Disha',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Campus Disha - Online Degree Admissions Platform',
    description: 'Authorized partner for 21+ Indian universities. End-to-end admission support, counselling & application help.',
    type: 'website',
    siteName: 'Campus Disha',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campus Disha - Online Degree Admissions Platform',
    description: 'Authorized partner for 21+ Indian universities. End-to-end admission support for online degree programs.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="contact" content="info@campusdisha.in" />
        <meta name="phone" content="+91 9469328661" />
        <meta name="address" content="Residency Road Lal Chowk, Srinagar J&K 190001" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Campus Disha',
              description: 'Online Degree Admissions Platform - Authorized partner for 21+ Indian universities',
              url: 'https://campusdisha.in',
              telephone: '+91-9469328661',
              email: 'info@campusdisha.in',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Residency Road Lal Chowk',
                addressLocality: 'Srinagar',
                addressRegion: 'Jammu and Kashmir',
                postalCode: '190001',
                addressCountry: 'IN'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-9469328661',
                contactType: 'Customer Service',
                email: 'info@campusdisha.in',
                availableLanguage: ['English', 'Hindi']
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}