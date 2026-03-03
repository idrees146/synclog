interface DashboardHeroProps {
  name: string
  company: string
  mounted: boolean
  greeting: string
}

export function DashboardHero({
  name,
  company,
  mounted,
  greeting,
}: DashboardHeroProps) {
  return (
    <div className="border-b border-zinc-200 bg-white">
      <div className="animate-in fade-in duration-700 mx-auto max-w-5xl px-6 pb-12 pt-14 text-center">
        {/* Greeting */}
        <p className="text-sm font-semibold tracking-wide text-emerald-600">
          {mounted ? greeting : "\u00A0"}
        </p>

        {/* Name */}
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          {mounted ? name : "\u00A0"}
        </h1>

        {/* Company */}
        <p className="mt-2 text-base text-zinc-500">{company}</p>
      </div>
    </div>
  )
}
