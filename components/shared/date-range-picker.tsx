"use client"

import { CalendarDays } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { DateRange } from "@/lib/types"

interface DateRangePickerProps {
  range: DateRange
  onRangeChange: (range: DateRange) => void
}

export function DateRangePicker({
  range,
  onRangeChange,
}: DateRangePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-10 justify-start text-left font-normal shadow-sm"
        >
          <CalendarDays className="mr-2 h-4 w-4 text-zinc-400" />
          {format(range.from, "MMM d")} –{" "}
          {format(range.to, "MMM d, yyyy")}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={{ from: range.from, to: range.to }}
          onSelect={(selected) => {
            if (selected?.from && selected?.to) {
              onRangeChange({
                from: selected.from,
                to: selected.to,
              })
            }
          }}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  )
}
