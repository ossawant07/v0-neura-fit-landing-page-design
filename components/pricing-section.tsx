"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Basic",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for getting started",
    features: ["Basic workout library", "Weekly check-ins", "Community access", "3 guided sessions"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    yearlyPrice: 279,
    description: "Most popular choice",
    features: [
      "Adaptive AI workouts",
      "Daily personalization",
      "Posture tracking",
      "Nutrition planning",
      "Priority support",
      "Monthly check-ins",
    ],
    cta: "Start 7-Day Trial",
    highlighted: true,
  },
  {
    name: "Elite",
    monthlyPrice: 99,
    yearlyPrice: 950,
    description: "For serious achievers",
    features: [
      "Everything in Pro",
      "1-on-1 coaching calls",
      "Custom meal plans",
      "Advanced metrics",
      "Wearable integration",
      "24/7 support",
      "Quarterly reviews",
    ],
    cta: "Start 7-Day Trial",
    highlighted: false,
  },
]

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground mb-8">Choose the plan that's right for you</p>

          {/* Toggle for Monthly/Yearly */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 bg-primary/30 rounded-full border border-primary/40 smooth-transition hover:bg-primary/40 cursor-pointer"
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-primary rounded-full smooth-transition ${isYearly ? "translate-x-6" : ""}`}
              ></div>
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly <span className="text-accent">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => {
            const displayPrice =
              plan.monthlyPrice === 0 ? "Free" : isYearly ? `$${plan.yearlyPrice}` : `$${plan.monthlyPrice}`
            const period = plan.monthlyPrice === 0 ? "" : isYearly ? "/year" : "/month"

            return (
              <div
                key={index}
                className={`relative rounded-2xl border smooth-transition ${
                  plan.highlighted
                    ? "border-primary/50 bg-gradient-to-br from-primary/20 to-accent/10 shadow-[0_0_40px_rgba(147,51,234,0.3)] scale-105 lg:scale-100"
                    : "border-primary/20 bg-gradient-to-br from-card/50 to-card/20 hover:border-primary/40"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-neon text-white text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">{displayPrice}</span>
                    {period && <span className="text-muted-foreground text-sm">{period}</span>}
                  </div>

                  <Button
                    className={`w-full rounded-lg mb-8 smooth-transition ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground neon-glow"
                        : "border border-primary/30 bg-transparent hover:bg-primary/10 text-foreground"
                    }`}
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check size={18} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-12">
          All plans include a 30-day money-back guarantee. No credit card required to start.
        </p>
      </div>
    </section>
  )
}
