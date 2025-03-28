import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ArrowUpRight, Users, SunIcon, DollarSign, TrendingUp } from "lucide-react"

export function DashboardStats() {
  return (
    <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,853</div>
          <div className="flex items-center text-xs text-green-500">
            <ArrowUpRight className="mr-1 h-3 w-3" />
            <span>12% from last month</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24.5%</div>
          <div className="flex items-center text-xs text-green-500">
            <ArrowUpRight className="mr-1 h-3 w-3" />
            <span>3.2% from last month</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Solar Installations</CardTitle>
          <SunIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">187</div>
          <div className="flex items-center text-xs text-green-500">
            <ArrowUpRight className="mr-1 h-3 w-3" />
            <span>8% from last month</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$432,680</div>
          <div className="flex items-center text-xs text-green-500">
            <ArrowUpRight className="mr-1 h-3 w-3" />
            <span>18% from last month</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

