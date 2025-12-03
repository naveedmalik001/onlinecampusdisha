'use client'

import { useState } from 'react'
import Header from '../../components/shared/Header'
import Footer from '../../components/shared/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    university: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const universities = [
    'NMIMS Online',
    'SRM Online',
    'Parul Online',
    'DPU Mumbai',
    'Galgotias Online',
    'UPES Online',
    'VGU Online',
    'Andhra University Online',
    'MAHE Online',
    'Sikkim Manipal University Online',
    'Other'
  ]

  const programs = [
    'MBA',
    'BBA',
    'MCA',
    'BCA',
    'M.Com',
    'B.Com',
    'B.Sc',
    'M.Sc',
    'B.A',
    'M.A',
    'B.Tech',
    'M.Tech',
    'Other'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for contacting us! Our team will get back to you within 24 hours.'
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          program: '',
          university: '',
          message: ''
        })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error submitting your form. Please try again or call us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: 'bi-telephone-fill',
      title: 'Phone Support',
      content: '+91 8XXXXXXXXX',
      subtext: 'Mon-Sat: 9:00 AM - 6:00 PM'
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email Support',
      content: 'info@campusdisha.com',
      subtext: 'We respond within 24 hours'
    },
    {
      icon: bi-geo-alt-fill,
      title: 'Office Address',
      content: 'Delhi, India',
      subtext: 'By appointment only'
    }
  ]

  const faqs = [
    {
      question: 'Is your counseling service really free?',
      answer: 'Yes, we provide completely free counseling to help you choose the right university and program. Our revenue comes from university partnerships, not from students.'
    },
    {
      question: 'How long does the admission process take?',
      answer: 'The admission process typically takes 2-4 weeks from application submission to final admission confirmation, depending on the university and program.'
    },
    {
      question: 'Do you help with loan applications?',
      answer: 'Yes, we assist students with education loan applications and provide information about available scholarships and financial aid options.'
    },
    {
      question: 'Can I apply to multiple universities through you?',
      answer: 'Absolutely! We encourage students to apply to multiple universities to increase their chances of admission and find the best fit.'
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
                <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
                <p className="lead mb-4">
                  Get in touch with our expert education counselors for free guidance on online degree programs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="mb-4">Book Your Free Counseling Session</h2>
                <p className="text-muted mb-4">
                  Fill out the form below and our expert counselors will contact you within 24 hours
                </p>

                {submitStatus && (
                  <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-semibold">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                      <div className="invalid-feedback">
                        Please enter your name
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-semibold">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email address
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label fw-semibold">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 98765 43210"
                        pattern="[0-9]{10}"
                      />
                      <div className="invalid-feedback">
                        Please enter a valid 10-digit phone number
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="university" className="form-label fw-semibold">
                        Preferred University
                      </label>
                      <select
                        className="form-select"
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleInputChange}
                      >
                        <option value="">Select University</option>
                        {universities.map(uni => (
                          <option key={uni} value={uni}>{uni}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="program" className="form-label fw-semibold">
                        Interested Program
                      </label>
                      <select
                        className="form-select"
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Program</option>
                        {programs.map(program => (
                          <option key={program} value={program}>{program}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-semibold">
                        Message / Query
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your educational goals and any specific questions you have..."
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="consent"
                          required
                        />
                        <label className="form-check-label" htmlFor="consent">
                          I agree to be contacted by Campus Disha for educational counseling and updates
                        </label>
                        <div className="invalid-feedback">
                          You must agree to be contacted
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send me-2"></i>
                            Submit Request
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h5 className="mb-4">Quick Contact</h5>
                    {contactInfo.map((info, index) => (
                      <div className="d-flex align-items-start mb-4" key={index}>
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                          <i className={`bi ${info.icon}`}></i>
                        </div>
                        <div>
                          <h6 className="mb-1">{info.title}</h6>
                          <p className="mb-1 fw-bold">{info.content}</p>
                          <small className="text-muted">{info.subtext}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h5 className="mb-3">Why Choose Campus Disha?</h5>
                    <ul className="list-unstyled">
                      <li className="d-flex align-items-start mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>100% Free Counseling</span>
                      </li>
                      <li className="d-flex align-items-start mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>Expert Guidance</span>
                      </li>
                      <li className="d-flex align-items-start mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>21+ Partner Universities</span>
                      </li>
                      <li className="d-flex align-items-start mb-3">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>End-to-End Support</span>
                      </li>
                      <li className="d-flex align-items-start">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span>Trusted by 5000+ Students</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours Section */}
        <section className="section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <h4 className="mb-3">
                          <i className="bi bi-clock me-2"></i>
                          Office Hours & Response Times
                        </h4>
                        <div className="row">
                          <div className="col-md-6">
                            <h6>Phone Support</h6>
                            <p className="text-muted mb-3">
                              Monday - Saturday: 9:00 AM - 6:00 PM<br />
                              Sunday: Closed
                            </p>
                          </div>
                          <div className="col-md-6">
                            <h6>Email & WhatsApp</h6>
                            <p className="text-muted mb-0">
                              Response Time: Within 24 hours<br />
                              Urgent Queries: Call us directly
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 text-center">
                        <div className="bg-primary text-white rounded-3 p-3">
                          <i className="bi bi-telephone-fill display-4 mb-2"></i>
                          <h5>Emergency Support</h5>
                          <p className="mb-0">For urgent admission queries</p>
                          <a href="tel:+918XXXXXXXXX" className="btn btn-light mt-2">
                            <i className="bi bi-telephone me-2"></i>
                            Call Now
                          </a>
                        </div>
                      </div>
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
              Get answers to common questions about our services
            </p>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="accordion" id="contactFaqAccordion">
                  {faqs.map((faq, index) => (
                    <div className="accordion-item border-0 shadow-sm mb-3" key={index}>
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#contactFaq${index}`}
                          aria-expanded={index === 0}
                          aria-controls={`contactFaq${index}`}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        id={`contactFaq${index}`}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        data-bs-parent="#contactFaqAccordion"
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
      </main>

      <Footer />
    </div>
  )
}