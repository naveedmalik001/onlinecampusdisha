import Link from 'next/link'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Hero from '../components/shared/Hero'
import UniversityCard from '../components/shared/UniversityCard'
import TopPartnerUniversities from '../components/sections/TopPartnerUniversities'
import OnlineVsTraditional from '../components/sections/OnlineVsTraditional'
import FAQs from '../components/sections/FAQs'
import universities from '../data/universities.json'
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
  TrophyIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
  StarIcon
} from '@heroicons/react/24/solid'

// Type definitions for universities
interface University {
  id: number
  name: string
  slug: string
  location: string
  landing?: string
  established?: string
  description: string
  programs: string[]
  accredited: boolean
  rating?: number
  image_url?: string
}

export default function HomePage() {
  // Display first 6 universities on homepage
  const featuredUniversities: University[] = (universities as University[]).slice(0, 6)

  const stats = [
    {
      Icon: AcademicCapIcon,
      number: '500+',
      text: 'Online Programs'
    },
    {
      Icon: BuildingLibraryIcon,
      number: '21',
      text: 'Partner Universities'
    },
    {
      Icon: UserGroupIcon,
      number: '5000+',
      text: 'Students Placed'
    },
    {
      Icon: TrophyIcon,
      number: '100%',
      text: 'UGC Approved'
    }
  ]

  const howItWorks = [
    {
      step: '1',
      Icon: MagnifyingGlassIcon,
      title: 'Explore Programs',
      description: 'Browse through 500+ online degree programs from 21 accredited universities.'
    },
    {
      step: '2',
      Icon: PhoneIcon,
      title: 'Get Counseling',
      description: 'Receive free, personalized guidance from our expert education counselors.'
    },
    {
      step: '3',
      Icon: CheckCircleIcon,
      title: 'Apply Successfully',
      description: 'Complete your application with our end-to-end support and secure your admission.'
    }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      program: 'MBA Online',
      university: 'NMIMS',
      text: 'Campus Disha made my online MBA admission process seamless. The counseling was extremely helpful!'
    },
    {
      name: 'Rahul Kumar',
      program: 'BCA Online',
      university: 'Amity',
      text: 'Great support throughout the admission process. They helped me choose the right program and university.'
    },
    {
      name: 'Anjali Patel',
      program: 'MCA Online',
      university: 'SRM',
      text: 'The counselors were very knowledgeable and helped me understand the online education landscape better.'
    }
  ]

  const faqs = [
    {
      question: 'Are online degrees recognized in India?',
      answer: 'Yes, online degrees from UGC-approved universities are valid and recognized at par with regular degrees for government jobs and higher education.'
    },
    {
      question: 'Can I get government jobs with online degrees?',
      answer: 'Absolutely! Online degrees from UGC-entitled universities are valid for all government jobs, competitive exams, and higher education admissions.'
    },
    {
      question: 'What is the admission process for online programs?',
      answer: 'The process typically involves filling out an application form, submitting required documents, and sometimes qualifying through entrance exams or merit-based selection.'
    },
    {
      question: 'Is financial aid available for online degree programs?',
      answer: 'Many universities offer scholarships and education loans for online programs. Our counselors can help you explore financial aid options.'
    }
  ]


  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                    <stat.Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Universities Section */}
        <TopPartnerUniversities universities={universities} />

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple three-step process to get started with your online education journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <div
                  key={index}
                  className="relative text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Connection Line */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200" />
                  )}

                  <div className="relative inline-block mb-8">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl" />

                    {/* Step Number Circle */}
                    <div className="relative w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                      <span className="text-3xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6">
                    <step.Icon className="w-8 h-8 text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Online vs Traditional Section */}
        <OnlineVsTraditional />

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Students Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real experiences from students who transformed their careers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 animate-fade-in relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Quote Mark */}
                  <div className="absolute top-4 right-4 text-6xl text-gray-200 opacity-50 font-serif">
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-8 leading-relaxed text-lg relative z-10">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.program} • {testimonial.university}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQs />

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Online Education Journey?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Get free counseling and explore 500+ online degree programs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
              >
                <CalendarDaysIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Book Free Counseling
              </Link>
              <Link
                href="/universities"
                className="group px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <MagnifyingGlassIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Explore Programs
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}