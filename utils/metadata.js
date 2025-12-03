export const siteMetadata = {
  title: 'Campus Disha - Online Degree Admissions Platform',
  description: 'Authorized partner for 20+ Indian universities. End-to-end admission support, counselling & application help for online degree programs.',
  keywords: 'online degrees, university admissions, higher education, campus disha, online education, UGC approved, distance education',
  author: 'Campus Disha',
  url: 'https://campusdisha.com',
  logo: '/logo.png',
  twitterHandle: '@campusdisha',
}

export const openGraphMetadata = {
  type: 'website',
  locale: 'en_US',
  siteName: 'Campus Disha',
}

export const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Campus Disha',
  url: 'https://campusdisha.com',
  logo: 'https://campusdisha.com/logo.png',
  description: 'Authorized partner for 20+ Indian universities offering online degree programs with end-to-end admission support.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+918XXXXXXXXX',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://www.facebook.com/campusdisha',
    'https://www.twitter.com/campusdisha',
    'https://www.linkedin.com/company/campusdisha',
  ],
}

export const generatePageMetadata = (pageData) => {
  return {
    title: pageData.title || siteMetadata.title,
    description: pageData.description || siteMetadata.description,
    keywords: pageData.keywords || siteMetadata.keywords,
    openGraph: {
      ...openGraphMetadata,
      title: pageData.title || siteMetadata.title,
      description: pageData.description || siteMetadata.description,
      url: pageData.url || siteMetadata.url,
      images: pageData.image ? [
        {
          url: pageData.image,
          width: 1200,
          height: 630,
          alt: pageData.title || siteMetadata.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      site: siteMetadata.twitterHandle,
      creator: siteMetadata.twitterHandle,
      title: pageData.title || siteMetadata.title,
      description: pageData.description || siteMetadata.description,
      image: pageData.image || null,
    },
    alternates: {
      canonical: pageData.url || siteMetadata.url,
    },
  }
}