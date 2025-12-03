'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Users, MessageCircle, Send, CheckCircle, AlertCircle, Calendar, Globe, Award, BookOpen, Headphones } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    details: ["+91 9469328661", "Mon-Sat: 9 AM - 8 PM", "Sunday: 10 AM - 6 PM"],
    color: "blue"
  },
  {
    icon: Mail,
    title: "Email Support",
    details: ["contact@campusdisha.in", "info@campusdisha.in", "admissions@campusdisha.in"],
    color: "green"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    details: ["+91 9469328661", "Instant responses", "Document sharing"],
    color: "green"
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: ["Residency Road, Lal Chowk", "Srinagar, Jammu & Kashmir", "PIN: 190001"],
    color: "purple"
  }
]

const services = [
  {
    icon: Users,
    title: "Personalized Counseling",
    description: "One-on-one guidance from expert education counselors to help you choose the right program and university based on your career goals, budget, and preferences."
  },
  {
    icon: BookOpen,
    title: "University Admissions",
    description: "Complete assistance from application to admission, including document verification, form filling, and follow-up with universities."
  },
  {
    icon: Award,
    title: "Career Guidance",
    description: "Expert career counseling to help you understand job prospects, salary expectations, and growth opportunities in your chosen field."
  },
  {
    icon: Globe,
    title: "Program Information",
    description: "Detailed information about all online programs, eligibility criteria, fee structure, and admission timelines across all partner universities."
  }
]

const faqs = [
  {
    question: "How quickly will I get a response after submitting the form?",
    answer: "We typically respond within 24 hours on working days. For urgent queries, you can call us directly at +91 9469328661."
  },
  {
    question: "Is the counseling service free?",
    answer: "Yes, we provide free career counseling and guidance to help you make informed decisions about your online education journey."
  },
  {
    question: "What documents do I need for admission counseling?",
    answer: "Basic educational documents (10th, 12th, bachelor's degree marksheets), ID proof, and work experience documents (if applicable)."
  },
  {
    question: "Can I get counseling for multiple programs?",
    answer: "Absolutely! Our counselors will help you explore multiple program options and universities to find the best fit for your career goals."
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes, we provide career guidance and connect you with placement assistance opportunities offered by our partner universities."
  }
]

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM", status: "available" },
  { day: "Saturday", hours: "9:00 AM - 6:00 PM", status: "available" },
  { day: "Sunday", hours: "10:00 AM - 6:00 PM", status: "available" },
  { day: "Public Holidays", hours: "10:00 AM - 4:00 PM", status: "limited" }
]

const inquiryTypes = [
  "Program Information",
  "Admission Guidance",
  "Career Counseling",
  "Fee Structure",
  "Document Assistance",
  "University Selection",
  "Placement Support",
  "Technical Support",
  "Other"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    university: '',
    program: '',
    message: '',
    preferredTime: ''
  })
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

    if (!formData.inquiryType) {
      errors.inquiryType = 'Please select an inquiry type'
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Please provide more details (minimum 10 characters)'
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
          formType: 'contact-page',
          timestamp: new Date().toISOString()
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          university: '',
          program: '',
          message: '',
          preferredTime: ''
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
                <p className="text-xs text-gray-600">Contact Us</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
              <Link href="/universities" className="text-gray-600 hover:text-blue-600 transition">Universities</Link>
              <Link href="/success-stories" className="text-gray-600 hover:text-blue-600 transition">Success Stories</Link>
              <Link href="/ugc-guidelines" className="text-gray-600 hover:text-blue-600 transition">UGC Guidelines</Link>
              <Link href="/contact" className="text-blue-600 font-medium">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Headphones className="w-4 h-4 mr-2" />
              We're Here to Help
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Our Education Experts
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Have questions about online education? Need guidance choosing the right program or university?
              Our expert counselors are here to help you make informed decisions about your educational journey.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Response Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">&lt;1hr</div>
              <div className="text-sm text-gray-600">Avg. Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Free</div>
              <div className="text-sm text-gray-600">Counseling Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to get in touch with our education experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardHeader>
                  <div className={`w-20 h-20 bg-${method.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className={`w-10 h-10 text-${method.color}-600`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {method.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-600">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {method.title === "Phone Support" && (
                    <Link href="tel:+919469328661">
                      <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                        Call Now
                      </Button>
                    </Link>
                  )}
                  {method.title === "WhatsApp Support" && (
                    <Link href="https://wa.me/919469328661" target="_blank">
                      <Button className="mt-4 bg-green-600 hover:bg-green-700">
                        Message on WhatsApp
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900 mb-2">Send Us a Message</CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and our experts will get back to you soon
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({...formData, name: e.target.value})
                            if (formErrors.name) {
                              setFormErrors({...formErrors, name: ''})
                            }
                          }}
                          className={`border-gray-300 focus:border-blue-500 ${formErrors.name ? 'border-red-500' : ''}`}
                          required
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <Input
                          type="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({...formData, email: e.target.value})
                            if (formErrors.email) {
                              setFormErrors({...formErrors, email: ''})
                            }
                          }}
                          className={`border-gray-300 focus:border-blue-500 ${formErrors.email ? 'border-red-500' : ''}`}
                          required
                        />
                        {formErrors.email && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Input
                        type="tel"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({...formData, phone: e.target.value})
                          if (formErrors.phone) {
                            setFormErrors({...formErrors, phone: ''})
                          }
                        }}
                        className={`border-gray-300 focus:border-blue-500 ${formErrors.phone ? 'border-red-500' : ''}`}
                        required
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                      )}
                    </div>

                    <div>
                      <Select onValueChange={(value) => {
                        setFormData({...formData, inquiryType: value})
                        if (formErrors.inquiryType) {
                          setFormErrors({...formErrors, inquiryType: ''})
                        }
                      }}>
                        <SelectTrigger className={`border-gray-300 focus:border-blue-500 ${formErrors.inquiryType ? 'border-red-500' : ''}`}>
                          <SelectValue placeholder="Inquiry Type *" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {formErrors.inquiryType && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.inquiryType}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Preferred University (Optional)"
                        value={formData.university}
                        onChange={(e) => setFormData({...formData, university: e.target.value})}
                        className="border-gray-300 focus:border-blue-500"
                      />

                      <Input
                        placeholder="Preferred Program (Optional)"
                        value={formData.program}
                        onChange={(e) => setFormData({...formData, program: e.target.value})}
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <Textarea
                        placeholder="Tell us about your requirements *"
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({...formData, message: e.target.value})
                          if (formErrors.message) {
                            setFormErrors({...formErrors, message: ''})
                          }
                        }}
                        rows={5}
                        className={`border-gray-300 focus:border-blue-500 ${formErrors.message ? 'border-red-500' : ''}`}
                        required
                      />
                      {formErrors.message && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                      )}
                    </div>

                    <Input
                      placeholder="Preferred callback time (Optional)"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                      className="border-gray-300 focus:border-blue-500"
                    />

                    {submitSuccess && (
                      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Thank you for your message! We'll get back to you within 24 hours.
                        </div>
                      </div>
                    )}

                    {formErrors.submit && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                        <div className="flex items-center">
                          <AlertCircle className="w-5 h-5 mr-2" />
                          {formErrors.submit}
                        </div>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg"
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
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Info & Services */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <Clock className="w-6 h-6 mr-3 text-blue-600" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{schedule.day}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-600">{schedule.hours}</span>
                          {schedule.status === 'available' && (
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          )}
                          {schedule.status === 'limited' && (
                            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      We respond faster during working hours (9 AM - 8 PM)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Our Services */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How We Can Help</h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and online education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                    <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our counselors in person at our Srinagar office for personalized guidance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-0 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                    Office Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-3" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Residency Road, Lal Chowk, Srinagar</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Address:</h4>
                    <p className="text-gray-600">
                      Campus Disha<br />
                      Residency Road, Lal Chowk<br />
                      Srinagar, Jammu & Kashmir<br />
                      PIN: 190001
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Getting Here:</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• Near Lal Chowk Bus Stand</li>
                      <li>• Walking distance from Dal Lake</li>
                      <li>• Auto-rickshaw available from anywhere in Srinagar</li>
                      <li>• Parking available nearby</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <Users className="w-6 h-6 mr-3 text-blue-600" />
                    Meet Our Counselors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xl">RK</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Rahul Kumar</h4>
                        <p className="text-gray-600 text-sm">Senior Education Counselor</p>
                        <p className="text-gray-500 text-xs">10+ years experience</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xl">AS</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Anita Sharma</h4>
                        <p className="text-gray-600 text-sm">Admission Specialist</p>
                        <p className="text-gray-500 text-xs">8+ years experience</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <MessageCircle className="w-6 h-6 mr-3 text-blue-600" />
                    Quick Connect Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="tel:+919469328661">
                    <Button className="w-full bg-green-600 hover:bg-green-700 mb-3">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </Link>

                  <Link href="https://wa.me/919469328661" target="_blank">
                    <Button className="w-full bg-green-600 hover:bg-green-700 mb-3">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </Button>
                  </Link>

                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Appointment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Education Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Take the first step towards your dream career. Our expert counselors are ready to guide you through every step of the admission process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/universities">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Programs
              </Button>
            </Link>
            <Link href="/success-stories">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                <Award className="w-5 h-5 mr-2" />
                Read Success Stories
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

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Campus Disha. All rights reserved. | Your Gateway to Quality Online Education</p>
          </div>
        </div>
      </footer>
    </div>
  )
}