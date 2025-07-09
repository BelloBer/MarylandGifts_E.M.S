"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Gallery", href: "/gallery" },
  { name: "Graduation 2024", href: "/graduation" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Maryland Gifts English Medium School</span>
            <div className="flex items-center gap-2">
              {/* Placeholder for logo */}
              <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src="/images/Logo Maryland.png" 
                  alt="logo"
                  width="100"
                  height="100"
                  className="object-cover "
                  />
              </div>
              <div className="hidden md:block">
                <h1 className="font-bold text-navy-600">Maryland Gifts</h1>
                <p className="text-xs text-gray-600">English Medium School</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-maroon-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button className="bg-navy-600 hover:bg-navy-700 text-white">
            <Link href="/enroll">Enroll Now</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="fixed inset-0 flex">
            <div className="w-full">
              <div className="flex h-16 items-center justify-between px-6">
                <div className="-m-1.5 p-1.5">
                  <span className="sr-only">Maryland Gifts English Medium School</span>
                  <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Logo</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
              <div className="mt-6 flow-root px-6">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="py-6">
                    <Button className="w-full bg-navy-600 hover:bg-navy-700 text-white">
                      <Link href="/enroll"> Enroll Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

