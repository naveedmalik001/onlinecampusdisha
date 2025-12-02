'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import { ArrowRight, Search, Filter, Star, MapPin, ExternalLink, Users, Award } from 'lucide-react'

const universities = [
  {
    name: "NMIMS Online",
    logo: "/universities/nmims.png",
    link: "https://nmims.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=Nimmsonline",
    description: "Premier institution offering UGC-entitled online programs",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"],
    programs: ["MBA", "BBA", "B.Com", "M.Com", "BCA", "MCA"],
    location: "Mumbai, Maharashtra",
    students: "50,000+",
    rating: 4.8,
    fees: "₹1,50,000 - ₹3,00,000"
  },
  {
    name: "SRM Online",
    logo: "/universities/srm.png",
    link: "https://srm.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=srmonline",
    description: "Leading online education provider with industry-relevant programs",
    accreditation: ["UGC Entitled", "NAAC A++", "AICTE Approved"],
    programs: ["B.Tech", "M.Tech", "MBA", "BBA", "B.Sc", "M.Sc"],
    location: "Chennai, Tamil Nadu",
    students: "80,000+",
    rating: 4.7,
    fees: "₹1,20,000 - ₹2,50,000"
  },
  {
    name: "Parul Online",
    logo: "/universities/parul.png",
    link: "https://parul.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=parulonline",
    description: "Excellence in online education with diverse program offerings",
    accreditation: ["UGC Entitled", "NAAC A+", "ISO Certified"],
    programs: ["BA", "B.Com", "BBA", "MA", "M.Com", "MBA"],
    location: "Vadodara, Gujarat",
    students: "45,000+",
    rating: 4.6,
    fees: "₹80,000 - ₹2,00,000"
  },
  {
    name: "DPU Mumbai",
    logo: "/universities/dpumumbai.png",
    link: "https://dpumumbai.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=dpumumbai",
    description: "Premium healthcare and management education online",
    accreditation: ["UGC Entitled", "NAAC A", "AICTE Approved"],
    programs: ["B.Pharm", "M.Pharm", "MBA", "BBA"],
    location: "Mumbai, Maharashtra",
    students: "30,000+",
    rating: 4.5,
    fees: "₹1,00,000 - ₹2,80,000"
  },
  {
    name: "Galgotias Online",
    logo: "/universities/galgotias.png",
    link: "https://galgotias.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=galtiosonline",
    description: "Engineering and management excellence in online mode",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"],
    programs: ["B.Tech", "M.Tech", "MBA", "BBA", "BCA", "MCA"],
    location: "Greater Noida, UP",
    students: "35,000+",
    rating: 4.4,
    fees: "₹90,000 - ₹2,20,000"
  },
  {
    name: "UPES Online",
    logo: "/universities/upes.png",
    link: "https://upes.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=upesonline",
    description: "Specialized programs in energy, petroleum, and technology sectors",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"],
    programs: ["B.Tech", "M.Tech", "MBA", "BBA", "B.Sc", "M.Sc"],
    location: "Dehradun, Uttarakhand",
    students: "25,000+",
    rating: 4.6,
    fees: "₹1,10,000 - ₹2,60,000"
  },
  {
    name: "VGU Online",
    logo: "/universities/vgu.png",
    link: "https://vgu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=vigyanuniversityonline",
    description: "Quality education in engineering and technology",
    accreditation: ["UGC Entitled", "AICTE Approved", "NBA Accredited"],
    programs: ["B.Tech", "M.Tech", "Diploma"],
    location: "Jaipur, Rajasthan",
    students: "20,000+",
    rating: 4.3,
    fees: "₹70,000 - ₹1,80,000"
  },
  {
    name: "Andhra University Online",
    logo: "/universities/andhra.png",
    link: "https://andhra.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=andhrauniversity",
    description: "Legacy of academic excellence in online education",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"],
    programs: ["BA", "B.Com", "B.Sc", "MA", "M.Com", "M.Sc"],
    location: "Visakhapatnam, Andhra Pradesh",
    students: "40,000+",
    rating: 4.7,
    fees: "₹60,000 - ₹1,50,000"
  },
  {
    name: "MAHE Online",
    logo: "/universities/mahe.png",
    link: "https://mahe.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=MAHEUNIVERISTY",
    description: "Institute of Eminence offering world-class online programs",
    accreditation: ["UGC Entitled", "NAAC A++", "IoE Status"],
    programs: ["MBA", "BBA", "B.Com", "M.Com", "BCA", "MCA", "B.Sc", "M.Sc"],
    location: "Manipal, Karnataka",
    students: "60,000+",
    rating: 4.9,
    fees: "₹1,80,000 - ₹4,00,000"
  },
  {
    name: "Sikkim Manipal University Online",
    logo: "/universities/smu.png",
    link: "https://smu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=sikkimmanipalonline",
    description: "Pioneering distance and online education since 1995",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"],
    programs: ["MBA", "BBA", "B.Com", "M.Com", "BCA", "MCA", "BA", "MA"],
    location: "Gangtok, Sikkim",
    students: "70,000+",
    rating: 4.5,
    fees: "₹90,000 - ₹2,40,000"
  },
  {
    name: "Kurukshetra University Online",
    logo: "/universities/kurukshetra.png",
    link: "https://kurukshetra.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=kurukshetraonline",
    description: "State university with strong academic heritage in online education",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"],
    programs: ["BA", "B.Com", "B.Sc", "MA", "M.Com", "M.Sc", "MBA"],
    location: "Kurukshetra, Haryana",
    students: "35,000+",
    rating: 4.4,
    fees: "₹50,000 - ₹1,60,000"
  },
  {
    name: "Shoolini University Online",
    logo: "/universities/shoolini.png",
    link: "https://shoolini.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=shoolini",
    description: "Innovation-driven university offering cutting-edge online programs",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"],
    programs: ["B.Tech", "M.Tech", "MBA", "BBA", "B.Sc", "M.Sc"],
    location: "Solan, Himachal Pradesh",
    students: "15,000+",
    rating: 4.6,
    fees: "₹1,00,000 - ₹2,50,000"
  },
  {
    name: "GLA Online",
    logo: "/universities/gla.png",
    link: "https://gla.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=glaonlinelandingpage",
    description: "Established institution providing quality technical and management education",
    accreditation: ["UGC Entitled", "NAAC A", "AICTE Approved"],
    programs: ["B.Tech", "M.Tech", "MBA", "BBA", "BCA", "MCA"],
    location: "Mathura, Uttar Pradesh",
    students: "25,000+",
    rating: 4.2,
    fees: "₹80,000 - ₹2,00,000"
  },
  {
    name: "Chandigarh University Online",
    logo: "/universities/chandigarh.png",
    link: "https://cuol.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=chandigarhonline",
    description: "Youngest private university with NAAC A+ accreditation offering online programs",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"],
    programs: ["MBA", "BBA", "B.Com", "M.Com", "BCA", "MCA", "BA", "MA"],
    location: "Mohali, Punjab",
    students: "55,000+",
    rating: 4.7,
    fees: "₹1,20,000 - ₹3,00,000"
  },
  {
    name: "Uttaranchal University Online",
    logo: "/universities/uttaranchal.png",
    link: "https://uttaranchal.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=utaranchalonlinelandingpage",
    description: "Premier institution in the Himalayan region offering diverse online programs",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"],
    programs: ["MBA", "BBA", "B.Com", "M.Com", "BCA", "MCA", "B.Sc", "M.Sc"],
    location: "Dehradun, Uttarakhand",
    students: "18,000+",
    rating: 4.4,
    fees: "₹90,000 - ₹2,20,000"
  },
  {
    name: "DPU Online Pune",
    logo: "/universities/dpupune.png",
    link: "https://dpupune.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=dpuonlinelandingpage",
    description: "Leading healthcare education provider with strong industry connections",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"],
    programs: ["B.Pharm", "M.Pharm", "MBA", "BBA"],
    location: "Pune, Maharashtra",
    students: "22,000+",
    rating: 4.5,
    fees: "₹1,10,000 - ₹2,80,000"
  },
  {
    name: "Amity Online",
    logo: "/universities/amity.png",
    link: "https://amity.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=amityonline",
    description: "Top-ranked private university with global recognition",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"],
    programs: ["MBA", "BBA", "B.Com", "M.Com", "BCA", "MCA", "BA", "MA"],
    location: "Noida, Uttar Pradesh",
    students: "1,25,000+",
    rating: 4.8,
    fees: "₹1,50,000 - ₹3,50,000"
  },
  {
    name: "Manipal University Online",
    logo: "/universities/manipal.png",
    link: "https://muj.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=ManipalLandingpage",
    description: "Manipal Academy of Higher Education - Institute of Eminence",
    accreditation: ["UGC Entitled", "NAAC A++", "IoE Status"],
    programs: ["B.Tech", "M.Tech", "MBA", "BBA", "B.Com", "M.Com", "BCA", "MCA"],
    location: "Jaipur, Rajasthan",
    students: "85,000+",
    rating: 4.9,
    fees: "₹1,80,000 - ₹4,20,000"
  },
  {
    name: "Amrita Online",
    logo: "/universities/amrita.png",
    link: "https://lpu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=ApplyforLPUONLINE",
    description: "Amrita Vishwa Vidyapeetham - Multi-campus research university",
    accreditation: ["UGC Entitled", "NAAC A++", "IoE Status"],
    programs: ["MBA", "BBA", "B.Com", "M.Com", "BCA", "MCA", "B.Sc", "M.Sc"],
    location: "Coimbatore, Tamil Nadu",
    students: "40,000+",
    rating: 4.8,
    fees: "₹1,60,000 - ₹3,80,000"
  },
  {
    name: "LPU Online",
    logo: "/universities/lpu.png",
    link: "https://lpu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=ApplyforLPUONLINE",
    description: "Lovely Professional University - India's largest university",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"],
    programs: ["MBA", "BBA", "B.Com", "M.Com", "BCA", "MCA", "B.Tech", "B.Sc"],
    location: "Phagwara, Punjab",
    students: "35,000+",
    rating: 4.6,
    fees: "₹1,00,000 - ₹2,80,000"
  }
]

const programTypes = ["All", "MBA", "BBA", "B.Tech", "M.Tech", "B.Com", "M.Com", "BCA", "MCA", "B.Sc", "M.Sc", "BA", "MA", "B.Pharm", "M.Pharm"]
const accreditations = ["All", "UGC Entitled", "NAAC A++", "NAAC A+", "NAAC A", "IoE Status", "AICTE Approved", "NBA Accredited", "ISO Certified"]

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProgram, setSelectedProgram] = useState('All')
  const [selectedAccreditation, setSelectedAccreditation] = useState('All')
  const [sortBy, setSortBy] = useState('rating')

  const filteredUniversities = universities.filter(university => {
    const matchesSearch =
      university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      university.programs.some(program => program.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesProgram = selectedProgram === 'All' || university.programs.includes(selectedProgram)
    const matchesAccreditation = selectedAccreditation === 'All' || university.accreditation.includes(selectedAccreditation)

    return matchesSearch && matchesProgram && matchesAccreditation
  }).sort((a, b) => {
    switch(sortBy) {
      case 'rating':
        return b.rating - a.rating
      case 'students':
        return parseInt(b.students.replace(/[^0-9]/g, '')) - parseInt(a.students.replace(/[^0-9]/g, ''))
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
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
                <p className="text-xs text-gray-600">Partner Universities</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
              <Link href="/universities" className="text-blue-600 font-medium">Universities</Link>
              <Link href="/success-stories" className="text-gray-600 hover:text-blue-600 transition">Success Stories</Link>
              <Link href="/ugc-guidelines" className="text-gray-600 hover:text-blue-600 transition">UGC Guidelines</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
            </nav>

            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">Get Counseling</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Partner Universities
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Explore India's most prestigious universities offering UGC-entitled online programs.
            Find the perfect institution for your career goals.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{universities.length}</div>
              <div className="text-sm opacity-80">Partner Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-80">Programs Offered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">UGC</div>
              <div className="text-sm opacity-80">Approved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">8L+</div>
              <div className="text-sm opacity-80">Students Enrolled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search universities, programs, locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-blue-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Program Filter */}
            <div>
              <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                <SelectTrigger className="border-gray-300 focus:border-blue-500">
                  <SelectValue placeholder="Program Type" />
                </SelectTrigger>
                <SelectContent>
                  {programTypes.map((program) => (
                    <SelectItem key={program} value={program}>{program}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Accreditation Filter */}
            <div>
              <Select value={selectedAccreditation} onValueChange={setSelectedAccreditation}>
                <SelectTrigger className="border-gray-300 focus:border-blue-500">
                  <SelectValue placeholder="Accreditation" />
                </SelectTrigger>
                <SelectContent>
                  {accreditations.map((acc) => (
                    <SelectItem key={acc} value={acc}>{acc}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count and Sort */}
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-600">
              Showing {filteredUniversities.length} of {universities.length} universities
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32 border-gray-300 focus:border-blue-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="students">Students</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {filteredUniversities.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No universities found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUniversities.map((university) => (
                <Card key={university.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <CardHeader className="text-center pb-4">
                    <div className="w-full h-24 bg-gray-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
                      <span className="text-gray-500 font-semibold text-sm">{university.name}</span>
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      {university.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 line-clamp-2">
                      {university.description}
                    </CardDescription>

                    {/* Rating and Location */}
                    <div className="flex items-center justify-center space-x-4 mt-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{university.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-xs">{university.location.split(',')[0]}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Programs */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Programs Offered:</p>
                      <div className="flex flex-wrap gap-1">
                        {university.programs.slice(0, 6).map((program) => (
                          <span key={program} className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                            {program}
                          </span>
                        ))}
                        {university.programs.length > 6 && (
                          <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            +{university.programs.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Accreditation */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Accreditation:</p>
                      <div className="flex flex-wrap gap-1">
                        {university.accreditation.map((acc) => (
                          <span key={acc} className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                            {acc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Students</p>
                        <p className="font-medium text-gray-700">{university.students}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Fees Range</p>
                        <p className="font-medium text-gray-700">{university.fees}</p>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-2">
                      <Link
                        href={university.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Apply Now
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Choosing the Right University?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our expert counselors can help you select the perfect university and program based on your career goals, budget, and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                <Users className="w-5 h-5 mr-2" />
                Talk to Counselor
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
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Online MBA Programs</li>
                <li>Online BBA Programs</li>
                <li>Online Engineering Programs</li>
                <li>Online Commerce Programs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">+91 9469328661</li>
                <li className="flex items-center">contact@campusdisha.in</li>
                <li className="flex items-center">Residency Road, Lal Chowk</li>
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