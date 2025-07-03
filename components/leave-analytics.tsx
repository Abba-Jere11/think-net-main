import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, BarChart3, Calendar } from "lucide-react"

const departmentLeaveUsage = [
  { dept: "Engineering", used: 68, total: 100, percentage: 68, trend: "up", change: "+5%" },
  { dept: "Marketing", used: 45, total: 60, percentage: 75, trend: "up", change: "+8%" },
  { dept: "Sales", used: 82, total: 120, percentage: 68, trend: "down", change: "-3%" },
  { dept: "HR", used: 22, total: 32, percentage: 69, trend: "up", change: "+2%" },
  { dept: "Finance", used: 28, total: 48, percentage: 58, trend: "up", change: "+4%" },
]

const leaveTypeTrends = [
  {
    title: "Annual Leave",
    value: "65%",
    change: "+8%",
    trend: "up",
    description: "Most popular leave type",
  },
  {
    title: "Sick Leave",
    value: "18%",
    change: "-2%",
    trend: "down",
    description: "Decreased from last quarter",
  },
  {
    title: "Personal Leave",
    value: "12%",
    change: "+3%",
    trend: "up",
    description: "Steady increase",
  },
]

const upcomingLeaves = [
  {
    employee: "John Smith",
    type: "Annual Leave",
    dates: "Dec 23-27",
    days: 5,
  },
  {
    employee: "Sarah Davis",
    type: "Maternity Leave",
    dates: "Jan 15 - Mar 15",
    days: 60,
  },
  {
    employee: "Michael Brown",
    type: "Personal Leave",
    dates: "Jan 2-3",
    days: 2,
  },
]

export function LeaveAnalytics() {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
      <Card className="border-0 shadow-sm lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between px-4 sm:px-6">
          <div>
            <CardTitle className="text-lg font-semibold">Department Leave Usage</CardTitle>
            <p className="text-sm text-gray-500 mt-1">Leave days used vs allocated by department</p>
          </div>
          <Button size="sm" variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Detailed Report
          </Button>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <div className="space-y-4">
            {departmentLeaveUsage.map((dept) => (
              <div
                key={dept.dept}
                className="p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl border border-gray-200/50"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-sm">{dept.dept}</h4>
                    <p className="text-xs text-gray-500">
                      {dept.used}/{dept.total} days used
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-bold">{dept.percentage}%</span>
                      {dept.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                    <span className={`text-xs font-medium ${dept.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                      {dept.change} from last quarter
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${dept.percentage}%`,
                      backgroundColor: "oklch(0.637 0.237 25.331)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="border-0 shadow-sm">
          <CardHeader className="px-4 sm:px-6">
            <CardTitle className="text-lg font-semibold">Leave Type Trends</CardTitle>
            <p className="text-sm text-gray-500">Distribution of leave types</p>
          </CardHeader>
          <CardContent className="space-y-4 px-4 sm:px-6">
            {leaveTypeTrends.map((trend, index) => (
              <div
                key={index}
                className="p-3 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl border border-gray-200/50"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">{trend.title}</h4>
                  <span className="text-lg font-bold">{trend.value}</span>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {trend.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600" />
                  )}
                  <span className={`text-xs font-medium ${trend.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {trend.change}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{trend.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader className="px-4 sm:px-6">
            <CardTitle className="text-lg font-semibold">Upcoming Leaves</CardTitle>
            <p className="text-sm text-gray-500">Approved leaves starting soon</p>
          </CardHeader>
          <CardContent className="space-y-3 px-4 sm:px-6">
            {upcomingLeaves.map((leave, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl border border-blue-200/50"
              >
                <Calendar className="h-4 w-4 text-blue-600 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{leave.employee}</h4>
                  <p className="text-xs text-gray-600">
                    {leave.type} • {leave.dates}
                  </p>
                </div>
                <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                  {leave.days} days
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
