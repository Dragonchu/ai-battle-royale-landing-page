"use client"

import { ArenaCanvas } from "@/components/arena-canvas"
import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AgentsShowcase } from "@/components/agents-showcase"
import { LeaderboardSection } from "@/components/leaderboard-section"
import { Footer } from "@/components/footer"

export default function LandingContent() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ArenaCanvas />
      <NavBar />
      <HeroSection />

      <div className="relative z-10 flex items-center justify-center px-4">
        <div className="h-px w-full max-w-6xl bg-border/20" />
      </div>

      <FeaturesSection />

      <div className="relative z-10 flex items-center justify-center px-4">
        <div className="h-px w-full max-w-6xl bg-border/20" />
      </div>

      <AgentsShowcase />

      <div className="relative z-10 flex items-center justify-center px-4">
        <div className="h-px w-full max-w-6xl bg-border/20" />
      </div>

      <LeaderboardSection />
      <Footer />
    </main>
  )
}
