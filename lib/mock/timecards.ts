import type { TimecardDayEntry, TimecardSummary } from "@/lib/types"
import { mockEmployees } from "./employees"

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

function formatTime(hours: number, minutes: number): string {
  const date = new Date()
  date.setHours(hours, minutes, 0, 0)
  return date.toISOString()
}

function generateDayEntry(
  dateStr: string,
  isWeekend: boolean
): TimecardDayEntry {
  const date = new Date(dateStr)
  const dayOfWeek = DAYS_OF_WEEK[date.getDay()]

  if (isWeekend) {
    return { date: dateStr, dayOfWeek, punchPairs: [], dailyTotal: 0 }
  }

  const startHour = 7 + Math.floor(Math.random() * 2)
  const startMin = Math.floor(Math.random() * 30)
  const lunchOutHour = 12
  const lunchOutMin = Math.floor(Math.random() * 15)
  const lunchInHour = 12
  const lunchInMin = lunchOutMin + 30 + Math.floor(Math.random() * 15)
  const endHour = 16 + Math.floor(Math.random() * 2)
  const endMin = Math.floor(Math.random() * 30)

  const morningHours =
    lunchOutHour - startHour + (lunchOutMin - startMin) / 60
  const afternoonHours =
    endHour - lunchInHour + (endMin - lunchInMin) / 60
  const dailyTotal =
    Math.round((morningHours + afternoonHours) * 100) / 100

  return {
    date: dateStr,
    dayOfWeek,
    punchPairs: [
      {
        punchIn: formatTime(startHour, startMin),
        punchOut: formatTime(lunchOutHour, lunchOutMin),
      },
      {
        punchIn: formatTime(lunchInHour, lunchInMin),
        punchOut: formatTime(endHour, endMin),
      },
    ],
    dailyTotal: Math.max(0, dailyTotal),
  }
}

function generateWeekEntries(): TimecardDayEntry[] {
  const entries: TimecardDayEntry[] = []
  const today = new Date()
  const startOfWeek = new Date(today)
  startOfWeek.setDate(today.getDate() - today.getDay())

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek)
    date.setDate(startOfWeek.getDate() + i)
    const dateStr = date.toISOString().split("T")[0]
    const isWeekend = i === 0 || i === 6
    entries.push(generateDayEntry(dateStr, isWeekend))
  }

  return entries
}

function calculateTotals(entries: TimecardDayEntry[]) {
  const totalHours = entries.reduce(
    (sum, entry) => sum + entry.dailyTotal,
    0
  )
  const regularHours = Math.min(totalHours, 40)
  const overtimeHours = Math.max(0, totalHours - 40)

  return {
    regularHours: Math.round(regularHours * 100) / 100,
    overtimeHours: Math.round(overtimeHours * 100) / 100,
    totalHours: Math.round(totalHours * 100) / 100,
  }
}

export function generateMockTimecards(): TimecardSummary[] {
  return mockEmployees.map((employee) => {
    const entries = generateWeekEntries()
    return {
      employeeId: employee.id,
      employeeName: `${employee.firstName} ${employee.lastName}`,
      department: employee.department,
      entries,
      totals: calculateTotals(entries),
    }
  })
}

export const mockTimecards: TimecardSummary[] =
  generateMockTimecards()
