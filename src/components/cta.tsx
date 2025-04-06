import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section id="quote" className="py-20 bg-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100%" fill="url(#smallGrid)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Ready to Move with Pride?</h2>
            <p className="text-xl text-gray-600">
              Get a free quote for your logistics needs in Harare and across Zimbabwe. Experience the Mas Logistics
              difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Why Choose Mas Logistics?</h3>
              <ul className="space-y-3">
                {[
                  "Zimbabwe-wide coverage with local expertise",
                  "Diverse fleet for any transport need",
                  "Experienced and professional Zimbabwean drivers",
                  "Real-time tracking and updates",
                  "Competitive pricing in ZWL and USD",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center mt-0.5">
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

            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    What service are you interested in?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Transport</option>
                    <option value="construction">Construction Materials</option>
                    <option value="furniture">Furniture Delivery</option>
                    <option value="events">Event Equipment</option>
                    <option value="relocation">Relocation Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Link
                  href="/quote"
                  className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                >
                  Get Your Free Quote <ArrowRight size={18} />
                </Link>

                <p className="text-center text-sm text-gray-500">
                  No obligation. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

