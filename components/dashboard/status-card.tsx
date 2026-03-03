import { Circle } from "lucide-react"
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
  return (
    <div className="border-t border-zinc-100 bg-zinc-50/80">
      <div className="grid grid-cols-2 divide-x divide-zinc-100 sm:grid-cols-4">
        <div className="px-6 py-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
            Status
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <Circle
              className={
                status === "in"
                  ? "h-2.5 w-2.5 fill-emerald-500 text-emerald-500"
                  : "h-2.5 w-2.5 fill-red-500 text-red-500"
              }
            />
            <span className="text-sm font-semibold text-zinc-800">
              {status === "in" ? "Clocked In" : "Clocked Out"}
            </span>
          </div>
        </div>
        <div className="px-6 py-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
            Last In
          </p>
          <p className="mt-3 font-mono text-sm font-semibold text-zinc-800">
            {formatPunchTime(lastPunchIn)}
          </p>
        </div>
        <div className="px-6 py-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
            Last Out
          </p>
          <p className="mt-3 font-mono text-sm font-semibold text-zinc-800">
            {formatPunchTime(lastPunchOut)}
          </p>
        </div>
        <div className="px-6 py-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
            IP Address
          </p>
          <p className="mt-3 font-mono text-sm text-zinc-500">
            {ipAddress}
          </p>
        </div>
      </div>
    </div>
  )
}
