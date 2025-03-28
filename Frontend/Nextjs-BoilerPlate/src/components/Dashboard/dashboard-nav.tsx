import { BarChart3, CalendarIcon, HomeIcon, Settings, Users, MessageSquare, SunIcon, BellIcon } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"

const navItems = [
  {
    title: "Dashboard",
    icon: HomeIcon,
    href: "/dashboard",
    active: true,
  },
  {
    title: "Leads",
    icon: Users,
    href: "/leads",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
  {
    title: "Calendar",
    icon: CalendarIcon,
    href: "/dashboard/calendar",
  },
  {
    title: "Messages",
    icon: MessageSquare,
    href: "/dashboard/messages",
  },
  {
    title: "Notifications",
    icon: BellIcon,
    href: "/dashboard/notifications",
  },
  {
    title: "Solar Quotes",
    icon: SunIcon,
    href: "/dashboard/quotes",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
]

export function DashboardNav() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={item.active}>
                <a href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

