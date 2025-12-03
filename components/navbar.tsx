"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-xl border-b border-border/50 smooth-transition">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-neon flex items-center justify-center smooth-transition group-hover:scale-110">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span className="text-xl font-bold text-foreground">NeuraFit</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-foreground hover:text-primary smooth-transition"
          >
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            onClick={scrollToPricing}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
          >
            Get Started
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 p-4 rounded-lg bg-card/50 backdrop-blur-md border border-border/50">
          <div className="flex flex-col gap-4">
            <Link href="#features" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-foreground hover:text-primary smooth-transition"
            >
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary smooth-transition">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
