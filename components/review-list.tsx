import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Calendar, Eye, Edit, Star, Clock } from "lucide-react"

const reviews = [
  {
    id: 1,
    employee: {
      name: "Emily Rodriguez",
      position: "Senior Developer",
      department: "Engineering",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    reviewer: "John Manager",
    period: "Q4 2024",
    status: "Completed",
    score: 4.8,
    progress: 100,
    dueDate: "Dec 15, 2024",
    completedDate: "Dec 10, 2024",
    goals: 8,
    goalsCompleted: 7,
  },
  {
    id: 2,
    employee: {
      name: "Michael Brown",
      position: "Sales Manager",
      department: "Sales",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    reviewer: "Sarah Director",
    period: "Q4 2024",
    status: "In Progress",
    score: null,
    progress: 65,
    dueDate: "Dec 20, 2024",
    completedDate: null,
    goals: 6,
    goalsCompleted: 4,
  },
  {
    id: 3,
    employee: {
      name: "Lisa Wang",
      position: "HR Specialist",
      department: "Human Resources",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    reviewer: "David VP",
    period: "Q4 2024",
    status: "Pending",
    score: null,
    progress: 0,
    dueDate: "Dec 25, 2024",
    completedDate: null,
    goals: 5,
    goalsCompleted: 0,
  },
  {
    id: 4,
    employee: {
      name: "Alex Johnson",
      position: "Software Engineer",
      department: "Engineering",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    reviewer: "John Manager",
    period: "Q4 2024",
    status: "Overdue",
    score: null,
    progress: 30,
    dueDate: "Dec 5, 2024",
    completedDate: null,
    goals: 7,
    goalsCompleted: 2,
  },
]

export function ReviewList() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "default"
      case "In Progress":
        return "secondary"
      case "Pending":
        return "outline"
      case "Overdue":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getStatusStyle = (status: string) => {
    if (status === "Completed") {
      return { backgroundColor: "oklch(0.637 0.237 25.331)", color: "white" }
    }
    return {}
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-lg font-semibold">Performance Reviews</CardTitle>
        <p className="text-sm text-gray-500">Manage and track employee performance evaluations</p>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl border border-gray-200/50 hover:shadow-sm transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <Avatar className="h-12 w-12 flex-shrink-0">
                    <AvatarImage src={review.employee.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {review.employee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm sm:text-base">{review.employee.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {review.employee.position} • {review.employee.department}
                    </p>
                    <p className="text-xs text-gray-500">Reviewer: {review.reviewer}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 flex-shrink-0">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Period</p>
                    <p className="text-sm font-medium">{review.period}</p>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Status</p>
                    <Badge
                      variant={getStatusColor(review.status)}
                      className="text-xs"
                      style={getStatusStyle(review.status)}
                    >
                      {review.status}
                    </Badge>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Score</p>
                    <div className="flex items-center justify-center gap-1">
                      {review.score ? (
                        <>
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{review.score}</span>
                        </>
                      ) : (
                        <span className="text-sm text-gray-400">-</span>
                      )}
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Goals</p>
                    <p className="text-sm font-medium">
                      {review.goalsCompleted}/{review.goals}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-4 flex-shrink-0">
                  <div className="w-full sm:w-32">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">Progress</span>
                      <span className="text-xs font-medium">{review.progress}%</span>
                    </div>
                    <Progress value={review.progress} className="h-2" />
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>Due: {review.dueDate}</span>
                    </div>
                    {review.completedDate && (
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>Completed: {review.completedDate}</span>
                      </div>
                    )}
                  </div>

                  {review.status === "Overdue" && (
                    <Badge variant="destructive" className="text-xs w-fit">
                      {Math.ceil((new Date().getTime() - new Date(review.dueDate).getTime()) / (1000 * 3600 * 24))} days
                      overdue
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
