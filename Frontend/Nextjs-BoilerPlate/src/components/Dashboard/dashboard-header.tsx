import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Search, Download, Plus } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Monitor and manage your solar lead generation data</p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search leads..." className="w-full pl-8 sm:w-[240px] md:w-[280px]" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download data</span>
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Lead
          </Button>
        </div>
      </div>
    </div>
  )
}

