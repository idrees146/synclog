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
    <div
      className="rounded-full"
      style={{
        animation: isIn
          ? "punchBreatheRed 2.5s ease-in-out infinite"
          : "punchBreatheGreen 2.5s ease-in-out infinite",
      }}
    >
      <Button
        size="lg"
        onClick={onPunch}
        className={`h-14 min-w-[260px] cursor-pointer rounded-full text-base font-semibold text-white transition-all duration-200 active:scale-95 ${
          isIn
            ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400"
            : "bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400"
        }`}
      >
        {isIn ? (
          <>
            <LogOut className="mr-2 h-5 w-5" />
            Punch Out
          </>
        ) : (
          <>
            <LogIn className="mr-2 h-5 w-5" />
            Punch In
          </>
        )}
      </Button>

      <style>{`
        @keyframes punchBreatheGreen {
          0%, 100% { box-shadow: 0 0 16px rgba(0,153,101,0.15); }
          50% { box-shadow: 0 0 28px rgba(0,153,101,0.4); }
        }
        @keyframes punchBreatheRed {
          0%, 100% { box-shadow: 0 0 16px rgba(239,68,68,0.15); }
          50% { box-shadow: 0 0 28px rgba(239,68,68,0.4); }
        }
      `}</style>
    </div>
  )
}
