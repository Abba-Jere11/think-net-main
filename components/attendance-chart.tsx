import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown } from "lucide-react"

export function AttendanceChart() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Weekly Attendance</CardTitle>
          <Button size="sm" variant="outline">
            View Details
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">This Week</span>
              <span className="text-2xl font-bold">94.2%</span>
            </div>
            <div className="space-y-2">
              {[
                { day: "Monday", percentage: 96, present: 237, total: 247 },
                { day: "Tuesday", percentage: 94, present: 232, total: 247 },
                { day: "Wednesday", percentage: 93, present: 230, total: 247 },
                { day: "Thursday", percentage: 95, present: 235, total: 247 },
                { day: "Friday", percentage: 92, present: 227, total: 247 },
              ].map((day) => (
                <div key={day.day} className="flex items-center justify-between">
                  <span className="text-sm font-medium w-20">{day.day}</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: `${day.percentage}%` }} />
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground w-16 text-right">
                    {day.present}/{day.total}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Department Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { dept: "Engineering", attendance: 96, trend: "up", change: "+2%" },
              { dept: "Marketing", attendance: 94, trend: "up", change: "+1%" },
              { dept: "Sales", attendance: 92, trend: "down", change: "-1%" },
              { dept: "HR", attendance: 98, trend: "up", change: "+3%" },
              { dept: "Finance", attendance: 95, trend: "up", change: "+1%" },
            ].map((dept) => (
              <div key={dept.dept} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium text-sm">{dept.dept}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    {dept.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-green-600" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-600" />
                    )}
                    <span className={`text-xs ${dept.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                      {dept.change}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold">{dept.attendance}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
