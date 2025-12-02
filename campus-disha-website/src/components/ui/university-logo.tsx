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

