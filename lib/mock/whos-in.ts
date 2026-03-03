import type { EmployeeStatus, PunchStatus } from "@/lib/types"
import { mockEmployees } from "./employees"

function randomTime(baseHour: number, variance: number): string {
  const hour = baseHour + Math.floor(Math.random() * variance)
  const min = Math.floor(Math.random() * 60)
  const now = new Date()
  const date = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hour,
    min,
    0
  )
  return date.toISOString()
}

function generateEmployeeStatus(
  employee: (typeof mockEmployees)[number],
  index: number
): EmployeeStatus {
  const status: PunchStatus = index % 3 === 2 ? "out" : "in"
  const punchInTime = randomTime(6, 3)

  if (status === "out") {
    const outHour = 12 + Math.floor(Math.random() * 5)
    return {
      employee,
      status: "out",
      lastPunchIn: punchInTime,
      lastPunchOut: randomTime(outHour, 2),
      todayHours:
        Math.round((3 + Math.random() * 5) * 100) / 100,
    }
  }

  const punchInDate = new Date(punchInTime)
  const now = new Date()
  const diffMs = Math.max(0, now.getTime() - punchInDate.getTime())
  const hours = diffMs / 3600000
  return {
    employee,
    status: "in",
    lastPunchIn: punchInTime,
    lastPunchOut: null,
    todayHours: Math.round(Math.min(hours, 12) * 100) / 100,
  }
}

export const mockWhosIn: EmployeeStatus[] = mockEmployees.map(
  (emp, i) => generateEmployeeStatus(emp, i)
)
