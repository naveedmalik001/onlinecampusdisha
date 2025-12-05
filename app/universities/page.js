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
    <div className="universities-page">
      <Header />

      {/* Main Content with proper spacing */}
      <div className="main-content">
        {/* Hero Section */}
        <section className="universities-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Find Your Perfect <span className="highlight">University</span>
              </h1>
              <p className="hero-subtitle">
                Explore {universities.length}+ accredited universities offering 500+ online degree programs
              </p>
              <div className="hero-buttons">
                <a href="#universities-section" className="btn btn-primary">
                  Explore Universities
                </a>
                <Link href="/contact" className="btn btn-secondary">
                  Get Free Counseling
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{universities.length}+</div>
                <div className="stat-label">Universities</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Programs</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">UGC Approved</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Students</div>
              </div>
            </div>
          </div>
        </section>

        {/* Universities Section */}
        <section id="universities-section" className="universities-section">
          <div className="container">
            {/* Section Header */}
            <div className="section-header">
              <h2 className="section-title">Search & Filter Universities</h2>
              <p className="section-subtitle">Find the perfect university that matches your requirements</p>
            </div>

            {/* Search and Filters */}
            <div className="filters-container">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>

              <div className="filters-row">
                <div className="filter-group">
                  <label className="filter-label">State</label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="filter-select"
                  >
                    <option value="">All States</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Program</label>
                  <select
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="filter-select"
                  >
                    <option value="">All Programs</option>
                    {programs.map(program => (
                      <option key={program} value={program}>{program}</option>
                    ))}
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="filter-select"
                  >
                    <option value="name">Name</option>
                    <option value="location">Location</option>
                    <option value="established">Established</option>
                  </select>
                </div>

                <button
                  onClick={clearFilters}
                  className="btn-clear"
                >
                  Clear Filters
                </button>
              </div>

              {/* Results Count */}
              <div className="results-count">
                <span className="count-number">{filteredUniversities.length}</span>
                <span className="count-text">
                  {filteredUniversities.length !== universities.length
                    ? `universities found (from ${universities.length} total)`
                    : 'universities available'
                  }
                </span>
              </div>
            </div>

            {/* Universities Grid */}
            {currentUniversities.length > 0 ? (
              <>
                <div className="universities-grid">
                  {currentUniversities.map((university) => (
                    <UniversityCardNew key={university.id} university={university} />
                  ))}
                </div>

                {/* View More Button */}
                {filteredUniversities.length > universitiesPerPage && (
                  <div className="view-more-container">
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="btn-view-more"
                    >
                      {showMore ? 'Show Less' : `View ${Math.min(6, filteredUniversities.length - universitiesPerPage)} More`}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>No universities found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button onClick={clearFilters} className="btn-clear-filters">
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Why Choose Online Education?</h2>
              <p className="section-subtitle">Discover the advantages of online learning through Campus Disha</p>
            </div>

            <div className="benefits-grid">
              {[
                {
                  title: 'UGC Approved',
                  description: 'All universities are UGC approved with equal recognition as regular degrees',
                  icon: '✅'
                },
                {
                  title: 'Flexible Learning',
                  description: 'Study at your own pace while maintaining your work-life balance',
                  icon: '⏰'
                },
                {
                  title: 'Career Support',
                  description: 'Get placement assistance and career counseling throughout your journey',
                  icon: '💼'
                },
                {
                  title: 'Affordable',
                  description: 'Save on accommodation and transportation with lower tuition fees',
                  icon: '💰'
                },
                {
                  title: 'Industry Relevant',
                  description: 'Curriculum designed to meet current industry demands and trends',
                  icon: '🎯'
                },
                {
                  title: 'Free Support',
                  description: 'Get end-to-end assistance from selection to admission completion',
                  icon: '🤝'
                }
              ].map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Need Help Choosing the Right University?</h2>
              <p className="cta-subtitle">Our expert counselors are here to help you find the perfect program</p>
              <div className="cta-buttons">
                <Link href="/contact" className="btn btn-primary btn-large">
                  Schedule Free Counseling
                </Link>
                <Link href="/trends" className="btn btn-outline btn-large">
                  Explore Trends
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <style jsx>{`
        /* Global Styles */
        .universities-page {
          min-height: 100vh;
        }

        .main-content {
          padding-top: 120px; /* Account for fixed header */
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .universities-hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 80px 0;
          text-align: center;
          color: white;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .highlight {
          color: #fbbf24;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 40px;
          opacity: 0.95;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Stats Section */
        .stats-section {
          background: white;
          padding: 60px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          text-align: center;
        }

        .stat-item {
          background: #f8fafc;
          padding: 30px;
          border-radius: 12px;
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 1rem;
          color: #64748b;
          font-weight: 600;
        }

        /* Universities Section */
        .universities-section {
          background: #f8fafc;
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 15px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Filters */
        .filters-container {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 40px;
        }

        .search-box {
          margin-bottom: 30px;
        }

        .search-input {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #667eea;
        }

        .filters-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
          align-items: end;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
        }

        .filter-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }

        .filter-select {
          padding: 12px 15px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: border-color 0.3s ease;
        }

        .filter-select:focus {
          outline: none;
          border-color: #667eea;
        }

        .btn-clear {
          padding: 12px 24px;
          background: #ef4444;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .btn-clear:hover {
          background: #dc2626;
        }

        .results-count {
          text-align: center;
          padding: 20px 0;
          border-top: 1px solid #e2e8f0;
        }

        .count-number {
          font-size: 2rem;
          font-weight: 700;
          color: #667eea;
        }

        .count-text {
          font-size: 1.1rem;
          color: #64748b;
          margin-left: 10px;
        }

        /* Universities Grid */
        .universities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }

        .view-more-container {
          text-align: center;
        }

        .btn-view-more {
          padding: 15px 40px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .btn-view-more:hover {
          background: #5a67d8;
        }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 80px 20px;
        }

        .no-results-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        .no-results h3 {
          font-size: 1.5rem;
          color: #1e293b;
          margin-bottom: 10px;
        }

        .no-results p {
          color: #64748b;
          margin-bottom: 30px;
        }

        .btn-clear-filters {
          padding: 12px 30px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .btn-clear-filters:hover {
          background: #5a67d8;
        }

        /* Benefits Section */
        .benefits-section {
          background: white;
          padding: 80px 0;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .benefit-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px 30px;
          border-radius: 16px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .benefit-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .benefit-description {
          font-size: 0.95rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 80px 0;
          text-align: center;
          color: white;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .cta-subtitle {
          font-size: 1.2rem;
          margin-bottom: 40px;
          opacity: 0.95;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Button Styles */
        .btn {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
        }

        .btn-primary {
          background: #fbbf24;
          color: #1e293b;
        }

        .btn-primary:hover {
          background: #f59e0b;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: white;
          color: #667eea;
        }

        .btn-outline {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-outline:hover {
          background: white;
          color: #667eea;
        }

        .btn-large {
          padding: 15px 30px;
          font-size: 1.1rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .main-content {
            padding-top: 100px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .section-title {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .stat-number {
            font-size: 2rem;
          }

          .filters-row {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .universities-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .filters-container {
            padding: 25px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .benefit-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  )
}