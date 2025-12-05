'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Header from '../../components/shared/Header'
import Footer from '../../components/shared/Footer'
import UniversityCardNew from '../../components/shared/UniversityCardNew'
import universities from '../../data/universities.json'

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedProgram, setSelectedProgram] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [showMore, setShowMore] = useState(false)
  const universitiesPerPage = showMore ? 12 : 6

  // Extract unique states and programs
  const states = useMemo(() => {
    const uniqueStates = [...new Set(universities.map(uni => {
      const parts = uni.location.split(', ')
      return parts[parts.length - 1]
    }))]
    return uniqueStates.sort()
  }, [])

  const programs = useMemo(() => {
    const allPrograms = universities.flatMap(uni => uni.programs)
    const uniquePrograms = [...new Set(allPrograms)]
    return uniquePrograms.sort()
  }, [])

  // Filter and sort universities
  const filteredUniversities = useMemo(() => {
    let filtered = universities.filter(university => {
      const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        university.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesState = !selectedState || university.location.includes(selectedState)
      const matchesProgram = !selectedProgram || university.programs.includes(selectedProgram)

      return matchesSearch && matchesState && matchesProgram
    })

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'established':
          return (b.established || '0').localeCompare(a.established || '0')
        case 'location':
          return a.location.localeCompare(b.location)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedState, selectedProgram, sortBy])

  // Display universities
  const currentUniversities = filteredUniversities.slice(0, universitiesPerPage)

  // Reset showMore when filters change
  useEffect(() => {
    setShowMore(false)
  }, [searchTerm, selectedState, selectedProgram])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedState('')
    setSelectedProgram('')
    setSortBy('name')
    setShowMore(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section - Dark and Bold */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Find Your Perfect
              <span className="text-yellow-400 block md:inline"> University</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Explore {universities.length}+ accredited universities offering 500+ online degree programs.
              Start your journey towards a brighter future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#universities" className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Explore Universities
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-lg hover:bg-yellow-500 hover:text-blue-900 transform hover:scale-105 transition-all duration-300">
                Get Free Counseling
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">{universities.length}+</div>
              <div className="text-gray-700 font-semibold">Universities</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2">500+</div>
              <div className="text-gray-700 font-semibold">Programs</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-purple-700 mb-2">100%</div>
              <div className="text-gray-700 font-semibold">UGC Approved</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-orange-700 mb-2">50K+</div>
              <div className="text-gray-700 font-semibold">Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section id="universities" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Search & Filter Universities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect university that matches your requirements
            </p>
          </div>

          {/* Improved Filters - Mobile First */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            {/* Search Bar */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                🔍 Search Universities
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-medium"
                />
                <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filter Options - Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* State Filter */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  📍 State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-medium"
                >
                  <option value="">All States</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* Program Filter */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  📚 Program
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-medium"
                >
                  <option value="">All Programs</option>
                  {programs.map(program => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  🔄 Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 font-medium"
                >
                  <option value="name">Name</option>
                  <option value="location">Location</option>
                  <option value="established">Established</option>
                </select>
              </div>
            </div>

            {/* Clear Filters Button */}
            <div className="flex justify-center">
              <button
                onClick={clearFilters}
                className="px-8 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                🗑️ Clear All Filters
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-700 font-medium">
              Found <span className="font-bold text-blue-600 text-2xl">{filteredUniversities.length}</span> universities
              {filteredUniversities.length !== universities.length && (
                <span> (from {universities.length} total)</span>
              )}
            </p>
          </div>

          {/* Universities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentUniversities.map((university) => (
              <UniversityCardNew key={university.id} university={university} />
            ))}
          </div>

          {/* No Results */}
          {filteredUniversities.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No universities found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your filters or search terms</p>
              <button
                onClick={clearFilters}
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* View More Button */}
          {filteredUniversities.length > universitiesPerPage && (
            <div className="text-center">
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl text-lg"
              >
                {showMore ? (
                  <>🔝 Show Less</>
                ) : (
                  <>👇 View {Math.min(6, filteredUniversities.length - universitiesPerPage)} More Universities</>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Online Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Online Education?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of online learning through Campus Disha
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '✅',
                title: 'UGC Approved',
                description: 'All universities are UGC approved with equal recognition as regular degrees'
              },
              {
                icon: '⏰',
                title: 'Flexible Learning',
                description: 'Study at your own pace while maintaining your work-life balance'
              },
              {
                icon: '💼',
                title: 'Career Support',
                description: 'Get placement assistance and career counseling throughout your journey'
              },
              {
                icon: '💰',
                title: 'Affordable',
                description: 'Save on accommodation and transportation with lower tuition fees'
              },
              {
                icon: '🎯',
                title: 'Industry Relevant',
                description: 'Curriculum designed to meet current industry demands and trends'
              },
              {
                icon: '🤝',
                title: 'Free Support',
                description: 'Get end-to-end assistance from selection to admission completion'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about online universities and programs
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Are online degrees recognized by employers?',
                answer: 'Yes, all degrees from UGC-approved online universities have the same recognition as regular degrees and are accepted by employers across India and abroad.'
              },
              {
                question: 'What is the admission process for online programs?',
                answer: 'The admission process typically includes application form submission, document verification, and sometimes an entrance test. We provide complete assistance throughout the process.'
              },
              {
                question: 'Can I work while pursuing an online degree?',
                answer: 'Absolutely! Online programs are designed for working professionals with flexible schedules, recorded lectures, and weekend classes.'
              },
              {
                question: 'What is the fee structure for online programs?',
                answer: 'Online programs are generally more affordable than traditional programs, with fees ranging from ₹50,000 to ₹2,00,000 depending on the university and course.'
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <summary className="p-6 cursor-pointer font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors">
                  {faq.question}
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Help Choosing the Right University?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Schedule Free Counseling
            </Link>
            <Link href="/trends" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-lg hover:bg-yellow-500 hover:text-blue-900 transform hover:scale-105 transition-all duration-300">
              📊 Explore Trends
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}