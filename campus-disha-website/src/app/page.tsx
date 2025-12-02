'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import Image from 'next/image'
import { UniversityLogo } from '@/components/ui/university-logo'

const universities = [
  {
    name: "NMIMS Online",
    logo: "/universities/nmims.png",
    link: "https://nmims.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=Nimmsonline",
    description: "Premier institution offering UGC-entitled online programs",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "SRM Online",
    logo: "/universities/srm.png",
    link: "https://srm.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=srmonline",
    description: "Leading online education provider with industry-relevant programs",
    accreditation: ["UGC Entitled", "NAAC A++", "AICTE Approved"]
  },
  {
    name: "Parul Online",
    logo: "/universities/parul.png",
    link: "https://parul.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=parulonline",
    description: "Excellence in online education with diverse program offerings",
    accreditation: ["UGC Entitled", "NAAC A+", "ISO Certified"]
  },
  {
    name: "DPU Mumbai",
    logo: "/universities/dpumumbai.png",
    link: "https://dpumumbai.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=dpumumbai",
    description: "Premium healthcare and management education online",
    accreditation: ["UGC Entitled", "NAAC A", "AICTE Approved"]
  },
  {
    name: "Galgotias Online",
    logo: "/universities/galgotias.png",
    link: "https://galgotias.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=galtiosonline",
    description: "Engineering and management excellence in online mode",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "UPES Online",
    logo: "/universities/upes.png",
    link: "https://upes.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=upesonline",
    description: "Specialized programs in energy, petroleum, and technology sectors",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "VGU Online",
    logo: "/universities/vgu.png",
    link: "https://vgu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=vigyanuniversityonline",
    description: "Quality education in engineering and technology",
    accreditation: ["UGC Entitled", "AICTE Approved", "NBA Accredited"]
  },
  {
    name: "Andhra University Online",
    logo: "/universities/andhra.png",
    link: "https://andhra.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=andhrauniversity",
    description: "Legacy of academic excellence in online education",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "MAHE Online",
    logo: "/universities/mahe.png",
    link: "https://mahe.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=MAHEUNIVERISTY",
    description: "Institute of Eminence offering world-class online programs",
    accreditation: ["UGC Entitled", "NAAC A++", "IoE Status"]
  },
  {
    name: "Sikkim Manipal University Online",
    logo: "/universities/smu.png",
    link: "https://smu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=sikkimmanipalonline",
    description: "Pioneering distance and online education since 1995",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "Kurukshetra University Online",
    logo: "/universities/kurukshetra.png",
    link: "https://kurukshetra.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=kurukshetraonline",
    description: "State university with strong academic heritage in online education",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "Shoolini University Online",
    logo: "/universities/shoolini.png",
    link: "https://shoolini.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=shoolini",
    description: "Innovation-driven university offering cutting-edge online programs",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "GLA Online",
    logo: "/universities/gla.png",
    link: "https://gla.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=glaonlinelandingpage",
    description: "Established institution providing quality technical and management education",
    accreditation: ["UGC Entitled", "NAAC A", "AICTE Approved"]
  },
  {
    name: "Chandigarh University Online",
    logo: "/universities/chandigarh.png",
    link: "https://cuol.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=chandigarhonline",
    description: "Youngest private university with NAAC A+ accreditation offering online programs",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "Uttaranchal University Online",
    logo: "/universities/uttaranchal.png",
    link: "https://uttaranchal.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=utaranchalonlinelandingpage",
    description: "Premier institution in the Himalayan region offering diverse online programs",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "DPU Online Pune",
    logo: "/universities/dpupune.png",
    link: "https://dpupune.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=dpuonlinelandingpage",
    description: "Leading healthcare education provider with strong industry connections",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "Amity Online",
    logo: "/universities/amity.png",
    link: "https://amity.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=amityonline",
    description: "Top-ranked private university with global recognition",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "Manipal University Online",
    logo: "/universities/manipal.png",
    link: "https://muj.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=ManipalLandingpage",
    description: "Manipal Academy of Higher Education - Institute of Eminence",
    accreditation: ["UGC Entitled", "NAAC A++", "IoE Status"]
  },
  {
    name: "Amrita Online",
    logo: "/universities/amrita.png",
    link: "https://lpu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=ApplyforLPUONLINE",
    description: "Amrita Vishwa Vidyapeetham - Multi-campus research university",
    accreditation: ["UGC Entitled", "NAAC A++", "IoE Status"]
  },
  {
    name: "LPU Online",
    logo: "/universities/lpu.png",
    link: "https://lpu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=ApplyforLPUONLINE",
    description: "Lovely Professional University - India's largest university",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  }
]

const testimonials = [
  {
    name: "Priya Sharma",
    role: "MBA Student, NMIMS Online",
    image: "/testimonials/priya.jpg",
    content: "The flexibility of online learning allowed me to pursue my master's while working full-time. Campus Disha guided me through the entire admission process.",
    rating: 5,
    program: "MBA"
  },
  {
    name: "Rahul Verma",
    role: "BBA Student, SRM Online",
    image: "/testimonials/rahul.jpg",
    content: "Excellent support from Campus Disha team. They helped me choose the right program and university based on my career goals.",
    rating: 5,
    program: "BBA"
  },
  {
    name: "Anita Patel",
    role: "MCA Student, Manipal Online",
    image: "/testimonials/anita.jpg",
    content: "The quality of education is outstanding, and the UGC recognition gives me confidence for my future career prospects.",
    rating: 5,
    program: "MCA"
  },
  {
    name: "Kumar Ramesh",
    role: "B.Com Student, Amity Online",
    image: "/testimonials/kumar.jpg",
    content: "I was skeptical about online education, but the interactive sessions and experienced faculty changed my perspective completely.",
    rating: 5,
    program: "B.Com"
  },
  {
    name: "Meera Joshi",
    role: "M.A. Student, Chandigarh University Online",
    image: "/testimonials/meera.jpg",
    content: "Campus Disha made the complex admission process simple. Their guidance was invaluable in selecting the right specialization.",
    rating: 5,
    program: "M.A. Psychology"
  },
  {
    name: "Vikram Singh",
    role: "B.Tech Student, UPES Online",
    image: "/testimonials/vikram.jpg",
    content: "The industry-relevant curriculum and practical approach have given me the skills needed for today's competitive job market.",
    rating: 5,
    program: "B.Tech"
  }
]

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    course: '',
    message: ''
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const filteredUniversities = universities.filter(university =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    university.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    university.accreditation.some(acc => acc.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit mobile number'
    }

    if (!formData.university) {
      errors.university = 'Please select a university'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitSuccess(false)

    try {
      // Simulate API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'hero-section',
          timestamp: new Date().toISOString()
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          university: '',
          course: '',
          message: ''
        })
        setFormErrors({})
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      setFormErrors({ submit: 'Failed to submit form. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CD</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Campus Disha</h1>
                <p className="text-sm text-gray-600">Your Gateway to Online Education</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
              <Link href="#universities" className="text-gray-700 hover:text-blue-600 transition">Universities</Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Success Stories</Link>
              <Link href="#ugc-guidelines" className="text-gray-700 hover:text-blue-600 transition">UGC Guidelines</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1">
                <div className={`w-6 h-0.5 bg-gray-600 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-600 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-gray-600 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <Link
                  href="#home"
                  className="text-gray-700 hover:text-blue-600 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#universities"
                  className="text-gray-700 hover:text-blue-600 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Universities
                </Link>
                <Link
                  href="#testimonials"
                  className="text-gray-700 hover:text-blue-600 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Success Stories
                </Link>
                <Link
                  href="#ugc-guidelines"
                  className="text-gray-700 hover:text-blue-600 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  UGC Guidelines
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Advance Your Career with <span className="text-blue-600">UGC-Recognized</span> Online Degrees
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Connect with India's top universities offering UGC-entitled online programs.
                Study at your own pace while maintaining your professional commitments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explore Universities
                </Button>
                <Button size="lg" variant="outline">
                  Download Brochure
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">20+</h3>
                  <p className="text-sm text-gray-600">Partner Universities</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">100+</h3>
                  <p className="text-sm text-gray-600">Online Programs</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">UGC</h3>
                  <p className="text-sm text-gray-600">Approved Degrees</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Get Free Counseling</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({...formData, name: e.target.value})
                      if (formErrors.name) {
                        setFormErrors({...formErrors, name: ''})
                      }
                    }}
                    className={formErrors.name ? 'border-red-500 focus:border-red-500' : ''}
                    required
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({...formData, email: e.target.value})
                      if (formErrors.email) {
                        setFormErrors({...formErrors, email: ''})
                      }
                    }}
                    className={formErrors.email ? 'border-red-500 focus:border-red-500' : ''}
                    required
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({...formData, phone: e.target.value})
                      if (formErrors.phone) {
                        setFormErrors({...formErrors, phone: ''})
                      }
                    }}
                    className={formErrors.phone ? 'border-red-500 focus:border-red-500' : ''}
                    required
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                  )}
                </div>

                <div>
                  <Select onValueChange={(value) => {
                    setFormData({...formData, university: value})
                    if (formErrors.university) {
                      setFormErrors({...formErrors, university: ''})
                    }
                  }}>
                    <SelectTrigger className={formErrors.university ? 'border-red-500 focus:border-red-500' : ''}>
                      <SelectValue placeholder="Select University" />
                    </SelectTrigger>
                    <SelectContent>
                      {universities.map((uni) => (
                        <SelectItem key={uni.name} value={uni.name}>{uni.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formErrors.university && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.university}</p>
                  )}
                </div>

                {submitSuccess && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                    Thank you for your submission! We'll contact you soon.
                  </div>
                )}

                {formErrors.submit && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {formErrors.submit}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    'Get Call Back'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Online Education */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Online Education?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Online education has transformed the learning landscape, offering flexibility and accessibility
              without compromising on quality or recognition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Study at your own pace, balance work and education, access learning materials anytime, anywhere.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Cost-Effective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Lower tuition fees, no accommodation costs, continue earning while learning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Equal Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  UGC-entitled online degrees hold the same value as traditional degrees for jobs and higher studies.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          <Card>
            <CardHeader>
              <CardTitle>Online vs Traditional Mode</CardTitle>
              <CardDescription>
                Understanding the key differences between online and traditional education
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Aspect</th>
                      <th className="text-left p-4">Online Mode</th>
                      <th className="text-left p-4">Traditional Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Flexibility</td>
                      <td className="p-4 text-green-600">High - Learn at your own pace</td>
                      <td className="p-4 text-red-600">Low - Fixed schedule</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Cost</td>
                      <td className="p-4 text-green-600">Lower - No additional costs</td>
                      <td className="p-4 text-red-600">Higher - Including infrastructure</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Degree Recognition</td>
                      <td className="p-4 text-green-600">Equal - UGC entitled</td>
                      <td className="p-4 text-green-600">Standard - UGC approved</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Career Opportunities</td>
                      <td className="p-4 text-green-600">Equal in both modes</td>
                      <td className="p-4 text-green-600">Equal in both modes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Universities Section */}
      <section id="universities" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partner Universities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with India's most prestigious universities offering UGC-entitled online programs
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search universities by name, program, or accreditation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              {searchTerm && (
                <p className="text-sm text-gray-600 mt-2">
                  Found {filteredUniversities.length} universities matching "{searchTerm}"
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map((university) => (
              <Card key={university.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-full h-24 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 font-semibold">{university.name}</span>
                  </div>
                  <CardTitle className="text-lg">{university.name}</CardTitle>
                  <CardDescription>{university.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    {university.accreditation.map((acc, index) => (
                      <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        {acc}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={university.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Guidelines Section */}
      <section id="ugc-guidelines" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              UGC Guidelines & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All our partner universities comply with UGC regulations for online education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">UGC Entitlement</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Valid Across India</h4>
                    <p className="text-gray-600">Online degrees are valid for government jobs and higher education across all states</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Equal to Traditional Degrees</h4>
                    <p className="text-gray-600">Same recognition and value as regular mode degrees</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Quality Assurance</h4>
                    <p className="text-gray-600">Regular monitoring and quality checks by UGC-DEB</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Key Guidelines (2024-25)</h3>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-600">Only UGC-entitled universities can offer online programs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-600">No geographical restrictions for admission</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-600">Minimum 70% content should be online</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-600">Proctored online examinations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-600">Digital learning management systems mandatory</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-600">Same eligibility criteria as regular programs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our students who are thriving in their online education journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-900">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">{testimonial.role}</CardDescription>
                    </div>
                  </div>

                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  <div className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mb-4">
                    {testimonial.program}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Your Success Story
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-lg opacity-90">
              Let us help you find the right online program for your career growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold">Campus Disha</p>
                    <p className="opacity-90">Residency Road, Lal Chowk</p>
                    <p className="opacity-90">Srinagar, J&K - 190001</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="opacity-90">+91 9469328661</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="opacity-90">contact@campusdisha.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    🌐
                  </div>
                  <div>
                    <p className="font-semibold">Website</p>
                    <p className="opacity-90">www.online.campusdisha.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-white/70"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-white/70"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-white/70"
                />
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder-white/70"
                />
                <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Send Message
                </Button>
              </form>
            </div>
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
                <li><Link href="#home" className="hover:text-white transition">Home</Link></li>
                <li><Link href="#about" className="hover:text-white transition">About Online Education</Link></li>
                <li><Link href="#universities" className="hover:text-white transition">Partner Universities</Link></li>
                <li><Link href="#ugc-guidelines" className="hover:text-white transition">UGC Guidelines</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>University Admissions</li>
                <li>Course Counseling</li>
                <li>Career Guidance</li>
                <li>Document Assistance</li>
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