"use client"

import { LogIn, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { PunchStatus } from "@/lib/types"

interface PunchButtonProps {
  status: PunchStatus
  onPunch: () => void
}

export function PunchButton({ status, onPunch }: PunchButtonProps) {
  const isIn = status === "in"

  return (
    <Button
      size="lg"
      onClick={onPunch}
      className={
        isIn
          ? "h-12 min-w-[220px] cursor-pointer rounded-full bg-gradient-to-r from-red-600 to-red-500 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-all hover:from-red-500 hover:to-red-400 hover:shadow-xl hover:shadow-red-500/25"
          : "h-12 min-w-[220px] cursor-pointer rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-500 hover:to-emerald-400 hover:shadow-xl hover:shadow-emerald-500/25"
      }
    >
      {isIn ? (
        <>
          <LogOut className="mr-2 h-4 w-4" />
          Punch Out
        </>
      ) : (
        <>
          <LogIn className="mr-2 h-4 w-4" />
          Punch In
        </>
      )}
    </Button>
  )
}
