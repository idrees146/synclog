"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Loader2, ArrowRight } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const DEMO_ACCOUNTS: Record<string, { role: string; redirect: string }> = {
  "brian@gmail.com": { role: "admin", redirect: "/whos-in" },
  "kashifamjad@gmail.com": { role: "employee", redirect: "/dashboard" },
}

export function SignInForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const trimmed = email.trim().toLowerCase()
    const account = DEMO_ACCOUNTS[trimmed]

    setTimeout(() => {
      if (account) {
        toast.success(`Signed in as ${account.role}`)
        router.push(account.redirect)
      } else {
        setError("No account found with this email")
        setIsLoading(false)
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

      <div className="relative py-3">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-100" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-[10px] font-medium uppercase tracking-widest text-zinc-300">
            Demo
          </span>
        </div>
      </div>

      <div className="space-y-1.5">
        <button
          type="button"
          onClick={() => setEmail("brian@gmail.com")}
          className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-zinc-100 px-3.5 py-2.5 text-left transition-all hover:border-zinc-200 hover:bg-zinc-50"
        >
          <span className="font-mono text-xs text-zinc-500">brian@gmail.com</span>
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-400">
            Admin
          </span>
        </button>
        <button
          type="button"
          onClick={() => setEmail("kashifamjad@gmail.com")}
          className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-zinc-100 px-3.5 py-2.5 text-left transition-all hover:border-zinc-200 hover:bg-zinc-50"
        >
          <span className="font-mono text-xs text-zinc-500">kashifamjad@gmail.com</span>
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-400">
            Employee
          </span>
        </button>
      </div>

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
