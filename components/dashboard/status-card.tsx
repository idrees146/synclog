import { Clock, Shield, Circle } from "lucide-react"
import type { PunchStatus } from "@/lib/types"

interface StatusCardProps {
  status: PunchStatus
  lastPunchIn: string | null
  lastPunchOut: string | null
  ipAddress: string
}

function formatPunchTime(iso: string | null): string {
  if (!iso) return "—"
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
}

export function StatusCard({
  status,
  lastPunchIn,
  lastPunchOut,
  ipAddress,
}: StatusCardProps) {
  const isIn = status === "in"

  return (
    <div className="border-t border-zinc-100 bg-zinc-50/80">
      <div className="grid grid-cols-2 divide-x divide-zinc-100 sm:grid-cols-4">
        {/* Status */}
        <div className="px-5 py-5 text-center">
          <div className="flex items-center justify-center gap-1.5">
            <Circle className="h-3 w-3 text-zinc-300" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
              Status
            </p>
          </div>
          <div className="mt-2.5 flex items-center justify-center gap-2">
            <span
              className={`inline-block h-2 w-2 rounded-full ${
                isIn ? "bg-emerald-500" : "bg-red-500"
              }`}
            />
            <span
              className={`text-sm font-semibold ${
                isIn ? "text-emerald-600" : "text-red-500"
              }`}
            >
              {isIn ? "Clocked In" : "Clocked Out"}
            </span>
          </div>
        </div>

        {/* Last In */}
        <div className="px-5 py-5 text-center">
          <div className="flex items-center justify-center gap-1.5">
            <Clock className="h-3 w-3 text-emerald-400" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
              Last In
            </p>
          </div>
          <p className="mt-2.5 font-mono text-sm font-semibold tabular-nums text-zinc-700">
            {formatPunchTime(lastPunchIn)}
          </p>
        </div>

        {/* Last Out */}
        <div className="px-5 py-5 text-center">
          <div className="flex items-center justify-center gap-1.5">
            <Clock className="h-3 w-3 text-red-400" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
              Last Out
            </p>
          </div>
          <p className="mt-2.5 font-mono text-sm font-semibold tabular-nums text-zinc-700">
            {formatPunchTime(lastPunchOut)}
          </p>
        </div>

        {/* IP Address */}
        <div className="px-5 py-5 text-center">
          <div className="flex items-center justify-center gap-1.5">
            <Shield className="h-3 w-3 text-zinc-300" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
              IP Address
            </p>
          </div>
          <p className="mt-2.5 font-mono text-sm tabular-nums text-zinc-500">
            {ipAddress}
          </p>
        </div>
      </div>
    </div>
  )
}
