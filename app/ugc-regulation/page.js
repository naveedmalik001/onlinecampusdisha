import Header from '../../components/shared/Header'
import Footer from '../../components/shared/Footer'

export default function UGCRegulationPage() {
  const regulations = [
    {
      year: '2020',
      title: 'University Grants Commission (Online Courses) Regulations, 2020',
      description: 'First comprehensive framework for online degree programs in India',
      keyPoints: [
        'Universities can offer online programs without prior UGC approval',
        'Degrees offered online are equivalent to regular degrees',
        'No geographical restrictions for admission',
        'Minimum 80% of content should be online',
        'Proctored examinations mandatory'
      ]
    },
    {
      year: '2021',
      title: 'Amendment to UGC (Online Courses) Regulations',
      description: 'Further clarification and expanded scope for online education',
      keyPoints: [
        'Allowed multiple entry and exit options',
        'Recognition of online degrees for government jobs',
        'Relaxed eligibility criteria for universities',
        'Introduction of Open and Distance Learning (ODL) integration'
      ]
    },
    {
      year: '2022',
      title: 'Quality Assurance Framework',
      description: 'Enhanced quality standards and accreditation requirements',
      keyPoints: [
        'Mandatory NAAC accreditation for universities',
        'Minimum 2 years of existence required',
        'Annual quality audits and reporting',
        'Student feedback mechanisms implemented'
      ]
    },
    {
      year: '2023',
      title: 'UGC (Credit Framework for Online Learning Courses) Guidelines',
      description: 'Standardization of credit system for online programs',
      keyPoints: [
        'Credit transfer facility between programs',
        'Recognition of MOOCs and micro-credentials',
        'Lifelong learning credits introduced',
        'Industry-integrated course credits allowed'
      ]
    }
  ]

  const eligibilityCriteria = {
    university: [
      {
        requirement: 'NAAC Accreditation',
        details: 'Minimum 3.01 CGPA required'
      },
      {
        requirement: 'Experience',
        details: 'At least 5 years of existence'
      },
      {
        requirement: 'Track Record',
        details: 'Good academic and administrative record'
      },
      {
        requirement: 'Infrastructure',
        details: 'Adequate IT infrastructure and LMS'
      }
    ],
    programs: [
      {
        requirement: 'Approval',
        details: 'Program must be approved by statutory bodies (AICTE, etc.)'
      },
      {
        requirement: 'Format',
        details: 'Cannot be programs requiring practical/lab work'
      },
      {
        requirement: 'Content',
        details: 'Minimum 80% content delivery must be online'
      },
      {
        requirement: 'Duration',
        details: 'Same duration as regular programs'
      }
    ]
  }

  const benefits = [
    {
      icon: 'bi-award-fill',
      title: 'Equal Recognition',
      description: 'Online degrees are equivalent to regular degrees for all purposes'
    },
    {
      icon: 'bi-briefcase-fill',
      title: 'Government Job Eligibility',
      description: 'Valid for all central and state government jobs'
    },
    {
      icon: 'bi-arrow-up-circle-fill',
      title: 'Higher Education',
      description: 'Accepted for admission to postgraduate and Ph.D. programs'
    },
    {
      icon: 'bi-globe',
      title: 'National Acceptance',
      description: 'Recognized across all states and territories in India'
    }
  ]

  const faqs = [
    {
      question: 'Are online degrees from UGC-approved universities valid?',
      answer: 'Yes, absolutely! Online degrees from UGC-approved universities are 100% valid and equivalent to regular degrees. They are recognized by government agencies, employers, and other educational institutions.'
    },
    {
      question: 'Can I apply for government jobs with an online degree?',
      answer: 'Yes, online degrees from UGC-approved universities are valid for all government jobs, including UPSC, State PSC, banking, and public sector undertakings. They have the same weightage as regular degrees.'
    },
    {
      question: 'Do online degrees mention "online" on the certificate?',
      answer: 'No, the degree certificate does not mention "online" mode of study. It\'s identical to the regular degree certificate from the same university, ensuring no discrimination in the job market.'
    },
    {
      question: 'What is the difference between online and distance education?',
      answer: 'Online education requires regular online classes and interactions, while distance education is primarily self-study based. Online programs offer more structured learning, live classes, and better faculty interaction.'
    },
    {
      question: 'How can I verify if a university is UGC-approved for online programs?',
      answer: 'You can check the UGC website\'s list of approved universities offering online programs, or contact our counselors who maintain updated lists of all approved programs and universities.'
    }
  ]

  const complianceChecklist = [
    'University has NAAC accreditation with minimum 3.01 CGPA',
    'University exists for at least 5 years',
    'Program is approved by relevant statutory bodies',
    'University has robust IT infrastructure and LMS',
    'Minimum 80% content delivery is online',
    'Proctored examination system in place',
    'Qualified faculty with online teaching training',
    'Student support services and grievance redressal mechanism',
    'Regular quality audits and feedback systems'
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
                <h1 className="display-4 fw-bold mb-3">UGC Regulations & Accreditation</h1>
                <p className="lead mb-4">
                  Understanding the regulatory framework that ensures quality and recognition of online degree programs in India
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Regulations */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-center">Evolution of UGC Online Education Regulations</h2>
            <p className="section-subtitle text-center">
              Timeline of key regulatory developments in online education
            </p>

            <div className="row g-4">
              {regulations.map((regulation, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                          <span className="fw-bold">{regulation.year}</span>
                        </div>
                        <h5 className="card-title mb-0">{regulation.title}</h5>
                      </div>
                      <p className="text-muted mb-3">{regulation.description}</p>
                      <h6 className="text-primary-custom mb-2">Key Highlights:</h6>
                      <ul className="list-unstyled">
                        {regulation.keyPoints.map((point, i) => (
                          <li key={i} className="mb-2">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title text-center">Eligibility Criteria for Online Programs</h2>

            <div className="row g-4">
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="card-title text-primary-custom mb-4">
                      <i className="bi bi-building me-2"></i>
                      University Requirements
                    </h3>
                    {eligibilityCriteria.university.map((criteria, index) => (
                      <div className="d-flex align-items-start mb-3" key={index}>
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '30px', height: '30px'}}>
                          <i className="bi bi-check fs-6"></i>
                        </div>
                        <div>
                          <h6 className="mb-1">{criteria.requirement}</h6>
                          <p className="text-muted mb-0 small">{criteria.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="card-title text-success mb-4">
                      <i className="bi bi-book me-2"></i>
                      Program Requirements
                    </h3>
                    {eligibilityCriteria.programs.map((criteria, index) => (
                      <div className="d-flex align-items-start mb-3" key={index}>
                        <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '30px', height: '30px'}}>
                          <i className="bi bi-check fs-6"></i>
                        </div>
                        <div>
                          <h6 className="mb-1">{criteria.requirement}</h6>
                          <p className="text-muted mb-0 small">{criteria.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of UGC Approval */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-center">Benefits of UGC-Approved Online Degrees</h2>
            <p className="section-subtitle text-center">
              Why UGC approval matters for your career and education
            </p>

            <div className="row g-4">
              {benefits.map((benefit, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="card border-0 shadow-sm text-center h-100">
                    <div className="card-body p-4">
                      <i className={`${benefit.icon} text-primary fs-1 mb-3`}></i>
                      <h5 className="card-title">{benefit.title}</h5>
                      <p className="text-muted">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Checklist */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title text-center">UGC Compliance Checklist</h2>
            <p className="section-subtitle text-center">
              How to verify if a university and program comply with UGC regulations
            </p>

            <div className="row">
              <div className="col-lg-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h4 className="mb-4">
                      <i className="bi bi-clipboard-check me-2"></i>
                      Before Enrolling, Verify:
                    </h4>

                    <div className="row">
                      {complianceChecklist.map((item, index) => (
                        <div className="col-md-6 col-lg-4 mb-3" key={index}>
                          <div className="d-flex align-items-start">
                            <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                            <span>{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="alert alert-warning mt-4">
                      <i className="bi bi-exclamation-triangle me-2"></i>
                      <strong>Important:</strong> Always verify the UGC approval status before enrolling. Our counselors can help you verify the credentials of any university or program.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-center">Quality Assurance Mechanisms</h2>

            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-eye text-primary display-4 mb-3"></i>
                    <h5 className="card-title">Regular Audits</h5>
                    <p className="text-muted">
                      UGC conducts regular audits to ensure quality standards are maintained in online programs
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-star text-success display-4 mb-3"></i>
                    <h5 className="card-title">Student Feedback</h5>
                    <p className="text-muted">
                      Mandatory student feedback systems help maintain and improve program quality
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-award text-warning display-4 mb-3"></i>
                    <h5 className="card-title">Accreditation</h5>
                    <p className="text-muted">
                      NAAC and NBA accreditation ensure adherence to quality standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Framework */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title text-center">Legal Framework & Notifications</h2>

            <div className="row">
              <div className="col-lg-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h4 className="mb-4">Key Legal References</h4>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="table-light">
                          <tr>
                            <th>Document</th>
                            <th>Date</th>
                            <th>Key Highlights</th>
                            <th>Download Link</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>UGC (Online Courses) Regulations</strong></td>
                            <td>September 4, 2020</td>
                            <td>Framework for online degree programs</td>
                            <td><a href="#" className="btn btn-sm btn-outline-primary">Download</a></td>
                          </tr>
                          <tr>
                            <td><strong>UGC (Credit Framework) Guidelines</strong></td>
                            <td>July 11, 2023</td>
                            <td>Credit transfer and recognition</td>
                            <td><a href="#" className="btn btn-sm btn-outline-primary">Download</a></td>
                          </tr>
                          <tr>
                            <td><strong>Online Education Policy</strong></td>
                            <td>2020</td>
                            <td>National policy for digital learning</td>
                            <td><a href="#" className="btn btn-sm btn-outline-primary">Download</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="alert alert-info mt-4">
                      <i className="bi bi-info-circle me-2"></i>
                      <strong>[AUTHOR REVIEW REQUIRED]</strong> The information provided here is for general guidance. Please refer to official UGC notifications for the most accurate and up-to-date information.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
            <p className="section-subtitle text-center">
              Get answers to common questions about UGC regulations
            </p>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="accordion" id="ugcFaqAccordion">
                  {faqs.map((faq, index) => (
                    <div className="accordion-item border-0 shadow-sm mb-3" key={index}>
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#ugcFaq${index}`}
                          aria-expanded={index === 0}
                          aria-controls={`ugcFaq${index}`}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        id={`ugcFaq${index}`}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        data-bs-parent="#ugcFaqAccordion"
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
            <h2 className="mb-3">Need Help Understanding UGC Regulations?</h2>
            <p className="lead mb-4 opacity-90">
              Our expert counselors can help you verify university credentials and make informed decisions
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <a href="/contact" className="btn btn-light btn-lg">
                <i className="bi bi-telephone me-2"></i>
                Talk to UGC Expert
              </a>
              <a href="/universities" className="btn btn-outline-light btn-lg">
                <i className="bi bi-search me-2"></i>
                Browse UGC-Approved Universities
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}