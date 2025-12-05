'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MapPinIcon, BuildingOfficeIcon, AcademicCapIcon, StarIcon, ArrowTopRightOnSquareIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

interface UniversityCardNewProps {
  university: {
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
}

export default function UniversityCardNew({ university }: UniversityCardNewProps) {
  const handleApplyClick = (e: React.MouseEvent) => {
    if (university.landing) {
      // Open landing URL in new tab
      window.open(university.landing, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden shadow-lg">
      <div className="relative">
        <CardHeader className="p-0">
          <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-200 overflow-hidden">
            <Image
              src={university.image_url || `/university-logos/${university.slug}.jpg`}
              alt={`${university.name} Logo`}
              fill
              className="object-cover p-8 mix-blend-multiply"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.onerror = null
                target.src = `data:image/svg+xml,${encodeURIComponent(`
                  <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="200" fill="#F3F4F6"/>
                    <text x="200" y="100" text-anchor="middle" fill="#6B7280" font-size="14" font-family="Arial, sans-serif">${university.name}</text>
                  </svg>
                `)}`
              }}
            />

            {university.accredited && (
              <div className="absolute top-3 right-3">
                <Badge className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 text-xs font-semibold">
                  <AcademicCapIcon className="w-3 h-3 mr-1" />
                  UGC Approved
                </Badge>
              </div>
            )}

            {university.rating && (
              <div className="absolute top-3 left-3">
                <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <StarIconSolid className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-semibold text-gray-800">{university.rating}</span>
                </div>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                {university.name}
              </h3>
              <div className="flex items-center text-gray-500 mt-2">
                <MapPinIcon className="w-4 h-4 mr-2 text-gray-400" />
                <span className="text-sm">{university.location}</span>
              </div>
            </div>

            {university.established && (
              <div className="flex items-center text-gray-500">
                <BuildingOfficeIcon className="w-4 h-4 mr-2 text-gray-400" />
                <span className="text-sm">Est. {university.established}</span>
              </div>
            )}

            <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
              {university.description}
            </p>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Popular Programs:</p>
              <div className="flex flex-wrap gap-2">
                {university.programs.slice(0, 3).map((program) => (
                  <Badge key={program} variant="secondary" className="text-xs">
                    {program}
                  </Badge>
                ))}
                {university.programs.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{university.programs.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 space-y-3">
          <div className="w-full space-y-2">
            {university.landing ? (
              <button
                onClick={handleApplyClick}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg py-2 px-4 rounded-lg flex items-center justify-center"
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                Apply Now
              </button>
            ) : (
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                  <AcademicCapIcon className="w-4 h-4 mr-2" />
                  Get Admission Info
                </Button>
              </Link>
            )}

            <Link href={`/universities/${university.slug}`}>
              <Button variant="outline" className="w-full border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200">
                <InformationCircleIcon className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </Link>
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}