interface AuthHeaderProps {
  heading: string
  description: string
}

export function AuthHeader({
  heading,
  description,
}: AuthHeaderProps) {
  return (
    <div className="space-y-1.5 text-center">
      <h2 className="text-xl font-bold tracking-tight text-zinc-900">
        {heading}
      </h2>
      <p className="text-sm text-zinc-500">{description}</p>
    </div>
  )
}
