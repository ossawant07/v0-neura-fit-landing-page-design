export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-balance">About NeuraFit</h1>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            NeuraFit is an AI-powered personalized fitness coach designed specifically for remote workers who want to
            achieve peak performance while maintaining their health.
          </p>
          <p>
            Our mission is to combine cutting-edge biometric analytics with adaptive workout technology to create a
            fitness experience that fits seamlessly into your work-from-home lifestyle.
          </p>
          <p>
            Founded by a team of AI researchers, fitness experts, and remote work advocates, NeuraFit leverages neural
            network algorithms to understand your unique body patterns and deliver workouts that evolve with you.
          </p>
          <div className="pt-8">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p>
              We believe that the future of fitness is personalized, data-driven, and integrated into daily life.
              NeuraFit represents the next generation of health optimization for the modern workforce.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
