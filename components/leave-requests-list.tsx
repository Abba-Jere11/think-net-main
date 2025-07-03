import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, FileText, Check, X, Eye } from "lucide-react"

const leaveRequests = [
  {
    id: 1,
    employee: {
      name: "John Smith",
      position: "Software Engineer",
      department: "Engineering",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    leaveType: "Annual Leave",
    startDate: "Dec 23, 2024",
    endDate: "Dec 27, 2024",
    days: 5,
    status: "Approved",
    appliedDate: "Dec 1, 2024",
    approver: "John Manager",
    reason: "Family vacation during holidays",
    remainingDays: 12,
  },
  {
    id: 2,
    employee: {
      name: "Emma Wilson",
      position: "UX Designer",
      department: "Design",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    leaveType: "Sick Leave",
    startDate: "Dec 12, 2024",
    endDate: "Dec 12, 2024",
    days: 1,
    status: "Pending",
    appliedDate: "Dec 10, 2024",
    approver: "Sarah Director",
    reason: "Medical appointment",
    remainingDays: 8,
  },
  {
    id: 3,
    employee: {
      name: "Michael Brown",
      position: "Sales Manager",
      department: "Sales",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    leaveType: "Personal Leave",
    startDate: "Jan 2, 2025",
    endDate: "Jan 3, 2025",
    days: 2,
    status: "Approved",
    appliedDate: "Nov 28, 2024",
    approver: "David VP",
    reason: "Personal matters",
    remainingDays: 15,
  },
  {
    id: 4,
    employee: {
      name: "Sarah Davis",
      position: "Marketing Specialist",
      department: "Marketing",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    leaveType: "Maternity Leave",
    startDate: "Jan 15, 2025",
    endDate: "Mar 15, 2025",
    days: 60,
    status: "Approved",
    appliedDate: "Nov 15, 2024",
    approver: "Lisa HR",
    reason: "Maternity leave",
    remainingDays: 0,
  },
  {
    id: 5,
    employee: {
      name: "Alex Johnson",
      position: "Product Manager",
      department: "Product",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    leaveType: "Annual Leave",
    startDate: "Dec 18, 2024",
    endDate: "Dec 20, 2024",
    days: 3,
    status: "Rejected",
    appliedDate: "Dec 5, 2024",
    approver: "John Manager",
    reason: "Short vacation",
    remainingDays: 18,
    rejectionReason: "Insufficient coverage during busy period",
  },
]

export function LeaveRequestsList() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "default"
      case "Pending":
        return "secondary"
      case "Rejected":
        return "destructive"
      case "Cancelled":
        return "outline"
      default:
        return "outline"
    }
  }

  const getStatusStyle = (status: string) => {
    if (status === "Approved") {
      return { backgroundColor: "oklch(0.637 0.237 25.331)", color: "white" }
    }
    return {}
  }

  const getLeaveTypeColor = (type: string) => {
    switch (type) {
      case "Annual Leave":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "Sick Leave":
        return "bg-red-100 text-red-700 border-red-200"
      case "Personal Leave":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "Maternity Leave":
        return "bg-pink-100 text-pink-700 border-pink-200"
      case "Paternity Leave":
        return "bg-green-100 text-green-700 border-green-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-lg font-semibold">Leave Requests</CardTitle>
        <p className="text-sm text-gray-500">Manage and review employee leave applications</p>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <div className="space-y-4">
          {leaveRequests.map((request) => (
            <div
              key={request.id}
              className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl border border-gray-200/50 hover:shadow-sm transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <Avatar className="h-12 w-12 flex-shrink-0">
                    <AvatarImage src={request.employee.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {request.employee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm sm:text-base">{request.employee.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {request.employee.position} • {request.employee.department}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={`text-xs border ${getLeaveTypeColor(request.leaveType)}`} variant="outline">
                        {request.leaveType}
                      </Badge>
                      <span className="text-xs text-gray-500">{request.days} days</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 flex-shrink-0">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Dates</p>
                    <p className="text-sm font-medium">
                      {request.startDate}
                      {request.startDate !== request.endDate && ` - ${request.endDate}`}
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Status</p>
                    <Badge
                      variant={getStatusColor(request.status)}
                      className="text-xs"
                      style={getStatusStyle(request.status)}
                    >
                      {request.status}
                    </Badge>
                  </div>

                  <div className="text-center col-span-2 lg:col-span-1">
                    <p className="text-xs text-gray-500 mb-1">Remaining Days</p>
                    <p className="text-sm font-medium">{request.remainingDays} days</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-shrink-0">
                  {request.status === "Pending" ? (
                    <div className="flex items-center gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        <Check className="h-3 w-3 mr-1" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive">
                        <X className="h-3 w-3 mr-1" />
                        Reject
                      </Button>
                    </div>
                  ) : (
                    <Button variant="outline" size="sm">
                      <Eye className="h-3 w-3 mr-1" />
                      View Details
                    </Button>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Applied: {request.appliedDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>Approver: {request.approver}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="h-3 w-3" />
                    <span>Reason: {request.reason}</span>
                  </div>
                </div>

                {request.rejectionReason && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-xs text-red-700">
                      <strong>Rejection Reason:</strong> {request.rejectionReason}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
