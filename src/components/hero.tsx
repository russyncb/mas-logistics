"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Truck } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute transform rotate-45 bg-white opacity-20"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">We Move With Pride</h1>
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-8">Move With Us</h2>
            <p className="text-xl text-white/90 mb-10 max-w-lg">
              Zimbabwe&apos;s premier logistics solutions for businesses of all sizes. From 2-ton deliveries to 30-ton
              freight across Harare and nationwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#quote"
                className="px-8 py-4 bg-yellow-400 text-blue-800 font-bold rounded-full hover:bg-yellow-300 transition-colors flex items-center gap-2 text-lg"
              >
                Get a Quote <ArrowRight size={20} />
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 bg-white text-blue-700 font-bold rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 text-lg"
              >
                Our Services <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-700"></div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-700 p-3 rounded-full">
                    <Truck size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-700">Transport Everywhere</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Nationwide Coverage",
                    "From 2ton Trucks - 30ton Trucks",
                    "Cement, Wooden Planks, Metal",
                    "Furniture, Event Equipment",
                    "Commodities, Relocation",
                    "Food & More",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-sm bg-yellow-400 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 12L10 17L20 7"
                            stroke="#0047AB"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#ffffff"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#ffffff"
            opacity=".5"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
  )
}

