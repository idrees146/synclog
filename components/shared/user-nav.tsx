"use client"

import { useRouter } from "next/navigation"
import { LogOut, Settings, User, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface UserNavProps {
  name: string
  email: string
  initials: string
  variant?: "default" | "light" | "figma"
}

export function UserNav({
  name,
  email,
  initials,
  variant = "default",
}: UserNavProps) {
  const router = useRouter()
  const isFigma = variant === "figma"
  const isLight = variant === "light"
  const firstName = name.split(" ")[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009965]",
          isFigma
            ? "hover:opacity-80"
            : isLight
              ? "hover:bg-white/10"
              : "hover:bg-muted"
        )}
      >
        <Avatar
          className={cn(
            "border-2",
            isFigma ? "h-10 w-10 border-[#009965]" : "h-8 w-8 border-primary/20"
          )}
        >
          <AvatarFallback
            className={cn(
              "text-xs font-semibold",
              isFigma
                ? "bg-[#009965] tracking-[0.3px] text-white"
                : "bg-primary/10 text-primary"
            )}
          >
            {initials}
          </AvatarFallback>
        </Avatar>
        <span
          className={cn(
            "hidden text-sm md:inline-block",
            isFigma
              ? "font-normal text-[#515151]"
              : isLight
                ? "font-medium text-zinc-200"
                : "font-medium text-foreground"
          )}
        >
          {isFigma ? firstName : name}
        </span>
        <ChevronDown
          className={cn(
            "hidden h-3.5 w-3.5 md:block",
            isFigma
              ? "text-zinc-400"
              : isLight
                ? "text-zinc-400"
                : "text-muted-foreground"
          )}
        />
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
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-zinc-900">
              {name}
            </p>
            <p className="truncate text-xs text-zinc-400">{email}</p>
          </div>
        </div>

        <DropdownMenuSeparator className="mx-3 bg-zinc-100" />

        {/* Menu items */}
        <div className="p-1.5">
          <DropdownMenuItem className="cursor-pointer gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 focus:bg-[#009965]/[0.06] focus:text-[#009965]">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 transition-colors duration-150 group-focus:bg-[#009965]/10">
              <User className="h-4 w-4 text-zinc-500" />
            </div>
            <div>
              <p className="text-sm font-medium">Profile</p>
              <p className="text-[11px] text-zinc-400">
                View your profile
              </p>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 focus:bg-[#009965]/[0.06] focus:text-[#009965]">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 transition-colors duration-150 group-focus:bg-[#009965]/10">
              <Settings className="h-4 w-4 text-zinc-500" />
            </div>
            <div>
              <p className="text-sm font-medium">Settings</p>
              <p className="text-[11px] text-zinc-400">
                Manage preferences
              </p>
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
  )
}
