"use client"

import { TableCell, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import type { EmployeeStatus } from "@/lib/types"

interface WhosInRowProps {
  data: EmployeeStatus
  onManualPunch: (employeeId: string) => void
}

function formatTime(iso: string | null): string {
  if (!iso) return ""
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
}

export function WhosInRow({ data, onManualPunch }: WhosInRowProps) {
  const { employee, status, lastPunchIn, lastPunchOut } = data
  const isIn = status === "in"

  return (
    <TableRow className="border-b border-[#efefef] transition-colors duration-150 hover:bg-zinc-50/60">
      <TableCell className="py-5 pl-8 pr-4 text-sm text-[#262626]">
        {employee.lastName}, {employee.firstName}
      </TableCell>
      <TableCell className="py-5 pl-6 pr-2 text-sm font-semibold">
        <span className={isIn ? "text-[#009965]" : "text-red-500"}>
          {isIn ? "IN" : "OUT"}
        </span>
      </TableCell>
      <TableCell className="py-5 pl-6 pr-4 font-mono text-sm tabular-nums text-[#515151]">
        {formatTime(lastPunchIn)}
      </TableCell>
      <TableCell className="py-5 pl-6 pr-4 font-mono text-sm tabular-nums text-[#515151]">
        {formatTime(lastPunchOut)}
      </TableCell>
      <TableCell className="py-5 pl-6 pr-8 text-right">
        <Button
          onClick={() => onManualPunch(employee.id)}
          className={`h-9 cursor-pointer rounded-full px-5 text-sm font-medium shadow-none transition-all duration-200 active:scale-95 ${
            isIn
              ? "bg-[#009965] text-white hover:bg-[#007a52]"
              : "border border-[#009965] bg-transparent text-[#009965] hover:bg-[#009965]/5"
          }`}
        >
          {isIn ? "Punch Out" : "Punch In"}
        </Button>
      </TableCell>
    </TableRow>
  )
}
