"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Clock, TableProperties, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "/dashboard", label: "Punch In", icon: Clock },
  { href: "/my-timecard", label: "My TimeCard", icon: TableProperties },
]

export function EmployeeNavLinks() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-1">
      {links.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200",
              isActive
                ? "bg-[#009965]/10 text-[#009965]"
                : "text-[#515151] hover:bg-zinc-100 hover:text-[#009965]"
            )}
          >
            <link.icon className="h-[17px] w-[17px]" />
            {link.label}
          </Link>
        )
      })}

      {/* Payroll — coming soon */}
      <span className="relative flex cursor-not-allowed items-center gap-2 px-4 py-2 text-sm font-semibold text-[#515151] opacity-40 select-none">
        <DollarSign className="h-[17px] w-[17px]" />
        Payroll
        <span className="absolute -top-1 -right-1 rounded-full bg-[#0091ff] px-1.5 py-px text-[9px] font-bold uppercase tracking-wide text-white">
          Soon
        </span>
      </span>
    </nav>
  )
}
