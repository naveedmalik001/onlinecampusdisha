import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Hero from '../components/shared/Hero'
import UniversityCard from '../components/shared/UniversityCard'
import universities from '../data/universities.json'

export default function HomePage() {
  // Display first 6 universities on homepage
  const featuredUniversities = universities.slice(0, 6)

  const stats = [
    {
      icon: 'bi-mortarboard-fill',
      number: '500+',
      text: 'Online Programs'
    },
    {
      icon: 'bi-building',
      number: '21',
      text: 'Partner Universities'
    },
    {
      icon: 'bi-people-fill',
      number: '5000+',
      text: 'Students Placed'
    },
    {
      icon: 'bi-award-fill',
      number: '100%',
      text: 'UGC Approved'
    }
  ]

  const howItWorks = [
    {
      step: '1',
      icon: 'bi-search',
      title: 'Explore Programs',
      description: 'Browse through 500+ online degree programs from 21 accredited universities.'
    },
    {
      step: '2',
      icon: 'bi-telephone',
      title: 'Get Counseling',
      description: 'Receive free, personalized guidance from our expert education counselors.'
    },
    {
      step: '3',
      icon: 'bi-check-circle',
      title: 'Apply Successfully',
      description: 'Complete your application with our end-to-end support and secure your admission.'
    }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      program: 'MBA Online',
      university: 'NMIMS',
      text: 'Campus Disha made my online MBA admission process seamless. The counseling was extremely helpful!'
    },
    {
      name: 'Rahul Kumar',
      program: 'BCA Online',
      university: 'Amity',
      text: 'Great support throughout the admission process. They helped me choose the right program and university.'
    },
    {
      name: 'Anjali Patel',
      program: 'MCA Online',
      university: 'SRM',
      text: 'The counselors were very knowledgeable and helped me understand the online education landscape better.'
    }
  ]

  const faqs = [
    {
      question: 'Are online degrees recognized in India?',
      answer: 'Yes, online degrees from UGC-approved universities are valid and recognized at par with regular degrees for government jobs and higher education.'
    },
    {
      question: 'Can I get government jobs with online degrees?',
      answer: 'Absolutely! Online degrees from UGC-entitled universities are valid for all government jobs, competitive exams, and higher education admissions.'
    },
    {
      question: 'What is the admission process for online programs?',
      answer: 'The process typically involves filling out an application form, submitting required documents, and sometimes qualifying through entrance exams or merit-based selection.'
    },
    {
      question: 'Is financial aid available for online degree programs?',
      answer: 'Many universities offer scholarships and education loans for online programs. Our counselors can help you explore financial aid options.'
    }
  ]

  
  return (
    <div>
      <Header />

      <main>
        <Hero />

        {/* Stats Section */}
        <section className="section">
          <div className="container">
            <div className="row g-4">
              {stats.map((stat, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="stats-card">
                    <div className="stats-icon">
                      <i className={`bi ${stat.icon}`}></i>
                    </div>
                    <div className="stats-number">{stat.number}</div>
                    <div className="text-muted">{stat.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Universities Section */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title">Top Partner Universities</h2>
            <p className="section-subtitle">
              Accredited institutions offering quality online education programs
            </p>

            <div className="row">
              {featuredUniversities.map((university) => (
                <UniversityCard
                  key={university.id}
                  university={university}
                />
              ))}
            </div>

            <div className="text-center mt-4">
              <a href="/universities" className="btn btn-primary btn-lg">
                <i className="bi bi-grid-3x3-gap me-2"></i>
                View All Universities
              </a>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Simple three-step process to get started with your online education journey
            </p>

            <div className="row g-4">
              {howItWorks.map((step, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="text-center p-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3" style={{width: '80px', height: '80px'}}>
                      <span className="fw-bold fs-4">{step.step}</span>
                    </div>
                    <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3" style={{width: '60px', height: '60px'}}>
                      <i className={`bi ${step.icon} fs-4 text-primary`}></i>
                    </div>
                    <h4 className="mb-3">{step.title}</h4>
                    <p className="text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Online vs Traditional Section Preview */}
        <section className="section bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="section-title text-start">Online vs Traditional Degrees</h2>
                <p className="text-muted mb-4">
                  Choose the learning format that best fits your lifestyle and career goals
                </p>

                <div className="row g-3">
                  <div className="col-12">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                      <div>
                        <strong>Flexibility:</strong> Study at your own pace, anytime anywhere
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                      <div>
                        <strong>Cost-Effective:</strong> Save on accommodation and transportation
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                      <div>
                        <strong>Equal Recognition:</strong> UGC ensures online degrees have same value as regular degrees
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                      <div>
                        <strong>Work-Study Balance:</strong> Continue working while pursuing education
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <a href="/online-vs-traditional" className="btn btn-outline-primary">
                    <i className="bi bi-arrow-right me-2"></i>
                    Learn Detailed Comparison
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card border-0 shadow-lg">
                  <div className="card-body p-4">
                    <h4 className="mb-3">Quick Comparison</h4>
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <td><strong>Format</strong></td>
                          <td><span className="badge bg-primary">Flexible</span></td>
                          <td><span className="badge bg-secondary">Fixed Schedule</span></td>
                        </tr>
                        <tr>
                          <td><strong>Cost</strong></td>
                          <td className="text-success">Lower</td>
                          <td className="text-warning">Higher</td>
                        </tr>
                        <tr>
                          <td><strong>Validation</strong></td>
                          <td colSpan="2" className="text-center">
                            <i className="bi bi-check-circle-fill text-success"></i> Equal Recognition (UGC)
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Learning Pace</strong></td>
                          <td>Self-paced</td>
                          <td>Structured</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-subtitle">
              Real experiences from students who transformed their careers
            </p>

            <div className="row g-4">
              {testimonials.map((testimonial, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="d-flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill text-warning"></i>
                        ))}
                      </div>
                      <p className="card-text mb-4">"{testimonial.text}"</p>
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                          <i className="bi bi-person-fill"></i>
                        </div>
                        <div>
                          <h6 className="mb-0">{testimonial.name}</h6>
                          <small className="text-muted">
                            {testimonial.program} • {testimonial.university}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Get answers to common questions about online degree programs
            </p>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="accordion" id="faqAccordion">
                  {faqs.map((faq, index) => (
                    <div className="accordion-item border-0 shadow-sm mb-3" key={index}>
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq${index}`}
                          aria-expanded={index === 0}
                          aria-controls={`faq${index}`}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        id={`faq${index}`}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-4">
                  <a href="/faq" className="btn btn-outline-primary">
                    <i className="bi bi-question-circle me-2"></i>
                    View All FAQs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-white">
          <div className="container text-center">
            <h2 className="mb-3">Ready to Start Your Online Education Journey?</h2>
            <p className="lead mb-4 opacity-90">
              Get free counseling and explore 500+ online degree programs
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <a href="/contact" className="btn btn-light btn-lg">
                <i className="bi bi-calendar-check me-2"></i>
                Book Free Counseling
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