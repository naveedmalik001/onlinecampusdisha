import Header from '../../../components/shared/Header'
import Footer from '../../../components/shared/Footer'
import universities from '../../../data/universities.json'

// Generate static params for all universities
export async function generateStaticParams() {
  return universities.map((university) => ({
    slug: university.slug,
  }))
}

// Generate metadata for each university page
export async function generateMetadata({ params }) {
  const university = universities.find(u => u.slug === params.slug)

  if (!university) {
    return {
      title: 'University Not Found',
    }
  }

  return {
    title: `${university.name} - Online Programs | Campus Disha`,
    description: `Explore ${university.name} online degree programs. ${university.description} Apply through Campus Disha for expert admission support.`,
    openGraph: {
      title: `${university.name} - Online Programs`,
      description: university.description,
      type: 'website',
    },
  }
}

export default function UniversityDetailPage({ params }) {
  const university = universities.find(u => u.slug === params.slug)

  if (!university) {
    return (
      <div>
        <Header />
        <main className="py-5">
          <div className="container text-center">
            <h1 className="mb-4">University Not Found</h1>
            <p className="mb-4">The university you're looking for doesn't exist in our database.</p>
            <a href="/universities" className="btn btn-primary">
              <i className="bi bi-arrow-left me-2"></i>
              Back to Universities
            </a>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const programCategories = {
    'Management': ['MBA', 'BBA', 'PGDM'],
    'Computer Applications': ['MCA', 'BCA'],
    'Commerce': ['M.Com', 'B.Com'],
    'Arts & Humanities': ['M.A', 'B.A'],
    'Science': ['M.Sc', 'B.Sc'],
    'Engineering': ['B.Tech', 'M.Tech'],
    'Health Sciences': ['MHA', 'BHA', 'B.Pharma'],
    'Others': []
  }

  const categorizePrograms = (programs) => {
    const categorized = {}
    const uncategorized = []

    Object.keys(programCategories).forEach(category => {
      categorized[category] = programs.filter(program =>
        programCategories[category].some(catProgram =>
          program.toLowerCase().includes(catProgram.toLowerCase()) ||
          catProgram.toLowerCase().includes(program.toLowerCase())
        )
      )
    })

    // Find uncategorized programs
    programs.forEach(program => {
      const isCategorized = Object.values(categorized).some(categoryPrograms =>
        categoryPrograms.includes(program)
      )
      if (!isCategorized) {
        uncategorized.push(program)
      }
    })

    categorized['Others'] = uncategorized
    return categorized
  }

  const categorizedPrograms = categorizePrograms(university.programs)

  const faqs = [
    {
      question: `Is ${university.name} UGC approved?`,
      answer: `Yes, ${university.name} is UGC approved and all online degrees offered are recognized at par with regular degrees.`
    },
    {
      question: `What is the admission process for ${university.name} online programs?`,
      answer: `The admission process typically includes filling out an application form, submitting required documents (educational certificates, ID proof), and qualifying through merit or entrance exam depending on the program.`
    },
    {
      question: `Can I apply for government jobs with degrees from ${university.name}?`,
      answer: `Absolutely! Since ${university.name} is UGC approved, degrees earned through online programs are valid for all government jobs and competitive exams.`
    },
    {
      question: `What is the duration of online programs at ${university.name}?`,
      answer: `Most undergraduate programs are 3 years and postgraduate programs are 2 years. However, duration may vary based on the specific program and university regulations.`
    },
    {
      question: `Is there any placement support available?`,
      answer: `Yes, ${university.name} provides placement assistance through job portals, career counseling, and recruitment drives. Campus Disha also provides additional career support.`
    }
  ]

  return (
    <div>
      <Header />

      <main>
        {/* University Header */}
        <section className="bg-primary text-white py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/" className="text-white">Home</a></li>
                    <li className="breadcrumb-item"><a href="/universities" className="text-white">Universities</a></li>
                    <li className="breadcrumb-item active text-white">{university.name}</li>
                  </ol>
                </nav>
                <h1 className="display-5 fw-bold mb-3">{university.name}</h1>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="badge bg-success">
                    <i className="bi bi-check-circle me-1"></i>
                    UGC Approved
                  </span>
                  {university.established && (
                    <span className="badge bg-light text-dark">
                      <i className="bi bi-building me-1"></i>
                      Est. {university.established}
                    </span>
                  )}
                </div>
                <p className="lead mb-0">
                  <i className="bi bi-geo-alt me-2"></i>
                  {university.location}
                </p>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                <a
                  href={`/apply-redirect?uni=${university.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light btn-lg"
                >
                  <i className="bi bi-box-arrow-up-right me-2"></i>
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About University */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="mb-4">About {university.name}</h2>
                <p className="lead">{university.description}</p>

                <div className="row g-4 mt-4">
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center">
                        <i className="bi bi-mortarboard-fill text-primary fs-1 mb-3"></i>
                        <h5>500+</h5>
                        <p className="text-muted mb-0">Programs Available</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center">
                        <i className="bi bi-people-fill text-success fs-1 mb-3"></i>
                        <h5>50,000+</h5>
                        <p className="text-muted mb-0">Alumni Network</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="mb-4">Quick Facts</h5>
                    <ul className="list-unstyled">
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>UGC Entitled Programs</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>NAAC Accredited</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Industry-Ready Curriculum</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Placement Assistance</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Flexible Learning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title text-start">Available Programs</h2>
            <p className="text-muted mb-4">
              Explore our wide range of online degree programs designed for working professionals and students
            </p>

            {Object.entries(categorizedPrograms).map(([category, programs]) => (
              programs.length > 0 && (
                <div key={category} className="mb-5">
                  <h4 className="mb-3">{category}</h4>
                  <div className="row">
                    {programs.map((program) => (
                      <div className="col-lg-3 col-md-6 mb-3" key={program}>
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body">
                            <h5 className="card-title text-primary-custom">{program}</h5>
                            <p className="text-muted small mb-3">
                              Duration: {program.includes('B.') ? '3 Years' : program.includes('M.') ? '2 Years' : '2-4 Years'}
                            </p>
                            <a
                              href={`/apply-redirect?uni=${university.slug}&program=${encodeURIComponent(program)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary btn-sm w-100"
                            >
                              Apply for {program}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-start">Why Choose {university.name}?</h2>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <i className="bi bi-mortarboard-fill text-primary fs-4 me-3"></i>
                  <div>
                    <h5>Quality Education</h5>
                    <p className="text-muted">Learn from experienced faculty with industry-relevant curriculum designed to enhance your career prospects.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <i className="bi bi-laptop text-primary fs-4 me-3"></i>
                  <div>
                    <h5>Flexible Learning</h5>
                    <p className="text-muted">Study at your own pace with 24/7 access to learning materials and recorded lectures.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <i className="bi bi-shield-check text-primary fs-4 me-3"></i>
                  <div>
                    <h5>UGC Recognized</h5>
                    <p className="text-muted">All online programs are UGC approved and have equal recognition as regular degrees.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex align-items-start">
                  <i className="bi bi-briefcase text-primary fs-4 me-3"></i>
                  <div>
                    <h5>Career Support</h5>
                    <p className="text-muted">Access placement assistance, career counseling, and networking opportunities with alumni.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title text-start">Frequently Asked Questions</h2>

            <div className="row">
              <div className="col-lg-8">
                <div className="accordion" id="universityFaqAccordion">
                  {faqs.map((faq, index) => (
                    <div className="accordion-item border-0 shadow-sm mb-3" key={index}>
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#universityFaq${index}`}
                          aria-expanded={index === 0}
                          aria-controls={`universityFaq${index}`}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        id={`universityFaq${index}`}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        data-bs-parent="#universityFaqAccordion"
                      >
                        <div className="accordion-body">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-white">
          <div className="container text-center">
            <h2 className="mb-3">Ready to Apply to {university.name}?</h2>
            <p className="lead mb-4 opacity-90">
              Take the first step towards your educational journey with expert guidance
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <a
                href={`/apply-redirect?uni=${university.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light btn-lg"
              >
                <i className="bi bi-box-arrow-up-right me-2"></i>
                Apply Now
              </a>
              <a href="/contact" className="btn btn-outline-light btn-lg">
                <i className="bi bi-telephone me-2"></i>
                Get Counseling
              </a>
              <a href="/universities" className="btn btn-outline-light btn-lg">
                <i className="bi bi-arrow-left me-2"></i>
                Back to Universities
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}