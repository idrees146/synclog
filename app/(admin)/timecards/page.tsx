"use client"

import { useState } from "react"
import { format } from "date-fns"
import { TimecardsOptionsPanel } from "@/components/admin/timecards/timecards-options-panel"
import { TimecardsTable } from "@/components/admin/timecards/timecards-table"
import { useDateRange } from "@/hooks/use-date-range"
import { mockTimecards } from "@/lib/mock/timecards"

export default function AdminTimecardsPage() {
  const { range, setRange } = useDateRange()
  const [department, setDepartment] = useState("all")

  const filtered =
    department === "all"
      ? mockTimecards
      : mockTimecards.filter((tc) => tc.department === department)

  const payPeriodLabel = `Pay Period: ${format(range.from, "MM/dd/yyyy")} thru ${format(range.to, "MM/dd/yyyy")}`

  return (
    <div className="mx-auto max-w-360 px-6 pt-14 pb-20 md:px-10">
      {/* Title */}
      <div className="animate-in fade-in duration-500">
        <h1 className="text-center text-[40px] font-bold text-[#262626]">
          Time Cards
        </h1>
      </div>

      {/* Options Panel */}
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100 mt-8">
        <TimecardsOptionsPanel
          range={range}
          onRangeChange={setRange}
          department={department}
          onDepartmentChange={setDepartment}
        />
      </div>

      {/* Pay Period Bar */}
      <div className="animate-in fade-in duration-500 delay-150 mt-6">
        <div className="rounded-lg bg-[#009965] px-6 py-3">
          <span className="text-sm font-semibold text-white">
            {payPeriodLabel}
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200 mt-1">
        <TimecardsTable timecards={filtered} />
      </div>
    </div>
  )
}
