'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  ClockIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  DevicePhoneMobileIcon,
  CalendarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ChartBarIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function OnlineVsTraditional() {
  const onlineBenefits = [
    {
      icon: ClockIcon,
      title: "Flexible Schedule",
      description: "Study at your own pace, anytime anywhere",
      color: "blue"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Cost Effective",
      description: "Save 60% on accommodation and transportation",
      color: "green"
    },
    {
      icon: AcademicCapIcon,
      title: "Equal Recognition",
      description: "UGC-approved degrees with same value as regular programs",
      color: "purple"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Work-Study Balance",
      description: "Continue working while pursuing education",
      color: "orange"
    }
  ]

  const comparisonData = [
    {
      feature: "Format",
      online: "Flexible Self-Paced",
      traditional: "Fixed Schedule",
      onlineBadge: "success",
      traditionalBadge: "secondary"
    },
    {
      feature: "Cost",
      online: "40-60% Lower",
      traditional: "Higher",
      onlineBadge: "success",
      traditionalBadge: "destructive"
    },
    {
      feature: "Recognition",
      online: "UGC Entitled",
      traditional: "UGC Approved",
      onlineBadge: "success",
      traditionalBadge: "success"
    },
    {
      feature: "Learning",
      online: "Digital & Interactive",
      traditional: "Classroom Based",
      onlineBadge: "default",
      traditionalBadge: "default"
    }
  ]

  const stats = [
    {
      icon: UserGroupIcon,
      value: "2.5 Cr+",
      label: "Students in Online Programs"
    },
    {
      icon: ChartBarIcon,
      value: "95%",
      label: "Placement Success Rate"
    },
    {
      icon: AcademicCapIcon,
      value: "500+",
      label: "Program Options"
    }
  ]

  const getBadgeVariant = (variant: string) => {
    switch (variant) {
      case 'success': return 'default'
      case 'destructive': return 'destructive'
      case 'secondary': return 'secondary'
      default: return 'outline'
    }
  }

  const getBadgeClass = (variant: string) => {
    switch (variant) {
      case 'success': return 'bg-green-100 text-green-800 hover:bg-green-200'
      case 'destructive': return 'bg-red-100 text-red-800 hover:bg-red-200'
      case 'secondary': return 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      default: return 'bg-blue-100 text-blue-800 hover:bg-blue-200'
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-100 rounded-full mb-6">
            <SparklesIcon className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-sm font-semibold text-green-700">Smart Learning Choice</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Online vs
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              {" "}Traditional Degrees
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Make an informed decision about your education journey. Compare the benefits and choose what works best for your lifestyle and career goals.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {onlineBenefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-${benefit.color}-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-6 h-6 text-${benefit.color}-600`} />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Side-by-side Comparison */}
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold text-gray-900">Quick Comparison</h3>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Online vs Traditional Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {comparisonData.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 gap-3">
                      <div className="text-sm font-semibold text-gray-700 mb-1">{item.feature}</div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center">
                          <Badge className={`${getBadgeClass(item.onlineBadge)} text-xs px-3 py-1 flex-1 justify-center`}>
                            {item.online}
                          </Badge>
                        </div>
                        <div className="flex items-center">
                          <Badge className={`${getBadgeClass(item.traditionalBadge)} text-xs px-3 py-1 flex-1 justify-center`}>
                            {item.traditional}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Statistics */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Online Education Impact</h3>

            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <stat.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <CheckCircleIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still Deciding?
            </h3>
            <p className="text-green-100 mb-6 text-lg">
              Get detailed comparison and expert guidance to choose the right path
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/online-vs-traditional">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg group">
                  Detailed Comparison
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}