"use client"

import { useEffect, useState, useRef } from "react"
import { Truck, MapPin, Users, Clock } from "lucide-react"

const stats = [
  {
    icon: <Truck size={32} />,
    value: 75,
    label: "Vehicles in Fleet",
    suffix: "+",
  },
  {
    icon: <MapPin size={32} />,
    value: 63,
    label: "Cities & Towns Covered",
    suffix: "+",
  },
  {
    icon: <Users size={32} />,
    value: 5000,
    label: "Happy Customers",
    suffix: "+",
  },
  {
    icon: <Clock size={32} />,
    value: 10,
    label: "Years Experience",
    suffix: "",
  },
]

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)

          const duration = 2000 // ms
          const frameDuration = 1000 / 60 // 60fps
          const totalFrames = Math.round(duration / frameDuration)

          let frame = 0
          const counter = setInterval(() => {
            frame++

            const progress = frame / totalFrames
            const easedProgress = easeOutQuad(progress)

            setCounts(
              stats.map((stat) => {
                return Math.floor(easedProgress * stat.value)
              }),
            )

            if (frame === totalFrames) {
              clearInterval(counter)
              setCounts(stats.map((stat) => stat.value))
            }
          }, frameDuration)
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

  // Easing function
  const easeOutQuad = (t: number): number => t * (2 - t)

  return (
    <section className="py-20 bg-blue-700" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-700">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

