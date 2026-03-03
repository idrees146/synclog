import { Pencil, X } from "lucide-react"
import { TableCell, TableRow } from "@/components/ui/table"
import { mockEmployees } from "@/lib/mock/employees"
import type { TimecardSummary, TimecardDayEntry } from "@/lib/types"

interface EmployeeTimecardSectionProps {
  timecard: TimecardSummary
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00")
  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  })
}

function formatShortDay(dayOfWeek: string): string {
  return dayOfWeek.slice(0, 3)
}

function formatPunchTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
}

function getEmpNumber(employeeId: string): string {
  const emp = mockEmployees.find((e) => e.id === employeeId)
  return emp?.empNumber ?? ""
}

function num(val: number | undefined): string {
  return (val ?? 0).toFixed(2)
}

export function EmployeeTimecardSection({
  timecard,
}: EmployeeTimecardSectionProps) {
  const empNumber = getEmpNumber(timecard.employeeId)
  const nameParts = timecard.employeeName.split(" ")
  const displayName =
    nameParts.length >= 2
      ? `${nameParts[nameParts.length - 1]}, ${nameParts[0]}`
      : timecard.employeeName

  return (
    <>
      {timecard.entries.map((entry, i) => (
        <DayRow
          key={entry.date}
          entry={entry}
          empNumber={i === 0 ? empNumber : ""}
          employeeName={i === 0 ? displayName : ""}
        />
      ))}
      <SubtotalRow timecard={timecard} />
    </>
  )
}

function DayRow({
  entry,
  empNumber,
  employeeName,
}: {
  entry: TimecardDayEntry
  empNumber: string
  employeeName: string
}) {
  const hasPunches = entry.punchPairs.length > 0
  const firstIn = hasPunches ? entry.punchPairs[0].punchIn : null
  const lastOut = hasPunches
    ? entry.punchPairs[entry.punchPairs.length - 1].punchOut
    : null

  return (
    <TableRow className="border-b border-[#efefef] transition-colors duration-150 hover:bg-zinc-50/60">
      <TableCell className="py-6 pl-6 pr-2 text-sm text-[#262626]">
        {empNumber}
      </TableCell>
      <TableCell className="py-6 pr-2 text-sm font-medium text-[#262626]">
        {employeeName}
      </TableCell>
      <TableCell className="py-6 pr-2 text-sm text-[#515151]">
        {formatShortDay(entry.dayOfWeek)}
      </TableCell>
      <TableCell className="py-6 pr-2 text-sm text-[#515151]">
        {formatDate(entry.date)}
      </TableCell>
      <NumCell value={entry.dailyTotal} bold />
      <NumCell value={entry.dailyTotal} />
      <NumCell value={entry.ot1Hours} />
      <NumCell value={entry.ot2Hours} />
      <NumCell value={entry.ot3Hours} />
      <NumCell value={entry.vacHours} />
      <NumCell value={entry.holHours} />
      <NumCell value={entry.sicHours} />
      <NumCell value={entry.perHours} />
      <NumCell value={entry.pbrHours} />
      <NumCell value={entry.ubrHours} />
      <TableCell className="py-6 text-center font-mono text-sm tabular-nums text-[#009965]">
        {firstIn ? formatPunchTime(firstIn) : ""}
      </TableCell>
      <TableCell className="py-6 text-center font-mono text-sm tabular-nums text-red-500">
        {lastOut ? formatPunchTime(lastOut) : ""}
      </TableCell>
      <NumCell value={0} />
      <TableCell className="py-6 pr-6">
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#009965]/10 transition-all duration-200 hover:scale-110"
          >
            <Pencil className="h-3.5 w-3.5 text-[#009965]" />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-500/10 transition-all duration-200 hover:scale-110"
          >
            <X className="h-3.5 w-3.5 text-red-500" />
          </button>
        </div>
      </TableCell>
    </TableRow>
  )
}

function SubtotalRow({ timecard }: { timecard: TimecardSummary }) {
  const { totals } = timecard

  return (
    <TableRow className="border-b-2 border-[#e8e8e8] bg-[#fafafa] hover:bg-[#fafafa]">
      <TableCell className="py-5 pl-6 pr-2 text-sm text-[#262626]" />
      <TableCell className="py-5 pr-2 text-sm font-semibold text-[#262626]">
        Hours Sub Total
      </TableCell>
      <TableCell className="py-5" />
      <TableCell className="py-5" />
      <NumCell value={totals.totalHours} bold />
      <NumCell value={totals.regularHours} />
      <NumCell value={totals.ot1Hours} />
      <NumCell value={totals.ot2Hours} />
      <NumCell value={totals.ot3Hours} />
      <NumCell value={totals.vacHours} />
      <NumCell value={totals.holHours} />
      <NumCell value={totals.sicHours} />
      <NumCell value={totals.perHours} />
      <NumCell value={totals.pbrHours} />
      <NumCell value={totals.ubrHours} />
      <TableCell className="py-5" />
      <TableCell className="py-5" />
      <NumCell value={totals.mileage} />
      <TableCell className="py-5 pr-6 text-right">
        <span className="cursor-pointer text-sm font-medium text-[#009965] hover:underline">
          Edit All
        </span>
      </TableCell>
    </TableRow>
  )
}

function NumCell({
  value,
  bold,
}: {
  value: number | undefined
  bold?: boolean
}) {
  return (
    <TableCell
      className={`py-6 pr-3 text-right font-mono text-sm tabular-nums text-[#515151] ${
        bold ? "font-semibold text-[#262626]" : ""
      }`}
    >
      {num(value)}
    </TableCell>
  )
}
