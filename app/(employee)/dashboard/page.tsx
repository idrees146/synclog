"use client"

import { useClock } from "@/hooks/use-clock"
import { DashboardHero } from "@/components/dashboard/dashboard-hero"
import { PunchSection } from "@/components/dashboard/punch-section"

export default function DashboardPage() {
  const clock = useClock()

  return (
    <div>
      <DashboardHero
        name="James Mitchell"
        company="B&G Auto Sales"
        mounted={clock.mounted}
        greeting={clock.greeting}
      />
      <div className="mx-auto max-w-2xl px-6 py-12">
        <PunchSection />
      </div>
    </div>
  )
}
