import Header from '../../components/shared/Header'
import Footer from '../../components/shared/Footer'

export default function FAQPage() {
  const faqCategories = [
    {
      name: 'Online Education',
      faqs: [
        {
          question: 'Are online degrees valid in India?',
          answer: 'Yes, online degrees from UGC-approved universities are 100% valid and equivalent to regular degrees for all purposes including jobs and higher education.'
        },
        {
          question: 'What is the difference between online and distance education?',
          answer: 'Online education involves regular live classes, interactive sessions, and requires active participation. Distance education is primarily self-study based with minimal interaction.'
        },
        {
          question: 'Can I pursue online education while working?',
          answer: 'Absolutely! Online education is designed for working professionals, offering flexible schedules that allow you to balance work and studies.'
        },
        {
          question: 'How much do online degree programs cost?',
          answer: 'Online programs typically cost 40-60% less than traditional programs, ranging from ₹1-3 lakhs depending on the university and program.'
        }
      ]
    },
    {
      name: 'Admissions & Eligibility',
      faqs: [
        {
          question: 'What are the eligibility criteria for online MBA?',
          answer: 'Generally, you need a bachelor\'s degree with 50% marks. Some universities may require work experience or entrance exam scores.'
        },
        {
          question: 'Is there an entrance exam for online programs?',
          answer: 'Most online programs offer direct admission based on merit, but some top universities may conduct entrance exams or consider scores from CAT, MAT, etc.'
        },
        {
          question: 'Can I get admission if I have gap years in education?',
          answer: 'Yes, gap years are generally not a problem for online programs. The focus is on your overall academic performance and eligibility.'
        },
        {
          question: 'What documents are required for admission?',
          answer: 'Typically, you need 10th, 12th, and graduation certificates, ID proof, passport-size photos, and address proof.'
        }
      ]
    },
    {
      name: 'UGC & Recognition',
      faqs: [
        {
          question: 'Do online degrees mention "online" on the certificate?',
          answer: 'No, the degree certificate does not mention the mode of study. It\'s identical to regular degrees from the same university.'
        },
        {
          question: 'Can I apply for government jobs with online degrees?',
          answer: 'Yes, online degrees from UGC-approved universities are valid for all government jobs, including UPSC, State PSC, and banking exams.'
        },
        {
          question: 'Are online degrees recognized abroad?',
          answer: 'Many countries recognize Indian online degrees, but it\'s advisable to check specific requirements for foreign education or jobs.'
        },
        {
          question: 'How do I verify if a university is UGC-approved?',
          answer: 'You can check the UGC website\'s list of approved universities or consult our counselors who maintain updated information.'
        }
      ]
    },
    {
      name: 'Career & Placements',
      faqs: [
        {
          question: 'Do online programs offer placement assistance?',
          answer: 'Most universities provide placement assistance through online job portals, virtual career fairs, and alumni networks.'
        },
        {
          question: 'What is the average salary after online MBA?',
          answer: 'Salaries vary based on experience, industry, and location. Online MBA graduates can expect 30-50% salary hikes on average.'
        },
        {
          question: 'Do companies prefer regular degrees over online degrees?',
          answer: 'With UGC approval and growing acceptance, most companies now value online degrees equally, especially if accompanied by relevant experience.'
        },
        {
          question: 'Can I switch careers with an online degree?',
          answer: 'Yes, online degrees help you acquire new skills and qualifications needed for career transitions, especially when combined with relevant experience.'
        }
      ]
    }
  ]

  const additionalQuestions = [
    'What is the duration of online degree programs?',
    'Are there any scholarships available for online programs?',
    'How are examinations conducted for online programs?',
    'Can I transfer credits from one university to another?',
    'What technical requirements are needed for online learning?',
    'Is there any age limit for online degree programs?'
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
                <h1 className="display-4 fw-bold mb-3">Frequently Asked Questions</h1>
                <p className="lead mb-4">
                  Get answers to common questions about online education, admissions, UGC regulations, and career prospects
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Search */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h4 className="mb-3">Quick Question Search</h4>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type your question here..."
                      />
                      <button className="btn btn-primary" type="button">
                        <i className="bi bi-search"></i>
                      </button>
                    </div>
                    <div className="mt-3">
                      <small className="text-muted">Popular searches: </small>
                      {additionalQuestions.slice(0, 3).map((question, index) => (
                        <a key={index} href="#" className="badge bg-light text-dark me-2 mb-2 text-decoration-none">
                          {question}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title text-center">Browse by Category</h2>

            <div className="row g-4">
              {faqCategories.map((category, categoryIndex) => (
                <div className="col-lg-12" key={categoryIndex}>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="card-title text-primary-custom mb-4">
                        <i className="bi bi-question-circle me-2"></i>
                        {category.name}
                      </h3>

                      <div className="accordion" id={`faqAccordion${categoryIndex}`}>
                        {category.faqs.map((faq, faqIndex) => (
                          <div className="accordion-item border-0 shadow-sm mb-3" key={faqIndex}>
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#faq${categoryIndex}-${faqIndex}`}
                                aria-expanded={faqIndex === 0}
                                aria-controls={`faq${categoryIndex}-${faqIndex}`}
                              >
                                {faq.question}
                              </button>
                            </h2>
                            <div
                              id={`faq${categoryIndex}-${faqIndex}`}
                              className={`accordion-collapse collapse ${faqIndex === 0 ? 'show' : ''}`}
                              data-bs-parent={`#faqAccordion${categoryIndex}`}
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
              ))}
            </div>
          </div>
        </section>

        {/* Additional Questions */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-center">Other Common Questions</h2>

            <div className="row">
              <div className="col-lg-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="row">
                      {additionalQuestions.map((question, index) => (
                        <div className="col-md-6 mb-3" key={index}>
                          <div className="border rounded p-3">
                            <h6 className="mb-2">
                              <i className="bi bi-question-circle text-primary me-2"></i>
                              {question}
                            </h6>
                            <a href="/contact" className="btn btn-sm btn-outline-primary">
                              Get Answer
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="section bg-primary text-white">
          <div className="container text-center">
            <h2 className="mb-3">Still Have Questions?</h2>
            <p className="lead mb-4 opacity-90">
              Can't find the answer you're looking for? Our expert counselors are here to help
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <a href="/contact" className="btn btn-light btn-lg">
                <i className="bi bi-telephone me-2"></i>
                Talk to Counselor
              </a>
              <a href="mailto:info@campusdisha.com" className="btn btn-outline-light btn-lg">
                <i className="bi bi-envelope me-2"></i>
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}