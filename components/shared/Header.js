'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
        <Link className="navbar-brand fw-bold fs-4" href="/" style={{color: isScrolled ? '#0d6efd' : '#ffffff'}}>
          <i className="bi bi-mortarboard-fill me-2"></i>
          Campus Disha
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
          style={{border: 'none', boxShadow: 'none'}}
        >
          <span className={`navbar-toggler-icon ${isScrolled ? '' : 'custom-light'}`}></span>
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <Link
                  className="nav-link fw-semibold px-3"
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{color: isScrolled ? '#333333' : '#ffffff', transition: 'color 0.3s ease'}}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex gap-2">
            <Link
              href="/contact"
              className="btn btn-outline-light rounded-pill px-4 fw-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                borderColor: isScrolled ? '#0d6efd' : '#ffffff',
                color: isScrolled ? '#0d6efd' : '#ffffff',
                borderWidth: '2px',
                fontSize: '0.95rem'
              }}
            >
              <i className="bi bi-telephone me-1"></i>
              Contact
            </Link>
            <Link
              href="/contact"
              className="btn btn-primary rounded-pill px-4 fw-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                backgroundColor: isScrolled ? '#0d6efd' : 'rgba(13, 110, 253, 0.9)',
                border: 'none',
                fontSize: '0.95rem',
                boxShadow: isScrolled ? '0 4px 6px rgba(0,0,0,0.1)' : '0 4px 12px rgba(13, 110, 253, 0.3)'
              }}
            >
              <i className="bi bi-calendar-check me-1"></i>
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

        .nav-link:hover {
          color: rgba(13, 110, 253, 0.8) !important;
        }

        .navbar.scrolled .nav-link:hover {
          color: #0d6efd !important;
        }

        .custom-light {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
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
            background-color: rgba(13, 110, 253, 0.1);
            color: #0d6efd !important;
          }

          .navbar-collapse.show .btn-outline-light {
            border-color: #0d6efd !important;
            color: #0d6efd !important;
          }
        }
      `}</style>
    </nav>
  )
}