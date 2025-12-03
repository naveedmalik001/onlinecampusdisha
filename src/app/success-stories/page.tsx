'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import { Search, Star, TrendingUp, MapPin, Award, Users, ChevronRight, Play, BookOpen, Target } from 'lucide-react'

const testimonials = [
  {
    name: "Priya Sharma",
    role: "MBA Student, NMIMS Online",
    program: "MBA",
    university: "NMIMS Online",
    image: "/testimonials/priya.jpg",
    rating: 5,
    content: "The flexibility of online learning allowed me to pursue my master's while working full-time. Campus Disha guided me through the entire admission process, making it seamless and stress-free.",
    achievements: ["Promoted to Senior Manager", "40% salary hike", "Company-sponsored for MBA"],
    duration: "2 years",
    batch: "2023-25",
    location: "Mumbai, Maharashtra",
    previousExperience: "3 years",
    newSalary: "₹18 LPA",
    previousSalary: "₹12 LPA"
  },
  {
    name: "Rahul Verma",
    role: "BBA Student, SRM Online",
    program: "BBA",
    university: "SRM Online",
    image: "/testimonials/rahul.jpg",
    rating: 5,
    content: "Excellent support from Campus Disha team. They helped me choose the right program and university based on my career goals. The online learning experience has been transformative.",
    achievements: ["Started own startup", "2 internships completed", "Dean's list 3 semesters"],
    duration: "3 years",
    batch: "2022-25",
    location: "Chennai, Tamil Nadu",
    previousExperience: "Fresher",
    newSalary: "Internship + Revenue",
    previousSalary: "N/A"
  },
  {
    name: "Anita Patel",
    role: "MCA Student, Manipal Online",
    program: "MCA",
    university: "Manipal University Online",
    image: "/testimonials/anita.jpg",
    rating: 5,
    content: "The quality of education is outstanding, and the UGC recognition gives me confidence for my future career prospects. The faculty support and industry connections are excellent.",
    achievements: ["Multiple job offers", "Published research paper", "Campus placement coordinator"],
    duration: "2 years",
    batch: "2023-25",
    location: "Bangalore, Karnataka",
    previousExperience: "2 years",
    newSalary: "₹15 LPA",
    previousSalary: "₹8 LPA"
  },
  {
    name: "Kumar Ramesh",
    role: "B.Com Student, Amity Online",
    program: "B.Com",
    university: "Amity Online",
    image: "/testimonials/kumar.jpg",
    rating: 5,
    content: "I was skeptical about online education, but the interactive sessions and experienced faculty changed my perspective completely. The practical curriculum prepared me well for the industry.",
    achievements: ["CA Intermediate cleared", "3 campus placements", "Scholarship recipient"],
    duration: "3 years",
    batch: "2021-24",
    location: "Delhi NCR",
    previousExperience: "Fresher",
    newSalary: "₹8 LPA",
    previousSalary: "N/A"
  },
  {
    name: "Meera Joshi",
    role: "M.A. Psychology Student, Chandigarh University Online",
    program: "M.A. Psychology",
    university: "Chandigarh University Online",
    image: "/testimonials/meera.jpg",
    rating: 5,
    content: "Campus Disha made the complex admission process simple. Their guidance was invaluable in selecting the right specialization. The online psychology program exceeded my expectations.",
    achievements: ["Started counseling practice", "Published articles", "Guest speaker at webinars"],
    duration: "2 years",
    batch: "2022-24",
    location: "Chandigarh",
    previousExperience: "4 years",
    newSalary: "₹12 LPA",
    previousSalary: "₹7 LPA"
  },
  {
    name: "Vikram Singh",
    role: "B.Tech Student, UPES Online",
    program: "B.Tech",
    university: "UPES Online",
    image: "/testimonials/vikram.jpg",
    rating: 5,
    content: "The industry-relevant curriculum and practical approach have given me the skills needed for today's competitive job market. The virtual labs and projects are very hands-on.",
    achievements: ["Published patent", "Hackathon winner", "Pre-placement offer"],
    duration: "4 years",
    batch: "2020-24",
    location: "Dehradun, Uttarakhand",
    previousExperience: "1 year internship",
    newSalary: "₹20 LPA",
    previousSalary: "₹6 LPA"
  },
  {
    name: "Sneha Reddy",
    role: "MBA Student, LPU Online",
    program: "MBA",
    university: "LPU Online",
    image: "/testimonials/sneha.jpg",
    rating: 5,
    content: "Balancing work and MBA was challenging but rewarding. The flexible schedule and excellent faculty support made it possible. Career services helped me land my dream job.",
    achievements: ["Global consulting firm", "International exposure", "Leadership program"],
    duration: "2 years",
    batch: "2022-24",
    location: "Hyderabad, Telangana",
    previousExperience: "5 years",
    newSalary: "₹25 LPA",
    previousSalary: "₹14 LPA"
  },
  {
    name: "Arjun Kumar",
    role: "BCA Student, GLA Online",
    program: "BCA",
    university: "GLA Online",
    image: "/testimonials/arjun.jpg",
    rating: 5,
    content: "The BCA program provided me with strong programming fundamentals and practical skills. The online format allowed me to work on freelance projects while studying.",
    achievements: ["Full-stack developer", "Multiple certifications", "Startup co-founder"],
    duration: "3 years",
    batch: "2021-24",
    location: "Mathura, Uttar Pradesh",
    previousExperience: "Fresher",
    newSalary: "₹10 LPA",
    previousSalary: "N/A"
  },
  {
    name: "Nisha Gupta",
    role: "M.Com Student, Sikkim Manipal University Online",
    program: "M.Com",
    university: "Sikkim Manipal University Online",
    image: "/testimonials/nisha.jpg",
    rating: 5,
    content: "The M.Com program enhanced my accounting knowledge and opened doors to senior positions. The case studies and industry interactions were very valuable.",
    achievements: ["Senior Accountant", "CA Intermediate", "Tax consultant certification"],
    duration: "2 years",
    batch: "2022-24",
    location: "Kolkata, West Bengal",
    previousExperience: "3 years",
    newSalary: "₹14 LPA",
    previousSalary: "₹8 LPA"
  }
]

const statistics = [
  { number: "10,000+", label: "Success Stories", icon: Users },
  { number: "98%", label: "Satisfaction Rate", icon: Star },
  { number: "45%", label: "Average Salary Growth", icon: TrendingUp },
  { number: "500+", label: "Company Partnerships", icon: Award }
]

const programFilters = ["All", "MBA", "BBA", "B.Tech", "M.Tech", "MCA", "BCA", "B.Com", "M.Com", "M.A.", "B.Sc.", "M.Sc."]
const universityFilters = ["All", "NMIMS Online", "SRM Online", "Manipal University Online", "Amity Online", "LPU Online", "Chandigarh University Online", "UPES Online", "GLA Online", "Sikkim Manipal University Online"]

export default function SuccessStoriesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProgram, setSelectedProgram] = useState('All')
  const [selectedUniversity, setSelectedUniversity] = useState('All')
  const [selectedStory, setSelectedStory] = useState<typeof testimonials[0] | null>(null)

  const filteredStories = testimonials.filter(story => {
    const matchesSearch =
      story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesProgram = selectedProgram === 'All' || story.program === selectedProgram
    const matchesUniversity = selectedUniversity === 'All' || story.university === selectedUniversity

    return matchesSearch && matchesProgram && matchesUniversity
  })

  const testimonialsWithValidSalaries = testimonials.filter(story =>
  story.newSalary !== "N/A" && story.previousSalary !== "N/A"
)

const averageSalaryGrowth = testimonialsWithValidSalaries
    .reduce((sum, story) => {
      const newSalary = parseInt(story.newSalary.replace(/[^0-9]/g, ''))
      const prevSalary = parseInt(story.previousSalary.replace(/[^0-9]/g, ''))
      return sum + ((newSalary - prevSalary) / prevSalary) * 100
    }, 0) / testimonialsWithValidSalaries.length

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
                <p className="text-xs text-gray-600">Success Stories</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">About</Link>
              <Link href="/universities" className="text-gray-600 hover:text-blue-600 transition">Universities</Link>
              <Link href="/success-stories" className="text-blue-600 font-medium">Success Stories</Link>
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
              Student Success
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real stories from real students who transformed their careers through online education.
              Get inspired by their journeys and see how you can achieve similar success.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-green-100 text-green-700 px-6 py-3 rounded-full inline-flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Average Salary Growth: {averageSalaryGrowth.toFixed(0)}%
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
                  placeholder="Search by name, role, location..."
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
                  <SelectValue placeholder="Program" />
                </SelectTrigger>
                <SelectContent>
                  {programFilters.map((program) => (
                    <SelectItem key={program} value={program}>{program}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* University Filter */}
            <div>
              <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
                <SelectTrigger className="border-gray-300 focus:border-blue-500">
                  <SelectValue placeholder="University" />
                </SelectTrigger>
                <SelectContent>
                  {universityFilters.map((university) => (
                    <SelectItem key={university} value={university}>{university}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-600">
              Showing {filteredStories.length} of {testimonials.length} success stories
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          {filteredStories.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No stories found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story) => (
                <Card key={story.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer" onClick={() => setSelectedStory(story)}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-blue-600 font-bold text-xl">
                        {story.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      {story.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">{story.role}</CardDescription>

                    <div className="flex justify-center items-center space-x-4 mt-3 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium ml-1">{story.rating}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-xs">{story.location.split(',')[0]}</span>
                      </div>
                    </div>

                    <div className="flex justify-center space-x-2 mt-3">
                      <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                        {story.program}
                      </span>
                      <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                        {story.duration}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-700 italic leading-relaxed mb-4 line-clamp-3">
                      "{story.content}"
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Key Achievements:</p>
                      <div className="space-y-1">
                        {story.achievements.slice(0, 2).map((achievement, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <Award className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                        {story.achievements.length > 2 && (
                          <div className="text-xs text-blue-600 font-medium">
                            +{story.achievements.length - 2} more achievements
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Salary Growth */}
                    {story.newSalary !== "N/A" && story.previousSalary !== "N/A" && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Salary Growth:</span>
                          <span className="text-sm font-bold text-green-600">
                            {story.previousSalary} → {story.newSalary}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* View Story Button */}
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white group-hover:border-blue-700 group-hover:bg-blue-700">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      View Full Story
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedStory(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {selectedStory.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedStory.name}</h2>
                    <p className="text-blue-100">{selectedStory.role}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1">{selectedStory.rating}</span>
                      </div>
                      <span>•</span>
                      <span>{selectedStory.location}</span>
                      <span>•</span>
                      <span>{selectedStory.batch}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="text-white/80 hover:text-white text-2xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Success Story</h3>
                  <p className="text-gray-700 leading-relaxed italic text-lg">
                    "{selectedStory.content}"
                  </p>

                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {selectedStory.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <Award className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Program Details</h3>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Academic Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Program:</span>
                          <span className="font-medium text-gray-900">{selectedStory.program}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">University:</span>
                          <span className="font-medium text-gray-900">{selectedStory.university}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium text-gray-900">{selectedStory.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Batch:</span>
                          <span className="font-medium text-gray-900">{selectedStory.batch}</span>
                        </div>
                      </div>
                    </div>

                    {selectedStory.newSalary !== "N/A" && selectedStory.previousSalary !== "N/A" && (
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Career Growth</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Previous Salary:</span>
                            <span className="font-medium text-gray-900">{selectedStory.previousSalary}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Current Salary:</span>
                            <span className="font-medium text-green-600">{selectedStory.newSalary}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Experience:</span>
                            <span className="font-medium text-gray-900">{selectedStory.previousExperience}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Contact Info</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Location:</span>
                          <span className="font-medium text-gray-900">{selectedStory.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/universities">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Explore Similar Programs
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      <Target className="w-5 h-5 mr-2" />
                      Start Your Journey
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Own Success Story?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of students who have transformed their careers through online education.
            Let us help you choose the right path to success.
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
              <h4 className="font-semibold mb-4">Success Stories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>MBA Success Stories</li>
                <li>Engineering Achievements</li>
                <li>Career Transformations</li>
                <li>Entrepreneurship Journeys</li>
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