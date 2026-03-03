"use client"

import { useEffect, useState } from "react"

interface ClockState {
  time: string
  date: string
  greeting: string
  mounted: boolean
}

function getGreeting(hour: number): string {
  if (hour < 12) return "Good morning"
  if (hour < 17) return "Good afternoon"
  return "Good evening"
}

function getClockState(): ClockState {
  const now = new Date()
  return {
    time: now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }),
    date: now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    greeting: getGreeting(now.getHours()),
    mounted: true,
  }
}

const INITIAL_STATE: ClockState = {
  time: "",
  date: "",
  greeting: "",
  mounted: false,
}

export function useClock(): ClockState {
  const [clock, setClock] = useState<ClockState>(INITIAL_STATE)

  useEffect(() => {
    setClock(getClockState())
    const interval = setInterval(() => {
      setClock(getClockState())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return clock
}
