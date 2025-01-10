'use client'

import { Button } from "../ui/button"
import { GraduationCap } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#002B5B]">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold text-white">ORIENTY</span>
        </Link>
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-gray-200 transition-colors"
          >
            Qui sommes-nous ?
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-gray-200 transition-colors"
          >
            Comment ça marche ?
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-white hover:text-gray-200 transition-colors"
          >
            FAQ
          </Link>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white/10 transition-colors"
          >
            My ORIENTY
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#002B5B] p-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                href="#"
                className="text-sm font-medium text-white hover:text-gray-200 transition-colors"
              >
                Qui sommes-nous ?
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-white hover:text-gray-200 transition-colors"
              >
                Comment ça marche ?
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-white hover:text-gray-200 transition-colors"
              >
                FAQ
              </Link>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white/10 transition-colors w-full"
              >
                My ORIENTY
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

