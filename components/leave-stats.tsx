import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Clock, CheckCircle, XCircle, Users } from "lucide-react"

const leaveStats = [
  {
    title: "Total Requests",
    value: "156",
    change: "+23",
    changeText: "this month",
    icon: Users,
    trend: "up",
  },
  {
    title: "Approved",
    value: "128",
    change: "82.1%",
    changeText: "approval rate",
    icon: CheckCircle,
    trend: "up",
  },
  {
    title: "Pending Review",
    value: "18",
    change: "11.5%",
    changeText: "awaiting approval",
    icon: Clock,
    trend: "neutral",
  },
  {
    title: "Rejected",
    value: "10",
    change: "6.4%",
    changeText: "rejection rate",
    icon: XCircle,
    trend: "down",
  },
]

export function LeaveStats() {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {leaveStats.map((stat) => (
        <Card
          key={stat.title}
          className="relative overflow-hidden border-0 shadow-sm bg-gradient-to-br from-white to-gray-50/50"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-4 sm:px-6">
            <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">{stat.title}</CardTitle>
            <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10">
              <stat.icon className="h-3 w-3 sm:h-4 sm:w-4" style={{ color: "oklch(0.637 0.237 25.331)" }} />
            </div>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="flex items-center text-xs sm:text-sm">
              {stat.trend === "up" && (
                <div className="flex items-center text-green-600 mr-2">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span className="font-medium">{stat.change}</span>
                </div>
              )}
              {stat.trend === "down" && (
                <div className="flex items-center text-red-600 mr-2">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  <span className="font-medium">{stat.change}</span>
                </div>
              )}
              {stat.trend === "neutral" && <span className="font-medium text-orange-600 mr-2">{stat.change}</span>}
              <span className="text-gray-500 text-xs sm:text-sm">{stat.changeText}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
