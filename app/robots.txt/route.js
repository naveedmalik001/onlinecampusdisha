import { NextResponse } from 'next/server'

const siteUrl = 'https://campusdisha.com'

export function GET() {
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow specific paths if needed
# Disallow: /api/
# Disallow: /_next/
# Disallow: /admin/

# Allow important paths
Allow: /universities/
Allow: /about/
Allow: /contact/
Allow: /trends/
Allow: /online-vs-traditional/
Allow: /ugc-regulation/
Allow: /faq/
Allow: /terms/
Allow: /privacy/
`

  return new NextResponse(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}