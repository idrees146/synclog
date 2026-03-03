"use client"

import { useState } from "react"
import Link from "next/link"
import { Loader2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const inputClasses =
  "h-[46px] rounded-xl border-zinc-200 bg-zinc-50 px-4 text-[0.9rem] text-zinc-900 shadow-sm transition-all placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:ring-emerald-500/20"

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <Label htmlFor="firstName" className="text-[0.8rem] font-medium text-zinc-700">
            First name
          </Label>
          <Input
            id="firstName"
            placeholder="John"
            required
            autoComplete="given-name"
            className={inputClasses}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lastName" className="text-[0.8rem] font-medium text-zinc-700">
            Last name
          </Label>
          <Input
            id="lastName"
            placeholder="Doe"
            required
            autoComplete="family-name"
            className={inputClasses}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-[0.8rem] font-medium text-zinc-700">
          Work email
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
        <Label htmlFor="password" className="text-[0.8rem] font-medium text-zinc-700">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Min. 8 characters"
          required
          autoComplete="new-password"
          className={inputClasses}
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="confirmPassword" className="text-[0.8rem] font-medium text-zinc-700">
          Confirm password
        </Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Re-enter your password"
          required
          autoComplete="new-password"
          className={inputClasses}
        />
      </div>
      <p className="pt-1 text-xs leading-relaxed text-zinc-400">
        By creating an account, you agree to our{" "}
        <span className="font-medium text-zinc-600 underline underline-offset-2">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="font-medium text-zinc-600 underline underline-offset-2">
          Privacy Policy
        </span>
        .
      </p>
      <Button
        type="submit"
        className="h-[46px] w-full rounded-xl bg-emerald-600 text-[0.9rem] font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-500/25"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <>
            Create account
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-center text-sm text-zinc-500">
        Already have an account?{" "}
        <Link
          href="/auth/sign-in"
          className="font-semibold text-emerald-600 transition-colors hover:text-emerald-500"
        >
          Sign in
        </Link>
      </p>
    </form>
  )
}
