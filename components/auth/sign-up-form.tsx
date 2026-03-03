"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Loader2, ArrowRight } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const inputClasses =
  "h-11 rounded-lg border-zinc-200 px-3.5 text-sm text-zinc-900 shadow-sm transition-all placeholder:text-zinc-400 focus:border-[#009965] focus:ring-[#009965]/20"

export function SignUpForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      toast.success("Account created! Please sign in.")
      router.push("/auth/sign-in")
    }, 1000)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3.5">
      <div className="grid grid-cols-2 gap-3">
        <Input
          id="firstName"
          placeholder="First name"
          required
          autoComplete="given-name"
          className={inputClasses}
        />
        <Input
          id="lastName"
          placeholder="Last name"
          required
          autoComplete="family-name"
          className={inputClasses}
        />
      </div>

      <Input
        id="email"
        type="email"
        placeholder="Work email"
        required
        autoComplete="email"
        className={inputClasses}
      />

      <Input
        id="password"
        type="password"
        placeholder="Password"
        required
        autoComplete="new-password"
        className={inputClasses}
      />

      <Input
        id="confirmPassword"
        type="password"
        placeholder="Confirm password"
        required
        autoComplete="new-password"
        className={inputClasses}
      />

      <div className="pt-1.5">
        <Button
          type="submit"
          className="h-11 w-full cursor-pointer rounded-lg bg-[#009965] text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#008556] active:scale-[0.98]"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Create account
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      <p className="text-center text-[11px] text-zinc-400">
        By signing up you agree to our{" "}
        <span className="cursor-pointer text-zinc-500 underline underline-offset-2">
          Terms
        </span>
        {" & "}
        <span className="cursor-pointer text-zinc-500 underline underline-offset-2">
          Privacy
        </span>
      </p>

      <p className="pt-1 text-center text-[13px] text-zinc-400">
        Already have an account?{" "}
        <Link
          href="/auth/sign-in"
          className="font-medium text-[#009965] hover:text-emerald-600"
        >
          Sign in
        </Link>
      </p>
    </form>
  )
}
