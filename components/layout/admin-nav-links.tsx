"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, LayoutGrid } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "/whos-in", label: "Who's In", icon: Users },
  { href: "/timecards", label: "Time Cards", icon: LayoutGrid },
]

export function AdminNavLinks() {
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
              "flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors duration-200",
              isActive
                ? "text-[#009965]"
                : "text-[#515151] hover:text-[#009965]"
            )}
          >
            <link.icon className="h-[17px] w-[17px]" />
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
