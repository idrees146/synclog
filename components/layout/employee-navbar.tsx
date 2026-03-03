"use client"

import { Logo } from "@/components/shared/logo"
import { UserNav } from "@/components/shared/user-nav"
import { EmployeeNavLinks } from "./employee-nav-links"

export function EmployeeNavbar() {
  return (
    <header className="animate-in slide-in-from-top-1 duration-300 sticky top-0 z-30 bg-white shadow-[0px_0px_16px_0px_rgba(0,0,0,0.06)]">
      <div className="flex h-17.5 w-full items-center px-6 md:px-10">
        {/* Logo — always visible */}
        <div className="flex shrink-0 items-center">
          <Logo size="sm" />
        </div>

        {/* Nav links — centered, hidden on mobile */}
        <div className="hidden flex-1 justify-center md:flex">
          <EmployeeNavLinks />
        </div>

        {/* User nav — always visible, pushed to the right */}
        <div className="ml-auto shrink-0">
          <UserNav
            name="Kashif Amjad"
            email="kashifamjad@gmail.com"
            initials="KA"
            variant="figma"
          />
        </div>
      </div>
    </header>
  )
}
