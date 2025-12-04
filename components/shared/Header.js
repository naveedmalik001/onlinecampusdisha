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
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${isScrolled ? 'sticky' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <i className="bi bi-mortarboard-fill me-2"></i>
          Campus Disha
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <Link className="nav-link" href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex gap-2">
            <Link
              href="/contact"
              className="btn btn-outline-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="bi bi-telephone me-1"></i>
              Contact
            </Link>
            <Link
              href="/universities"
              className="btn btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="bi bi-arrow-right-circle me-1"></i>
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}