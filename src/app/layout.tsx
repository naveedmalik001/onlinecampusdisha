import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campus Disha - Online Education Consultancy in India | UGC Approved Universities",
  description: "Connect with India's top 20+ universities offering UGC-entitled online degrees. Campus Disha provides expert guidance for online MBA, MCA, BBA, BCA, and other programs. Located at Residency Road, Lal Chowk, Srinagar.",
  keywords: [
    "online education India",
    "UGC approved online degrees",
    "Campus Disha",
    "online MBA India",
    "online MCA programs",
    "distance education",
    "online university admission",
    "Srinagar education consultancy",
    "J&K online education",
    "NMIMS online admission",
    "SRM online courses",
    "Manipal University online",
    "Amity online programs",
    "LPU online degrees",
    "Chandigarh University online",
    "UGC entitled universities",
    "online degree validity",
    "online education vs traditional",
    "UGC guidelines 2024-25",
    "accredited online programs"
  ],
  authors: [{ name: "Campus Disha" }],
  creator: "Campus Disha",
  publisher: "Campus Disha",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://online.campusdisha.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Campus Disha - Your Gateway to Online Education",
    description: "Connect with India's top 20+ universities offering UGC-entitled online programs. Expert guidance for online degrees with guaranteed placement support.",
    url: 'https://online.campusdisha.in',
    siteName: 'Campus Disha',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Campus Disha - Online Education Consultancy',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campus Disha - Online Education Consultancy',
    description: 'Connect with India\'s top universities offering UGC-entitled online programs.',
    images: ['/og-image.jpg'],
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
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="w-full">
          {children}
        </div>
      </body>
    </html>
  );
}