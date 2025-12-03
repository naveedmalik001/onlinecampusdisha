import Header from '../../components/shared/Header'
import Footer from '../../components/shared/Footer'

export default function OnlineVsTraditionalPage() {
  const comparisonFactors = [
    {
      factor: 'Flexibility',
      online: {
        rating: 'Excellent',
        description: 'Study at your own pace, anytime anywhere',
        pros: ['Self-paced learning', '24/7 access', 'No commuting'],
        cons: ['Requires self-discipline']
      },
      traditional: {
        rating: 'Limited',
        description: 'Fixed schedule and location-based learning',
        pros: ['Structured environment', 'Face-to-face interaction'],
        cons: ['Fixed timings', 'Location constraints']
      }
    },
    {
      factor: 'Cost',
      online: {
        rating: 'Affordable',
        description: '40-60% cheaper than traditional programs',
        pros: ['Lower tuition fees', 'No accommodation costs', 'Save on transport'],
        cons: ['Limited financial aid options']
      },
      traditional: {
        rating: 'Expensive',
        description: 'Higher costs including accommodation and other expenses',
        pros: ['More scholarship opportunities', 'Government funding available'],
        cons: ['High tuition fees', 'Accommodation costs', 'Transportation expenses']
      }
    },
    {
      factor: 'Recognition',
      online: {
        rating: 'Equal',
        description: 'UGC-approved degrees have equal recognition',
        pros: ['UGC approved', 'Valid for government jobs', 'Equivalent to regular degrees'],
        cons: ['Some private sector bias exists']
      },
      traditional: {
        rating: 'Established',
        description: 'Well-established recognition in all sectors',
        pros: ['Universal acceptance', 'Traditional preference'],
        cons: ['Same value as online degrees']
      }
    },
    {
      factor: 'Learning Experience',
      online: {
        rating: 'Modern',
        description: 'Technology-driven interactive learning',
        pros: ['Digital resources', 'Recorded lectures', 'Interactive platforms'],
        cons: ['Limited practical sessions', 'Less peer interaction']
      },
      traditional: {
        rating: 'Interactive',
        description: 'Face-to-face learning with immediate feedback',
        pros: ['Lab facilities', 'Direct faculty interaction', 'Peer learning'],
        cons: ['Limited access to resources']
      }
    },
    {
      factor: 'Career Support',
      online: {
        rating: 'Growing',
        description: 'Improving placement support and alumni networks',
        pros: ['Online job portals', 'Virtual career fairs', 'Alumni networks'],
        cons: ['Limited campus placements']
      },
      traditional: {
        rating: 'Strong',
        description: 'Established placement cells and industry connections',
        pros: ['On-campus placements', 'Strong alumni network', 'Industry visits'],
        cons: ['Location-based opportunities']
      }
    },
    {
      factor: 'Time Management',
      online: {
        rating: 'Flexible',
        description: 'Perfect for working professionals',
        pros: ['Work-study balance', 'Self-paced', 'Time savings on commute'],
        cons: ['Requires good time management skills']
      },
      traditional: {
        rating: 'Structured',
        description: 'Fixed schedule helps in discipline',
        pros: ['Routine-based learning', 'Dedicated study time'],
        cons: ['Difficult for working professionals']
      }
    }
  ]

  const whoShouldChoose = {
    online: [
      {
        title: 'Working Professionals',
        description: 'Continue working while upgrading qualifications'
      },
      {
        title: 'Remote Learners',
        description: 'Students in locations without good colleges nearby'
      },
      {
        title: 'Career Changers',
        description: 'Those looking to switch careers without quitting jobs'
      },
      {
        title: 'Budget-Conscious Students',
        description: 'Students seeking quality education at lower costs'
      },
      {
        title: 'Self-Disciplined Learners',
        description: 'Independent learners who can manage their own study schedule'
      }
    ],
    traditional: [
      {
        title: 'Recent High School Graduates',
        description: 'Students seeking complete college experience'
      },
      {
        title: 'Lab-Intensive Programs',
        description: 'Fields requiring extensive practical work'
      },
      {
        title: 'Research-Oriented Students',
        description: 'Those interested in extensive research opportunities'
      },
      {
        title: 'Interactive Learners',
        description: 'Students preferring face-to-face interactions'
      },
      {
        title: 'On-Campus Placements',
        description: 'Students wanting direct campus recruitment opportunities'
      }
    ]
  }

  const downloadInfo = {
    title: 'Detailed Comparison Guide',
    description: 'Get our comprehensive PDF guide comparing online vs traditional education',
    features: [
      'Detailed cost analysis',
      'University rankings',
      'Career prospects comparison',
      'Success stories',
      'Decision-making framework'
    ]
  }

  return (
    <div>
      <Header />

      <main>
        {/* Page Header */}
        <section className="bg-primary text-white py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="display-4 fw-bold mb-3">Online vs Traditional Education</h1>
                <p className="lead mb-4">
                  A comprehensive comparison to help you choose the right learning format for your career goals
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h2 className="mb-4 text-center">Quick Comparison Overview</h2>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Aspect</th>
                            <th className="text-center">Online Education</th>
                            <th className="text-center">Traditional Education</th>
                            <th className="text-center">Winner</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>Cost</strong></td>
                            <td className="text-center">₹1-3 Lakhs</td>
                            <td className="text-center">₹3-8 Lakhs</td>
                            <td className="text-center"><span className="badge bg-success">Online</span></td>
                          </tr>
                          <tr>
                            <td><strong>Flexibility</strong></td>
                            <td className="text-center">High</td>
                            <td className="text-center">Low</td>
                            <td className="text-center"><span className="badge bg-success">Online</span></td>
                          </tr>
                          <tr>
                            <td><strong>Recognition</strong></td>
                            <td className="text-center">Equal (UGC)</td>
                            <td className="text-center">Established</td>
                            <td className="text-center"><span className="badge bg-warning">Equal</span></td>
                          </tr>
                          <tr>
                            <td><strong>Networking</strong></td>
                            <td className="text-center">Digital</td>
                            <td className="text-center">Physical</td>
                            <td className="text-center"><span className="badge bg-info">Depends</span></td>
                          </tr>
                          <tr>
                            <td><strong>Practical Learning</strong></td>
                            <td className="text-center">Limited</td>
                            <td className="text-center">Extensive</td>
                            <td className="text-center"><span className="badge bg-success">Traditional</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title text-center">Detailed Comparison</h2>
            <p className="section-subtitle text-center">
              Understand the pros and cons of each learning format
            </p>

            <div className="row g-4">
              {comparisonFactors.map((factor, index) => (
                <div className="col-lg-12" key={index}>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="card-title mb-4 text-primary-custom">
                        <i className="bi bi-bar-chart me-2"></i>
                        {factor.factor}
                      </h3>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="border-end border-md-0 pb-4 pb-md-0">
                            <div className="d-flex align-items-center mb-3">
                              <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                                <i className="bi bi-laptop"></i>
                              </div>
                              <div>
                                <h5 className="mb-0">Online Education</h5>
                                <span className="badge bg-success">{factor.online.rating}</span>
                              </div>
                            </div>
                            <p className="text-muted mb-3">{factor.online.description}</p>

                            <h6 className="text-success mb-2">Advantages:</h6>
                            <ul className="list-unstyled mb-3">
                              {factor.online.pros.map((pro, i) => (
                                <li key={i} className="mb-1">
                                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                                  {pro}
                                </li>
                              ))}
                            </ul>

                            {factor.online.cons.length > 0 && (
                              <>
                                <h6 className="text-warning mb-2">Considerations:</h6>
                                <ul className="list-unstyled">
                                  {factor.online.cons.map((con, i) => (
                                    <li key={i} className="mb-1">
                                      <i className="bi bi-exclamation-triangle-fill text-warning me-2"></i>
                                      {con}
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="ps-md-4">
                            <div className="d-flex align-items-center mb-3">
                              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                                <i className="bi bi-building"></i>
                              </div>
                              <div>
                                <h5 className="mb-0">Traditional Education</h5>
                                <span className="badge bg-primary">{factor.traditional.rating}</span>
                              </div>
                            </div>
                            <p className="text-muted mb-3">{factor.traditional.description}</p>

                            <h6 className="text-primary mb-2">Advantages:</h6>
                            <ul className="list-unstyled mb-3">
                              {factor.traditional.pros.map((pro, i) => (
                                <li key={i} className="mb-1">
                                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                  {pro}
                                </li>
                              ))}
                            </ul>

                            {factor.traditional.cons.length > 0 && (
                              <>
                                <h6 className="text-warning mb-2">Considerations:</h6>
                                <ul className="list-unstyled">
                                  {factor.traditional.cons.map((con, i) => (
                                    <li key={i} className="mb-1">
                                      <i className="bi bi-exclamation-triangle-fill text-warning me-2"></i>
                                      {con}
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
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

        {/* Who Should Choose */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-center">Who Should Choose Which Format?</h2>

            <div className="row g-4">
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="card-title text-success mb-4">
                      <i className="bi bi-laptop me-2"></i>
                      Choose Online Education If You Are:
                    </h3>
                    {whoShouldChoose.online.map((item, index) => (
                      <div className="d-flex align-items-start mb-3" key={index}>
                        <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '30px', height: '30px'}}>
                          <i className="bi bi-check"></i>
                        </div>
                        <div>
                          <h6 className="mb-1">{item.title}</h6>
                          <p className="text-muted mb-0 small">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h3 className="card-title text-primary mb-4">
                      <i className="bi bi-building me-2"></i>
                      Choose Traditional Education If You Are:
                    </h3>
                    {whoShouldChoose.traditional.map((item, index) => (
                      <div className="d-flex align-items-start mb-3" key={index}>
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: '30px', height: '30px'}}>
                          <i className="bi bi-check"></i>
                        </div>
                        <div>
                          <h6 className="mb-1">{item.title}</h6>
                          <p className="text-muted mb-0 small">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title text-center">Success Stories</h2>
            <p className="section-subtitle text-center mb-5">
              Real examples of students who made the right choice
            </p>

            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <div className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                      <i className="bi bi-person-workspace fs-2"></i>
                    </div>
                    <h5 className="mb-3">Rahul's Career Growth</h5>
                    <p className="text-muted mb-3">
                      "Online MBA helped me get promoted while continuing my job. Saved 2 years and ₹5 lakhs."
                    </p>
                    <small className="text-primary-custom">Working Professional • Online MBA</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                      <i className="bi bi-person-fill fs-2"></i>
                    </div>
                    <h5 className="mb-3">Priya's Research Journey</h5>
                    <p className="text-muted mb-3">
                      "Traditional B.Tech gave me lab access and research opportunities that shaped my career."
                    </p>
                    <small className="text-primary-custom">Recent Graduate • Traditional B.Tech</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <div className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '80px', height: '80px'}}>
                      <i className="bi bi-arrow-repeat fs-2"></i>
                    </div>
                    <h5 className="mb-3">Amit's Career Change</h5>
                    <p className="text-muted mb-3">
                      "Started with online MCA while working in IT, transitioned to software development successfully."
                    </p>
                    <small className="text-primary-custom">Career Changer • Online MCA</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Framework */}
        <section className="section">
          <div className="container">
            <h2 className="section-title text-center">Making Your Decision</h2>

            <div className="row">
              <div className="col-lg-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h4 className="mb-4">Decision Framework: Ask Yourself These Questions</h4>

                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="border rounded p-3">
                          <h6 className="text-primary-custom mb-3">
                            <i className="bi bi-question-circle me-2"></i>
                            Personal Circumstances
                          </h6>
                          <ul className="list-unstyled">
                            <li className="mb-2">Are you currently working?</li>
                            <li className="mb-2">Do you have family responsibilities?</li>
                            <li className="mb-2">Are you financially independent?</li>
                            <li className="mb-2">Do you live near good colleges?</li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="border rounded p-3">
                          <h6 className="text-primary-custom mb-3">
                            <i className="bi bi-question-circle me-2"></i>
                            Learning Preferences
                          </h6>
                          <ul className="list-unstyled">
                            <li className="mb-2">Are you self-disciplined?</li>
                            <li className="mb-2">Do you prefer flexible schedules?</li>
                            <li className="mb-2">Do you need hands-on experience?</li>
                            <li className="mb-2">Do you enjoy peer interaction?</li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="border rounded p-3">
                          <h6 className="text-primary-custom mb-3">
                            <i className="bi bi-question-circle me-2"></i>
                            Career Goals
                          </h6>
                          <ul className="list-unstyled">
                            <li className="mb-2">Do you need immediate work experience?</li>
                            <li className="mb-2">Is your field research-intensive?</li>
                            <li className="mb-2">Do you need campus placements?</li>
                            <li className="mb-2">Are you planning for higher studies?</li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="border rounded p-3">
                          <h6 className="text-primary-custom mb-3">
                            <i className="bi bi-question-circle me-2"></i>
                            Financial Considerations
                          </h6>
                          <ul className="list-unstyled">
                            <li className="mb-2">What's your education budget?</li>
                            <li className="mb-2">Do you need scholarships?</li>
                            <li className="mb-2">Can you afford accommodation?</li>
                            <li className="mb-2">Is earning while learning important?</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="alert alert-info mt-4">
                      <i className="bi bi-lightbulb me-2"></i>
                      <strong>Need Help Deciding?</strong> Our expert counselors can help you make the right choice based on your specific situation.
                      <a href="/contact" className="alert-link">Book a free counseling session</a> to discuss your options.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Guide */}
        <section className="section bg-primary text-white">
          <div className="container text-center">
            <h2 className="mb-4">Download Our Detailed Comparison Guide</h2>
            <p className="lead mb-4 opacity-90">
              Get a comprehensive PDF guide with detailed analysis, case studies, and decision-making tools
            </p>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="bg-white text-dark rounded-4 p-4">
                  <h4 className="text-primary-custom mb-3">{downloadInfo.title}</h4>
                  <p className="text-muted mb-4">{downloadInfo.description}</p>

                  <div className="row text-start mb-4">
                    {downloadInfo.features.map((feature, index) => (
                      <div className="col-md-6 mb-2" key={index}>
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="d-flex gap-3 justify-content-center">
                    <button className="btn btn-primary btn-lg">
                      <i className="bi bi-download me-2"></i>
                      Download Free Guide
                    </button>
                    <a href="/contact" className="btn btn-outline-primary btn-lg">
                      <i className="bi bi-person me-2"></i>
                      Talk to Counselor
                    </a>
                  </div>
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