"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Plus, Clock, CheckCircle, XCircle, AlertCircle, FileText, User } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const myLeaveRequests = [
  {
    id: 1,
    leaveType: "Annual Leave",
    startDate: "Dec 23, 2024",
    endDate: "Dec 27, 2024",
    days: 5,
    status: "Approved",
    appliedDate: "Dec 1, 2024",
    approver: "John Manager",
    reason: "Family vacation during holidays",
    comments: "Approved for holiday period. Enjoy your vacation!",
  },
  {
    id: 2,
    leaveType: "Sick Leave",
    startDate: "Dec 12, 2024",
    endDate: "Dec 12, 2024",
    days: 1,
    status: "Pending",
    appliedDate: "Dec 10, 2024",
    approver: "John Manager",
    reason: "Medical appointment",
    comments: null,
  },
  {
    id: 3,
    leaveType: "Personal Leave",
    startDate: "Nov 15, 2024",
    endDate: "Nov 16, 2024",
    days: 2,
    status: "Rejected",
    appliedDate: "Nov 10, 2024",
    approver: "John Manager",
    reason: "Personal matters",
    comments: "Insufficient coverage during project deadline. Please reschedule.",
  },
]

const leaveBalance = {
  annual: { used: 8, total: 20, remaining: 12 },
  sick: { used: 3, total: 10, remaining: 7 },
  personal: { used: 2, total: 5, remaining: 3 },
  emergency: { used: 0, total: 3, remaining: 3 },
}

export function StaffLeavePortal() {
  const [showNewRequestDialog, setShowNewRequestDialog] = useState(false)
  const [newRequest, setNewRequest] = useState({
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
    halfDay: false,
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "default"
      case "Pending":
        return "secondary"
      case "Rejected":
        return "destructive"
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "Pending":
        return <Clock className="h-4 w-4 text-orange-600" />
      case "Rejected":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-600" />
    }
  }

  const handleSubmitRequest = () => {
    // Handle form submission
    console.log("Submitting leave request:", newRequest)
    setShowNewRequestDialog(false)
    setNewRequest({
      leaveType: "",
      startDate: "",
      endDate: "",
      reason: "",
      halfDay: false,
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Leave Requests</h1>
          <p className="text-gray-600 mt-1">Submit and track your leave applications</p>
        </div>

        <Dialog open={showNewRequestDialog} onOpenChange={setShowNewRequestDialog}>
          <DialogTrigger asChild>
            <Button size="sm" className="bg-primary" style={{ backgroundColor: "oklch(0.637 0.237 25.331)" }}>
              <Plus className="h-4 w-4 mr-2" />
              New Leave Request
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Submit Leave Request</DialogTitle>
              <DialogDescription>
                Fill in the details for your leave request. Your manager will be notified for approval.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="leave-type">Leave Type</Label>
                <Select
                  value={newRequest.leaveType}
                  onValueChange={(value) => setNewRequest({ ...newRequest, leaveType: value })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select leave type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="annual">Annual Leave</SelectItem>
                    <SelectItem value="sick">Sick Leave</SelectItem>
                    <SelectItem value="personal">Personal Leave</SelectItem>
                    <SelectItem value="emergency">Emergency Leave</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input
                    id="start-date"
                    type="date"
                    value={newRequest.startDate}
                    onChange={(e) => setNewRequest({ ...newRequest, startDate: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="end-date">End Date</Label>
                  <Input
                    id="end-date"
                    type="date"
                    value={newRequest.endDate}
                    onChange={(e) => setNewRequest({ ...newRequest, endDate: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="reason">Reason for Leave</Label>
                <Textarea
                  id="reason"
                  placeholder="Please provide a brief reason for your leave request..."
                  value={newRequest.reason}
                  onChange={(e) => setNewRequest({ ...newRequest, reason: e.target.value })}
                  className="mt-1"
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowNewRequestDialog(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleSubmitRequest}
                className="bg-primary"
                style={{ backgroundColor: "oklch(0.637 0.237 25.331)" }}
              >
                Submit Request
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Leave Balance Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(leaveBalance).map(([type, balance]) => (
          <Card key={type} className="border-0 shadow-sm bg-gradient-to-br from-white to-gray-50/50">
            <CardHeader className="pb-2 px-4 sm:px-6">
              <CardTitle className="text-sm font-medium text-gray-600 capitalize">
                {type.replace("_", " ")} Leave
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {balance.remaining}
                <span className="text-sm font-normal text-gray-500">/{balance.total} days</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${(balance.used / balance.total) * 100}%`,
                    backgroundColor: "oklch(0.637 0.237 25.331)",
                  }}
                />
              </div>
              <p className="text-xs text-gray-500">{balance.used} days used</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* My Leave Requests */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="px-4 sm:px-6">
          <CardTitle className="text-lg font-semibold">My Leave History</CardTitle>
          <p className="text-sm text-gray-500">Track the status of your leave applications</p>
        </CardHeader>
        <CardContent className="px-4 sm:px-6">
          <div className="space-y-4">
            {myLeaveRequests.map((request) => (
              <div
                key={request.id}
                className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl border border-gray-200/50 hover:shadow-sm transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Calendar className="h-5 w-5" style={{ color: "oklch(0.637 0.237 25.331)" }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base">{request.leaveType}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {request.startDate}
                        {request.startDate !== request.endDate && ` - ${request.endDate}`}
                      </p>
                      <p className="text-xs text-gray-500">
                        {request.days} day{request.days > 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="flex items-center gap-2 mb-1">
                        {getStatusIcon(request.status)}
                        <Badge
                          variant={getStatusColor(request.status)}
                          className="text-xs"
                          style={getStatusStyle(request.status)}
                        >
                          {request.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-500">Applied: {request.appliedDate}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>Approver: {request.approver}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="h-3 w-3" />
                      <span>Reason: {request.reason}</span>
                    </div>
                  </div>

                  {request.comments && (
                    <div
                      className={`mt-3 p-3 rounded-lg border ${
                        request.status === "Approved"
                          ? "bg-green-50 border-green-200"
                          : request.status === "Rejected"
                            ? "bg-red-50 border-red-200"
                            : "bg-blue-50 border-blue-200"
                      }`}
                    >
                      <p
                        className={`text-xs ${
                          request.status === "Approved"
                            ? "text-green-700"
                            : request.status === "Rejected"
                              ? "text-red-700"
                              : "text-blue-700"
                        }`}
                      >
                        <strong>Manager's Comment:</strong> {request.comments}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
