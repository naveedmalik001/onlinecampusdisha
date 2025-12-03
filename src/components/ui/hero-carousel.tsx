"use client";

import { useState } from 'react';
import { StarIcon, AcademicCapIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import Carousel from './carousel';
import { Button } from './button';
import { Card, CardContent } from './card';

interface HeroSlideProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

const heroSlides: HeroSlideProps[] = [
  {
    title: "Transform Your Education Journey",
    subtitle: "Online Campus Disha",
    description: "Discover the best online learning opportunities from India's top universities. Get personalized guidance for your distance education journey.",
    backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    ctaText: "Explore Universities",
    ctaLink: "/universities",
    secondaryCtaText: "Success Stories",
    secondaryCtaLink: "/success-stories",
    stats: [
      { label: "Partner Universities", value: "50+" },
      { label: "Students Guided", value: "10,000+" },
      { label: "Success Rate", value: "98%" }
    ]
  },
  {
    title: "Learn from India's Best Universities",
    subtitle: "Distance Education Made Simple",
    description: "Access quality education from prestigious universities without leaving your home. Flexible schedules, affordable fees, and recognized degrees.",
    backgroundImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    ctaText: "Find Your Course",
    ctaLink: "/universities",
    secondaryCtaText: "UGC Guidelines",
    secondaryCtaLink: "/ugc-guidelines",
    stats: [
      { label: "Courses Available", value: "500+" },
      { label: "Degree Programs", value: "50+" },
      { label: "Career Support", value: "24/7" }
    ]
  },
  {
    title: "Your Gateway to Higher Education",
    subtitle: "Expert Guidance Every Step",
    description: "From admission counseling to career guidance, we support you throughout your educational journey. Get personalized advice based on your goals.",
    backgroundImage: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    ctaText: "Get Started",
    ctaLink: "/contact",
    secondaryCtaText: "About Us",
    secondaryCtaLink: "/about",
    stats: [
      { label: "Expert Counselors", value: "25+" },
      { label: "Years Experience", value: "15+" },
      { label: "Satisfaction Rate", value: "99%" }
    ]
  }
];

interface FeaturedUniversity {
  name: string;
  logo: string;
  rating: number;
  students: string;
  programs: number;
  featured?: boolean;
}

const featuredUniversities: FeaturedUniversity[] = [
  {
    name: "IGNOU",
    logo: "🎓",
    rating: 4.8,
    students: "4M+",
    programs: 228,
    featured: true
  },
  {
    name: "Delhi University",
    logo: "🏛️",
    rating: 4.9,
    students: "2M+",
    programs: 150
  },
  {
    name: "Mumbai University",
    logo: "🎯",
    rating: 4.7,
    students: "1.5M+",
    programs: 180
  },
  {
    name: "Bangalore University",
    logo: "📚",
    rating: 4.6,
    students: "1M+",
    programs: 120
  },
  {
    name: "Pune University",
    logo: "🎓",
    rating: 4.8,
    students: "800K+",
    programs: 200
  },
  {
    name: "Chandigarh University",
    logo: "🏫",
    rating: 4.7,
    students: "600K+",
    programs: 95
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const HeroSlide = ({ slide, index }: { slide: HeroSlideProps; index: number }) => (
    <div className="relative min-h-[600px] overflow-hidden rounded-2xl">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ background: slide.backgroundImage }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-16 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              {slide.subtitle}
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {slide.title}
          </h1>

          <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            {slide.description}
          </p>

          {/* Stats */}
          {slide.stats && (
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
              {slide.stats.map((stat, statIndex) => (
                <div key={statIndex} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm lg:text-base text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {slide.ctaText && (
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 group"
                asChild
              >
                <a href={slide.ctaLink}>
                  {slide.ctaText}
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            )}

            {slide.secondaryCtaText && (
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600"
                asChild
              >
                <a href={slide.secondaryCtaLink}>
                  {slide.secondaryCtaText}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );

  const UniversityCard = ({ university }: { university: FeaturedUniversity }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{university.logo}</div>
          {university.featured && (
            <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full font-medium">
              Featured
            </span>
          )}
        </div>

        <h3 className="font-bold text-lg mb-2 group:text-purple-600 dark:group:text-purple-400 transition-colors">
          {university.name}
        </h3>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIconSolid
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(university.rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            {university.rating}
          </span>
        </div>

        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex justify-between">
            <span>Students:</span>
            <span className="font-medium">{university.students}</span>
          </div>
          <div className="flex justify-between">
            <span>Programs:</span>
            <span className="font-medium">{university.programs}</span>
          </div>
        </div>

        <Button
          variant="ghost"
          className="w-full mt-4 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
          size="sm"
        >
          View Programs
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-16">
      {/* Hero Carousel */}
      <Carousel
        slidesToShow={1}
        autoplay={true}
        autoplayInterval={5000}
        showDots={true}
        showArrows={true}
        infinite={true}
        className="hero-carousel"
        afterChange={setCurrentSlide}
      >
        {heroSlides.map((slide, index) => (
          <HeroSlide key={index} slide={slide} index={index} />
        ))}
      </Carousel>

      {/* Featured Universities Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured Universities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover top-ranked universities offering quality distance education programs
          </p>
        </div>

        {/* Universities Carousel */}
        <Carousel
          slidesToShow={4}
          slidesToScroll={2}
          autoplay={true}
          autoplayInterval={4000}
          showDots={true}
          showArrows={true}
          infinite={true}
          centerMode={false}
          className="universities-carousel"
        >
          {featuredUniversities.map((university, index) => (
            <UniversityCard key={index} university={university} />
          ))}
        </Carousel>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" className="group" asChild>
            <a href="/universities">
              View All Universities
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroCarousel;