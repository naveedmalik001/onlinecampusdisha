'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Header from '../../components/shared/Header'
import Footer from '../../components/shared/Footer'
import UniversityCard from '../../components/shared/UniversityCard'
import universities from '../../data/universities.json'

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedProgram, setSelectedProgram] = useState('')
  const [sortBy, setSortBy] = useState('name')

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

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedState('')
    setSelectedProgram('')
    setSortBy('name')
  }

  return (
    <div className="university-page">
      <Header />

      <main className="university-main">
        {/* Hero Section */}
        <section className="university-hero">
          <div className="hero-background">
            <div className="hero-pattern"></div>
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span>🎓</span>
                Explore Top Universities
              </div>
              <h1 className="hero-title">
                Find Your Perfect
                <span className="hero-highlight"> University</span>
              </h1>
              <p className="hero-description">
                Discover 21+ accredited universities offering 500+ online degree programs.
                Start your journey towards a brighter future today.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">21+</div>
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
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Filters Section */}
        <section className="filters-section">
          <div className="container">
            <div className="filters-header">
              <h2 className="filters-title">Find Your Ideal University</h2>
              <p className="filters-subtitle">Use our advanced filters to narrow down your search</p>
            </div>

            <div className="filters-container">
              <div className="filter-group">
                <label className="filter-label">
                  <span className="filter-icon">🔍</span>
                  Search University
                </label>
                <div className="search-input-wrapper">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search by name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="search-icon">🔍</div>
                </div>
              </div>

              <div className="filter-group">
                <label className="filter-label">
                  <span className="filter-icon">📍</span>
                  State
                </label>
                <select
                  className="filter-select"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value="">All States</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">
                  <span className="filter-icon">📚</span>
                  Program
                </label>
                <select
                  className="filter-select"
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                >
                  <option value="">All Programs</option>
                  {programs.map(program => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">
                  <span className="filter-icon">↕️</span>
                  Sort By
                </label>
                <select
                  className="filter-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Name</option>
                  <option value="location">Location</option>
                  <option value="established">Established</option>
                </select>
              </div>

              <div className="filter-actions">
                <button className="clear-btn" onClick={clearFilters}>
                  <span>🔄</span>
                  Clear All
                </button>
              </div>
            </div>

            {/* Results Summary */}
            <div className="results-summary">
              <div className="results-info">
                <h3 className="results-count">
                  <span className="count-number">{filteredUniversities.length}</span>
                  <span className="count-text">Universities Found</span>
                </h3>
                <p className="results-description">
                  {searchTerm || selectedState || selectedProgram
                    ? 'Matching your search criteria'
                    : 'Showing all available universities'}
                </p>
              </div>
              <div className="results-badges">
                <span className="badge badge-primary">{universities.length} Total</span>
                <span className="badge badge-success">{universities.filter(u => u.accredited).length} UGC Approved</span>
              </div>
            </div>
          </div>
        </section>

        {/* Universities Grid */}
        <section className="universities-section">
          <div className="container">
            {filteredUniversities.length > 0 ? (
              <div className="universities-grid">
                {filteredUniversities.map((university) => (
                  <div className="university-card-wrapper" key={university.id}>
                    <UniversityCard university={university} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-illustration">
                  <div className="illustration-icon">🔍</div>
                  <div className="illustration-text">No universities found</div>
                </div>
                <h3 className="no-results-title">Try Different Filters</h3>
                <p className="no-results-description">
                  We couldn't find universities matching your criteria. Try adjusting your filters or search terms.
                </p>
                <button className="retry-btn" onClick={clearFilters}>
                  <span>🔄</span>
                  Start Over
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="container">
            <div className="benefits-header">
              <h2 className="benefits-title">Why Choose Online Education?</h2>
              <p className="benefits-subtitle">Discover the advantages of online learning through Campus Disha</p>
            </div>

            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">✅</div>
                <h3 className="benefit-title">UGC Approved</h3>
                <p className="benefit-description">All universities are UGC approved with equal recognition as regular degrees</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">⏰</div>
                <h3 className="benefit-title">Flexible Learning</h3>
                <p className="benefit-description">Study at your own pace while maintaining your work-life balance</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">💼</div>
                <h3 className="benefit-title">Career Support</h3>
                <p className="benefit-description">Get placement assistance and career counseling throughout your journey</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h3 className="benefit-title">Affordable</h3>
                <p className="benefit-description">Save on accommodation and transportation with lower tuition fees</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">🎯</div>
                <h3 className="benefit-title">Industry Relevant</h3>
                <p className="benefit-description">Curriculum designed to meet current industry demands and trends</p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">🤝</div>
                <h3 className="benefit-title">Free Support</h3>
                <p className="benefit-description">Get end-to-end assistance from selection to admission completion</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-background"></div>
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Start Your Journey?</h2>
              <p className="cta-description">
                Our expert counselors are here to help you choose the perfect university and program
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="cta-button primary">
                  <span className="btn-icon">📞</span>
                  Free Counseling
                </Link>
                <Link href="/trends" className="cta-button secondary">
                  <span className="btn-icon">📈</span>
                  Explore Trends
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        /* Global Styles */
        .university-page {
          min-height: 100vh;
          background: #f8fafc;
        }

        .university-main {
          padding-top: 80px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .university-hero {
          position: relative;
          min-height: 600px;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
        }

        .hero-pattern {
          position: absolute;
          inset: 0;
          background-image:
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-text {
          max-width: 700px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: white;
          margin-bottom: 24px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .hero-highlight {
          background: linear-gradient(135deg, #fff 0%, #e0e7ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 40px;
          font-weight: 400;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          display: block;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 8px;
          font-weight: 600;
        }

        /* Filters Section */
        .filters-section {
          padding: 80px 0;
          background: white;
          position: relative;
        }

        .filters-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .filters-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .filters-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .filters-container {
          background: white;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          margin-bottom: 40px;
        }

        .filter-group {
          margin-bottom: 32px;
        }

        .filter-group:last-of-type {
          margin-bottom: 0;
        }

        .filter-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 12px;
        }

        .filter-icon {
          font-size: 1.1rem;
        }

        .search-input-wrapper {
          position: relative;
        }

        .search-input {
          width: 100%;
          padding: 16px 20px 16px 50px;
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #f9fafb;
        }

        .search-input:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          font-size: 1.2rem;
        }

        .filter-select {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          font-size: 1rem;
          background: #f9fafb;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-select:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .filter-actions {
          display: flex;
          justify-content: flex-end;
        }

        .clear-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px 24px;
          background: #f3f4f6;
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .clear-btn:hover {
          background: #667eea;
          color: white;
          border-color: #667eea;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.2);
        }

        /* Results Summary */
        .results-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 32px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #e2e8f0;
        }

        .results-count {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin: 0;
          font-size: 1.8rem;
          font-weight: 700;
          color: #1e293b;
        }

        .count-number {
          color: #667eea;
        }

        .count-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #64748b;
        }

        .results-description {
          color: #94a3b8;
          margin: 8px 0 0 0;
          font-size: 0.95rem;
        }

        .results-badges {
          display: flex;
          gap: 12px;
        }

        .badge {
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .badge-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .badge-success {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
        }

        /* Universities Section */
        .universities-section {
          padding: 80px 0;
          background: #f8fafc;
        }

        .universities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 32px;
        }

        .university-card-wrapper {
          height: 100%;
        }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 100px 20px;
          background: white;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
        }

        .no-results-illustration {
          margin-bottom: 32px;
        }

        .illustration-icon {
          font-size: 4rem;
          color: #cbd5e1;
          margin-bottom: 16px;
        }

        .illustration-text {
          font-size: 1.1rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .no-results-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .no-results-description {
          font-size: 1rem;
          color: #64748b;
          margin-bottom: 32px;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        .retry-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 16px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .retry-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
        }

        /* Benefits Section */
        .benefits-section {
          padding: 100px 0;
          background: white;
        }

        .benefits-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .benefits-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .benefits-subtitle {
          font-size: 1.1rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
        }

        .benefit-card {
          padding: 32px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .benefit-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
          display: block;
        }

        .benefit-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 12px;
        }

        .benefit-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #64748b;
        }

        /* CTA Section */
        .cta-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .cta-background {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
        }

        .cta-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 20px;
        }

        .cta-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 40px;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          border-radius: 16px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .cta-button.primary {
          background: white;
          color: #667eea;
        }

        .cta-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(255, 255, 255, 0.3);
        }

        .cta-button.secondary {
          background: transparent;
          color: white;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
          transform: translateY(-2px);
        }

        .btn-icon {
          font-size: 1.1rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .hero-stats {
            gap: 24px;
          }

          .stat-number {
            font-size: 2rem;
          }

          .filters-container {
            padding: 24px;
          }

          .results-summary {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }

          .universities-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .filters-title,
          .benefits-title,
          .cta-title {
            font-size: 2rem;
          }

          .stat-number {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  )
}