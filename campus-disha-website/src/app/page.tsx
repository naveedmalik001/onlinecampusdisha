'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import Image from 'next/image'
import UniversityLogo from '@/components/ui/university-logo'

const universities = [
  {
    name: "NMIMS Online",
    logo: "/universities/nmims.png",
    link: "https://nmims.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=Nimmsonline",
    description: "Premier institution offering UGC-entitled online programs",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "SRM Online",
    logo: "/universities/srm.png",
    link: "https://srm.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=srmonline",
    description: "Leading online education provider with industry-relevant programs",
    accreditation: ["UGC Entitled", "NAAC A++", "AICTE Approved"]
  },
  {
    name: "Parul Online",
    logo: "/universities/parul.png",
    link: "https://parul.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=parulonline",
    description: "Excellence in online education with diverse program offerings",
    accreditation: ["UGC Entitled", "NAAC A+", "ISO Certified"]
  },
  {
    name: "DPU Mumbai",
    logo: "/universities/dpumumbai.png",
    link: "https://dpumumbai.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=dpumumbai",
    description: "Premium healthcare and management education online",
    accreditation: ["UGC Entitled", "NAAC A", "AICTE Approved"]
  },
  {
    name: "Galgotias Online",
    logo: "/universities/galgotias.png",
    link: "https://galgotias.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=galtiosonline",
    description: "Engineering and management excellence in online mode",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "UPES Online",
    logo: "/universities/upes.png",
    link: "https://upes.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=upesonline",
    description: "Specialized programs in energy, petroleum, and technology sectors",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "VGU Online",
    logo: "/universities/vgu.png",
    link: "https://vgu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=vigyanuniversityonline",
    description: "Quality education in engineering and technology",
    accreditation: ["UGC Entitled", "AICTE Approved", "NBA Accredited"]
  },
  {
    name: "Andhra University Online",
    logo: "/universities/andhra.png",
    link: "https://andhra.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=andhrauniversity",
    description: "Legacy of academic excellence in online education",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "MAHE Online",
    logo: "/universities/mahe.png",
    link: "https://mahe.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=MAHEUNIVERISTY",
    description: "Institute of Eminence offering world-class online programs",
    accreditation: ["UGC Entitled", "NAAC A++", "IoE Status"]
  },
  {
    name: "Sikkim Manipal University Online",
    logo: "/universities/smu.png",
    link: "https://smu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=sikkimmanipalonline",
    description: "Pioneering distance and online education since 1995",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "Kurukshetra University Online",
    logo: "/universities/kurukshetra.png",
    link: "https://kurukshetra.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=kurukshetraonline",
    description: "State university with strong academic heritage in online education",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "Shoolini University Online",
    logo: "/universities/shoolini.png",
    link: "https://shoolini.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=shoolini",
    description: "Innovation-driven university offering cutting-edge online programs",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "GLA Online",
    logo: "/universities/gla.png",
    link: "https://gla.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=glaonlinelandingpage",
    description: "Established institution providing quality technical and management education",
    accreditation: ["UGC Entitled", "NAAC A", "AICTE Approved"]
  },
  {
    name: "Chandigarh University Online",
    logo: "/universities/chandigarh.png",
    link: "https://cuol.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=chandigarhonline",
    description: "Youngest private university with NAAC A+ accreditation offering online programs",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "Uttaranchal University Online",
    logo: "/universities/uttaranchal.png",
    link: "https://uttaranchal.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=utaranchalonlinelandingpage",
    description: "Premier institution in the Himalayan region offering diverse online programs",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "DPU Online Pune",
    logo: "/universities/dpupune.png",
    link: "https://dpupune.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=dpuonlinelandingpage",
    description: "Leading healthcare education provider with strong industry connections",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "Amity Online",
    logo: "/universities/amity.png",
    link: "https://amity.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=amityonline",
    description: "Top-ranked private university with global recognition",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  },
  {
    name: "Manipal University Online",
    logo: "/universities/manipal.png",
    link: "https://muj.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=ManipalLandingpage",
    description: "Manipal Academy of Higher Education - Institute of Eminence",
    accreditation: ["UGC Entitled", "NAAC A++", "IoE Status"]
  },
  {
    name: "Amrita Online",
    logo: "/universities/amrita.png",
    link: "https://lpu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=ApplyforLPUONLINE",
    description: "Amrita Vishwa Vidyapeetham - Multi-campus research university",
    accreditation: ["UGC Entitled", "NAAC A++", "IoE Status"]
  },
  {
    name: "LPU Online",
    logo: "/universities/lpu.png",
    link: "https://lpu.universityadmission.co.in/?source_campaign=LAM%20Influencer&campaign_name=2845&ad_group_name=General&ads_name=ApplyforLPUONLINE",
    description: "Lovely Professional University - India's largest university",
    accreditation: ["UGC Entitled", "NAAC A+", "AICTE Approved"]
  }
]

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    course: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CD</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Campus Disha</h1>
                <p className="text-sm text-gray-600">Your Gateway to Online Education</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
              <Link href="#universities" className="text-gray-700 hover:text-blue-600 transition">Universities</Link>
              <Link href="#ugc-guidelines" className="text-gray-700 hover:text-blue-600 transition">UGC Guidelines</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Advance Your Career with <span className="text-blue-600">UGC-Recognized</span> Online Degrees
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Connect with India's top universities offering UGC-entitled online programs.
                Study at your own pace while maintaining your professional commitments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explore Universities
                </Button>
                <Button size="lg" variant="outline">
                  Download Brochure
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">20+</h3>
                  <p className="text-sm text-gray-600">Partner Universities</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">100+</h3>
                  <p className="text-sm text-gray-600">Online Programs</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">UGC</h3>
                  <p className="text-sm text-gray-600">Approved Degrees</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Get Free Counseling</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
                <Select onValueChange={(value) => setFormData({...formData, university: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select University" />
                  </SelectTrigger>
                  <SelectContent>
                    {universities.map((uni) => (
                      <SelectItem key={uni.name} value={uni.name}>{uni.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Call Back
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Online Education */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Online Education?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Online education has transformed the learning landscape, offering flexibility and accessibility
              without compromising on quality or recognition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Study at your own pace, balance work and education, access learning materials anytime, anywhere.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Cost-Effective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Lower tuition fees, no accommodation costs, continue earning while learning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Equal Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  UGC-entitled online degrees hold the same value as traditional degrees for jobs and higher studies.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          <Card>
            <CardHeader>
              <CardTitle>Online vs Traditional Mode</CardTitle>
              <CardDescription>
                Understanding the key differences between online and traditional education
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Aspect</th>
                      <th className="text-left p-4">Online Mode</th>
                      <th className="text-left p-4">Traditional Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Flexibility</td>
                      <td className="p-4 text-green-600">High - Learn at your own pace</td>
                      <td className="p-4 text-red-600">Low - Fixed schedule</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Cost</td>
                      <td className="p-4 text-green-600">Lower - No additional costs</td>
                      <td className="p-4 text-red-600">Higher - Including infrastructure</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Degree Recognition</td>
                      <td className="p-4 text-green-600">Equal - UGC entitled</td>
                      <td className="p-4 text-green-600">Standard - UGC approved</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Career Opportunities</td>
                      <td className="p-4 text-green-600">Equal in both modes</td>
                      <td className="p-4 text-green-600">Equal in both modes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Universities Section */}
      <section id="universities" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partner Universities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect with India's most prestigious universities offering UGC-entitled online programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university) => (
              <Card key={university.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-full h-24 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 font-semibold">{university.name}</span>
                  </div>
                  <CardTitle className="text-lg">{university.name}</CardTitle>
                  <CardDescription>{university.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    {university.accreditation.map((acc, index) => (
                      <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                        {acc}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={university.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Guidelines Section */}
      <section id="ugc-guidelines" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              UGC Guidelines & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All our partner universities comply with UGC regulations for online education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">UGC Entitlement</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Valid Across India</h4>
                    <p className="text-gray-600">Online degrees are valid for government jobs and higher education across all states</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Equal to Traditional Degrees</h4>
                    <p className="text-gray-600">Same recognition and value as regular mode degrees</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Quality Assurance</h4>
                    <p className="text-gray-600">Regular monitoring and quality checks by UGC-DEB</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Key Guidelines (2024-25)</h3>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-600">Only UGC-entitled universities can offer online programs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-600">No geographical restrictions for admission</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-600">Minimum 70% content should be online</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-600">Proctored online examinations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-600">Digital learning management systems mandatory</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-600">•</span>
                      <span className="text-gray-600">Same eligibility criteria as regular programs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-lg opacity-90">
              Let us help you find the right online program for your career growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold">Campus Disha</p>
                    <p className="opacity-90">Residency Road, Lal Chowk</p>
                    <p className="opacity-90">Srinagar, J&K - 190001</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="opacity-90">+91 9469328661</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="opacity-90">contact@campusdisha.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    🌐
                  </div>
                  <div>
                    <p className="font-semibold">Website</p>
                    <p className="opacity-90">www.online.campusdisha.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-white/70"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-white/70"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-white/10 border-white/20 text-white placeholder-white/70"
                />
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder-white/70"
                />
                <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Send Message
                </Button>
              </form>
            </div>
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
                <li><Link href="#home" className="hover:text-white transition">Home</Link></li>
                <li><Link href="#about" className="hover:text-white transition">About Online Education</Link></li>
                <li><Link href="#universities" className="hover:text-white transition">Partner Universities</Link></li>
                <li><Link href="#ugc-guidelines" className="hover:text-white transition">UGC Guidelines</Link></li>
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