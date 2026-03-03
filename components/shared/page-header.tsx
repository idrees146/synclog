import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  action?: React.ReactNode
  variant?: "default" | "light"
}

export function PageHeader({
  title,
  description,
  action,
  variant = "default",
}: PageHeaderProps) {
  const isLight = variant === "light"

  return (
    <div className="flex items-start justify-between">
      <div className="space-y-1">
        <h1
          className={cn(
            "text-2xl font-bold tracking-tight",
            isLight ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "text-sm",
              isLight ? "text-zinc-500" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}
