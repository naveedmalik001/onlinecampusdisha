'use client'

import Link from 'next/link'
import { 
  AcademicCapIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/solid'
import {
  HomeIcon,
  BuildingLibraryIcon,
  InformationCircleIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Universities', href: '/universities', icon: BuildingLibraryIcon },
    { name: 'About Us', href: '/about', icon: InformationCircleIcon },
    { name: 'Contact', href: '/contact', icon: ChatBubbleLeftRightIcon },
  ]

  const importantLinks = [
    { name: 'Trends & Insights', href: '/trends', icon: ChartBarIcon },
    { name: 'Online vs Traditional', href: '/online-vs-traditional', icon: BookOpenIcon },
    { name: 'UGC Regulation', href: '/ugc-regulation', icon: ShieldCheckIcon },
    { name: 'FAQ', href: '/faq', icon: QuestionMarkCircleIcon },
  ]

  const legalLinks = [
    { name: 'Terms of Service', href: '/terms', icon: DocumentTextIcon },
    { name: 'Privacy Policy', href: '/privacy', icon: DocumentTextIcon },
  ]

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Twitter', href: '#', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
    { name: 'LinkedIn', href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'Instagram', href: '#', icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' }
  ]

  return (
    <footer className="mt-5">
      <div className="container">
        <div className="row">
          {/* About Campus Disha */}
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3 d-flex align-items-center">
              <AcademicCapIcon className="me-2" style={{ width: '28px', height: '28px' }} />
              Campus Disha
            </h5>
            <p className="text-white-50">
              Your trusted partner for online degree admissions. We help you navigate the complex landscape
              of online education in India and connect you with accredited universities.
            </p>
            <div className="d-flex gap-3 mt-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="text-white-50 social-icon-link" 
                  aria-label={social.name} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <svg 
                    className="social-icon" 
                    style={{ width: '24px', height: '24px' }} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-uppercase text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.name} className="mb-2">
                  <Link href={link.href} className="footer-link d-flex align-items-center">
                    <link.icon className="me-2" style={{ width: '16px', height: '16px' }} />
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
                  <Link href={link.href} className="footer-link d-flex align-items-center">
                    <link.icon className="me-2" style={{ width: '16px', height: '16px' }} />
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
                <a href="mailto:info@campusdisha.in" className="footer-link d-flex align-items-start">
                  <EnvelopeIcon className="me-2 mt-1" style={{ width: '18px', height: '18px', flexShrink: 0 }} />
                  <span>info@campusdisha.in</span>
                </a>
              </li>
              <li className="mb-3">
                <a href="tel:+919469328661" className="footer-link d-flex align-items-start">
                  <PhoneIcon className="me-2 mt-1" style={{ width: '18px', height: '18px', flexShrink: 0 }} />
                  <span>+91 9469328661</span>
                </a>
              </li>
              <li className="mb-3">
                <div className="text-white-50 d-flex align-items-start">
                  <MapPinIcon className="me-2 mt-1" style={{ width: '18px', height: '18px', flexShrink: 0 }} />
                  <span>Residency Road Lal Chowk<br />Srinagar J&K 190001</span>
                </div>
              </li>
              <li className="mb-3">
                <span className="text-white-50 d-flex align-items-start">
                  <ClockIcon className="me-2 mt-1" style={{ width: '18px', height: '18px', flexShrink: 0 }} />
                  <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
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
                  style={{ 
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white'
                  }}
                />
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{
                    borderRadius: '8px',
                    padding: '0.5rem 1.25rem',
                    whiteSpace: 'nowrap'
                  }}
                >
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
                <Link key={link.name} href={link.href} className="footer-link small d-flex align-items-center">
                  <link.icon className="me-1" style={{ width: '14px', height: '14px' }} />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .social-icon-link:hover {
          color: var(--primary-light) !important;
          transform: translateY(-3px);
        }

        .social-icon {
          transition: all 0.3s ease;
        }

        .social-icon-link:hover .social-icon {
          filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.6));
        }
      `}</style>
    </footer>
  )
}