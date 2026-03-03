"use client"

import { Logo } from "@/components/shared/logo"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AdminNavLinks } from "./admin-nav-links"

export function AdminNavbar() {
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

        {/* Admin avatar + info */}
        <div className="ml-auto flex shrink-0 items-center">
          <div className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 transition-all duration-200 hover:bg-zinc-50">
            <Avatar className="h-10 w-10 border-2 border-[#009965]">
              <AvatarFallback className="bg-[#009965] text-xs font-semibold tracking-[0.3px] text-white">
                B
              </AvatarFallback>
            </Avatar>
            <div className="hidden flex-col md:flex">
              <span className="text-sm font-semibold leading-tight text-[#262626]">
                Brian
              </span>
              <span className="text-xs leading-tight text-[#515151]">
                B&G Auto Sales
              </span>
              <span className="flex items-center gap-1 text-[10px] leading-tight text-[#999]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
                Pin: 1-014-271
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
