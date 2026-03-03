"use client"

import { Logo } from "@/components/shared/logo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LogOut } from "lucide-react"
import { AdminSidebarNav } from "./admin-sidebar-nav"

export function AdminSidebar() {
  return (
    <Sidebar className="border-r-0">
      <SidebarHeader className="p-5">
        <Logo size="sm" variant="light" />
      </SidebarHeader>
      <SidebarSeparator className="opacity-20" />
      <SidebarContent className="pt-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <AdminSidebarNav />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator className="opacity-20" />
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9 border-2 border-emerald-500/30">
            <AvatarFallback className="bg-emerald-500/20 text-xs font-semibold text-emerald-400">
              CB
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-medium text-zinc-200">
              Christopher Brown
            </span>
            <span className="text-xs text-zinc-500">
              Administrator
            </span>
          </div>
          <button className="rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-white/10 hover:text-zinc-300">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
