"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

const trucks = [
  {
    name: "2 Ton Truck",
    description: "Perfect for small deliveries and urban transport",
    capacity: "2 tons",
    dimensions: "4.2m x 1.8m x 1.9m",
    features: ["City-friendly", "Fuel efficient", "Quick loading/unloading"],
  },
  {
    name: "5 Ton Truck",
    description: "Versatile medium-sized transport solution",
    capacity: "5 tons",
    dimensions: "6.1m x 2.3m x 2.3m",
    features: ["Versatile cargo space", "Hydraulic lift", "GPS tracking"],
  },
  {
    name: "10 Ton Truck",
    description: "Heavy-duty transport for larger shipments",
    capacity: "10 tons",
    dimensions: "8.5m x 2.4m x 2.6m",
    features: ["Spacious cargo area", "Advanced safety features", "Climate control options"],
  },
  {
    name: "20 Ton Truck",
    description: "Industrial-grade transport for heavy loads",
    capacity: "20 tons",
    dimensions: "12.5m x 2.5m x 2.7m",
    features: ["Heavy-duty chassis", "Air suspension", "Long-distance capability"],
  },
  {
    name: "30 Ton Truck",
    description: "Maximum capacity for the largest shipments",
    capacity: "30 tons",
    dimensions: "16.5m x 2.5m x 4.0m",
    features: ["Maximum legal capacity", "Advanced driver assistance", "Specialized cargo solutions"],
  },
]

export default function Fleet() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === trucks.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? trucks.length - 1 : prev - 1))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="fleet" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Our Fleet</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From 2-ton trucks to 30-ton heavy haulers, our diverse fleet can handle any logistics challenge.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
            </div>

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-blue-700 mb-4">{trucks[activeIndex].name}</h3>
                <p className="text-xl text-gray-700 mb-6">{trucks[activeIndex].description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">CAPACITY</h4>
                    <p className="text-lg font-bold">{trucks[activeIndex].capacity}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">DIMENSIONS</h4>
                    <p className="text-lg font-bold">{trucks[activeIndex].dimensions}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-3">KEY FEATURES</h4>
                  <ul className="space-y-2">
                    {trucks[activeIndex].features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-blue-700"></div>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 flex items-center justify-center p-8">
                <div className="relative w-full h-64 md:h-80">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt={trucks[activeIndex].name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center p-4 bg-gray-50">
              {trucks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 mx-1 rounded-full ${activeIndex === index ? "bg-blue-700" : "bg-gray-300"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

