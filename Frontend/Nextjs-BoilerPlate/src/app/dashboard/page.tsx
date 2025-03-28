import { DashboardLayout } from "@/components/Dashboard/dashboard-layout"
import { DashboardHeader } from "@/components/Dashboard/dashboard-header"
import { DashboardStats } from "@/components/Dashboard/dashboard-stat"
import  LeadsTable  from "@/components/Dashboard/lead-table"

export default function dashboard() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <DashboardStats />
      <LeadsTable />
    </DashboardLayout>
  )
}