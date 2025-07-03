import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Eye } from "lucide-react"

const leaveRequests = [
  {
    id: 1,
    employee: "John Smith",
    type: "Annual Leave",
    dates: "Dec 23-27, 2024",
    status: "Approved",
    days: 5,
  },
  {
    id: 2,
    employee: "Emma Wilson",
    type: "Sick Leave",
    dates: "Dec 12, 2024",
    status: "Pending",
    days: 1,
  },
  {
    id: 3,
    employee: "Michael Brown",
    type: "Personal Leave",
    dates: "Jan 2-3, 2025",
    status: "Approved",
    days: 2,
  },
  {
    id: 4,
    employee: "Sarah Davis",
    type: "Maternity Leave",
    dates: "Jan 15 - Mar 15, 2025",
    status: "Approved",
    days: 60,
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Company All-Hands Meeting",
    date: "Dec 15, 2024",
    time: "10:00 AM",
    type: "meeting",
  },
  {
    id: 2,
    title: "Holiday Party",
    date: "Dec 20, 2024",
    time: "6:00 PM",
    type: "event",
  },
  {
    id: 3,
    title: "New Year Break",
    date: "Dec 30 - Jan 2",
    time: "All Day",
    type: "holiday",
  },
  {
    id: 4,
    title: "Q1 Planning Session",
    date: "Jan 8, 2025",
    time: "9:00 AM",
    type: "meeting",
  },
]

export function LeaveCalendar() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Leave Requests</CardTitle>
          <Button size="sm" variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            View All
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {leaveRequests.map((request) => (
            <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-sm">{request.employee}</h4>
                <p className="text-xs text-muted-foreground">{request.type}</p>
                <p className="text-xs text-muted-foreground">{request.dates}</p>
              </div>
              <div className="text-right">
                <Badge
                  variant={
                    request.status === "Approved"
                      ? "default"
                      : request.status === "Pending"
                        ? "secondary"
                        : "destructive"
                  }
                  className="text-xs mb-1"
                >
                  {request.status}
                </Badge>
                <p className="text-xs text-muted-foreground">
                  {request.days} day{request.days > 1 ? "s" : ""}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Upcoming Events</CardTitle>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Calendar
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex items-center gap-3 p-3 border rounded-lg">
              <div
                className={`h-3 w-3 rounded-full ${
                  event.type === "meeting" ? "bg-blue-500" : event.type === "event" ? "bg-green-500" : "bg-orange-500"
                }`}
              />
              <div className="flex-1">
                <h4 className="font-medium text-sm">{event.title}</h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.time}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
