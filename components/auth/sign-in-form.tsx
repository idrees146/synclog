"use client"

import { useState } from "react"
import Link from "next/link"
import { Loader2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const inputClasses =
  "h-[46px] rounded-xl border-zinc-200 bg-zinc-50 px-4 text-[0.9rem] text-zinc-900 shadow-sm transition-all placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:ring-emerald-500/20"

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-[0.8rem] font-medium text-zinc-700">
          Email address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="name@company.com"
          required
          autoComplete="email"
          className={inputClasses}
        />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-[0.8rem] font-medium text-zinc-700">
            Password
          </Label>
          <Link
            href="/auth/sign-in"
            className="text-xs font-medium text-emerald-600 hover:text-emerald-500"
          >
            Forgot password?
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          required
          autoComplete="current-password"
          className={inputClasses}
        />
      </div>
      <div className="flex items-center gap-2.5">
        <Checkbox
          id="remember"
          className="border-zinc-300 data-[state=checked]:border-emerald-600 data-[state=checked]:bg-emerald-600"
        />
        <Label
          htmlFor="remember"
          className="text-sm font-normal text-zinc-500"
        >
          Keep me signed in for 30 days
        </Label>
      </div>
      <Button
        type="submit"
        className="h-[46px] w-full rounded-xl bg-emerald-600 text-[0.9rem] font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-500/25"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <>
            Sign in
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-center text-sm text-zinc-500">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/sign-up"
          className="font-semibold text-emerald-600 transition-colors hover:text-emerald-500"
        >
          Sign up
        </Link>
      </p>
    </form>
  )
}
