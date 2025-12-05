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
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2'
          : 'bg-white/10 backdrop-blur-md border-b border-white/20 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              className="flex items-center font-bold text-xl transition-transform duration-300 hover:scale-105"
              href="/"
            >
              <AcademicCapIcon className={`w-8 h-8 mr-2 transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`} />
              <span className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Campus Disha
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    className="relative font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
                    href={item.href}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full transform -translate-x-1/2" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="flex items-center px-6 py-2.5 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
              >
                <PhoneIcon className="w-4 h-4 mr-2" />
                Contact
              </Link>
              <Link
                href="/contact"
                className="flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
              >
                <CalendarDaysIcon className="w-4 h-4 mr-2" />
                Book Free Counseling
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-gray-100"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className={`w-7 h-7 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`} />
              ) : (
                <Bars3Icon className={`w-7 h-7 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}>
            <div className="bg-white/95 backdrop-blur-lg rounded-xl shadow-xl p-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  className="block font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-300"
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 space-y-3 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <CalendarDaysIcon className="w-4 h-4 mr-2" />
                  Book Free Counseling
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding to prevent content overlap */}
      <div className="h-20" />
    </>
  )
}