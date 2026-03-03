import { EmployeeNavbar } from "@/components/layout/employee-navbar"
import { Footer } from "@/components/shared/footer"

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <EmployeeNavbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
