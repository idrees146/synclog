"use client"

import { useState } from "react"
import type { DateRange } from "@/lib/types"

function getDefaultRange(): DateRange {
  const today = new Date()
  const startOfWeek = new Date(today)
  startOfWeek.setDate(today.getDate() - today.getDay())
  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 6)
  return { from: startOfWeek, to: endOfWeek }
}

export function useDateRange(initial?: DateRange) {
  const [range, setRange] = useState<DateRange>(
    initial ?? getDefaultRange
  )

  return { range, setRange }
}
