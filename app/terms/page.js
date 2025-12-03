import Header from '../../components/shared/Header'
import Footer from '../../components/shared/Footer'

export default function TermsPage() {
  const lastUpdated = 'November 2024'

  const termsSections = [
    {
      title: '1. Acceptance of Terms',
      content: `
        By accessing and using Campus Disha ("the Website," "the Service," "our Platform"), you agree to be bound by these Terms of Service ("Terms").
        If you do not agree to these Terms, please do not use our services. These Terms constitute a legally binding agreement between you and Campus Disha.
      `
    },
    {
      title: '2. Services Provided',
      content: `
        Campus Disha provides educational counseling services, including:
        • Guidance on online degree programs from UGC-approved universities
        • Admission assistance and application support
        • Information about universities and their programs
        • Career counseling and guidance
        • Connecting students with partner universities

        We act as an intermediary between students and educational institutions. We do not grant degrees or certifications.
      `
    },
    {
      title: '3. User Responsibilities',
      content: `
        As a user of our services, you agree to:
        • Provide accurate and complete information
        • Use our services for legitimate educational purposes
        • Not provide false or misleading information
        • Respect intellectual property rights
        • Not use automated tools to access our platform
        • Not attempt to gain unauthorized access to our systems
      `
    },
    {
      title: '4. Privacy and Data Protection',
      content: `
        Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy.
        By using our services, you consent to the collection and use of your information as described in our Privacy Policy.

        We implement appropriate security measures to protect your personal information but cannot guarantee absolute security.
      `
    },
    {
      title: '5. Counseling Services',
      content: `
        • Our counseling services are provided free of charge
        • We do not guarantee admission to any university
        • Final admission decisions are made by universities
        • We provide guidance based on information available to us
        • You are responsible for verifying all information before making decisions
      `
    },
    {
      title: '6. Third-Party Links',
      content: `
        Our website may contain links to third-party websites, including university websites.
        We are not responsible for the content, privacy policies, or practices of these third-party sites.
        You access these links at your own risk.
      `
    },
    {
      title: '7. University Applications',
      content: `
        When you apply to universities through our platform:
        • You authorize us to share your information with partner universities
        • Universities will contact you directly regarding your application
        • Application fees (if any) are determined by universities
        • We are not responsible for admission decisions
      `
    },
    {
      title: '8. Payment Terms',
      content: `
        • Counseling services are provided free of charge
        • University fees are paid directly to the respective universities
        • We are not responsible for any financial transactions between you and universities
        • We do not charge any hidden fees
      `
    },
    {
      title: '9. Limitation of Liability',
      content: `
        Campus Disha shall not be liable for:
        • Any decisions made based on information provided on our platform
        • Admission outcomes or university decisions
        • Quality of education provided by universities
        • Loss of data or system interruptions
        • Third-party content or actions

        Our liability is limited to the extent permitted by law.
      `
    },
    {
      title: '10. Disclaimer',
      content: `
        The information provided on our website is for general informational purposes only.
        We make no warranties about the accuracy, reliability, or completeness of this information.
        You should independently verify all information before making educational decisions.

        [AUTHOR REVIEW REQUIRED] This disclaimer should be reviewed by legal counsel.
      `
    },
    {
      title: '11. Intellectual Property',
      content: `
        All content on our website, including text, graphics, logos, and software, is owned by Campus Disha or our content suppliers
        and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without our written permission.
      `
    },
    {
      title: '12. Termination',
      content: `
        We may suspend or terminate your access to our services at any time, with or without cause, without prior notice.
        You may stop using our services at any time.
      `
    },
    {
      title: '13. Governing Law',
      content: `
        These Terms shall be governed by and construed in accordance with the laws of India.
        Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
      `
    },
    {
      title: '14. Changes to Terms',
      content: `
        We reserve the right to modify these Terms at any time. We will notify users of significant changes
        through email or by posting a notice on our website. Your continued use of our services constitutes acceptance of the modified Terms.
      `
    },
    {
      title: '15. Contact Information',
      content: `
        If you have questions about these Terms, please contact us:

        Email: info@campusdisha.com
        Phone: +91 8XXXXXXXXX
        Address: Delhi, India

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
                <h1 className="display-4 fw-bold mb-3">Terms of Service</h1>
                <p className="lead mb-4">
                  Please read these terms carefully before using our educational counseling services
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

        {/* Terms Content */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    {termsSections.map((section, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="h5 text-primary-custom mb-3">{section.title}</h3>
                        <div className="text-muted" dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br>') }} />
                        {index < termsSections.length - 1 && <hr className="my-4" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legal Notice */}
                <div className="alert alert-warning mt-4">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  <strong>Legal Notice:</strong> [AUTHOR REVIEW REQUIRED] These terms are for informational purposes only and should be reviewed by qualified legal counsel before implementation.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="section bg-light">
          <div className="container">
            <h3 className="text-center mb-4">Related Documents</h3>
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-shield-check text-primary display-4 mb-3"></i>
                    <h5>Privacy Policy</h5>
                    <p className="text-muted small mb-3">Learn how we protect your data</p>
                    <a href="/privacy" className="btn btn-outline-primary btn-sm">Read Policy</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-book text-success display-4 mb-3"></i>
                    <h5>UGC Guidelines</h5>
                    <p className="text-muted small mb-3">Understanding online education regulations</p>
                    <a href="/ugc-regulation" className="btn btn-outline-success btn-sm">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-question-circle text-info display-4 mb-3"></i>
                    <h5>FAQ</h5>
                    <p className="text-muted small mb-3">Answers to common questions</p>
                    <a href="/faq" className="btn btn-outline-info btn-sm">View FAQ</a>
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