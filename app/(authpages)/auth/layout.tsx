import Image from "next/image"
import { Clock, Users, Shield } from "lucide-react"

const features = [
  { icon: Clock, label: "Real-time punch tracking" },
  { icon: Users, label: "Live team visibility" },
  { icon: Shield, label: "Secure & reliable" },
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left — brand panel */}
      <div className="relative hidden w-[500px] shrink-0 overflow-hidden bg-[#002e1f] lg:block">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#009965]/[0.07] blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-[#009965]/[0.05] blur-[80px]" />

        <div className="relative flex h-full flex-col justify-between px-12 pb-10 pt-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="SyncLog"
              width={44}
              height={44}
              priority
            />
            <span className="text-2xl font-bold tracking-tight text-white">
              SyncLog
            </span>
          </div>

          {/* Hero content — vertically centered */}
          <div className="space-y-8">
            <h2 className="text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white">
              Track time.
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                Stay in sync.
              </span>
            </h2>

            <p className="max-w-[320px] text-[15px] leading-relaxed text-white/40">
              Fast, focused attendance management built for your team.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.04] px-3.5 py-2"
                >
                  <f.icon className="h-3.5 w-3.5 text-emerald-400/80" />
                  <span className="text-[12px] font-medium text-white/50">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p className="text-[11px] text-white/20">
            &copy; {new Date().getFullYear()} SyncLog. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right — form area */}
      <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-12">
        {/* Mobile logo */}
        <div className="mb-10 flex items-center gap-3 lg:hidden">
          <Image
            src="/logo.png"
            alt="SyncLog"
            width={36}
            height={36}
            priority
          />
          <span className="text-xl font-bold tracking-tight text-zinc-900">
            SyncLog
          </span>
        </div>

        <div className="w-full max-w-[360px]">
          <div className="animate-in fade-in slide-in-from-bottom-1 duration-500">
            {children}
          </div>
        </div>

        <p className="mt-12 text-[11px] text-zinc-300 lg:hidden">
          &copy; {new Date().getFullYear()} SyncLog
        </p>
      </div>
    </div>
  )
}
