"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { EmployeeStatus } from "@/lib/types"

interface ManualPunchDialogProps {
  employee: EmployeeStatus | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

export function ManualPunchDialog({
  employee,
  open,
  onOpenChange,
  onConfirm,
}: ManualPunchDialogProps) {
  if (!employee) return null

  const name = `${employee.employee.firstName} ${employee.employee.lastName}`
  const action = employee.status === "in" ? "punch out" : "punch in"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manual Punch</DialogTitle>
          <DialogDescription>
            Are you sure you want to manually {action}{" "}
            <span className="font-medium text-foreground">
              {name}
            </span>
            ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button onClick={onConfirm}>Confirm {action}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
