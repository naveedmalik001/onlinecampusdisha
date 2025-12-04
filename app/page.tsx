import Link from 'next/link'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Hero from '../components/shared/Hero'
import UniversityCard from '../components/shared/UniversityCard'
import TopPartnerUniversities from '../components/sections/TopPartnerUniversities'
import OnlineVsTraditional from '../components/sections/OnlineVsTraditional'
import FAQs from '../components/sections/FAQs'
import universities from '../data/universities.json'

// Type definitions for universities
interface University {
  id: number
  name: string
  slug: string
  location: string
  landing?: string
  established?: string
  description: string
  programs: string[]
  accredited: boolean
  rating?: number
  image_url?: string
}

export default function HomePage() {
  // Display first 6 universities on homepage
  const featuredUniversities: University[] = (universities as University[]).slice(0, 6)

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
        <TopPartnerUniversities universities={universities} />

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

        {/* Online vs Traditional Section */}
        <OnlineVsTraditional />

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
        <FAQs />

        {/* CTA Section */}
        <section className="section bg-primary text-white">
          <div className="container text-center">
            <h2 className="mb-3">Ready to Start Your Online Education Journey?</h2>
            <p className="lead mb-4 opacity-90">
              Get free counseling and explore 500+ online degree programs
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link href="/contact" className="btn btn-light btn-lg">
                <i className="bi bi-calendar-check me-2"></i>
                Book Free Counseling
              </Link>
              <Link href="/universities" className="btn btn-outline-light btn-lg">
                <i className="bi bi-search me-2"></i>
                Explore Programs
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}