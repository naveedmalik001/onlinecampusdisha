import Header from '../../components/shared/Header'
import Footer from '../../components/shared/Footer'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & CEO',
      description: '15+ years in education consulting',
      avatar: '/team/ceo.jpg'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Counseling',
      description: '10+ years helping students',
      avatar: '/team/counselor.jpg'
    },
    {
      name: 'Amit Patel',
      role: 'Admissions Director',
      description: 'Expert in higher education',
      avatar: '/team/director.jpg'
    },
    {
      name: 'Anjali Verma',
      role: 'Student Success Manager',
      description: 'Dedicated to student growth',
      avatar: '/team/manager.jpg'
    }
  ]

  const partners = [
    'NMIMS', 'SRM', 'Amity', 'Manipal', 'Chandigarh University',
    'LPU', 'Parul', 'UPES', 'Andhra University', 'Shoolini'
  ]

  const achievements = [
    {
      icon: 'bi-people-fill',
      number: '5000+',
      text: 'Students Successfully Admitted'
    },
    {
      icon: 'bi-building',
      number: '21+',
      text: 'Partner Universities'
    },
    {
      icon: 'bi-mortarboard-fill',
      number: '500+',
      text: 'Online Programs'
    },
    {
      icon: 'bi-award-fill',
      number: '100%',
      text: 'Student Satisfaction'
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
                <h1 className="display-4 fw-bold mb-3">About Campus Disha</h1>
                <p className="lead mb-4">
                  Your trusted partner in navigating the world of online education and securing your future
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="text-center mb-3">
                      <i className="bi bi-bullseye text-primary display-4"></i>
                    </div>
                    <h3 className="text-center mb-3">Our Mission</h3>
                    <p className="text-center">
                      To democratize access to quality online education by providing expert guidance,
                      transparent information, and end-to-end support to students seeking accredited
                      online degree programs from India's top universities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="text-center mb-3">
                      <i className="bi bi-eye text-primary display-4"></i>
                    </div>
                    <h3 className="text-center mb-3">Our Vision</h3>
                    <p className="text-center">
                      To become India's most trusted education platform, empowering millions of
                      students to achieve their career goals through flexible, affordable, and
                      accredited online education programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-title text-start">Our Story</h2>
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <p className="lead mb-4">
                      Campus Disha was founded with a simple yet powerful vision: to make quality
                      education accessible to everyone, regardless of their geographical location
                      or personal circumstances.
                    </p>

                    <p className="mb-3">
                      In today's rapidly evolving digital world, online education has emerged as a
                      game-changer, offering flexibility, affordability, and access to world-class
                      programs from accredited universities. However, navigating the complex landscape
                      of online degree programs can be overwhelming for students and parents.
                    </p>

                    <p className="mb-3">
                      That's where we come in. Campus Disha bridges the gap between students and
                      quality online education programs. We partner with 21+ UGC-approved universities
                      across India, offering 500+ online degree programs spanning various disciplines.
                    </p>

                    <p>
                      Our team of experienced education counselors provides personalized guidance,
                      helping students choose the right program, complete the admission process,
                      and embark on their educational journey with confidence.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <div className="text-center">
                      <div className="bg-white rounded-4 shadow-sm p-4">
                        <i className="bi bi-graph-up display-1 text-primary mb-3"></i>
                        <h5>1000+ Students Assisted Monthly</h5>
                        <p className="text-muted">
                          Growing rapidly to meet the increasing demand for online education guidance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-center">Our Achievements</h2>
            <p className="section-subtitle text-center">
              Numbers that reflect our commitment to student success
            </p>

            <div className="row g-4">
              {achievements.map((achievement, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="card border-0 shadow-sm text-center h-100">
                    <div className="card-body p-4">
                      <i className={`bi ${achievement.icon} text-primary fs-1 mb-3`}></i>
                      <h3 className="display-4 fw-bold text-primary-custom">{achievement.number}</h3>
                      <p className="text-muted mb-0">{achievement.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title text-center">Meet Our Team</h2>
            <p className="section-subtitle text-center">
              Experienced professionals dedicated to your educational success
            </p>

            <div className="row g-4">
              {teamMembers.map((member, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center p-4">
                      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                        <i className="bi bi-person-fill fs-1"></i>
                      </div>
                      <h5 className="card-title">{member.name}</h5>
                      <p className="text-primary-custom small mb-2">{member.role}</p>
                      <p className="text-muted small mb-0">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Universities */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-center">Our Partner Universities</h2>
            <p className="section-subtitle text-center">
              We partner with India's leading universities offering accredited online programs
            </p>

            <div className="row">
              <div className="col-lg-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="row g-3">
                      {partners.map((partner, index) => (
                        <div className="col-lg-2 col-md-4 col-6 text-center" key={index}>
                          <div className="partner-logo bg-light rounded p-3">
                            <h6 className="mb-0 text-primary-custom fw-bold">{partner}</h6>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <a href="/universities" className="btn btn-primary">
                <i className="bi bi-building me-2"></i>
                View All Partner Universities
              </a>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title text-center">Our Values</h2>

            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className="text-center">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-shield-check fs-2"></i>
                  </div>
                  <h5>Trust & Transparency</h5>
                  <p className="text-muted">
                    We believe in complete transparency in our processes and building long-term relationships based on trust.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="text-center">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-lightbulb fs-2"></i>
                  </div>
                  <h5>Student First</h5>
                  <p className="text-muted">
                    Every decision we make is centered around what's best for our students' educational journey and career growth.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="text-center">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-award fs-2"></i>
                  </div>
                  <h5>Excellence</h5>
                  <p className="text-muted">
                    We strive for excellence in everything we do, from counseling services to admission support.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="text-center">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                    <i className="bi bi-heart fs-2"></i>
                  </div>
                  <h5>Passion</h5>
                  <p className="text-muted">
                    We are passionate about education and deeply committed to helping students achieve their dreams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-white">
          <div className="container text-center">
            <h2 className="mb-3">Ready to Start Your Educational Journey?</h2>
            <p className="lead mb-4 opacity-90">
              Join thousands of students who have found their perfect online degree program through Campus Disha
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <a href="/contact" className="btn btn-light btn-lg">
                <i className="bi bi-telephone me-2"></i>
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