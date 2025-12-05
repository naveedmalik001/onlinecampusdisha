'use client'

import Link from 'next/link'
import {
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  AcademicCapIcon,
  ClockIcon,
  ShieldCheckIcon,
  PercentBadgeIcon,
  CheckCircleIcon,
  TrophyIcon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/solid'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full">
                <CheckCircleIcon className="w-5 h-5 mr-2 text-green-400" />
                <span className="text-green-100 font-semibold">UGC Approved</span>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full">
                <TrophyIcon className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-yellow-100 font-semibold">21+ Universities</span>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full">
                <UserGroupIcon className="w-5 h-5 mr-2 text-cyan-400" />
                <span className="text-cyan-100 font-semibold">5000+ Students</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Find Your Perfect
                <span className="block text-yellow-400">Online Degree</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
                Your trusted gateway to accredited online programs from India's top universities.
                Free counseling, simple applications, and guaranteed admission support.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/universities"
                className="group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center"
              >
                <MagnifyingGlassIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Explore Programs
                <SparklesIcon className="w-4 h-4 ml-2 opacity-70" />
              </Link>
              <Link
                href="/contact"
                className="group px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <CalendarDaysIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Free Counseling
              </Link>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {[
                {
                  icon: AcademicCapIcon,
                  title: 'Expert Guidance',
                  animationDelay: '0s'
                },
                {
                  icon: ClockIcon,
                  title: 'Flexible Learning',
                  animationDelay: '0.2s'
                },
                {
                  icon: ShieldCheckIcon,
                  title: 'Verified Universities',
                  animationDelay: '0.4s'
                },
                {
                  icon: PercentBadgeIcon,
                  title: 'No Hidden Fees',
                  animationDelay: '0.6s'
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-3 animate-float"
                  style={{ animationDelay: benefit.animationDelay }}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-semibold text-sm">{benefit.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Card */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-3xl blur-xl opacity-30 animate-pulse" />

              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse-glow">
                      <AcademicCapIcon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Start Your Journey Today</h3>
                      <p className="text-white/80">Join thousands of successful graduates</p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { number: '500+', label: 'Programs', delay: '0s' },
                      { number: '21', label: 'Universities', delay: '0.1s' },
                      { number: '50+', label: 'Specializations', delay: '0.2s' }
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="text-center animate-scale-in"
                        style={{ animationDelay: stat.delay }}
                      >
                        <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                          {stat.number}
                        </div>
                        <div className="text-white/80 text-sm mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Success Alert */}
                  <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-4 flex items-center space-x-3 animate-slide-up">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-green-100 font-medium">100% Free Admission Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.5); }
          50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.8); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}