"use client";

import { useState, useEffect, useCallback, Children, cloneElement } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  infinite?: boolean;
  centerMode?: boolean;
  beforeChange?: (current: number, next: number) => void;
  afterChange?: (current: number) => void;
}

export function Carousel({
  children,
  className,
  slidesToShow = 1,
  slidesToScroll = 1,
  autoplay = false,
  autoplayInterval = 3000,
  showDots = true,
  showArrows = true,
  infinite = false,
  centerMode = false,
  beforeChange,
  afterChange,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  const slides = Children.toArray(children);
  const totalSlides = slides.length;

  const goToSlide = useCallback((index: number) => {
    if (infinite) {
      const newIndex = index < 0 ? totalSlides - 1 : index >= totalSlides ? 0 : index;
      beforeChange?.(currentIndex, newIndex);
      setCurrentIndex(newIndex);
      afterChange?.(newIndex);
    } else {
      const clampedIndex = Math.max(0, Math.min(index, totalSlides - slidesToShow));
      beforeChange?.(currentIndex, clampedIndex);
      setCurrentIndex(clampedIndex);
      afterChange?.(clampedIndex);
    }
  }, [currentIndex, totalSlides, slidesToShow, infinite, beforeChange, afterChange]);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + slidesToScroll);
  }, [currentIndex, slidesToScroll, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - slidesToScroll);
  }, [currentIndex, goToSlide]);

  const goToDot = useCallback((index: number) => {
    goToSlide(index);
  }, [goToSlide]);

  useEffect(() => {
    if (isPlaying && totalSlides > 1) {
      const interval = setInterval(nextSlide, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [isPlaying, nextSlide, autoplayInterval, totalSlides]);

  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(autoplay);

  const getSlideTransform = () => {
    if (centerMode) {
      return `translateX(-${currentIndex * (100 / slidesToShow)}%)`;
    }
    return `translateX(-${currentIndex * (100 / slidesToShow)}%)`;
  };

  const maxIndex = infinite ? totalSlides : Math.max(0, totalSlides - slidesToShow);

  return (
    <div
      className={cn("relative w-full", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{
            transform: getSlideTransform(),
            width: centerMode ? `${totalSlides * 100}%` : `${(totalSlides / slidesToShow) * 100}%`
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={cn(
                "flex-shrink-0 w-full px-2",
                centerMode && "flex justify-center items-center"
              )}
              style={{ width: `${100 / slidesToShow}%` }}
            >
              {slide}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              disabled={!infinite && currentIndex === 0}
              className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full",
                "bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "transition-all duration-200 hover:scale-110"
              )}
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
            </button>

            <button
              onClick={nextSlide}
              disabled={!infinite && currentIndex >= maxIndex}
              className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full",
                "bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "transition-all duration-200 hover:scale-110"
              )}
              aria-label="Next slide"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-800" />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {showDots && totalSlides > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-6">
          {Array.from({ length: infinite ? totalSlides : Math.ceil(totalSlides / slidesToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToDot(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-200",
                currentIndex === index || (infinite && currentIndex % totalSlides === index)
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;