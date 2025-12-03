"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
              <p className="text-sm font-medium text-primary">Introducing NeuraFit</p>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Become Your Peak Self in <span className="gradient-neon bg-clip-text text-transparent">Just 30 Days</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              NeuraFit uses biometric analytics and adaptive workouts to optimize your health while you work. Your
              personal AI coach meets you where you are.
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              size="lg"
              onClick={scrollToPricing}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full smooth-transition neon-glow"
            >
              Start Free Trial
            </Button>
          </div>

          <div className="pt-6 flex gap-8 text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">50K+</p>
              <p>Remote Workers</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">4.9★</p>
              <p>Rating</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">30 Days</p>
              <p>Money Back</p>
            </div>
          </div>
        </div>

        {/* Right - AI Illustration */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-lg">
            {/* Outer glowing circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl"></div>

            {/* Inner container with animated elements */}
            <div className="absolute inset-8 rounded-3xl border border-primary/20 backdrop-blur-md bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
              {/* Demo image with fallback to SVG visualization */}
              <img
                src="/ai-powered-fitness-tracking-holographic-interface.jpg"
                alt="NeuraFit AI Interface Demo"
                className="w-full h-full object-cover rounded-3xl opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-sm">Scroll to explore</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
