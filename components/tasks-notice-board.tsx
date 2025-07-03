import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Clock, AlertCircle, CheckCircle } from "lucide-react"

const tasks = [
  {
    id: 1,
    title: "Complete Q4 Performance Reviews",
    priority: "High",
    dueDate: "Dec 15, 2024",
    status: "In Progress",
    assignee: "HR Team",
  },
  {
    id: 2,
    title: "Update Employee Handbook",
    priority: "Medium",
    dueDate: "Dec 20, 2024",
    status: "Pending",
    assignee: "Sarah Johnson",
  },
  {
    id: 3,
    title: "Organize Team Building Event",
    priority: "Low",
    dueDate: "Jan 10, 2025",
    status: "Planning",
    assignee: "Events Team",
  },
  {
    id: 4,
    title: "Process December Payroll",
    priority: "High",
    dueDate: "Dec 28, 2024",
    status: "Completed",
    assignee: "Finance Team",
  },
]

const notices = [
  {
    id: 1,
    title: "Holiday Schedule Updated",
    content: "New Year holidays have been updated in the system.",
    date: "Dec 10, 2024",
    type: "info",
  },
  {
    id: 2,
    title: "Mandatory Training Reminder",
    content: "All employees must complete cybersecurity training by Dec 31.",
    date: "Dec 8, 2024",
    type: "warning",
  },
  {
    id: 3,
    title: "Office Renovation Notice",
    content: "3rd floor will be under renovation from Jan 15-30.",
    date: "Dec 5, 2024",
    type: "info",
  },
]

export function TasksNoticeBoard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Tasks & Projects</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Task
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-sm">{task.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <Badge
                    variant={
                      task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "secondary"
                    }
                    className="text-xs"
                  >
                    {task.priority}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{task.assignee}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {task.dueDate}
                </div>
                <Badge variant={task.status === "Completed" ? "default" : "outline"} className="mt-1 text-xs">
                  {task.status === "Completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                  {task.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Notice Board</CardTitle>
          <Button size="sm" variant="outline">
            View All
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="p-3 border rounded-lg">
              <div className="flex items-start gap-2">
                {notice.type === "warning" ? (
                  <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                ) : (
                  <div className="h-4 w-4 rounded-full bg-blue-500 mt-0.5" />
                )}
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{notice.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{notice.content}</p>
                  <span className="text-xs text-muted-foreground">{notice.date}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
