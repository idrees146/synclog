"use client"

import { useState, useEffect } from "react"
import { toast } from "sonner"
import { useClock } from "@/hooks/use-clock"
import { PunchButton } from "./punch-button"
import { StatusCard } from "./status-card"
import type { PunchStatus } from "@/lib/types"

export function PunchSection() {
  const clock = useClock()
  const [status, setStatus] = useState<PunchStatus>("out")
  const [lastPunchIn, setLastPunchIn] = useState<string | null>(null)
  const [lastPunchOut, setLastPunchOut] = useState<string | null>(null)
  const [todayHours, setTodayHours] = useState(0)

  useEffect(() => {
    if (status !== "in" || !lastPunchIn) return
    const interval = setInterval(() => {
      const elapsed =
        (Date.now() - new Date(lastPunchIn).getTime()) / 3600000
      setTodayHours(Math.round(elapsed * 100) / 100)
    }, 1000)
    return () => clearInterval(interval)
  }, [status, lastPunchIn])

  function handlePunch() {
    const now = new Date().toISOString()
    if (status === "out") {
      setStatus("in")
      setLastPunchIn(now)
      toast.success("Punched in successfully")
    } else {
      setStatus("out")
      setLastPunchOut(now)
      toast.success("Punched out successfully")
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-900/[0.04]">
      <div className="space-y-8 px-8 pb-10 pt-12">
        {/* Live Clock */}
        <div className="text-center">
          <p className="font-mono text-5xl font-bold tabular-nums tracking-tight text-[#262626] sm:text-6xl">
            {clock.mounted ? clock.time : "\u00A0"}
          </p>
          <p className="mt-2 text-sm font-medium text-zinc-400">
            {clock.mounted ? clock.date : "\u00A0"}
          </p>
        </div>

        {/* Today's Hours */}
        <div className="text-center">
          <p className="font-mono text-3xl font-bold tabular-nums tracking-tight text-[#262626]">
            {todayHours.toFixed(2)}
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[#999]">
            hours today
          </p>
        </div>

        {/* Punch Button */}
        <div className="flex justify-center">
          <PunchButton status={status} onPunch={handlePunch} />
        </div>
      </div>

      <StatusCard
        status={status}
        lastPunchIn={lastPunchIn}
        lastPunchOut={lastPunchOut}
        ipAddress="192.168.1.42"
      />
    </div>
  )
}
