import { Card, CardContent } from "@/components/ui/card"
import { UserCheck, UserX, Users } from "lucide-react"

interface WhosInStatsProps {
  totalIn: number
  totalOut: number
  total: number
}

export function WhosInStats({
  totalIn,
  totalOut,
  total,
}: WhosInStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <Card className="overflow-hidden shadow-sm">
        <CardContent className="p-0">
          <div className="flex items-center gap-4 p-5">
            <div className="rounded-xl bg-emerald-50 p-3">
              <UserCheck className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-3xl font-bold tabular-nums text-emerald-600">
                {totalIn}
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                Clocked In
              </p>
            </div>
          </div>
          <div className="h-1 bg-emerald-500" />
        </CardContent>
      </Card>

      <Card className="overflow-hidden shadow-sm">
        <CardContent className="p-0">
          <div className="flex items-center gap-4 p-5">
            <div className="rounded-xl bg-red-50 p-3">
              <UserX className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <p className="text-3xl font-bold tabular-nums text-red-500">
                {totalOut}
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                Clocked Out
              </p>
            </div>
          </div>
          <div className="h-1 bg-red-400" />
        </CardContent>
      </Card>

      <Card className="overflow-hidden shadow-sm">
        <CardContent className="p-0">
          <div className="flex items-center gap-4 p-5">
            <div className="rounded-xl bg-zinc-100 p-3">
              <Users className="h-5 w-5 text-zinc-600" />
            </div>
            <div>
              <p className="text-3xl font-bold tabular-nums">
                {total}
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                Total Employees
              </p>
            </div>
          </div>
          <div className="h-1 bg-zinc-400" />
        </CardContent>
      </Card>
    </div>
  )
}
