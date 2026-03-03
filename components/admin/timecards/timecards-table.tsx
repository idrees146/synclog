import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { EmployeeTimecardSection } from "./employee-timecard-section"
import { EmptyState } from "@/components/shared/empty-state"
import { Clock } from "lucide-react"
import type { TimecardSummary } from "@/lib/types"

interface TimecardsTableProps {
  timecards: TimecardSummary[]
}

const COLUMN_HEADERS = [
  { label: "Emp#", className: "w-16 pl-6" },
  { label: "Employee", className: "w-44" },
  { label: "Day", className: "w-14" },
  { label: "Date", className: "w-20" },
  { label: "TOTAL", className: "w-16 text-right" },
  { label: "REG", className: "w-14 text-right" },
  { label: "OT1", className: "w-14 text-right" },
  { label: "OT2", className: "w-14 text-right" },
  { label: "OT3", className: "w-14 text-right" },
  { label: "VAC", className: "w-14 text-right" },
  { label: "HOL", className: "w-14 text-right" },
  { label: "SIC", className: "w-14 text-right" },
  { label: "PER", className: "w-14 text-right" },
  { label: "PBR", className: "w-14 text-right" },
  { label: "UBR", className: "w-14 text-right" },
  { label: "IN", className: "w-20 text-center text-[#009965]" },
  { label: "OUT", className: "w-20 text-center text-red-500" },
  { label: "Mile...", className: "w-16 text-right" },
  { label: "", className: "w-24" },
]

export function TimecardsTable({ timecards }: TimecardsTableProps) {
  if (timecards.length === 0) {
    return (
      <div className="rounded-lg border border-[#e0e0e0] bg-white">
        <EmptyState
          icon={Clock}
          title="No timecards found"
          description="Try adjusting your date range or department filter"
        />
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-[#e0e0e0] bg-white">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b-2 border-[#efefef] hover:bg-transparent">
              {COLUMN_HEADERS.map((col) => (
                <TableHead
                  key={col.label || "actions"}
                  className={`h-11 text-xs font-semibold text-[#555] ${col.className}`}
                >
                  {col.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {timecards.map((tc) => (
              <EmployeeTimecardSection
                key={tc.employeeId}
                timecard={tc}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
