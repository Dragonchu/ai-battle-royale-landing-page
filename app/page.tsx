import { ArenaCanvas } from "@/components/arena-canvas"
import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AgentsShowcase } from "@/components/agents-showcase"
import { LeaderboardSection } from "@/components/leaderboard-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Full-screen animated arena background */}
      <ArenaCanvas />

      {/* Navigation */}
      <NavBar />

      {/* Hero with countdown + voting */}
      <HeroSection />

      {/* Divider */}
      <div className="relative z-10 flex items-center justify-center px-4">
        <div className="h-px w-full max-w-6xl bg-border/20" />
      </div>

      {/* Features / Arena Mechanics */}
      <FeaturesSection />

      {/* Divider */}
      <div className="relative z-10 flex items-center justify-center px-4">
        <div className="h-px w-full max-w-6xl bg-border/20" />
      </div>

      {/* Agent Showcase */}
      <AgentsShowcase />

      {/* Divider */}
      <div className="relative z-10 flex items-center justify-center px-4">
        <div className="h-px w-full max-w-6xl bg-border/20" />
      </div>

      {/* Leaderboard */}
      <LeaderboardSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
