import Link from 'next/link'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Hero from '../components/shared/Hero'
import UniversityCard from '../components/shared/UniversityCard'
import TopPartnerUniversities from '../components/sections/TopPartnerUniversities'
import OnlineVsTraditional from '../components/sections/OnlineVsTraditional'
import FAQs from '../components/sections/FAQs'
import universities from '../data/universities.json'
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
  TrophyIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
  StarIcon
} from '@heroicons/react/24/solid'

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
      Icon: AcademicCapIcon,
      number: '500+',
      text: 'Online Programs'
    },
    {
      Icon: BuildingLibraryIcon,
      number: '21',
      text: 'Partner Universities'
    },
    {
      Icon: UserGroupIcon,
      number: '5000+',
      text: 'Students Placed'
    },
    {
      Icon: TrophyIcon,
      number: '100%',
      text: 'UGC Approved'
    }
  ]

  const howItWorks = [
    {
      step: '1',
      Icon: MagnifyingGlassIcon,
      title: 'Explore Programs',
      description: 'Browse through 500+ online degree programs from 21 accredited universities.'
    },
    {
      step: '2',
      Icon: PhoneIcon,
      title: 'Get Counseling',
      description: 'Receive free, personalized guidance from our expert education counselors.'
    },
    {
      step: '3',
      Icon: CheckCircleIcon,
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
                  <div className="stats-card scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="stats-icon">
                      <stat.Icon style={{ width: '48px', height: '48px' }} />
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
        <section className="section" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
          <div className="container">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">
              Simple three-step process to get started with your online education journey
            </p>

            <div className="row g-4">
              {howItWorks.map((step, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="text-center p-4 slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                    <div className="position-relative d-inline-block mb-4">
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style={{
                          width: '80px',
                          height: '80px',
                          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                          boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                        }}
                      >
                        <span className="fw-bold fs-3 text-white">{step.step}</span>
                      </div>
                      <div
                        className="position-absolute top-50 start-50 translate-middle"
                        style={{
                          width: '100px',
                          height: '100px',
                          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                          opacity: 0.2,
                          borderRadius: '50%',
                          filter: 'blur(20px)',
                          zIndex: -1
                        }}
                      />
                    </div>
                    <div
                      className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-3"
                      style={{ width: '70px', height: '70px' }}
                    >
                      <step.Icon className="text-primary" style={{ width: '36px', height: '36px' }} />
                    </div>
                    <h4 className="mb-3 fw-bold">{step.title}</h4>
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
                  <div className="testimonial-card h-100 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="d-flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="text-warning" style={{ width: '20px', height: '20px' }} />
                      ))}
                    </div>
                    <p className="mb-4" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>"{testimonial.text}"</p>
                    <div className="d-flex align-items-center mt-auto">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: '50px',
                          height: '50px',
                          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                        }}
                      >
                        <span className="text-white fw-bold fs-5">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                        <small className="text-muted">
                          {testimonial.program} • {testimonial.university}
                        </small>
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
        <section
          className="section text-white"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              opacity: 0.3
            }}
          />
          <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="mb-3 fw-bold" style={{ fontSize: '2.5rem' }}>Ready to Start Your Online Education Journey?</h2>
            <p className="lead mb-4 opacity-90">
              Get free counseling and explore 500+ online degree programs
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link href="/contact" className="btn btn-light btn-lg d-flex align-items-center justify-content-center">
                <CalendarDaysIcon className="me-2" style={{ width: '22px', height: '22px' }} />
                Book Free Counseling
              </Link>
              <Link
                href="/universities"
                className="btn btn-outline-light btn-lg d-flex align-items-center justify-content-center"
                style={{ borderWidth: '2px' }}
              >
                <MagnifyingGlassIcon className="me-2" style={{ width: '22px', height: '22px' }} />
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