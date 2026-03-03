"use client"

import { ChevronLeft, ChevronRight, FolderArchive } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TimecardsActionButtons } from "./timecards-action-buttons"
import type { DateRange } from "@/lib/types"

interface TimecardsOptionsPanelProps {
  range: DateRange
  onRangeChange: (range: DateRange) => void
  department: string
  onDepartmentChange: (dept: string) => void
}

function shiftWeek(range: DateRange, direction: number): DateRange {
  const days = direction * 7
  return {
    from: new Date(range.from.getTime() + days * 86400000),
    to: new Date(range.to.getTime() + days * 86400000),
  }
}

export function TimecardsOptionsPanel({
  range,
  onRangeChange,
  department,
  onDepartmentChange,
}: TimecardsOptionsPanelProps) {
  const periodLabel = `${format(range.from, "MM/dd/yyyy")} thru ${format(range.to, "MM/dd/yyyy")}`

  return (
    <div className="rounded-lg border border-[#e0e0e0] bg-white p-6">
      <OptionsPanelHeader />
      <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-4 lg:grid-cols-2">
        <LeftColumnFields
          range={range}
          onRangeChange={onRangeChange}
          periodLabel={periodLabel}
          department={department}
          onDepartmentChange={onDepartmentChange}
        />
        <RightColumnFields />
      </div>
      <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
        <ShowCheckboxes />
        <TimecardsActionButtons />
      </div>
    </div>
  )
}

function OptionsPanelHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold text-[#262626]">Options</h2>
        <Button
          variant="outline"
          size="sm"
          className="h-8 cursor-pointer rounded-md border-[#ddd] px-3 text-xs font-medium text-[#555]"
        >
          ··· Less
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-8 cursor-pointer rounded-md border-[#ddd] px-3 text-xs font-medium text-[#555]"
        >
          Reset
        </Button>
      </div>
      <Button
        variant="outline"
        className="h-9 cursor-pointer gap-2 rounded-md border-[#ddd] px-4 text-sm font-medium text-[#555]"
      >
        <FolderArchive className="h-4 w-4" />
        Archive
      </Button>
    </div>
  )
}

function LeftColumnFields({
  range,
  onRangeChange,
  periodLabel,
  department,
  onDepartmentChange,
}: {
  range: DateRange
  onRangeChange: (range: DateRange) => void
  periodLabel: string
  department: string
  onDepartmentChange: (dept: string) => void
}) {
  return (
    <div className="space-y-3">
      <FieldRow label="Period">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0 cursor-pointer"
            onClick={() => onRangeChange(shiftWeek(range, -1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium text-[#262626]">
            {periodLabel}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0 cursor-pointer"
            onClick={() => onRangeChange(shiftWeek(range, 1))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </FieldRow>
      <FieldRow label="Custom">
        <div className="flex items-center gap-2">
          <Input
            type="date"
            className="h-9 w-36 border-[#ddd] text-sm shadow-none"
            defaultValue={format(range.from, "yyyy-MM-dd")}
          />
          <span className="text-sm text-[#999]">—</span>
          <Input
            type="date"
            className="h-9 w-36 border-[#ddd] text-sm shadow-none"
            defaultValue={format(range.to, "yyyy-MM-dd")}
          />
        </div>
      </FieldRow>
      <FieldRow label="Dates">
        <div className="flex items-center gap-2">
          <SmallSelect defaultValue="all" options={["All"]} />
          <span className="text-sm text-[#999]">—</span>
          <SmallSelect defaultValue="all" options={["All"]} />
        </div>
      </FieldRow>
      <FieldRow label="Dept Wrkd">
        <SmallSelect
          value={department}
          onValueChange={onDepartmentChange}
          options={[
            "ALL",
            "Sales",
            "Service",
            "Parts",
            "Finance",
            "Administration",
          ]}
        />
      </FieldRow>
    </div>
  )
}

function RightColumnFields() {
  return (
    <div className="space-y-3">
      <FieldRow label="Emp">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium text-[#262626]">ALL</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0 cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </FieldRow>
      <FieldRow label="Dept">
        <SmallSelect defaultValue="all" options={["ALL"]} />
      </FieldRow>
      <FieldRow label="Mgr">
        <SmallSelect defaultValue="all" options={["ALL"]} />
      </FieldRow>
      <FieldRow label="Job">
        <SmallSelect defaultValue="all" options={["ALL"]} />
      </FieldRow>
    </div>
  )
}

function ShowCheckboxes() {
  const items = ["Punches", "Estimated Pay", "Audit Log", "Attendance"]
  return (
    <div className="flex flex-wrap items-center gap-5">
      <span className="text-sm font-semibold text-[#262626]">Show:</span>
      {items.map((item) => (
        <label
          key={item}
          className="flex cursor-pointer items-center gap-2"
        >
          <Checkbox
            defaultChecked={item === "Punches"}
            className="border-[#ccc] data-[state=checked]:border-[#009965] data-[state=checked]:bg-[#009965]"
          />
          <span className="text-sm text-[#555]">{item}</span>
        </label>
      ))}
    </div>
  )
}

function FieldRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-4">
      <Label className="w-20 shrink-0 text-right text-sm font-semibold text-[#555]">
        {label}
      </Label>
      {children}
    </div>
  )
}

function SmallSelect({
  defaultValue,
  value,
  onValueChange,
  options,
}: {
  defaultValue?: string
  value?: string
  onValueChange?: (v: string) => void
  options: string[]
}) {
  return (
    <Select
      defaultValue={!value ? defaultValue : undefined}
      value={value}
      onValueChange={onValueChange}
    >
      <SelectTrigger className="h-9 w-36 border-[#ddd] text-sm shadow-none">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt} value={opt.toLowerCase()}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
