"use client"

import { useRouter } from "next/navigation"
import { User, Settings, LogOut } from "lucide-react"
import { Logo } from "@/components/shared/logo"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AdminNavLinks } from "./admin-nav-links"

export function AdminNavbar() {
  const router = useRouter()

  return (
    <header className="animate-in slide-in-from-top-1 duration-300 sticky top-0 z-30 bg-white shadow-[0px_0px_16px_0px_rgba(0,0,0,0.06)]">
      <div className="flex h-17.5 w-full items-center px-6 md:px-10">
        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <Logo size="sm" />
        </div>

        {/* Nav links — centered */}
        <div className="hidden flex-1 justify-center md:flex">
          <AdminNavLinks />
        </div>

        {/* Admin avatar + dropdown */}
        <div className="ml-auto flex shrink-0 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 transition-all duration-200 hover:bg-zinc-50 focus:outline-none"
              >
                <Avatar className="h-10 w-10 border-2 border-[#009965]">
                  <AvatarFallback className="bg-[#009965] text-xs font-semibold tracking-[0.3px] text-white">
                    B
                  </AvatarFallback>
                </Avatar>
                <div className="hidden flex-col text-left md:flex">
                  <span className="text-sm font-semibold leading-tight text-[#262626]">
                    Brian
                  </span>
                  <span className="text-xs leading-tight text-[#515151]">
                    B&G Auto Sales
                  </span>
                  <span className="flex items-center gap-1 text-[10px] leading-tight text-[#999]">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#009965]" />
                    Pin: 1-014-271
                  </span>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="w-64 overflow-hidden rounded-xl border border-zinc-200 p-0 shadow-lg shadow-zinc-900/[0.08]"
            >
              {/* Green accent bar */}
              <div className="h-1 bg-gradient-to-r from-[#009965] to-emerald-400" />

              {/* User info header */}
              <div className="flex items-center gap-3 px-4 py-4">
                <Avatar className="h-11 w-11 border-2 border-[#009965]/20">
                  <AvatarFallback className="bg-[#009965] text-sm font-semibold tracking-[0.3px] text-white">
                    B
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-zinc-900">
                    Brian
                  </p>
                  <p className="truncate text-xs text-zinc-400">
                    B&G Auto Sales
                  </p>
                </div>
              </div>

              <DropdownMenuSeparator className="mx-3 bg-zinc-100" />

              {/* Menu items */}
              <div className="p-1.5">
                <DropdownMenuItem className="cursor-pointer gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 focus:bg-[#009965]/[0.06] focus:text-[#009965]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100">
                    <User className="h-4 w-4 text-zinc-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Profile</p>
                    <p className="text-[11px] text-zinc-400">View your profile</p>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 focus:bg-[#009965]/[0.06] focus:text-[#009965]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100">
                    <Settings className="h-4 w-4 text-zinc-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Settings</p>
                    <p className="text-[11px] text-zinc-400">Manage preferences</p>
                  </div>
                </DropdownMenuItem>
              </div>

              <DropdownMenuSeparator className="mx-3 bg-zinc-100" />

              {/* Sign out */}
              <div className="p-1.5">
                <DropdownMenuItem
                  className="cursor-pointer gap-3 rounded-lg px-3 py-2.5 text-zinc-500 transition-colors duration-150 focus:bg-zinc-100 focus:text-zinc-700"
                  onClick={() => router.push("/auth/sign-in")}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100">
                    <LogOut className="h-4 w-4 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sign out</p>
                  </div>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
