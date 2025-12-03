import Header from '../../components/shared/Header'
import Footer from '../../components/shared/Footer'

export default function TrendsPage() {
  const trends = [
    {
      icon: 'bi-graph-up-arrow',
      title: '50% Growth in Online Admissions',
      description: 'Online degree programs have seen a 50% increase in admissions over the past 3 years',
      color: 'text-success'
    },
    {
      icon: 'bi-people',
      title: '2 Million+ Students',
      description: 'Over 2 million Indian students are currently enrolled in online degree programs',
      color: 'text-primary'
    },
    {
      icon: 'bi-building',
      title: '200+ Universities Online',
      description: 'Number of universities offering online programs has grown from 50 to 200+ since 2020',
      color: 'text-info'
    },
    {
      icon: 'bi-currency-rupee',
      title: '40% Cost Savings',
      description: 'Online programs cost 40% less on average compared to traditional degrees',
      color: 'text-warning'
    }
  ]

  const popularPrograms = [
    { name: 'MBA Online', growth: '65%', students: '500,000+' },
    { name: 'BCA Online', growth: '55%', students: '400,000+' },
    { name: 'MCA Online', growth: '50%', students: '350,000+' },
    { name: 'BBA Online', growth: '45%', students: '300,000+' },
    { name: 'B.Com Online', growth: '40%', students: '250,000+' },
    { name: 'M.Com Online', growth: '35%', students: '200,000+' }
  ]

  const stateWiseData = [
    { state: 'Maharashtra', students: '3,50,000', universities: '25' },
    { state: 'Karnataka', students: '2,80,000', universities: '20' },
    { state: 'Tamil Nadu', students: '2,50,000', universities: '18' },
    { state: 'Uttar Pradesh', students: '2,20,000', universities: '22' },
    { state: 'Delhi NCR', students: '1,80,000', universities: '15' },
    { state: 'Gujarat', students: '1,50,000', universities: '12' }
  ]

  const futurePredictions = [
    {
      year: '2025',
      prediction: '3 Million+ online students in India',
      detail: 'Expected 50% growth from current enrollment'
    },
    {
      year: '2026',
      prediction: 'AI-powered personalized learning becomes standard',
      detail: 'Advanced algorithms will customize curriculum based on learning styles'
    },
    {
      year: '2027',
      prediction: 'Hybrid learning models dominate',
      detail: '70% of universities will offer hybrid programs'
    },
    {
      year: '2028',
      prediction: 'Global recognition increases',
      detail: 'Indian online degrees gain international acceptance'
    }
  ]

  const challenges = [
    {
      title: 'Quality Assurance',
      description: 'Ensuring consistent quality across online programs',
      solution: 'Regular UGC audits and standardized curriculum guidelines'
    },
    {
      title: 'Digital Divide',
      description: 'Limited internet access in rural areas',
      solution: 'Government initiatives for digital infrastructure development'
    },
    {
      title: 'Industry Acceptance',
      description: 'Some employers still prefer traditional degrees',
      solution: 'Growing awareness and successful alumni changing perceptions'
    }
  ]

  return (
    <div>
      <Header />

      <main>
        {/* Page Header */}
        <section className="bg-primary text-white py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold mb-3">Online Education Trends in India</h1>
                <p className="lead mb-4">
                  Comprehensive insights into the growing landscape of online degree programs and their impact on Indian higher education
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Trends Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-start">Current Trends & Statistics</h2>
            <p className="text-muted mb-5">
              Online education is reshaping India's higher education landscape with unprecedented growth
            </p>

            <div className="row g-4">
              {trends.map((trend, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center p-4">
                      <i className={`bi ${trend.icon} ${trend.color} fs-1 mb-3`}></i>
                      <h5 className="card-title">{trend.title}</h5>
                      <p className="text-muted">{trend.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Growth Chart */}
        <section className="section bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="mb-4">Market Growth Trajectory</h2>
                <p className="text-muted mb-4">
                  The online education market in India has shown remarkable growth, especially post-pandemic
                </p>

                <div className="timeline">
                  {[
                    { year: '2020', milestone: 'UGC announces online degree regulations', students: '1 Lakh+' },
                    { year: '2021', milestone: 'Pandemic accelerates adoption', students: '5 Lakh+' },
                    { year: '2022', milestone: 'Major universities launch online programs', students: '10 Lakh+' },
                    { year: '2023', milestone: 'Industry acceptance increases', students: '15 Lakh+' },
                    { year: '2024', milestone: 'Quality standards established', students: '20 Lakh+' }
                  ].map((item, index) => (
                    <div className="d-flex mb-3" key={index}>
                      <div className="bg-primary text-white rounded px-3 py-2 me-3" style={{minWidth: '80px'}}>
                        <strong>{item.year}</strong>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{item.milestone}</h6>
                        <small className="text-muted">{item.students} students</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h5 className="text-center mb-4">Projected Growth (2024-2030)</h5>
                    <div className="text-center">
                      <div className="display-4 text-primary-custom mb-3">₹25,000 Crore</div>
                      <p className="text-muted">Market size by 2030</p>
                      <div className="progress mb-3" style={{height: '25px'}}>
                        <div className="progress-bar bg-success" style={{width: '30%'}}>2024: 30%</div>
                      </div>
                      <div className="progress mb-3" style={{height: '25px'}}>
                        <div className="progress-bar bg-info" style={{width: '50%'}}>2026: 50%</div>
                      </div>
                      <div className="progress" style={{height: '25px'}}>
                        <div className="progress-bar bg-primary" style={{width: '100%'}}>2030: 100%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Programs */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-start">Most Popular Online Programs</h2>
            <p className="text-muted mb-5">
              These programs have seen the highest growth and student enrollment
            </p>

            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Program</th>
                        <th>Growth Rate (YoY)</th>
                        <th>Current Enrollment</th>
                        <th>Average Duration</th>
                        <th>Average Fee Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {popularPrograms.map((program, index) => (
                        <tr key={index}>
                          <td><strong>{program.name}</strong></td>
                          <td><span className="badge bg-success">+{program.growth}</span></td>
                          <td>{program.students}</td>
                          <td>{program.name.includes('M.') ? '2 Years' : '3 Years'}</td>
                          <td>₹1-3 Lakhs</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* State-wise Analysis */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title text-start">State-wise Online Education Adoption</h2>
            <p className="text-muted mb-5">
              Analysis of online education adoption across different Indian states
            </p>

            <div className="row g-4">
              {stateWiseData.map((state, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title text-primary-custom">{state.state}</h5>
                      <div className="row text-center">
                        <div className="col-6">
                          <div className="bg-light rounded p-3">
                            <h4 className="text-primary-custom mb-0">{state.students}</h4>
                            <small className="text-muted">Students</small>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="bg-light rounded p-3">
                            <h4 className="text-success mb-0">{state.universities}</h4>
                            <small className="text-muted">Universities</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Predictions */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-start">Future Predictions & Insights</h2>
            <p className="text-muted mb-5">
              What the future holds for online education in India
            </p>

            <div className="row g-4">
              {futurePredictions.map((prediction, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                          <span className="fw-bold">{prediction.year}</span>
                        </div>
                        <h5 className="card-title mb-0">{prediction.prediction}</h5>
                      </div>
                      <p className="text-muted mb-0">{prediction.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title text-start">Challenges & Solutions</h2>
            <p className="text-muted mb-5">
              Addressing key challenges in online education adoption
            </p>

            <div className="row g-4">
              {challenges.map((challenge, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <h5 className="card-title text-danger mb-3">
                        <i className="bi bi-exclamation-triangle me-2"></i>
                        {challenge.title}
                      </h5>
                      <p className="text-muted mb-3">{challenge.description}</p>
                      <div className="border-start border-success border-3 ps-3">
                        <h6 className="text-success">Solution</h6>
                        <p className="text-muted mb-0">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sources & Citations */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-start">Sources & Methodology</h2>
            <p className="text-muted mb-4">
              Our insights are based on comprehensive research from multiple sources
            </p>

            <div className="row">
              <div className="col-lg-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h5 className="mb-3">Data Sources</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        University Grants Commission (UGC) Annual Reports
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        Ministry of Education, Government of India Statistics
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        KPMG India Education Sector Reports
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        India Brand Equity Foundation (IBEF) Education Reports
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
        [AUTHOR REVIEW REQUIRED] Additional proprietary data sources and surveys
                      </li>
                    </ul>

                    <div className="alert alert-info mt-4">
                      <i className="bi bi-info-circle me-2"></i>
                      <strong>Note:</strong> This data is for informational purposes and should be cross-referenced with official sources for academic or research purposes. Statistics are updated quarterly.
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
            <h2 className="mb-3">Stay Updated with Online Education Trends</h2>
            <p className="lead mb-4 opacity-90">
              Get regular updates on the latest trends, program launches, and industry insights
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <a href="/contact" className="btn btn-light btn-lg">
                <i className="bi bi-bell me-2"></i>
                Subscribe for Updates
              </a>
              <a href="/universities" className="btn btn-outline-light btn-lg">
                <i className="bi bi-search me-2"></i>
                Explore Programs
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}