import Image from "next/image"
import { Clock, Shield, Zap, Users } from "lucide-react"

const features = [
  { icon: Clock, label: "Real-time tracking" },
  { icon: Users, label: "Team visibility" },
  { icon: Zap, label: "Lightning fast" },
  { icon: Shield, label: "Secure & reliable" },
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 py-16">
      <div className="mb-10 flex flex-col items-center gap-4">
        <Image
          src="/logo.png"
          alt="SyncLog"
          width={56}
          height={56}
          priority
        />
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            SyncLog
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Employee time tracking &amp; attendance
          </p>
        </div>
      </div>

      <div className="w-full max-w-[440px]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-900/[0.04]">
          {children}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
        {features.map((f) => (
          <div
            key={f.label}
            className="flex items-center gap-2 text-zinc-400"
          >
            <f.icon className="h-3.5 w-3.5 text-emerald-500" />
            <span className="text-xs font-medium text-zinc-500">
              {f.label}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-zinc-400">
        &copy; {new Date().getFullYear()} SyncLog. All rights
        reserved.
      </p>
    </div>
  )
}
