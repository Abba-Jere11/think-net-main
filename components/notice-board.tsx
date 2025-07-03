import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Info, Megaphone, Eye } from "lucide-react"

const notices = [
  {
    id: 1,
    title: "Holiday Schedule Updated",
    content: "New Year holidays have been updated in the system. Please check your calendar for the latest dates.",
    date: "Dec 10, 2024",
    type: "info",
    priority: "Medium",
    author: "HR Department",
  },
  {
    id: 2,
    title: "Mandatory Training Reminder",
    content:
      "All employees must complete cybersecurity training by Dec 31. Login to the training portal to get started.",
    date: "Dec 8, 2024",
    type: "warning",
    priority: "High",
    author: "IT Security",
  },
  {
    id: 3,
    title: "Office Renovation Notice",
    content: "3rd floor will be under renovation from Jan 15-30. Alternative workspaces will be provided.",
    date: "Dec 5, 2024",
    type: "info",
    priority: "Low",
    author: "Facilities",
  },
  {
    id: 4,
    title: "New Employee Benefits Program",
    content: "We're excited to announce enhanced health benefits starting January 2025. Details in your email.",
    date: "Dec 3, 2024",
    type: "announcement",
    priority: "Medium",
    author: "Benefits Team",
  },
]

export function NoticeBoard() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">Notice Board</CardTitle>
          <p className="text-sm text-gray-500 mt-1">Company announcements and important updates</p>
        </div>
        <Button size="sm" variant="outline">
          <Eye className="h-4 w-4 mr-2" />
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {notices.map((notice) => (
          <div
            key={notice.id}
            className="p-4 rounded-xl border hover:shadow-sm transition-shadow"
            style={{
              background:
                notice.type === "warning"
                  ? "linear-gradient(to right, #fef3c7, #fde68a)"
                  : notice.type === "announcement"
                    ? "linear-gradient(to right, #dbeafe, #bfdbfe)"
                    : "linear-gradient(to right, #f3f4f6, #e5e7eb)",
            }}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">
                {notice.type === "warning" ? (
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                ) : notice.type === "announcement" ? (
                  <Megaphone className="h-5 w-5 text-blue-600" />
                ) : (
                  <Info className="h-5 w-5 text-gray-600" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-medium text-sm">{notice.title}</h4>
                  <Badge
                    variant={
                      notice.priority === "High"
                        ? "destructive"
                        : notice.priority === "Medium"
                          ? "default"
                          : "secondary"
                    }
                    className="text-xs"
                  >
                    {notice.priority}
                  </Badge>
                </div>
                <p className="text-sm text-gray-700 mb-2">{notice.content}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{notice.author}</span>
                  <span>{notice.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
