interface GreetingSectionProps {
  greeting: string
  name: string
  date: string
  mounted: boolean
}

export function GreetingSection({
  greeting,
  name,
  date,
  mounted,
}: GreetingSectionProps) {
  return (
    <div className="space-y-1">
      <h1 className="text-2xl font-bold tracking-tight text-white">
        {mounted ? `${greeting}, ${name}` : "\u00A0"}
      </h1>
      <p className="text-sm text-zinc-500">
        {mounted ? date : "\u00A0"}
      </p>
    </div>
  )
}
