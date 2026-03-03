"use client"

import { useClock } from "@/hooks/use-clock"
import { Skeleton } from "@/components/ui/skeleton"

export function ClockDisplay() {
  const { time, date, mounted } = useClock()

  if (!mounted) {
    return (
      <div className="flex flex-col items-center gap-3">
        <Skeleton className="h-5 w-32 rounded-md" />
        <Skeleton className="h-16 w-64 rounded-md" />
      </div>
    )
  }

  return (
    <div className="text-center">
      <p className="text-sm font-medium text-zinc-400">{date}</p>
      <p className="mt-2 font-mono text-5xl font-bold tabular-nums tracking-tight text-zinc-900 sm:text-6xl">
        {time}
      </p>
    </div>
  )
}
