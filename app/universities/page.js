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
    <div>
      <Header />

      <main>
        {/* Page Header */}
        <section className="page-hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="hero-title">
                  <i className="bi bi-building me-3"></i>
                  Partner Universities
                </h1>
                <p className="hero-subtitle">
                  Explore 21+ accredited universities offering 500+ online degree programs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="filters-section">
          <div className="container">
            <div className="filter-card">
              <div className="row g-3">
                <div className="col-md-4">
                  <label htmlFor="search" className="form-label fw-semibold">
                    <i className="bi bi-search me-2"></i>
                    Search Universities
                  </label>
                  <input
                    type="text"
                    className="form-control search-input"
                    id="search"
                    placeholder="Search by name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="col-md-2">
                  <label htmlFor="state" className="form-label fw-semibold">
                    <i className="bi bi-geo-alt me-2"></i>
                    State
                  </label>
                  <select
                    className="form-select search-input"
                    id="state"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    <option value="">All States</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                <div className="col-md-2">
                  <label htmlFor="program" className="form-label fw-semibold">
                    <i className="bi bi-book me-2"></i>
                    Program
                  </label>
                  <select
                    className="form-select search-input"
                    id="program"
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                  >
                    <option value="">All Programs</option>
                    {programs.map(program => (
                      <option key={program} value={program}>{program}</option>
                    ))}
                  </select>
                </div>

                <div className="col-md-2">
                  <label htmlFor="sort" className="form-label fw-semibold">
                    <i className="bi bi-sort-down me-2"></i>
                    Sort By
                  </label>
                  <select
                    className="form-select search-input"
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="name">Name</option>
                    <option value="location">Location</option>
                    <option value="established">Established</option>
                  </select>
                </div>

                <div className="col-md-2 d-flex align-items-end">
                  <button
                    className="btn btn-outline-secondary w-100"
                    onClick={clearFilters}
                  >
                    <i className="bi bi-x-circle me-2"></i>
                    Clear
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="results-count">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <h5 className="mb-0">
                  <i className="bi bi-funnel me-2"></i>
                  Showing <span className="text-primary fw-bold">{filteredUniversities.length}</span> universities
                </h5>
                <div className="d-flex gap-2">
                  <span className="stats-badge badge-primary">
                    {universities.length} Total Universities
                  </span>
                  <span className="stats-badge badge-success">
                    {universities.filter(u => u.accredited).length} UGC Approved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Universities Grid */}
        <section className="universities-grid-section">
          <div className="container">
            {filteredUniversities.length > 0 ? (
              <div className="universities-grid">
                {filteredUniversities.map((university) => (
                  <UniversityCard
                    key={university.id}
                    university={university}
                  />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-icon">
                  <i className="bi bi-search"></i>
                </div>
                <h4 className="no-results-title">No universities found</h4>
                <p className="no-results-text">
                  Try adjusting your filters or search terms to find matching universities
                </p>
                <button className="btn btn-primary" onClick={clearFilters}>
                  <i className="bi bi-arrow-clockwise me-2"></i>
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h4 className="mb-3">
                      <i className="bi bi-info-circle me-2"></i>
                      Why Choose Online Degrees Through Campus Disha?
                    </h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="d-flex align-items-start mb-3">
                          <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                          <div>
                            <h6 className="mb-1">All Universities are UGC Approved</h6>
                            <p className="text-muted mb-0">
                              Degrees have equal recognition as regular degrees for jobs and higher education
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                          <div>
                            <h6 className="mb-1">Flexible Learning Options</h6>
                            <p className="text-muted mb-0">
                              Study at your own pace while continuing your job or other commitments
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                          <div>
                            <h6 className="mb-1">Industry-Relevant Curriculum</h6>
                            <p className="text-muted mb-0">
                              Programs designed to meet current industry demands and skill requirements
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-start mb-3">
                          <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                          <div>
                            <h6 className="mb-1">Career Support & Placement</h6>
                            <p className="text-muted mb-0">
                              Access to job portals, career counseling, and placement assistance
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                          <div>
                            <h6 className="mb-1">Affordable Education</h6>
                            <p className="text-muted mb-0">
                              Save on accommodation and transportation costs with lower tuition fees
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                          <div>
                            <h6 className="mb-1">Free Admission Support</h6>
                            <p className="text-muted mb-0">
                              Get end-to-end assistance from program selection to admission completion
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-white">
          <div className="container text-center">
            <h2 className="mb-3">Need Help Choosing the Right University?</h2>
            <p className="lead mb-4 opacity-90">
              Our expert counselors will help you find the perfect program based on your career goals
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link href="/contact" className="btn btn-light btn-lg">
                <i className="bi bi-telephone me-2"></i>
                Schedule Free Counseling
              </Link>
              <Link href="/trends" className="btn btn-outline-light btn-lg">
                <i className="bi bi-graph-up me-2"></i>
                Explore Online Education Trends
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        /* Page Hero Section */
        .page-hero {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          padding: 80px 0 60px;
          margin-top: 100px;
          position: relative;
          overflow: hidden;
        }

        .page-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.3;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.95;
          position: relative;
          z-index: 1;
          margin-bottom: 0;
        }

        /* Filters Section */
        .filters-section {
          padding: 40px 0;
          background: #f8fafc;
        }

        .filter-card {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .search-input {
          border-radius: 12px;
          border: 2px solid #e2e8f0;
          padding: 12px 16px;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }

        .form-label {
          color: #1e293b;
          margin-bottom: 8px;
          font-size: 0.95rem;
        }

        /* Results Count */
        .results-count {
          margin-top: 30px;
          padding: 20px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
        }

        .stats-badge {
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .badge-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
        }

        .badge-success {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
        }

        /* Universities Grid Section */
        .universities-grid-section {
          padding: 50px 0;
          background: #f8fafc;
        }

        .universities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          animation: fadeIn 0.6s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 80px 20px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .no-results-icon {
          font-size: 5rem;
          color: #cbd5e1;
          margin-bottom: 1.5rem;
        }

        .no-results-title {
          color: #64748b;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .no-results-text {
          color: #94a3b8;
          margin-bottom: 2rem;
          font-size: 1.05rem;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .universities-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        @media (max-width: 768px) {
          .page-hero {
            padding: 60px 0 40px;
            margin-top: 80px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .filter-card {
            padding: 20px;
          }

          .universities-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .results-count {
            padding: 15px;
          }

          .results-count h5 {
            font-size: 1rem;
          }

          .stats-badge {
            font-size: 0.8rem;
            padding: 6px 12px;
          }
        }

        @media (min-width: 992px) {
          .page-hero {
            margin-top: 120px;
          }
        }
      `}</style>
    </div>
  )
}