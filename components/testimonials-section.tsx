"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at TechCorp",
    content: "NeuraFit transformed my remote work routine. I've never felt more energized during work hours.",
    rating: 5,
    image: "/professional-woman-headshot.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Software Engineer",
    content: "The posture tracking alone is worth it. My back pain is completely gone after 2 weeks.",
    rating: 5,
    image: "/professional-man-headshot.png",
  },
  {
    name: "Emma Thompson",
    role: "Design Lead at StartupXYZ",
    content: "Best investment for my health. The personalized nutrition plans keep my focus sharp all day.",
    rating: 5,
    image: "/professional-woman-designer-headshot.png",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Loved By Remote Professionals Worldwide</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands who've transformed their health and productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-card/50 to-card/20 backdrop-blur-md smooth-transition hover:border-primary/40 hover:shadow-[0_0_25px_rgba(147,51,234,0.25)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-500 text-yellow-500" />
                  ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-primary/20"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
