'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import { ArrowRight, Star, CheckCircle, TrendingUp, Users, Award, BookOpen, MapPin, Phone, Mail, Clock, Play, Shield, Globe } from 'lucide-react'

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
    name: "MAHE Online",
    logo: "/universities/mahe.png",
    link: "https://mahe.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=MAHEUNIVERISTY",
    description: "Institute of Eminence offering world-class online programs",
    accreditation: ["UGC Entitled", "NAAC A++", "IoE Status"]
  },
  {
    name: "Manipal University Online",
    logo: "/universities/manipal.png",
    link: "https://muj.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=ManipalLandingpage",
    description: "Manipal Academy of Higher Education - Institute of Eminence",
    accreditation: ["UGC Entitled", "NAAC A++", "IoE Status"]
  },
  {
    name: "Amity Online",
    logo: "/universities/amity.png",
    link: "https://amity.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=amityonline",
    description: "Top-ranked private university with global recognition",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
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
    content: "The flexibility of online learning allowed me to pursue my master's while working full-time. Campus Disha guided me through the entire admission process.",
    rating: 5,
    program: "MBA"
  },
  {
    name: "Rahul Verma",
    role: "BBA Student, SRM Online",
    content: "Excellent support from Campus Disha team. They helped me choose the right program and university based on my career goals.",
    rating: 5,
    program: "BBA"
  },
  {
    name: "Anita Patel",
    role: "MCA Student, Manipal Online",
    content: "The quality of education is outstanding, and the UGC recognition gives me confidence for my future career prospects.",
    rating: 5,
    program: "MCA"
  }
]

const stats = [
  { number: "20+", label: "Partner Universities", icon: Globe },
  { number: "100+", label: "Online Programs", icon: BookOpen },
  { number: "10K+", label: "Students Guided", icon: Users },
  { number: "98%", label: "Satisfaction Rate", icon: Award }
]

const benefits = [
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Study when you want, where you want. Complete flexibility for working professionals."
  },
  {
    icon: Shield,
    title: "UGC Recognized",
    description: "All degrees are UGC-entitled and hold equal value to traditional degrees."
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Enhance your skills and advance your career without leaving your job."
  },
  {
    icon: Award,
    title: "Industry Relevant",
    description: "Curriculum designed with industry inputs to meet current market demands."
  }
]

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    message: ''
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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
          formType: 'home-page',
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
          message: ''
        })
        setFormErrors({})
      } else {
        throw new Error('Form submission failed')
      }
    } catch {
      setFormErrors({ submit: 'Failed to submit form. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Modern Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">CD</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Campus Disha</h1>
                <p className="text-xs text-gray-600">Online Education Excellence</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 font-medium hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
              <Link href="/universities" className="text-gray-600 hover:text-blue-600 transition">Universities</Link>
              <Link href="/success-stories" className="text-gray-600 hover:text-blue-600 transition">Success Stories</Link>
              <Link href="/ugc-guidelines" className="text-gray-600 hover:text-blue-600 transition">UGC Guidelines</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
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
            <nav className="lg:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-900 font-medium hover:text-blue-600 transition py-2">Home</Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition py-2">About</Link>
                <Link href="/universities" className="text-gray-600 hover:text-blue-600 transition py-2">Universities</Link>
                <Link href="/success-stories" className="text-gray-600 hover:text-blue-600 transition py-2">Success Stories</Link>
                <Link href="/ugc-guidelines" className="text-gray-600 hover:text-blue-600 transition py-2">UGC Guidelines</Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition py-2">Contact</Link>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">Get Started</Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='43' cy='7' r='1'/%3E%3Ccircle cx='25' cy='7' r='1'/%3E%3Ccircle cx='7' cy='43' r='1'/%3E%3Ccircle cx='43' cy='43' r='1'/%3E%3Ccircle cx='25' cy='43' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.2
        }}></div>

        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300">
                <Shield className="w-5 h-5 mr-3 text-blue-400" />
                UGC-Approved Online Degrees
                <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                  Transform Your Future with
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-shift">
                    Online Excellence
                  </span>
                </h1>

                <div className="flex items-center space-x-4 text-white/80">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-lg">Join <span className="font-bold text-white">10,000+ Students</span> already learning</span>
                </div>
              </div>

              {/* Enhanced Description */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <p className="text-xl text-white/90 leading-relaxed">
                  🎓 Connect with India's <span className="font-bold text-blue-400">top 20+ universities</span> offering UGC-entitled online programs.
                  <br /><br />
                  🚀 Study at your own pace with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">100% flexibility</span> while advancing your career.
                </p>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/universities">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg font-semibold text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="flex items-center">
                      Explore Universities
                      <ArrowRight className="ml-3 w-6 h-6 animate-bounce-right" />
                    </span>
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  <Play className="mr-3 w-6 h-6" />
                  Watch Demo
                </Button>
              </div>

              {/* Enhanced Stats with Icons */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-1">{stat.number}</h3>
                    <p className="text-sm text-white/70 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Enrollment Form */}
            <div className="relative">
              {/* Glow effect behind form */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-30"></div>

              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Start Your Journey</h3>
                  <p className="text-white/80">Get free counseling from our education experts</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <Input
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({...formData, name: e.target.value})
                        if (formErrors.name) {
                          setFormErrors({...formErrors, name: ''})
                        }
                      }}
                      className={`bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-blue-400 focus:bg-white/15 ${formErrors.name ? 'border-red-500' : ''}`}
                      required
                    />
                    {formErrors.name && (
                      <p className="text-red-400 text-sm mt-1 animate-shake">{formErrors.name}</p>
                    )}
                  </div>

                  <div className="relative">
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
                      className={`bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-blue-400 focus:bg-white/15 ${formErrors.email ? 'border-red-500' : ''}`}
                      required
                    />
                    {formErrors.email && (
                      <p className="text-red-400 text-sm mt-1 animate-shake">{formErrors.email}</p>
                    )}
                  </div>

                  <div className="relative">
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
                      className={`bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-blue-400 focus:bg-white/15 ${formErrors.phone ? 'border-red-500' : ''}`}
                      required
                    />
                    {formErrors.phone && (
                      <p className="text-red-400 text-sm mt-1 animate-shake">{formErrors.phone}</p>
                    )}
                  </div>

                  <div className="relative">
                    <Select onValueChange={(value) => {
                      setFormData({...formData, university: value})
                      if (formErrors.university) {
                        setFormErrors({...formErrors, university: ''})
                      }
                    }}>
                      <SelectTrigger className={`bg-white/10 border-white/20 text-white focus:border-blue-400 focus:bg-white/15 ${formErrors.university ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Select University" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-white/20">
                        {universities.map((uni) => (
                          <SelectItem key={uni.name} value={uni.name} className="text-white hover:bg-white/10">{uni.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {formErrors.university && (
                      <p className="text-red-400 text-sm mt-1 animate-shake">{formErrors.university}</p>
                    )}
                  </div>

                  {submitSuccess && (
                    <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-4 rounded-xl animate-slide-down">
                      ✅ Thank you for your submission! We'll contact you soon.
                    </div>
                  )}

                  {formErrors.submit && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-4 rounded-xl animate-shake">
                      {formErrors.submit}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-4 text-lg font-semibold text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin h-6 w-6 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      <span className="flex items-center justify-center">
                        🚀 Get Free Counseling
                      </span>
                    )}
                  </Button>
                </form>

                {/* Trust indicators */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-center text-white/60 text-sm mb-3">Trusted by students across India</p>
                  <div className="flex justify-center space-x-4">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-white/80 text-sm">100% Secure</span>
                    <Award className="w-5 h-5 text-blue-400 ml-4" />
                    <span className="text-white/80 text-sm">Expert Guidance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Online Education?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of learning with flexible, affordable, and career-focused online programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Universities */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Universities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Partner with India's most prestigious institutions offering UGC-entitled programs
            </p>
            <Link href="/universities">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View All Universities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university) => (
              <Card key={university.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-full h-20 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 font-semibold text-sm">{university.name}</span>
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

      {/* Success Stories Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our students who are thriving in their online education journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mr-4">
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
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
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
            <Link href="/success-stories">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Read More Success Stories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have advanced their careers through online education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/universities">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                Explore Programs
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                Talk to Counselor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
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
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +91 9469328661</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> contact@campusdisha.in</li>
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Residency Road, Lal Chowk</li>
                <li className="ml-6">Srinagar, J&K - 190001</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Campus Disha. All rights reserved. | Your Gateway to Quality Online Education</p>
          </div>
        </div>
      </footer>
    </div>
  )
}