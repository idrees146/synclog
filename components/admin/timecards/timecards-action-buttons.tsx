"use client"

import { Printer, Mail, FileSpreadsheet, ChevronDown, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TimecardsActionButtons() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <ActionButton variant="outline" icon={Printer} label="Print" />
      <ActionButton variant="outline" icon={Mail} label="Email" />
      <ActionButton
        variant="outline"
        icon={FileSpreadsheet}
        label="Export CSV"
      />
      <ActionButton
        variant="outline"
        icon={ChevronDown}
        label="More"
        iconRight
      />
      <ActionButton variant="filled" icon={Plus} label="Add Multi Day" />
      <ActionButton variant="filled" icon={Plus} label="Add Day" />
    </div>
  )
}

function ActionButton({
  variant,
  icon: Icon,
  label,
  iconRight,
}: {
  variant: "outline" | "filled"
  icon: React.ComponentType<{ className?: string }>
  label: string
  iconRight?: boolean
}) {
  const isOutline = variant === "outline"

  return (
    <Button
      variant={isOutline ? "outline" : "default"}
      className={`h-10 cursor-pointer gap-2 rounded-md px-4 text-sm font-medium transition-all duration-200 ${
        isOutline
          ? "border-[#009965] text-[#009965] hover:bg-[#009965]/5"
          : "bg-[#009965] text-white hover:bg-[#007a52]"
      } ${iconRight ? "flex-row-reverse" : ""}`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Button>
  )
}
