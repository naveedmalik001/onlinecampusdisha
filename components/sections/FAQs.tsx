'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  QuestionMarkCircleIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ClockIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

interface FAQData {
  question: string
  answer: string
  category: string
  icon: React.ComponentType<any>
}

interface FAQsProps {
  faqs?: FAQData[]
}

export default function FAQs({ faqs = [] }: FAQsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  // Default FAQs if none provided
  const defaultFaqs: FAQData[] = [
    {
      question: "Are online degrees recognized in India?",
      answer: "Yes, online degrees from UGC-approved universities are valid and recognized at par with regular degrees for government jobs and higher education. The University Grants Commission (UGC) has established clear guidelines ensuring online programs have equal recognition.",
      category: "recognition",
      icon: AcademicCapIcon
    },
    {
      question: "Can I get government jobs with online degrees?",
      answer: "Absolutely! Online degrees from UGC-entitled universities are valid for all government jobs, competitive exams like UPSC, and higher education admissions. Many government employees now pursue online programs for career advancement while working.",
      category: "career",
      icon: BriefcaseIcon
    },
    {
      question: "What is the admission process for online programs?",
      answer: "The process typically involves: 1) Fill out the application form online, 2) Submit required documents (marksheets, ID proof), 3) Pay application fees, 4) Selection based on merit or entrance exam, 5) Complete admission formalities. We provide free guidance throughout this process.",
      category: "admission",
      icon: DocumentTextIcon
    },
    {
      question: "Is financial aid available for online degree programs?",
      answer: "Yes, many universities offer scholarships and education loans for online programs. Options include merit-based scholarships, government schemes, and bank loans with easy EMIs. Our counselors help you explore all available financial aid options.",
      category: "finance",
      icon: CurrencyDollarIcon
    },
    {
      question: "How long does it take to complete an online degree?",
      answer: "Online programs offer flexible duration: Bachelor's degrees (3-4 years), Master's programs (2-3 years), Diploma programs (1-2 years). Many universities allow extended duration up to double the standard time to accommodate working professionals.",
      category: "duration",
      icon: ClockIcon
    },
    {
      question: "What is the difference between online and distance education?",
      answer: "Online education involves live interactive classes, digital learning materials, and regular assessments through online platforms. Distance education is more self-paced with study materials sent via post. Online programs offer better interaction and immediate doubt resolution.",
      category: "learning",
      icon: AcademicCapIcon
    }
  ]

  const faqsToUse = faqs.length > 0 ? faqs : defaultFaqs

  const categories = [
    { id: 'all', name: 'All Questions', icon: QuestionMarkCircleIcon },
    { id: 'recognition', name: 'Recognition', icon: AcademicCapIcon },
    { id: 'career', name: 'Career', icon: BriefcaseIcon },
    { id: 'finance', name: 'Finance', icon: CurrencyDollarIcon },
    { id: 'admission', name: 'Admission', icon: DocumentTextIcon },
    { id: 'learning', name: 'Learning', icon: AcademicCapIcon }
  ]

  const filteredFaqs = activeCategory === 'all'
    ? faqsToUse
    : faqsToUse.filter(faq => faq.category === activeCategory)

  const featuredStats = [
    {
      icon: QuestionMarkCircleIcon,
      value: "500+",
      label: "Questions Answered Daily"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      value: "24/7",
      label: "Counselor Support"
    },
    {
      icon: AcademicCapIcon,
      value: "98%",
      label: "Student Satisfaction"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
            <SparklesIcon className="w-5 h-5 text-indigo-600 mr-2" />
            <span className="text-sm font-semibold text-indigo-700">Get Your Questions Answered</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {" "}Questions
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Find answers to common questions about online degree programs, recognition, admissions, and career opportunities.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featuredStats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                  : 'hover:border-indigo-300 hover:text-indigo-600'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </Button>
          ))}
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 pb-6">
              <CardTitle className="text-2xl font-bold text-center text-gray-900">
                {activeCategory === 'all' ? 'All Questions' : `${categories.find(c => c.id === activeCategory)?.name} Questions`}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-0 bg-gray-50/50 rounded-lg hover:bg-gray-100/50 transition-colors"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                          <faq.icon className="w-4 h-4 text-indigo-600" />
                        </div>
                        <span className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors text-left">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="pl-11 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-indigo-100 mb-6 text-lg">
              Get personalized answers from our expert education counselors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/faq">
                <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg group">
                  View All FAQs
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 font-semibold px-8 py-3 text-lg">
                  Talk to Counselor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}