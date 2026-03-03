"use client"

import { useRef, useState } from "react"
import { LogOut, Settings, User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
  const isFigma = variant === "figma"
  const isLight = variant === "light"
  const firstName = name.split(" ")[0]

  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null)

  function enter() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }

  function leave() {
    closeTimer.current = setTimeout(() => setOpen(false), 250)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      {/* Wrapper div owns the hover — avoids Radix's internal pointer events firing false mouseleave */}
      <div onPointerEnter={enter} onPointerLeave={leave} className="inline-flex">
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
        </DropdownMenuTrigger>
      </div>

      <DropdownMenuContent
        align="end"
        sideOffset={6}
        onPointerEnter={enter}
        onPointerLeave={leave}
        className="w-56 origin-top-right animate-in fade-in-0 zoom-in-95 duration-150"
      >
        <DropdownMenuLabel>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">{email}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
