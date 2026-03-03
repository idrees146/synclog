import {
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table"
import type { TimecardTotals as TotalsType } from "@/lib/types"

interface TimecardTotalsProps {
  totals: TotalsType
}

function fmt(val: number | undefined): string {
  return (val ?? 0).toFixed(2)
}

export function TimecardTotals({ totals }: TimecardTotalsProps) {
  const overtime = Math.max(0, totals.overtimeHours)

  return (
    <TableFooter className="bg-[#ddd] hover:bg-[#ddd]">
      <TableRow className="border-0 hover:bg-[#ddd]">
        <TableCell className="py-5 pl-6 pr-2 text-sm font-semibold text-[#262626]">
          {/* Day column — blank */}
        </TableCell>
        <TableCell className="py-5 pl-6 pr-2 text-sm font-semibold text-[#262626] whitespace-nowrap">
          TOTALS
        </TableCell>
        <TableCell className="py-5 pl-6 pr-2 font-mono text-sm font-semibold tabular-nums text-[#262626]">
          {totals.totalHours.toFixed(2)}
        </TableCell>
        <TableCell className="py-5 pl-6 pr-2 font-mono text-sm font-semibold tabular-nums text-[#262626]">
          {totals.regularHours.toFixed(2)}
        </TableCell>
        <TableCell className="py-5 pl-6 pr-2 font-mono text-sm font-semibold tabular-nums text-[#262626]">
          {overtime.toFixed(2)}
        </TableCell>
        <TableCell className="py-5 pl-6 pr-2 font-mono text-sm font-semibold tabular-nums text-[#262626]">
          {fmt(totals.ot2Hours)}
        </TableCell>
        <TableCell className="py-5 pl-6 pr-2 font-mono text-sm font-semibold tabular-nums text-[#262626]">
          {fmt(totals.ot3Hours)}
        </TableCell>
        <TableCell className="py-5 pl-6 pr-2 font-mono text-sm font-semibold tabular-nums text-[#262626]">
          {fmt(totals.vacHours)}
        </TableCell>
        <TableCell className="py-5 pl-6 pr-2 font-mono text-sm font-semibold tabular-nums text-[#262626]">
          {fmt(totals.holHours)}
        </TableCell>
        <TableCell className="py-5 pl-6 pr-2 font-mono text-sm font-semibold tabular-nums text-[#262626]">
          {fmt(totals.sicHours)}
        </TableCell>
        <TableCell className="py-5 pl-6 pr-2 font-mono text-sm font-semibold tabular-nums text-[#262626]">
          {fmt(totals.perHours)}
        </TableCell>
        <TableCell className="py-5 pl-6 pr-2 font-mono text-sm font-semibold tabular-nums text-[#262626]">
          {fmt(totals.pbrHours)}
        </TableCell>
        <TableCell className="py-5 pl-6 pr-2 font-mono text-sm font-semibold tabular-nums text-[#262626]">
          {fmt(totals.ubrHours)}
        </TableCell>
        <TableCell className="py-5 pl-6 pr-2" />
        <TableCell className="py-5 pl-6 pr-6" />
      </TableRow>
    </TableFooter>
  )
}
