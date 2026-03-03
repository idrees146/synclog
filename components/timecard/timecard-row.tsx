import { TableCell, TableRow } from "@/components/ui/table"
import { PunchPairsCell } from "./punch-pairs-cell"
import { cn } from "@/lib/utils"
import type { TimecardDayEntry } from "@/lib/types"

interface TimecardRowProps {
  entry: TimecardDayEntry
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00")
  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  })
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
}

function fmt(val: number | undefined): string {
  return (val ?? 0).toFixed(2)
}

export function TimecardRow({ entry }: TimecardRowProps) {
  const isEmpty = entry.punchPairs.length === 0
  const firstIn = entry.punchPairs[0]?.punchIn
  const lastOut = entry.punchPairs[entry.punchPairs.length - 1]?.punchOut
  const overtime = Math.max(0, entry.dailyTotal - 8)
  const regular = entry.dailyTotal - overtime

  return (
    <>
      {/* Main data row */}
      <TableRow
        className={cn(
          "transition-colors duration-150 hover:bg-zinc-50/60",
          isEmpty
            ? "border-b-2 border-[#e8e8e8]"
            : "border-b border-[#efefef]"
        )}
      >
        <TableCell className="py-7 pl-6 pr-4 text-sm font-bold text-[#262626] whitespace-nowrap">
          {entry.dayOfWeek.slice(0, 3)}
        </TableCell>
        <TableCell className="py-7 pl-6 pr-4 text-sm text-[#515151] whitespace-nowrap">
          {formatDate(entry.date)}
        </TableCell>
        <TableCell className="py-7 pl-6 pr-4 font-mono text-sm font-bold tabular-nums text-[#262626]">
          {entry.dailyTotal > 0 ? entry.dailyTotal.toFixed(2) : "0.00"}
        </TableCell>
        <TableCell className="py-7 pl-6 pr-4 font-mono text-sm tabular-nums text-[#515151]">
          {entry.dailyTotal > 0 ? regular.toFixed(2) : "0.00"}
        </TableCell>
        <TableCell className="py-7 pl-6 pr-4 font-mono text-sm tabular-nums text-[#515151]">
          {overtime > 0 ? overtime.toFixed(2) : "0.00"}
        </TableCell>
        <TableCell className="py-7 pl-6 pr-4 font-mono text-sm tabular-nums text-[#515151]">
          {fmt(entry.ot2Hours)}
        </TableCell>
        <TableCell className="py-7 pl-6 pr-4 font-mono text-sm tabular-nums text-[#515151]">
          {fmt(entry.ot3Hours)}
        </TableCell>
        <TableCell className="py-7 pl-6 pr-4 font-mono text-sm tabular-nums text-[#515151]">
          {fmt(entry.vacHours)}
        </TableCell>
        <TableCell className="py-7 pl-6 pr-4 font-mono text-sm tabular-nums text-[#515151]">
          {fmt(entry.holHours)}
        </TableCell>
        <TableCell className="py-7 pl-6 pr-4 font-mono text-sm tabular-nums text-[#515151]">
          {fmt(entry.sicHours)}
        </TableCell>
        <TableCell className="py-7 pl-6 pr-4 font-mono text-sm tabular-nums text-[#515151]">
          {fmt(entry.perHours)}
        </TableCell>
        <TableCell className="py-7 pl-6 pr-4 font-mono text-sm tabular-nums text-[#515151]">
          {fmt(entry.pbrHours)}
        </TableCell>
        <TableCell className="py-7 pl-6 pr-4 font-mono text-sm tabular-nums text-[#515151]">
          {fmt(entry.ubrHours)}
        </TableCell>
        <TableCell className="py-7 pl-6 pr-4 font-mono text-sm font-semibold tabular-nums text-[#24b353] whitespace-nowrap">
          {firstIn ? formatTime(firstIn) : "—"}
        </TableCell>
        <TableCell className="py-7 pl-6 pr-6 font-mono text-sm font-semibold tabular-nums text-[#ff130d] whitespace-nowrap">
          {lastOut ? formatTime(lastOut) : "—"}
        </TableCell>
      </TableRow>

      {/* Punch detail row — subtle background to visually group with the day above */}
      {!isEmpty && (
        <TableRow className="border-b-2 border-[#e8e8e8] bg-[#fafafa] hover:bg-[#fafafa]">
          <TableCell colSpan={15} className="px-8 pb-8 pt-4">
            <PunchPairsCell
              pairs={entry.punchPairs}
              dailyTotal={entry.dailyTotal}
            />
          </TableCell>
        </TableRow>
      )}
    </>
  )
}
