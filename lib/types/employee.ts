export type PunchStatus = "in" | "out"

export type Department =
  | "Sales"
  | "Service"
  | "Parts"
  | "Finance"
  | "Administration"

export interface Employee {
  id: string
  empNumber?: string
  firstName: string
  lastName: string
  email: string
  department: Department
  role: "admin" | "manager" | "employee"
  hireDate: string
}

export interface PunchRecord {
  id: string
  employeeId: string
  type: PunchStatus
  timestamp: string
  ipAddress: string
}

export interface EmployeeStatus {
  employee: Employee
  status: PunchStatus
  lastPunchIn: string | null
  lastPunchOut: string | null
  todayHours: number
}
