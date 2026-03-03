export interface PunchPair {
  punchIn: string
  punchOut: string | null
}

export interface TimecardDayEntry {
  date: string
  dayOfWeek: string
  punchPairs: PunchPair[]
  dailyTotal: number
  ot1Hours?: number
  ot2Hours?: number
  ot3Hours?: number
  vacHours?: number
  holHours?: number
  sicHours?: number
  perHours?: number
  pbrHours?: number
  ubrHours?: number
}

export interface TimecardSummary {
  employeeId: string
  employeeName: string
  department: string
  entries: TimecardDayEntry[]
  totals: TimecardTotals
}

export interface TimecardTotals {
  regularHours: number
  overtimeHours: number
  totalHours: number
  mileage?: number
  ot1Hours?: number
  ot2Hours?: number
  ot3Hours?: number
  vacHours?: number
  holHours?: number
  sicHours?: number
  perHours?: number
  pbrHours?: number
  ubrHours?: number
}

export interface DateRange {
  from: Date
  to: Date
}
