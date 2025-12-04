import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Universities', href: '/universities' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const importantLinks = [
    { name: 'Trends & Insights', href: '/trends' },
    { name: 'Online vs Traditional', href: '/online-vs-traditional' },
    { name: 'UGC Regulation', href: '/ugc-regulation' },
    { name: 'FAQ', href: '/faq' },
  ]

  const legalLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ]

  return (
    <footer className="mt-5">
      <div className="container">
        <div className="row">
          {/* About Campus Disha */}
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3">
              <i className="bi bi-mortarboard-fill me-2"></i>
              Campus Disha
            </h5>
            <p className="text-white-50">
              Your trusted partner for online degree admissions. We help you navigate the complex landscape
              of online education in India and connect you with accredited universities.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white-50 fs-5" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white-50 fs-5" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white-50 fs-5" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-white-50 fs-5" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-uppercase text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.name} className="mb-2">
                  <Link href={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-uppercase text-white mb-3">Resources</h6>
            <ul className="list-unstyled">
              {importantLinks.map((link) => (
                <li key={link.name} className="mb-2">
                  <Link href={link.href} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4 mb-4">
            <h6 className="text-uppercase text-white mb-3">Get in Touch</h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="mailto:info@campusdisha.com" className="footer-link">
                  <i className="bi bi-envelope me-2"></i>
                  info@campusdisha.com
                </a>
              </li>
              <li className="mb-3">
                <a href="tel:+918XXXXXXXXX" className="footer-link">
                  <i className="bi bi-telephone me-2"></i>
                  +91 8XXXXXXXXX
                </a>
              </li>
              <li className="mb-3">
                <span className="text-white-50">
                  <i className="bi bi-clock me-2"></i>
                  Mon-Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>

            <div className="mt-3">
              <h6 className="text-white mb-2">Newsletter</h6>
              <p className="text-white-50 small mb-3">
                Subscribe to get updates on online degree programs and admission tips.
              </p>
              <form className="d-flex">
                <input
                  type="email"
                  className="form-control me-2"
                  placeholder="Your email"
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom Footer */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-white-50 small mb-0">
              © {currentYear} Campus Disha. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-inline-flex gap-3">
              {legalLinks.map((link) => (
                <Link key={link.name} href={link.href} className="footer-link small">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}