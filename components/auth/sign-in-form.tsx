"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Loader2, ArrowRight, Eye, EyeOff } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const DEMO_ACCOUNTS: Record<string, { role: string; redirect: string; password: string }> = {
  "brian@gmail.com": { role: "admin", redirect: "/whos-in", password: "1234" },
  "kashifamjad@gmail.com": { role: "employee", redirect: "/dashboard", password: "1234" },
}

export function SignInForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const trimmed = email.trim().toLowerCase()
    const account = DEMO_ACCOUNTS[trimmed]

    setTimeout(() => {
      if (!account) {
        setError("No account found with this email")
        setIsLoading(false)
      } else if (account.password !== password) {
        setError("Incorrect password")
        setIsLoading(false)
      } else {
        toast.success(`Signed in as ${account.role}`)
        router.push(account.redirect)
      }
    }, 1000)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <Input
          id="email"
          type="email"
          placeholder="name@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError("")
          }}
          required
          autoComplete="email"
          autoFocus
          className="h-11 rounded-lg border-zinc-200 px-3.5 text-sm text-zinc-900 shadow-sm transition-all placeholder:text-zinc-400 focus:border-[#009965] focus:ring-[#009965]/20"
        />
      </div>

      <div className="relative space-y-2">
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setError("")
          }}
          required
          autoComplete="current-password"
          className="h-11 rounded-lg border-zinc-200 px-3.5 pr-10 text-sm text-zinc-900 shadow-sm transition-all placeholder:text-zinc-400 focus:border-[#009965] focus:ring-[#009965]/20"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
        {error && (
          <p className="text-xs font-medium text-amber-600">{error}</p>
        )}
      </div>

      <Button
        type="submit"
        className="h-11 w-full cursor-pointer rounded-lg bg-[#009965] text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#008556] active:scale-[0.98]"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Continue
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </>
        )}
      </Button>

      <p className="pt-2 text-center text-[13px] text-zinc-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/sign-up"
          className="font-medium text-[#009965] hover:text-emerald-600"
        >
          Sign up
        </Link>
      </p>
    </form>
  )
}
