"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Department } from "@/lib/types"

const departments: Department[] = [
  "Sales",
  "Service",
  "Parts",
  "Finance",
  "Administration",
]

interface WhosInToolbarProps {
  search: string
  onSearchChange: (value: string) => void
  status: string
  onStatusChange: (value: string) => void
  department: string
  onDepartmentChange: (value: string) => void
}

export function WhosInToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  department,
  onDepartmentChange,
}: WhosInToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative flex-1 sm:max-w-xs">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search employees..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-10 pl-9 shadow-sm"
        />
      </div>
      <Select value={status} onValueChange={onStatusChange}>
        <SelectTrigger className="h-10 w-40 shadow-sm">
          <SelectValue placeholder="All statuses" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All statuses</SelectItem>
          <SelectItem value="in">Clocked In</SelectItem>
          <SelectItem value="out">Clocked Out</SelectItem>
        </SelectContent>
      </Select>
      <Select value={department} onValueChange={onDepartmentChange}>
        <SelectTrigger className="h-10 w-44 shadow-sm">
          <SelectValue placeholder="All departments" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All departments</SelectItem>
          {departments.map((dept) => (
            <SelectItem key={dept} value={dept}>
              {dept}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
