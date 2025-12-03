'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import UniversityCardNew from '@/components/shared/UniversityCardNew'
import {
  AcademicCapIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

interface TopPartnerUniversitiesProps {
  universities: Array<{
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
  }>
}

export default function TopPartnerUniversities({ universities }: TopPartnerUniversitiesProps) {
  const featuredUniversities = universities.slice(0, 6)

  const highlights = [
    {
      icon: AcademicCapIcon,
      label: "500+ Online Programs",
      description: "Wide range of accredited courses"
    },
    {
      icon: BuildingOfficeIcon,
      label: "21+ Partner Universities",
      description: "Top institutions across India"
    },
    {
      icon: CheckCircleIcon,
      label: "100% UGC Approved",
      description: "Valid for government jobs"
    },
    {
      icon: UserGroupIcon,
      label: "5000+ Students Placed",
      description: "Successful career transitions"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <SparklesIcon className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-700">Top-Rated Institutions</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Top Partner
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {" "}Universities
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover quality online education programs from India's leading accredited institutions,
            all UGC-approved and recognized for government jobs and higher education.
          </p>
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <highlight.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{highlight.label}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredUniversities.map((university) => (
            <UniversityCardNew key={university.id} university={university} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <StarIcon className="w-8 h-8 text-yellow-300" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Explore All 21+ Universities
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Find the perfect program that matches your career goals and schedule
            </p>
            <Link href="/universities">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg group">
                View All Universities
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}