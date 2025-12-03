import Header from '../../components/shared/Header'
import Footer from '../../components/shared/Footer'

export default function PrivacyPage() {
  const lastUpdated = 'November 2024'

  const privacySections = [
    {
      title: '1. Introduction',
      content: `
        Campus Disha ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect,
        use, share, and protect your personal information when you use our educational counseling services and website.
      `
    },
    {
      title: '2. Information We Collect',
      content: `
        <strong>Personal Information:</strong>
        • Name, email address, phone number
        • Educational background and qualifications
        • Work experience and career goals
        • Location information
        • Communication preferences

        <strong>Usage Information:</strong>
        • Pages visited and time spent on our website
        • Click patterns and navigation paths
        • Device information and browser type
        • IP address and general location

        <strong>Communication Data:</strong>
        • Emails and messages exchanged with our counselors
        • Phone call recordings (with consent)
        • Chat conversations
      `
    },
    {
      title: '3. How We Use Your Information',
      content: `
        We use your information to:
        • Provide educational counseling and guidance
        • Connect you with suitable universities and programs
        • Process your applications to partner universities
        • Send relevant educational information and updates
        • Improve our services and website functionality
        • Respond to your queries and requests
        • Analyze usage patterns to enhance user experience

        We will not use your information for purposes other than those described in this policy without your consent.
      `
    },
    {
      title: '4. Information Sharing',
      content: `
        <strong>With Partner Universities:</strong>
        We share your information with partner universities when you apply through our platform or request information about their programs.

        <strong>Service Providers:</strong>
        We may share information with third-party service providers who help us operate our business, such as:
        • Cloud hosting services
        • Email communication platforms
        • Analytics providers
        • Payment processors (if applicable)

        <strong>Legal Requirements:</strong>
        We may disclose your information when required by law or to protect our rights, property, or safety.

        We do not sell your personal information to third parties for marketing purposes.
      `
    },
    {
      title: '5. Data Security',
      content: `
        We implement appropriate technical and organizational measures to protect your personal information, including:
        • SSL encryption for data transmission
        • Secure servers for data storage
        • Regular security audits and updates
        • Access controls and authentication systems
        • Employee training on data protection

        However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
      `
    },
    {
      title: '6. Data Retention',
      content: `
        We retain your personal information only as long as necessary for the purposes outlined in this policy,
        unless a longer retention period is required by law.

        You may request deletion of your personal information at any time, subject to legal and regulatory requirements.
      `
    },
    {
      title: '7. Your Rights',
      content: `
        You have the right to:
        • Access your personal information
        • Correct inaccurate information
        • Request deletion of your information
        • Object to processing of your information
        • Request data portability
        • Withdraw consent where processing is based on consent

        To exercise these rights, please contact us using the information provided below.
      `
    },
    {
      title: '8. Cookies and Tracking',
      content: `
        We use cookies and similar technologies to:
        • Remember your preferences
        • Analyze website usage
        • Provide personalized content
        • Improve website functionality

        You can control cookies through your browser settings. Disabling cookies may affect some features of our website.
      `
    },
    {
      title: '9. Third-Party Websites',
      content: `
        Our website may contain links to third-party websites, including university websites and educational resources.
        We are not responsible for the privacy practices of these third-party sites.
        Please review their privacy policies before providing any personal information.
      `
    },
    {
      title: '10. Children\'s Privacy',
      content: `
        Our services are intended for individuals who are at least 18 years old or have parental consent.
        We do not knowingly collect personal information from children under 18 without parental consent.
      `
    },
    {
      title: '11. Marketing Communications',
      content: `
        With your consent, we may send you:
        • Educational program information
        • Application deadlines and updates
        • Career guidance and tips
        • Newsletter content

        You can unsubscribe from marketing communications at any time by clicking the unsubscribe link or contacting us.
      `
    },
    {
      title: '12. International Data Transfers',
      content: `
        Your information is primarily stored and processed in India. We may transfer your information to other countries
        for processing purposes, ensuring adequate protection levels as required by applicable laws.
      `
    },
    {
      title: '13. Updates to This Policy',
      content: `
        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
        We will notify users of significant changes through email or by posting a notice on our website.

        The "Last Updated" date at the top of this policy indicates when it was last revised.
      `
    },
    {
      title: '14. Contact Information',
      content: `
        If you have questions about this Privacy Policy or want to exercise your data rights, please contact us:

        <strong>Email:</strong> privacy@campusdisha.com
        <strong>Phone:</strong> +91 8XXXXXXXXX
        <strong>Address:</strong> Delhi, India

        <strong>Data Protection Officer:</strong>
        Email: dpo@campusdisha.com

        [AUTHOR REVIEW REQUIRED] Update contact details with actual business information.
      `
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
                <h1 className="display-4 fw-bold mb-3">Privacy Policy</h1>
                <p className="lead mb-4">
                  Learn how we collect, use, and protect your personal information
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="alert alert-info">
                  <i className="bi bi-info-circle me-2"></i>
                  <strong>Last Updated:</strong> {lastUpdated}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    {privacySections.map((section, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="h5 text-primary-custom mb-3">{section.title}</h3>
                        <div className="text-muted" dangerouslySetInnerHTML={{ __html: section.content }} />
                        {index < privacySections.length - 1 && <hr className="my-4" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="alert alert-success mt-4">
                  <i className="bi bi-shield-check me-2"></i>
                  <strong>Our Commitment:</strong> We are committed to protecting your privacy and ensuring the security of your personal information. If you have any concerns about our privacy practices, please don't hesitate to contact us.
                </div>

                <div className="alert alert-warning mt-3">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  <strong>Legal Notice:</strong> [AUTHOR REVIEW REQUIRED] This privacy policy should be reviewed by qualified legal counsel to ensure compliance with applicable data protection laws.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="section bg-light">
          <div className="container">
            <h3 className="text-center mb-4">Privacy Actions</h3>
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-download text-primary display-4 mb-3"></i>
                    <h5>Download Your Data</h5>
                    <p className="text-muted small mb-3">Request a copy of your personal information</p>
                    <a href="/contact" className="btn btn-outline-primary btn-sm">Request Data</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-x-circle text-danger display-4 mb-3"></i>
                    <h5>Delete Account</h5>
                    <p className="text-muted small mb-3">Request deletion of your personal data</p>
                    <a href="/contact" className="btn btn-outline-danger btn-sm">Request Deletion</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-gear text-info display-4 mb-3"></i>
                    <h5>Privacy Settings</h5>
                    <p className="text-muted small mb-3">Manage your privacy preferences</p>
                    <a href="/contact" className="btn btn-outline-info btn-sm">Manage Settings</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GDPR Compliance Note */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="card border-primary border-2 shadow-sm">
                  <div className="card-body p-4">
                    <h4 className="text-primary-custom mb-3">
                      <i className="bi bi-shield-fill-check me-2"></i>
                      Your Data Protection Rights
                    </h4>
                    <div className="row text-center">
                      <div className="col-md-3 mb-3">
                        <div className="bg-light rounded p-3">
                          <i className="bi bi-eye text-primary fs-3 mb-2"></i>
                          <h6>Right to Access</h6>
                          <small className="text-muted">Know what data we have</small>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="bg-light rounded p-3">
                          <i className="bi bi-pencil text-success fs-3 mb-2"></i>
                          <h6>Right to Correct</h6>
                          <small className="text-muted">Update your information</small>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="bg-light rounded p-3">
                          <i className="bi bi-trash text-danger fs-3 mb-2"></i>
                          <h6>Right to Delete</h6>
                          <small className="text-muted">Remove your data</small>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="bg-light rounded p-3">
                          <i className="bi bi-arrow-repeat text-info fs-3 mb-2"></i>
                          <h6>Right to Port</h6>
                          <small className="text-muted">Transfer your data</small>
                        </div>
                      </div>
                    </div>
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