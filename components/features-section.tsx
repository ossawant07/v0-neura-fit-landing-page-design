"use client"

import { Zap, Brain, Apple } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Adaptive Workouts Personalized to You",
    description:
      "Machine learning algorithms analyze your fitness level, goals, and preferences to create workouts that evolve with you.",
    image: "/personalized-workout-ai-interface.jpg",
  },
  {
    icon: Brain,
    title: "Posture & Movement Tracking Using Neural AI",
    description:
      "Real-time posture correction using computer vision. Protect your spine and prevent repetitive strain injuries.",
    image: "/posture-tracking-neural-network-visualization.jpg",
  },
  {
    icon: Apple,
    title: "Nutrition Plans Based on Cognitive Performance",
    description: "AI-generated meal plans that optimize your energy, focus, and productivity throughout your workday.",
    image: "/nutrition-planning-ai-dashboard.jpg",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Powerful Features for Peak Performance</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform your health and productivity as a remote professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-md hover:border-primary/50 smooth-transition hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:scale-105"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 smooth-transition -z-10"></div>

                <div className="mb-4 rounded-lg overflow-hidden">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-40 object-cover opacity-80 group-hover:opacity-100 smooth-transition group-hover:scale-110"
                  />
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/40 smooth-transition">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary smooth-transition">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full w-0 group-hover:w-full smooth-transition"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
