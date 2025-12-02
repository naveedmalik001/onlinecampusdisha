'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Star, CheckCircle, TrendingUp, Users, Award, BookOpen, MapPin, Phone, Mail, Clock, Play, Shield, Globe, DollarSign, Target } from 'lucide-react'

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
    description: "Study when you want, where you want. Complete flexibility for working professionals.",
    features: [
      "Self-paced learning modules",
      "24/7 access to study materials",
      "No mandatory attendance requirements",
      "Pause and resume your program anytime"
    ],
    iconColor: "from-blue-500 to-blue-600"
  },
  {
    icon: Shield,
    title: "UGC Recognized Degrees",
    description: "All degrees are UGC-entitled and hold equal value to traditional degrees.",
    features: [
      "UGC Entitled Degrees 2024-25",
      "NAAC & AICTE Approved Universities",
      "Valid for government jobs & promotions",
      "Eligible for higher education worldwide"
    ],
    iconColor: "from-green-500 to-green-600"
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description: "Enhance your skills and advance your career without leaving your current job.",
    features: [
      "Apply learning immediately at workplace",
      "Get promotions while studying",
      "Industry-ready practical skills",
      "Access to alumni network & placement support"
    ],
    iconColor: "from-purple-500 to-purple-600"
  },
  {
    icon: Award,
    title: "Industry-Relevant Curriculum",
    description: "Curriculum designed with industry inputs to meet current market demands.",
    features: [
      "Real-world case studies & projects",
      "Expert faculty from industry",
      "Regular curriculum updates",
      "Practical assessments & assignments"
    ],
    iconColor: "from-orange-500 to-orange-600"
  },
  {
    icon: Globe,
    title: "Global Recognition",
    description: "Online degrees from Indian universities recognized globally for career opportunities.",
    features: [
      "WES & IQAS evaluation assistance",
      "International job opportunities",
      "Global alumni network",
      "Transfer credits for higher studies abroad"
    ],
    iconColor: "from-pink-500 to-pink-600"
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Education",
    description: "Save up to 70% compared to traditional programs without compromising quality.",
    features: [
      "No accommodation or travel costs",
      "Continue earning while learning",
      "EMI payment options available",
      "Scholarships & financial aid"
    ],
    iconColor: "from-indigo-500 to-indigo-600"
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

      {/* Enhanced Hero Section - Mobile Optimized */}
      <section className="relative min-h-[100vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='43' cy='7' r='1'/%3E%3Ccircle cx='25' cy='7' r='1'/%3E%3Ccircle cx='7' cy='43' r='1'/%3E%3Ccircle cx='43' cy='43' r='1'/%3E%3Ccircle cx='25' cy='43' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.2
        }}></div>

        {/* Floating gradient orbs - Smaller on mobile */}
        <div className="absolute top-10 left-10 w-32 h-32 lg:w-72 lg:h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-2xl lg:blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-10 w-40 h-40 lg:w-96 lg:h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-2xl lg:blur-3xl opacity-20 animate-pulse lg:delay-1000"></div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-36 h-36 lg:w-80 lg:h-80 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-2xl lg:blur-3xl opacity-20 animate-pulse lg:delay-2000"></div>

        <div className="relative z-10 container mx-auto px-4 pt-16 lg:pt-20 pb-16 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content - Mobile Optimized */}
            <div className="space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1">
              {/* Badge - Smaller on mobile */}
              <div className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs lg:text-sm font-medium hover:bg-white/20 transition-all duration-300">
                <Shield className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 text-blue-400" />
                UGC-Approved Online Degrees
                <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 ml-2 text-green-400" />
              </div>

              {/* Main Heading - Responsive */}
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                  Transform Your Future
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-shift">
                    Online Excellence
                  </span>
                </h1>

                {/* Social Proof - Hidden on mobile, stacked on tablet */}
                <div className="hidden sm:flex lg:hidden items-center space-x-3 text-white/80">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm lg:text-lg"><span className="font-bold text-white">10,000+</span> Students</span>
                </div>

                {/* Desktop version */}
                <div className="hidden lg:flex items-center space-x-4 text-white/80">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-lg">Join <span className="font-bold text-white">10,000+ Students</span> already learning</span>
                </div>
              </div>

              {/* Enhanced Description - Mobile Optimized */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10">
                <div className="space-y-3 text-sm lg:text-xl text-white/90 leading-relaxed">
                  <div>
                    🎓 Connect with India's <span className="font-bold text-blue-400">top 20+ universities</span>
                  </div>
                  <div>
                    🚀 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">100% flexibility</span> for working professionals
                  </div>
                  <div>
                    💼 Study while working with UGC-entitled degrees
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Buttons - Mobile Stack */}
              <div className="flex flex-col sm:flex-col lg:flex-row gap-3 lg:gap-4">
                <Link href="/universities">
                  <Button size="lg" className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-semibold text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border border-white/20">
                    <span className="flex items-center justify-center">
                      Explore Universities
                      <ArrowRight className="ml-2 lg:ml-3 w-5 h-5 lg:w-6 lg:h-6 animate-bounce-right" />
                    </span>
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full lg:w-auto px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  <Play className="mr-2 lg:mr-3 w-5 h-5 lg:w-6 lg:h-6" />
                  Watch Demo
                </Button>
              </div>

              {/* Enhanced Stats - Mobile Optimized */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg lg:rounded-xl p-3 lg:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex justify-center mb-2 lg:mb-3">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-1">{stat.number}</h3>
                    <p className="text-xs lg:text-sm text-white/70 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Enrollment Form - Mobile Optimized */}
            <div className="relative order-1 lg:order-2">
              {/* Glow effect behind form */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl lg:rounded-3xl blur-2xl lg:blur-3xl opacity-30"></div>

              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-2xl p-6 lg:p-8 border border-white/20">
                <div className="text-center mb-6 lg:mb-8">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                    <Award className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 lg:mb-3">Start Your Journey</h3>
                  <p className="text-sm lg:text-base text-white/80">Get free counseling from education experts</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      placeholder="Full Name"
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
                      <p className="text-red-400 text-xs lg:text-sm mt-1 animate-shake">{formErrors.name}</p>
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
                      <p className="text-red-400 text-xs lg:text-sm mt-1 animate-shake">{formErrors.email}</p>
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
                      <p className="text-red-400 text-xs lg:text-sm mt-1 animate-shake">{formErrors.phone}</p>
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
                      <p className="text-red-400 text-xs lg:text-sm mt-1 animate-shake">{formErrors.university}</p>
                    )}
                  </div>

                  {submitSuccess && (
                    <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-3 py-3 lg:px-4 lg:py-4 rounded-xl animate-slide-down text-sm lg:text-base">
                      ✅ Thank you! We'll contact you soon.
                    </div>
                  )}

                  {formErrors.submit && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-3 py-3 lg:px-4 lg:py-4 rounded-xl animate-shake text-sm lg:text-base">
                      {formErrors.submit}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 lg:py-4 text-base lg:text-lg font-semibold text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 lg:h-6 lg:w-6 mr-3" viewBox="0 0 24 24">
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
                <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-white/20">
                  <p className="text-center text-white/60 text-xs lg:text-sm mb-2 lg:mb-3">Trusted by students across India</p>
                  <div className="flex justify-center space-x-3 lg:space-x-4">
                    <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-green-400" />
                    <span className="text-white/80 text-xs lg:text-sm">Secure</span>
                    <Award className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400 lg:ml-3" />
                    <span className="text-white/80 text-xs lg:text-sm">Expert Guidance</span>
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

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Online Education?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Experience the future of learning with flexible, affordable, and career-focused online programs designed for working professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${benefit.iconColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
                    {benefit.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Universities - Enhanced */}
      <section className="py-16 lg:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-5 h-5 mr-2" />
              Top Ranked Universities in India
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Learn from India's Best</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Partner with India's most prestigious institutions offering UGC-entitled programs with
              <span className="font-bold text-blue-600">100% placement assistance</span> and
              <span className="font-bold text-purple-600">global recognition</span>
            </p>
            <Link href="/universities">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                Explore All 20+ Universities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {universities.map((university, index) => (
              <Card key={university.name} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden bg-white rounded-2xl">
                <CardHeader className="text-center p-6 pb-4 relative">
                  {/* University Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold z-10">
                    UGC Entitled
                  </div>

                  {/* Logo Placeholder */}
                  <div className="w-full h-24 lg:h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg lg:text-xl">
                          {university.name.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      <span className="text-gray-700 font-semibold text-sm lg:text-base">{university.name}</span>
                    </div>
                  </div>

                  <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {university.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {university.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6 space-y-4">
                  {/* Accreditation Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {university.accreditation.map((acc, accIndex) => (
                      <span key={accIndex} className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs px-3 py-1.5 rounded-full font-medium border border-blue-200">
                        {accIndex === 0 && <CheckCircle className="w-3 h-3 mr-1 text-green-500" />}
                        {acc}
                      </span>
                    ))}
                  </div>

                  {/* Program Highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      <span>NAAC {university.name === 'MAHE Online' || university.name === 'Manipal University Online' ? 'A++' : university.name === 'NMIMS Online' ? 'A+' : 'A+'} Accredited</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <Users className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span>50,000+ Alumni Worldwide</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <Globe className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>Global Recognition</span>
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <Link
                    href={university.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 lg:py-4 text-base lg:text-lg font-semibold text-white shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 group-hover:from-purple-600 group-hover:to-blue-600">
                      <span className="flex items-center justify-center">
                        {university.name.includes('NMIMS') || university.name.includes('SRM') ? 'Apply Now' : 'Learn More'}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>

                  {/* Additional Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
                    <span>Admissions Open 2025</span>
                    <span className="flex items-center">
                      <Shield className="w-3 h-3 mr-1 text-green-500" />
                      Verified
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Universities Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">More Partner Universities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {['Chandigarh University', 'LPU Online', 'Amrita Vishwa', 'Jain Online', 'GLA University', 'Sharda Online', 'SRM Institute', 'UPES Online'].map((uni, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                    {uni}
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                <span className="font-bold text-blue-600">20+ Top Universities</span> offering UGC-entitled programs in Management, Technology, Arts, Commerce, and Science streams
              </p>
              <Link href="/universities">
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 font-semibold">
                  View Complete List
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Success Stories Section */}
      <section className="py-16 lg:py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Users className="w-5 h-5 mr-2" />
              Real Student Success Stories
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Transforming Careers Through Online Education</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
              Discover how our students are <span className="font-bold text-blue-600">achieving remarkable career growth</span> while learning flexibly
            </p>

            {/* Success Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-blue-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-blue-600">45%</h3>
                  <p className="text-sm text-gray-600">Average Salary Growth</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-green-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-green-600">98%</h3>
                  <p className="text-sm text-gray-600">Student Satisfaction</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-purple-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-purple-600">500+</h3>
                  <p className="text-sm text-gray-600">Success Stories</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-orange-100">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-orange-600">85%</h3>
                  <p className="text-sm text-gray-600">Career Advancement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial: any, index) => (
              <Card key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden bg-white rounded-2xl">
                <CardHeader className="relative p-6 pb-4">
                  {/* Featured Badge for first two */}
                  {index < 2 && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold z-10 animate-pulse">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}

                  {/* Student Profile */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative">
                      {/* Avatar placeholder */}
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl lg:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                      </div>
                      {/* University Badge */}
                      <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        {testimonial.university?.split(' ')[0] ?? ''}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="mb-2">
                        <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="text-sm lg:text-base text-gray-600 font-medium">
                          {testimonial.role}
                        </CardDescription>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-2 text-sm font-semibold text-gray-700">
                          {testimonial.rating}.0/5
                        </span>
                      </div>

                      {/* Program & Batch */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        <div className="inline-flex items-center bg-blue-100 text-blue-700 text-xs px-3 py-1.5 rounded-full font-medium">
                          <BookOpen className="w-3 h-3 mr-1" />
                          {testimonial.program}
                        </div>
                        <div className="inline-flex items-center bg-purple-100 text-purple-700 text-xs px-3 py-1.5 rounded-full font-medium">
                          <Users className="w-3 h-3 mr-1" />
                          Batch {testimonial.batch}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  {/* Achievement Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {testimonial.achievements.slice(0, 3).map((achievement: string, achIndex: number) => (
                      <span key={achIndex} className="inline-flex items-center bg-gradient-to-r from-green-50 to-blue-50 text-green-700 text-xs px-3 py-1.5 rounded-full font-medium border border-green-200">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {achievement}
                      </span>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-700 italic leading-relaxed text-base lg:text-lg mb-4">
                    "{testimonial.content}"
                  </p>

                  {/* Career Progress */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm lg:text-base">Career Progress</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-700">
                          <span className="font-medium">Location:</span> {testimonial.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-gray-700">
                          <span className="font-medium">Duration:</span> {testimonial.duration}
                        </span>
                      </div>
                      {testimonial.previousSalary !== "N/A" && testimonial.newSalary !== "N/A" && (
                        <div className="flex items-center space-x-2 col-span-full">
                          <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">
                            <span className="font-medium">Salary Growth:</span> {testimonial.previousSalary} → {testimonial.newSalary}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700">
                          <span className="font-medium">Experience:</span> {testimonial.previousExperience}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 lg:mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                Join thousands of students who have transformed their careers through online education
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/universities">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                    <span className="flex items-center">
                      Start Your Journey
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </span>
                  </Button>
                </Link>
                <Link href="/success-stories">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                    <span className="flex items-center">
                      Read All Stories
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">10K+</h3>
                <p className="text-sm text-gray-600">Success Stories</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">4.9</h3>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">45%</h3>
                <p className="text-sm text-gray-600">Avg. Salary Growth</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">98%</h3>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
            </div>
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