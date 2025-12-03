'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, DollarSign, Award, Users, BookOpen, TrendingUp, Shield, Target, Lightbulb, BarChart, Globe, Heart } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: "Flexible Learning Schedule",
    description: "Study at your own pace with 24/7 access to learning materials. Balance education with work and personal commitments.",
    features: ["Self-paced learning", "Recorded lectures", "Flexible deadlines", "Part-time options"]
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Education",
    description: "Save up to 60% compared to traditional programs while receiving the same quality education and degree value.",
    features: ["Lower tuition fees", "No accommodation costs", "Continue earning while learning", "EMI options available"]
  },
  {
    icon: Award,
    title: "Equal Recognition & Value",
    description: "UGC-entitled online degrees hold the same value as traditional degrees for jobs, higher education, and government positions.",
    features: ["UGC Entitled", "NAAC Accredited", "Globally recognized", "Same as regular degrees"]
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description: "Enhance your skills and career prospects without leaving your current job. Immediate application of learning.",
    features: ["Industry-relevant curriculum", "Practical projects", "Career support", "Alumni network"]
  }
]

const comparisonData = [
  {
    aspect: "Flexibility",
    online: "Study anytime, anywhere at your own pace",
    traditional: "Fixed schedule, mandatory attendance",
    onlineColor: "text-green-600",
    traditionalColor: "text-red-600"
  },
  {
    aspect: "Cost",
    online: "40-60% lower total cost including living expenses",
    traditional: "Higher fees + accommodation + living costs",
    onlineColor: "text-green-600",
    traditionalColor: "text-red-600"
  },
  {
    aspect: "Degree Recognition",
    online: "UGC-entitled, equal to traditional degrees",
    traditional: "UGC-approved, standard recognition",
    onlineColor: "text-green-600",
    traditionalColor: "text-green-600"
  },
  {
    aspect: "Learning Method",
    online: "Interactive digital platforms, recorded content",
    traditional: "Classroom lectures, physical materials",
    onlineColor: "text-blue-600",
    traditionalColor: "text-blue-600"
  },
  {
    aspect: "Networking",
    online: "Virtual meetups, online forums, webinars",
    traditional: "In-person interactions, campus events",
    onlineColor: "text-blue-600",
    traditionalColor: "text-blue-600"
  },
  {
    aspect: "Career Support",
    online: "Virtual placement assistance, career counseling",
    traditional: "On-campus recruitment, career services",
    onlineColor: "text-green-600",
    traditionalColor: "text-green-600"
  }
]

const eligibilityCriteria = [
  {
    category: "Academic Requirements",
    items: [
      "10+2 for Bachelor's programs (45-50% aggregate)",
      "Bachelor's degree for Master's programs (50-55% aggregate)",
      "Specific subject requirements for specialized courses"
    ]
  },
  {
    category: "Work Experience",
    items: [
      "Not mandatory for most undergraduate programs",
      "1-3 years preferred for MBA and executive programs",
      "Experience can compensate for lower scores in some cases"
    ]
  },
  {
    category: "Age Criteria",
    items: [
      "No upper age limit for most programs",
      "Minimum age: 17 years for UG programs",
      "Minimum age: 21 years for PG programs"
    ]
  },
  {
    category: "Technical Requirements",
    items: [
      "Basic computer skills and internet access",
      "Smartphone/laptop for attending classes",
      "No advanced technical knowledge required"
    ]
  }
]

const careerOutcomes = [
  {
    field: "Business & Management",
    roles: ["Business Analyst", "Project Manager", "Marketing Manager", "HR Manager", "Operations Head"],
    growth: "15-25% average salary growth"
  },
  {
    field: "Information Technology",
    roles: ["Software Developer", "Data Analyst", "IT Consultant", "System Administrator", "Cyber Security Expert"],
    growth: "20-30% average salary growth"
  },
  {
    field: "Healthcare Management",
    roles: ["Hospital Administrator", "Healthcare Manager", "Pharma Business Manager", "Clinical Research Coordinator"],
    growth: "18-28% average salary growth"
  },
  {
    field: "Commerce & Finance",
    roles: ["Financial Analyst", "Account Manager", "Tax Consultant", "Investment Banker", "Risk Manager"],
    growth: "12-20% average salary growth"
  }
]

export default function AboutPage() {
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
                <p className="text-xs text-gray-600">About Online Education</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="text-blue-600 font-medium">About</Link>
              <Link href="/universities" className="text-gray-600 hover:text-blue-600 transition">Universities</Link>
              <Link href="/success-stories" className="text-gray-600 hover:text-blue-600 transition">Success Stories</Link>
              <Link href="/ugc-guidelines" className="text-gray-600 hover:text-blue-600 transition">UGC Guidelines</Link>
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
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Online Education?
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your career with flexible, affordable, and industry-relevant online programs from India's top universities.
              Experience the future of education without compromising on quality or recognition.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">₹1.5L</div>
              <div className="text-sm text-gray-600">Average Fees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2 Years</div>
              <div className="text-sm text-gray-600">Avg. Duration</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Placement Assistance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">UGC</div>
              <div className="text-sm text-gray-600">Recognized Degrees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Benefits of Online Education</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how online learning can accelerate your career while providing flexibility and affordability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">{benefit.title}</CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Online vs Traditional Education</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the key differences to make an informed decision about your educational journey
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="text-center font-bold text-lg">Aspect</div>
              <div className="text-center font-bold text-lg">Online Mode</div>
              <div className="text-center font-bold text-lg">Traditional Mode</div>
            </div>

            <div className="divide-y divide-gray-200">
              {comparisonData.map((row, index) => (
                <div key={index} className="grid grid-cols-3 p-6 hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900 flex items-center">
                    <Target className="w-5 h-5 text-blue-600 mr-3" />
                    {row.aspect}
                  </div>
                  <div className={`text-center ${row.onlineColor}`}>
                    {row.online}
                  </div>
                  <div className={`text-center ${row.traditionalColor}`}>
                    {row.traditional}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear and transparent eligibility requirements for online programs across Indian universities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eligibilityCriteria.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Opportunities & Outcomes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Online education opens doors to diverse career opportunities across multiple sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {careerOutcomes.map((outcome, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <BarChart className="w-8 h-8 text-blue-600" />
                    <CardTitle className="text-xl text-gray-900">{outcome.field}</CardTitle>
                  </div>
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium inline-block">
                    {outcome.growth}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {outcome.roles.map((role, roleIndex) => (
                      <span key={roleIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {role}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Campus Disha */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Campus Disha?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're your trusted partner in navigating the world of online education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  10+ years of experience in online education counseling with 98% student satisfaction rate
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-10 h-10 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">Personalized Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  One-on-one counseling sessions to help you choose the right program and university
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">Lifetime Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From admission to placement, we support you throughout your educational journey
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Online Education Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let our expert counselors help you choose the perfect program and university for your career goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/universities">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Programs
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Talk to Counselor
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