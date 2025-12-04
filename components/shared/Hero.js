'use client'

import Link from 'next/link'
import {
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  AcademicCapIcon,
  ClockIcon,
  ShieldCheckIcon,
  PercentBadgeIcon,
  CheckCircleIcon,
  TrophyIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 text-center text-lg-start">
            <div className="fade-in">
              {/* Trust badges at the top */}
              <div className="d-flex align-items-center gap-3 mb-4 flex-wrap justify-content-center justify-content-lg-start">
                <span className="badge bg-success text-white px-3 py-2 rounded-pill d-flex align-items-center">
                  <CheckCircleIcon className="me-1" style={{ width: '18px', height: '18px' }} />
                  UGC Approved
                </span>
                <span className="badge bg-warning text-dark px-3 py-2 rounded-pill d-flex align-items-center">
                  <TrophyIcon className="me-1" style={{ width: '18px', height: '18px' }} />
                  21+ Universities
                </span>
                <span className="badge bg-info text-white px-3 py-2 rounded-pill d-flex align-items-center">
                  <UserGroupIcon className="me-1" style={{ width: '18px', height: '18px' }} />
                  5000+ Students
                </span>
              </div>

              <h1 className="hero-title mb-4 display-4 fw-bold">
                Find Your Perfect
                <br />
                <span className="text-warning">Online Degree</span>
              </h1>

              <p className="hero-subtitle mb-4 lead">
                Your trusted gateway to accredited online programs from India's top universities.
                Free counseling, simple applications, and guaranteed admission support.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-4">
                <Link href="/universities" className="btn btn-light btn-lg fw-bold rounded-pill px-4 d-flex align-items-center justify-content-center">
                  <MagnifyingGlassIcon className="me-2" style={{ width: '22px', height: '22px' }} />
                  Explore Programs
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg rounded-pill px-4 d-flex align-items-center justify-content-center">
                  <CalendarDaysIcon className="me-2" style={{ width: '22px', height: '22px' }} />
                  Free Counseling
                </Link>
              </div>

              {/* Key benefits with icons */}
              <div className="row g-3">
                <div className="col-6 col-md-3">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="rounded-circle bg-white bg-opacity-20 p-3 mb-2 float">
                      <AcademicCapIcon className="text-white" style={{ width: '32px', height: '32px' }} />
                    </div>
                    <small className="text-white fw-semibold">Expert Guidance</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="rounded-circle bg-white bg-opacity-20 p-3 mb-2 float" style={{ animationDelay: '0.2s' }}>
                      <ClockIcon className="text-white" style={{ width: '32px', height: '32px' }} />
                    </div>
                    <small className="text-white fw-semibold">Flexible Learning</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="rounded-circle bg-white bg-opacity-20 p-3 mb-2 float" style={{ animationDelay: '0.4s' }}>
                      <ShieldCheckIcon className="text-white" style={{ width: '32px', height: '32px' }} />
                    </div>
                    <small className="text-white fw-semibold">Verified Universities</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="rounded-circle bg-white bg-opacity-20 p-3 mb-2 float" style={{ animationDelay: '0.6s' }}>
                      <PercentBadgeIcon className="text-white" style={{ width: '32px', height: '32px' }} />
                    </div>
                    <small className="text-white fw-semibold">No Hidden Fees</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <div className="hero-image slide-in-right">
              <div className="position-relative">
                <div className="glass rounded-4 p-4">
                  <div className="text-white text-start">
                    <div className="d-flex align-items-center mb-4">
                      <div className="rounded-circle bg-warning p-3 me-3 pulse-glow">
                        <AcademicCapIcon className="text-dark" style={{ width: '36px', height: '36px' }} />
                      </div>
                      <div>
                        <h5 className="mb-0 fw-bold">Start Your Journey Today</h5>
                        <p className="mb-0 opacity-75">Join thousands of successful graduates</p>
                      </div>
                    </div>

                    <div className="row g-3 mb-4">
                      <div className="col-4">
                        <div className="text-center scale-in">
                          <h3 className="mb-0 fw-bold gradient-text" style={{ fontSize: '2rem' }}>500+</h3>
                          <small>Programs</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="text-center scale-in" style={{ animationDelay: '0.1s' }}>
                          <h3 className="mb-0 fw-bold gradient-text" style={{ fontSize: '2rem' }}>21</h3>
                          <small>Universities</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="text-center scale-in" style={{ animationDelay: '0.2s' }}>
                          <h3 className="mb-0 fw-bold gradient-text" style={{ fontSize: '2rem' }}>50+</h3>
                          <small>Specializations</small>
                        </div>
                      </div>
                    </div>

                    <div className="alert alert-success d-flex align-items-center mb-0 slide-up" style={{
                      background: 'rgba(16, 185, 129, 0.2)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <CheckCircleIcon className="me-2" style={{ width: '24px', height: '24px' }} />
                      <small className="fw-medium">100% Free Admission Support</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  )
}