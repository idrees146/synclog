"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Clock, Users } from "lucide-react"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navItems = [
  { href: "/timecards", label: "Timecards", icon: Clock },
  { href: "/whos-in", label: "Who's In", icon: Users },
]

export function AdminSidebarNav() {
  const pathname = usePathname()

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === item.href}
            className="h-10 text-[0.875rem]"
          >
            <Link href={item.href}>
              <item.icon className="h-4.5 w-4.5" />
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
