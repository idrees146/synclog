"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { WhosInTable } from "@/components/admin/whos-in/whos-in-table"
import { mockWhosIn } from "@/lib/mock/whos-in"

export default function WhosInPage() {
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    if (!search) return mockWhosIn
    const q = search.toLowerCase()
    return mockWhosIn.filter((item) => {
      const name =
        `${item.employee.firstName} ${item.employee.lastName}`.toLowerCase()
      return name.includes(q)
    })
  }, [search])

  return (
    <div className="mx-auto max-w-360 px-6 pt-14 pb-20 md:px-10">
      {/* Search bar */}
      <div className="animate-in fade-in duration-500 mx-auto max-w-xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#999]" />
          <Input
            placeholder="Search Employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-12 rounded-lg border-[#ddd] pl-11 text-sm shadow-none placeholder:text-[#bbb] focus-visible:ring-1 focus-visible:ring-[#009965]/40"
          />
        </div>
      </div>

      {/* Table */}
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100 mt-10">
        <WhosInTable data={filtered} />
      </div>
    </div>
  )
}
