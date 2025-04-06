"use client"

import { useState } from "react"
import Link from "next/link"
import LogisticsLogo from "./logo"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="z-10">
            <LogisticsLogo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="font-medium text-gray-700 hover:text-blue-700 transition-colors">
              Services
            </Link>
            <Link href="#fleet" className="font-medium text-gray-700 hover:text-blue-700 transition-colors">
              Our Fleet
            </Link>
            <Link href="#about" className="font-medium text-gray-700 hover:text-blue-700 transition-colors">
              About Us
            </Link>
            <Link href="#contact" className="font-medium text-gray-700 hover:text-blue-700 transition-colors">
              Contact
            </Link>
            <Link
              href="#quote"
              className="px-6 py-2 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white pt-20 px-4 md:hidden z-0">
          <div className="flex flex-col space-y-6 items-center">
            <Link href="#services" className="font-medium text-xl text-gray-700" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="#fleet" className="font-medium text-xl text-gray-700" onClick={() => setIsMenuOpen(false)}>
              Our Fleet
            </Link>
            <Link href="#about" className="font-medium text-xl text-gray-700" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="#contact" className="font-medium text-xl text-gray-700" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link
              href="#quote"
              className="px-8 py-3 bg-blue-700 text-white font-medium rounded-full text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

