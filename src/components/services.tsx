"use client"

import { useEffect, useState, useRef } from "react"
import { Box, Truck, Package, Home, Calendar, ShoppingBag, Utensils, Warehouse } from "lucide-react"

const services = [
  {
    icon: <Box size={32} />,
    title: "Cement Transport",
    description: "Reliable transportation of cement and construction materials with specialized equipment.",
  },
  {
    icon: <Warehouse size={32} />,
    title: "Wooden Planks",
    description: "Safe and secure transport of wooden planks and timber products.",
  },
  {
    icon: <Package size={32} />,
    title: "Metal Shipping",
    description: "Specialized transport solutions for metal products and raw materials.",
  },
  {
    icon: <Home size={32} />,
    title: "Furniture Delivery",
    description: "Careful handling and transport of furniture with white-glove service available.",
  },
  {
    icon: <Calendar size={32} />,
    title: "Event Equipment",
    description: "Timely delivery and pickup of equipment for events and exhibitions.",
  },
  {
    icon: <ShoppingBag size={32} />,
    title: "Commodities",
    description: "Efficient transport of commodities with temperature-controlled options.",
  },
  {
    icon: <Truck size={32} />,
    title: "Relocation Services",
    description: "Complete relocation services for businesses and individuals.",
  },
  {
    icon: <Utensils size={32} />,
    title: "Food Transport",
    description: "Temperature-controlled transport for food products with strict hygiene standards.",
  },
]

export default function Services() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setInterval(() => {
            setVisibleItems((prev) => {
              if (prev.length >= services.length) {
                clearInterval(timer)
                return prev
              }
              return [...prev, prev.length]
            })
          }, 150)

          return () => clearInterval(timer)
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
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive logistics solutions tailored to your specific needs. From small packages to large
            freight, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-yellow-400 transition-all duration-300 transform ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-4 text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

