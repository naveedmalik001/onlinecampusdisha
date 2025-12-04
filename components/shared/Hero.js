export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 text-center text-lg-start">
            <div className="fade-in">
              {/* Trust badges at the top */}
              <div className="d-flex align-items-center gap-3 mb-4 flex-wrap">
                <span className="badge bg-success text-white px-3 py-2 rounded-pill">
                  <i className="bi bi-check-circle me-1"></i>
                  UGC Approved
                </span>
                <span className="badge bg-warning text-dark px-3 py-2 rounded-pill">
                  <i className="bi bi-award me-1"></i>
                  21+ Universities
                </span>
                <span className="badge bg-info text-white px-3 py-2 rounded-pill">
                  <i className="bi bi-people me-1"></i>
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
                <a href="/universities" className="btn btn-light btn-lg fw-bold rounded-pill px-4">
                  <i className="bi bi-search me-2"></i>
                  Explore Programs
                </a>
                <a href="/contact" className="btn btn-outline-light btn-lg rounded-pill px-4">
                  <i className="bi bi-calendar-check me-2"></i>
                  Free Counseling
                </a>
              </div>

              {/* Key benefits with icons */}
              <div className="row g-3">
                <div className="col-6 col-md-3">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="rounded-circle bg-white bg-opacity-20 p-3 mb-2">
                      <i className="bi bi-mortarboard-fill text-white fs-4"></i>
                    </div>
                    <small className="text-white">Expert Guidance</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="rounded-circle bg-white bg-opacity-20 p-3 mb-2">
                      <i className="bi bi-clock-fill text-white fs-4"></i>
                    </div>
                    <small className="text-white">Flexible Learning</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="rounded-circle bg-white bg-opacity-20 p-3 mb-2">
                      <i className="bi bi-shield-check-fill text-white fs-4"></i>
                    </div>
                    <small className="text-white">Verified Universities</small>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex flex-column align-items-center text-center">
                    <div className="rounded-circle bg-white bg-opacity-20 p-3 mb-2">
                      <i className="bi bi-percent text-white fs-4"></i>
                    </div>
                    <small className="text-white">No Hidden Fees</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <div className="hero-image slide-in-right">
              <div className="position-relative">
                <div className="bg-white bg-opacity-10 rounded-4 p-4 backdrop-blur-sm">
                  <div className="text-white text-start">
                    <div className="d-flex align-items-center mb-4">
                      <div className="rounded-circle bg-warning p-3 me-3">
                        <i className="bi bi-mortarboard-fill text-dark fs-2"></i>
                      </div>
                      <div>
                        <h5 className="mb-0 fw-bold">Start Your Journey Today</h5>
                        <p className="mb-0 opacity-75">Join thousands of successful graduates</p>
                      </div>
                    </div>

                    <div className="row g-3 mb-4">
                      <div className="col-4">
                        <div className="text-center">
                          <h3 className="mb-0 fw-bold">500+</h3>
                          <small>Programs</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="text-center">
                          <h3 className="mb-0 fw-bold">21</h3>
                          <small>Universities</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="text-center">
                          <h3 className="mb-0 fw-bold">50+</h3>
                          <small>Specializations</small>
                        </div>
                      </div>
                    </div>

                    <div className="alert alert-success d-flex align-items-center mb-0">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      <small className="fw-medium">100% Free Admission Support</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}