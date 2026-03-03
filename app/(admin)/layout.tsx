import { AdminNavbar } from "@/components/layout/admin-navbar"
import { AdminFooter } from "@/components/shared/admin-footer"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AdminNavbar />
      <main className="flex-1">{children}</main>
      <AdminFooter />
    </div>
  )
}
