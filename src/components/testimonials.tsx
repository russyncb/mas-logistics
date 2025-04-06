"use client"

import { useEffect, useState, useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Tendai Moyo",
    company: "Moyo Construction",
    quote:
      "Mas Logistics has been our go-to transport partner for over 5 years. Their reliability and professionalism are unmatched in Zimbabwe.",
    rating: 5,
  },
  {
    name: "Chiedza Nyathi",
    company: "Nyathi Furniture",
    quote:
      "We trust Mas Logistics with all our furniture deliveries across Harare. Their careful handling and on-time service have helped us maintain our reputation for quality.",
    rating: 5,
  },
  {
    name: "Farai Mutasa",
    company: "Mutasa Manufacturing",
    quote:
      "From small components to large machinery, Mas Logistics handles all our transport needs with efficiency and care. Best logistics company in Zimbabwe!",
    rating: 4,
  },
  {
    name: "Tatenda Mhaka",
    company: "Mhaka Events",
    quote:
      "Our events in Harare run smoothly thanks to Mas Logistics. They deliver our equipment on time, every time, allowing us to focus on creating memorable experiences.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = sectionRef.current
    
    if (currentRef) {
      observer.observe(currentRef)
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our services.
          </p>
        </div>

        <div
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="absolute -top-10 -left-10 text-blue-700 opacity-20">
            <Quote size={80} />
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${activeIndex === index ? "block opacity-100" : "hidden opacity-0"}`}
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-center text-gray-700 italic mb-8">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="text-center">
                  <div className="font-bold text-lg text-blue-700">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  activeIndex === index ? "bg-blue-700" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

