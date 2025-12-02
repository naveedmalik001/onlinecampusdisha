import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export interface UniversityLogoProps {
  universityName: string
  logoPath?: string
  description: string
  accreditation: string[]
  link: string
  className?: string
}

export function UniversityLogo({
  universityName,
  logoPath,
  description,
  accreditation,
  link,
  className = ""
}: UniversityLogoProps) {
  return (
    <Card className={`hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {logoPath ? (
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center p-2">
                <Image
                  src={logoPath}
                  alt={`${universityName} logo`}
                  width={64}
                  height={64}
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            ) : (
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs text-center">
                  {universityName.substring(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>
        </CardContent>
    </Card>
  )
}

export { UniversityLogo }

interface UniversityLogoProps {
  universityName: string
  logoPath?: string
  description: string
  accreditation: string[]
  link: string
  className?: string
}

export function UniversityLogo({
  universityName,
  logoPath,
  description,
  accreditation,
  link,
  className = ""
}: UniversityLogoProps) {
  return (
    <Card className={`hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {logoPath ? (
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center p-2">
                <Image
                  src={logoPath}
                  alt={`${universityName} logo`}
                  width={64}
                  height={64}
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            ) : (
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs text-center">
                  {universityName.substring(0, 2).toUpperCase()}
                </span>
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">
              {universityName}
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {accreditation.map((acc, index) => (
                <span
                  key={index}
                  className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                >
                  {acc}
                </span>
              ))}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-200 w-full"
            >
              Learn More
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5 0 0 0-10 0 10 0 0 10-10 10 0 10"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12m0 0 2-2 2 0 2 2"
                />
              </svg>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}