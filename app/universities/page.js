'use client'

import { useState, useEffect, useMemo } from 'react'
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

  const handleApplyClick = (university) => {
    console.log(`Apply clicked for ${university.name}`)
  }

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
        <section className="bg-primary text-white py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 className="display-4 fw-bold mb-3">
                  <i className="bi bi-building me-3"></i>
                  Partner Universities
                </h1>
                <p className="lead mb-4">
                  Explore 21+ accredited universities offering 500+ online degree programs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="section">
          <div className="container">
            <div className="filter-section">
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
            <div className="row mt-4">
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">
                    <i className="bi bi-funnel me-2"></i>
                    Showing <span className="text-primary">{filteredUniversities.length}</span> universities
                  </h5>
                  <div>
                    <span className="badge bg-primary me-2">
                      {universities.length} Total Universities
                    </span>
                    <span className="badge bg-success">
                      {universities.filter(u => u.accredited).length} UGC Approved
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Universities Grid */}
        <section className="section bg-light">
          <div className="container">
            {filteredUniversities.length > 0 ? (
              <div className="row">
                {filteredUniversities.map((university) => (
                  <UniversityCard
                    key={university.id}
                    university={university}
                    onApplyClick={handleApplyClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <div className="mb-4">
                  <i className="bi bi-search display-1 text-muted"></i>
                </div>
                <h4 className="text-muted mb-3">No universities found</h4>
                <p className="text-muted mb-4">
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
              <a href="/contact" className="btn btn-light btn-lg">
                <i className="bi bi-telephone me-2"></i>
                Schedule Free Counseling
              </a>
              <a href="/trends" className="btn btn-outline-light btn-lg">
                <i className="bi bi-graph-up me-2"></i>
                Explore Online Education Trends
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}