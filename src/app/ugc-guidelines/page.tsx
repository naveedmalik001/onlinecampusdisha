'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { CheckCircle, AlertCircle, Shield, BookOpen, Users, Award, Clock, Download, FileText, Search, ChevronRight, GraduationCap, Globe, Star } from 'lucide-react'

const keyGuidelines2024 = [
  {
    category: "Eligibility & Admission",
    icon: Users,
    guidelines: [
      "Only UGC-entitled universities can offer online degree programs",
      "No geographical restrictions - students from any state can enroll",
      "Same eligibility criteria as regular mode programs",
      "Reservation policies as per government norms applicable",
      "No entrance exam required for most programs (except professional courses)"
    ]
  },
  {
    category: "Program Delivery",
    icon: BookOpen,
    guidelines: [
      "Minimum 70% of course content must be delivered online",
      "Digital learning management systems (LMS) mandatory",
      "Live interactive sessions and recorded lectures available 24/7",
      "Online examinations with remote proctoring",
      "Digital library resources and e-learning materials provided"
    ]
  },
  {
    category: "Quality Assurance",
    icon: Shield,
    guidelines: [
      "Regular monitoring by UGC-DEB (Distance Education Bureau)",
      "Programs must be NAAC accredited with minimum 'A' grade",
      "Qualified faculty with relevant industry experience",
      "Industry-relevant curriculum updated regularly",
      "Student feedback mechanisms and continuous improvement"
    ]
  },
  {
    category: "Examination & Evaluation",
    icon: Award,
    guidelines: [
      "Proctored online examinations using AI/remote invigilation",
      "Continuous assessment through assignments and projects",
      "Practical components through virtual labs or internships",
      "Same evaluation standards as traditional programs",
      "Degree certificates mention 'Online Mode' clearly"
    ]
  }
]

const accreditationLevels = [
  {
    level: "Institute of Eminence (IoE)",
    description: "Highest recognition by Government of India",
    benefits: ["Autonomous curriculum design", "Greater academic freedom", "International collaborations", "Research focus"],
    universities: ["MAHE Manipal", "Amrita Vishwa Vidyapeetham"],
    color: "bg-purple-100 text-purple-800 border-purple-200"
  },
  {
    level: "NAAC A++",
    description: "Highest NAAC accreditation grade",
    benefits: ["Quality education standards", "Industry partnerships", "Research opportunities", "Global recognition"],
    universities: ["SRM University", "MAHE Manipal", "Manipal University Jaipur"],
    color: "bg-green-100 text-green-800 border-green-200"
  },
  {
    level: "NAAC A+",
    description: "Excellent quality standards",
    benefits: ["Strong academic framework", "Good infrastructure", "Experienced faculty", "Industry relevance"],
    universities: ["NMIMS", "Amity University", "Chandigarh University", "Most partner universities"],
    color: "bg-blue-100 text-blue-800 border-blue-200"
  },
  {
    level: "NAAC A",
    description: "Good quality standards",
    benefits: ["Recognized degree programs", "Standard curriculum", "Basic research facilities", "Affordable education"],
    universities: ["GLA University", "DPU Mumbai"],
    color: "bg-yellow-100 text-yellow-800 border-yellow-200"
  }
]

const recognitionBenefits = [
  {
    title: "Government Jobs",
    description: "Online degrees are valid for all central and state government positions",
    icon: Shield,
    points: ["UPSC, SSC, State PSC examinations", "Public sector undertakings", "Defense services", "Civil services"],
    color: "blue"
  },
  {
    title: "Higher Education",
    description: "Online degrees are accepted for further studies in India and abroad",
    icon: GraduationCap,
    points: ["M.Tech/MBA admissions", "Ph.D. programs", "International universities", "Research opportunities"],
    color: "green"
  },
  {
    title: "Private Sector",
    description: "Equal recognition in corporate and private sector jobs",
    icon: Users,
    points: ["MNCs and startups", "IT and software companies", "Banking and finance", "Manufacturing and services"],
    color: "purple"
  },
  {
    title: "Professional Bodies",
    description: "Recognition by various professional councils and bodies",
    icon: Award,
    points: ["AICTE for technical programs", "PCI for pharmacy", "Bar Council for law", "Medical councils"],
    color: "orange"
  }
]

const faqs = [
  {
    question: "Are online degrees equivalent to regular degrees?",
    answer: "Yes, online degrees offered by UGC-entitled universities are equivalent to regular degrees for all purposes including government jobs, higher education, and private sector employment. They hold the same value and recognition.",
    category: "Recognition"
  },
  {
    question: "Can I get a government job with an online degree?",
    answer: "Absolutely! Online degrees from UGC-entitled universities are 100% valid for all government jobs, including UPSC, SSC, State PSC examinations, and public sector undertakings. They are treated the same as regular degrees.",
    category: "Career"
  },
  {
    question: "What is the eligibility criteria for online programs?",
    answer: "The eligibility criteria are the same as regular mode programs. For bachelor's programs: 10+2 with 45-50% marks, for master's programs: bachelor's degree with 50-55% marks. Work experience is preferred but not mandatory for most programs.",
    category: "Admission"
  },
  {
    question: "How are examinations conducted in online mode?",
    answer: "Online examinations are conducted through AI-proctored remote invigilation. Students appear for exams from their homes using webcams and specialized software. The process is secure and maintains academic integrity.",
    category: "Examination"
  },
  {
    question: "Can I pursue higher education after completing an online degree?",
    answer: "Yes, you can pursue higher education including M.Tech, MBA, Ph.D., or study abroad. Online degrees are accepted by all Indian and international universities for further studies, subject to their specific admission criteria.",
    category: "Higher Studies"
  },
  {
    question: "What is UGC Entitlement?",
    answer: "UGC Entitlement is authorization from University Grants Commission allowing universities to offer online degree programs. Only universities with this entitlement can legally offer online degrees that are valid and recognized.",
    category: "Regulation"
  },
  {
    question: "How practical sessions are conducted in online programs?",
    answer: "Practical sessions are conducted through virtual labs, simulations, case studies, projects, and mandatory internships. Universities provide comprehensive practical training through digital platforms and industry collaborations.",
    category: "Learning"
  },
  {
    question: "Is there any age limit for online programs?",
    answer: "There is generally no upper age limit for online programs. Students can enroll at any age, making it ideal for working professionals looking to upskill or change careers.",
    category: "Eligibility"
  }
]

const documents = [
  {
    name: "UGC Online Education Guidelines 2024",
    description: "Official UGC guidelines for online degree programs",
    size: "2.3 MB",
    format: "PDF",
    category: "Official Guidelines"
  },
  {
    name: "List of UGC Entitled Universities",
    description: "Complete list of universities authorized to offer online programs",
    size: "1.8 MB",
    format: "PDF",
    category: "University List"
  },
  {
    name: "Online Education Regulations 2024-25",
    description: "Detailed regulations and compliance requirements",
    size: "3.1 MB",
    format: "PDF",
    category: "Regulations"
  },
  {
    name: "NAAC Accredited Universities Directory",
    description: "Directory of NAAC accredited universities offering online programs",
    size: "1.5 MB",
    format: "PDF",
    category: "Accreditation"
  }
]

export default function UGCGuidelinesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const categories = ['All', 'Recognition', 'Career', 'Admission', 'Examination', 'Higher Studies', 'Regulation', 'Learning', 'Eligibility']

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">CD</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Campus Disha</h1>
                <p className="text-xs text-gray-600">UGC Guidelines</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
              <Link href="/universities" className="text-gray-600 hover:text-blue-600 transition">Universities</Link>
              <Link href="/success-stories" className="text-gray-600 hover:text-blue-600 transition">Success Stories</Link>
              <Link href="/ugc-guidelines" className="text-blue-600 font-medium">UGC Guidelines</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              UGC-Approved Information
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              UGC Guidelines &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Recognition
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Complete information about UGC regulations, recognition, and guidelines for online degree programs.
              All our partner universities comply with UGC-DEB regulations ensuring valid and recognized degrees.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">UGC Recognized</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">UGC Entitled Universities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-sm text-gray-600">Approved Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">A+</div>
              <div className="text-sm text-gray-600">Min. NAAC Grade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Guidelines 2024 */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">UGC Guidelines 2024-25</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key guidelines and regulations that universities must follow for offering online degree programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyGuidelines2024.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <section.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{section.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.guidelines.map((guideline, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Levels */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NAAC Accreditation Levels</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding different accreditation levels to choose the right university for your career goals
            </p>
          </div>

          <div className="grid gap-8">
            {accreditationLevels.map((level, index) => (
              <Card key={index} className={`border-2 ${level.color} hover:shadow-xl transition-shadow duration-300`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center`}>
                          <Star className="w-8 h-8" />
                        </div>
                        <CardTitle className="text-2xl text-gray-900">{level.level}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {level.description}
                      </CardDescription>
                    </div>
                    <Globe className="w-8 h-8 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {level.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Our Partner Universities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {level.universities.map((university, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {university}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How UGC-recognized online degrees benefit your career across different sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recognitionBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-2">{benefit.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    {benefit.points.map((point, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Official Documents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download official UGC guidelines and regulations for detailed information
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{doc.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{doc.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>{doc.size}</span>
                          <span>{doc.format}</span>
                          <span className="bg-gray-100 px-2 py-1 rounded">{doc.category}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about UGC guidelines and online degree recognition
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-blue-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                )}
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Filter by category..."
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  list="categories"
                  className="border-gray-300 focus:border-blue-500"
                />
                <datalist id="categories">
                  {categories.map((category) => (
                    <option key={category} value={category} />
                  ))}
                </datalist>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-600">
                Showing {filteredFAQs.length} of {faqs.length} FAQs
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQs Grid */}
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No FAQs found</h3>
                <p className="text-gray-500">Try adjusting your search or filter</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {filteredFAQs.map((faq, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3 mb-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {faq.question}
                          </h3>
                          <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Expert */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Our education experts can help you understand UGC guidelines and choose the right online program from recognized universities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Talk to Expert
              </Button>
            </Link>
            <Link href="/universities">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Universities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">CD</span>
                </div>
                <h3 className="text-xl font-bold">Campus Disha</h3>
              </div>
              <p className="text-gray-400">
                Your trusted partner for online education guidance and university admissions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About Online Education</Link></li>
                <li><Link href="/universities" className="hover:text-white transition">Partner Universities</Link></li>
                <li><Link href="/ugc-guidelines" className="hover:text-white transition">UGC Guidelines</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>UGC Official Website</li>
                <li>Distance Education Bureau</li>
                <li>NAAC Accreditation</li>
                <li>AICTE Approvals</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+91 9469328661</li>
                <li>contact@campusdisha.in</li>
                <li>Residency Road, Lal Chowk</li>
                <li>Srinagar, J&K - 190001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Campus Disha. All rights reserved. | Your Gateway to Quality Online Education</p>
          </div>
        </div>
      </footer>
    </div>
  )
}