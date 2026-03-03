import { Table, TableBody } from "@/components/ui/table"
import { TimecardHeader } from "./timecard-header"
import { TimecardRow } from "./timecard-row"
import { TimecardTotals } from "./timecard-totals"
import type { TimecardSummary } from "@/lib/types"

interface TimecardTableProps {
  timecard: TimecardSummary
}

export function TimecardTable({ timecard }: TimecardTableProps) {
  return (
    <div className="overflow-hidden rounded-[6.4px] bg-white">
      <Table>
        <TimecardHeader />
        <TableBody>
          {timecard.entries.map((entry) => (
            <TimecardRow key={entry.date} entry={entry} />
          ))}
        </TableBody>
        <TimecardTotals totals={timecard.totals} />
      </Table>
    </div>
  )
}
