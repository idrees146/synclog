"use client"

import { useState } from "react"
import { toast } from "sonner"
import { ClockDisplay } from "./clock-display"
import { PunchButton } from "./punch-button"
import { StatusCard } from "./status-card"
import type { PunchStatus } from "@/lib/types"

export function PunchSection() {
  const [status, setStatus] = useState<PunchStatus>("out")
  const [lastPunchIn, setLastPunchIn] = useState<string | null>(
    null
  )
  const [lastPunchOut, setLastPunchOut] = useState<string | null>(
    null
  )

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
        <ClockDisplay />
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
