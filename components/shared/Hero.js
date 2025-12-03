export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 text-center text-lg-start">
            <div className="fade-in">
              <h1 className="hero-title mb-4">
                Online Degrees Made Simple
                <br />
                <span className="text-warning">Apply with Campus Disha</span>
              </h1>
              <p className="hero-subtitle mb-4">
                Authorized partner for 20+ Indian universities. End-to-end admission support,
                counselling & application help for accredited online degree programs.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-4">
                <a href="/universities" className="btn btn-light btn-lg fw-bold">
                  <i className="bi bi-search me-2"></i>
                  Explore Online Degrees
                </a>
                <a href="/contact" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-calendar-check me-2"></i>
                  Book Free Counseling
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="d-flex align-items-center gap-4 flex-wrap">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-success"></i>
                  <span>UGC Approved</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-award-fill text-warning"></i>
                  <span>20+ Universities</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-people-fill text-info"></i>
                  <span>5000+ Students</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-shield-check-fill text-success"></i>
                  <span>100% Free Counseling</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="hero-image slide-in-right">
              <div className="position-relative">
                <div className="bg-white bg-opacity-10 rounded-4 p-4">
                  <div className="text-white text-start">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-mortarboard-fill fs-1 me-3 text-warning"></i>
                      <div>
                        <h5 className="mb-0">Transform Your Career</h5>
                        <p className="mb-0 opacity-75">Online Learning at Your Pace</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <div className="text-center">
                        <h3 className="mb-0">500+</h3>
                        <small>Programs</small>
                      </div>
                      <div className="text-center">
                        <h3 className="mb-0">21</h3>
                        <small>Universities</small>
                      </div>
                      <div className="text-center">
                        <h3 className="mb-0">50+</h3>
                        <small>Specializations</small>
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
  )
}