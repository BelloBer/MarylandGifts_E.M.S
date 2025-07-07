import Link from "next/link"
import { PhoneCall, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Maryland Gifts</h3>
            <p className="text-sm text-gray-300">English Medium School</p>
            <div className="mt-4 flex space-x-4">{/* Social media icons would go here */}</div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gold-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-gold-400">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/graduation" className="hover:text-gold-400">
                  Graduation 2024
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-gold-400" />
                <span>Thuathe Sehlabeng, Motsekuoa</span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 mr-2 flex-shrink-0 text-gold-400" />
                <span>Call or WhatsApp: +266 62830840</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-gold-400" />
                <span>info@marylandgifts.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Maryland Gifts English Medium School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

