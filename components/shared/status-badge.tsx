import { Badge } from "@/components/ui/badge"
import { Circle } from "lucide-react"
import type { PunchStatus } from "@/lib/types"

interface StatusBadgeProps {
  status: PunchStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={
        status === "in"
          ? "gap-1.5 border-emerald-200 bg-emerald-50 font-medium text-emerald-700"
          : "gap-1.5 border-red-200 bg-red-50 font-medium text-red-700"
      }
    >
      <Circle
        className={
          status === "in"
            ? "h-2 w-2 fill-emerald-500 text-emerald-500"
            : "h-2 w-2 fill-red-500 text-red-500"
        }
      />
      {status === "in" ? "Clocked In" : "Clocked Out"}
    </Badge>
  )
}
