"use client"

import { Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/shared/date-range-picker"
import type { DateRange } from "@/lib/types"

interface TimecardToolbarProps {
  range: DateRange
  onRangeChange: (range: DateRange) => void
}

export function TimecardToolbar({
  range,
  onRangeChange,
}: TimecardToolbarProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <p className="mb-2 text-[16.7px] font-semibold text-[#686868]">
          Pay Period
        </p>
        <div className="w-full max-w-[560px]">
          <DateRangePicker
            range={range}
            onRangeChange={onRangeChange}
          />
        </div>
      </div>

      <Button
        className="h-14 cursor-pointer rounded-full bg-[#009965] px-8 text-base font-medium tracking-[0.36px] text-white shadow-none transition-all duration-200 hover:bg-[#007a52]  active:scale-[0.97]"
      >
        <Printer className="mr-2 h-4 w-4" />
        Print PDF
      </Button>
    </div>
  )
}
