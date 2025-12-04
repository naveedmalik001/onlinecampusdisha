'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  AcademicCapIcon,
  PhoneIcon,
  CalendarDaysIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/solid'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Universities', href: '/universities' },
    { name: 'Trends', href: '/trends' },
    { name: 'Online vs Traditional', href: '/online-vs-traditional' },
    { name: 'UGC Regulation', href: '/ugc-regulation' },
    { name: 'About', href: '/about' },
  ]

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${isScrolled ? 'sticky scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center" href="/" style={{ color: isScrolled ? '#3b82f6' : '#ffffff' }}>
          <AcademicCapIcon className="me-2" style={{ width: '32px', height: '32px' }} />
          Campus Disha
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
          style={{ boxShadow: 'none', padding: '0.5rem' }}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon style={{ width: '28px', height: '28px', color: isScrolled ? '#333' : '#fff' }} />
          ) : (
            <Bars3Icon style={{ width: '28px', height: '28px', color: isScrolled ? '#333' : '#fff' }} />
          )}
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <Link
                  className="nav-link fw-semibold px-3"
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ color: isScrolled ? '#333333' : '#ffffff', transition: 'color 0.3s ease' }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex gap-2 flex-column flex-lg-row">
            <Link
              href="/contact"
              className="btn btn-outline-light rounded-pill px-4 fw-semibold d-flex align-items-center justify-content-center"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                borderColor: isScrolled ? '#3b82f6' : '#ffffff',
                color: isScrolled ? '#3b82f6' : '#ffffff',
                borderWidth: '2px',
                fontSize: '0.95rem'
              }}
            >
              <PhoneIcon className="me-2" style={{ width: '18px', height: '18px' }} />
              Contact
            </Link>
            <Link
              href="/contact"
              className="btn btn-primary rounded-pill px-4 fw-semibold d-flex align-items-center justify-content-center"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: '0.95rem'
              }}
            >
              <CalendarDaysIcon className="me-2" style={{ width: '18px', height: '18px' }} />
              Book Free Counseling
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(10px) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease !important;
          padding: 1rem 0 !important;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(20px) !important;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0 !important;
        }

        .navbar.scrolled .navbar-brand {
          font-size: 1.25rem !important;
        }

        .nav-link {
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover::after {
          width: 80%;
        }

        .nav-link:hover {
          color: #3b82f6 !important;
        }

        .navbar.scrolled .nav-link:hover {
          color: #3b82f6 !important;
        }

        @media (max-width: 991.98px) {
          .navbar-collapse.show {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            border-radius: 12px;
            padding: 1.5rem;
            margin-top: 1rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }

          .navbar-collapse.show .nav-link {
            color: #333333 !important;
            padding: 0.75rem 1rem !important;
            border-radius: 8px;
            margin: 0.25rem 0;
            transition: all 0.3s ease;
          }

          .navbar-collapse.show .nav-link:hover {
            background-color: rgba(59, 130, 246, 0.1);
            color: #3b82f6 !important;
          }

          .navbar-collapse.show .btn-outline-light {
            border-color: #3b82f6 !important;
            color: #3b82f6 !important;
          }

          .navbar-collapse.show .btn {
            margin: 0.25rem 0;
          }
        }
      `}</style>
    </nav>
  )
}