import type { PunchPair } from "@/lib/types"

interface PunchPairsCellProps {
  pairs: PunchPair[]
  dailyTotal?: number
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
}

export function PunchPairsCell({
  pairs,
  dailyTotal,
}: PunchPairsCellProps) {
  if (pairs.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-1.5">
      {pairs.map((pair, i) => (
        <div key={i} className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            <span className="font-medium text-emerald-700">
              In @
            </span>
            <span className="font-mono text-zinc-600">
              {formatTime(pair.punchIn)}
            </span>
          </span>
          {pair.punchOut && (
            <span className="flex items-center gap-1.5 text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />
              <span className="font-medium text-rose-600">
                Out @
              </span>
              <span className="font-mono text-zinc-600">
                {formatTime(pair.punchOut)}
              </span>
            </span>
          )}
        </div>
      ))}
      {dailyTotal !== undefined && (
        <span className="ml-auto text-sm text-zinc-500">
          Total:{" "}
          <span className="font-mono font-semibold text-zinc-800">
            {dailyTotal.toFixed(2)} hours
          </span>
        </span>
      )}
    </div>
  )
}
