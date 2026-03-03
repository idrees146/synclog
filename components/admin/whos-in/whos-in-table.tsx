"use client"

import { useState } from "react"
import { toast } from "sonner"
import { ArrowUp } from "lucide-react"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { WhosInRow } from "./whos-in-row"
import { ManualPunchDialog } from "./manual-punch-dialog"
import type { EmployeeStatus } from "@/lib/types"

interface WhosInTableProps {
  data: EmployeeStatus[]
}

export function WhosInTable({ data }: WhosInTableProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = data.find((d) => d.employee.id === selectedId)

  function handleConfirm() {
    if (selected) {
      const name = `${selected.employee.firstName} ${selected.employee.lastName}`
      const action =
        selected.status === "in" ? "punched out" : "punched in"
      toast.success(`${name} ${action} successfully`)
    }
    setSelectedId(null)
  }

  if (data.length === 0) {
    return (
      <div className="rounded-lg bg-white py-20 text-center">
        <p className="text-sm text-[#999]">No employees found</p>
      </div>
    )
  }

  return (
    <>
      <div className="overflow-hidden rounded-lg bg-white">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-[#efefef] bg-white hover:bg-white">
                <TableHead className="w-72 py-5 pl-8 pr-4 text-sm font-semibold text-[#262626]">
                  Employee
                </TableHead>
                <TableHead className="w-36 py-5 pl-6 pr-2 text-sm font-semibold text-[#262626]">
                  <span className="flex items-center gap-1.5">
                    Punched
                    <ArrowUp className="h-3.5 w-3.5 text-[#009965]" />
                  </span>
                </TableHead>
                <TableHead className="w-36 py-5 pl-6 pr-4 text-sm font-semibold text-[#262626]">
                  Time In
                </TableHead>
                <TableHead className="w-36 py-5 pl-6 pr-4 text-sm font-semibold text-[#262626]">
                  Time Out
                </TableHead>
                <TableHead className="w-40 py-5 pl-6 pr-8 text-right text-sm font-semibold text-[#262626]">
                  Manual Punch
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <WhosInRow
                  key={item.employee.id}
                  data={item}
                  onManualPunch={setSelectedId}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <ManualPunchDialog
        employee={selected ?? null}
        open={selectedId !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedId(null)
        }}
        onConfirm={handleConfirm}
      />
    </>
  )
}
