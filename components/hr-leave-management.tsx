"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Plus, Download, Check, X, Eye, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const leaveRequests = [
  {
    id: 1,
    employee: {
      name: "Faiza Binte Mehbub",
      avatar: "/placeholder.svg?height=32&width=32",
      department: "Engineering",
    },
    policy: "Sick Leave",
    request: "Jul 14",
    duration: "1 day",
    available: "7 days",
    status: "Pending",
    reason: "Medical appointment",
    appliedDate: "Jul 12, 2024",
  },
  {
    id: 2,
    employee: {
      name: "James Mulligan",
      avatar: "/placeholder.svg?height=32&width=32",
      department: "Marketing",
    },
    policy: "Casual Leave",
    request: "Jun 02",
    duration: "1 day",
    available: "10 days",
    status: "Pending",
    reason: "Personal work",
    appliedDate: "May 30, 2024",
  },
  {
    id: 3,
    employee: {
      name: "Michael Smith",
      avatar: "/placeholder.svg?height=32&width=32",
      department: "Sales",
    },
    policy: "Annual Leave",
    request: "Nov 01 — Nov 08",
    duration: "6 days",
    available: "10 days",
    status: "Pending",
    reason: "Family vacation",
    appliedDate: "Oct 15, 2024",
  },
  {
    id: 4,
    employee: {
      name: "Lucy Hale",
      avatar: "/placeholder.svg?height=32&width=32",
      department: "HR",
    },
    policy: "Bereavement Leave",
    request: "Apr 09 — Apr 10",
    duration: "1 day",
    available: "5 days",
    status: "Pending",
    reason: "Family emergency",
    appliedDate: "Apr 08, 2024",
  },
  {
    id: 5,
    employee: {
      name: "James Smith",
      avatar: "/placeholder.svg?height=32&width=32",
      department: "Finance",
    },
    policy: "Casual Leave",
    request: "Jun 01 — Jun 02",
    duration: "2 days",
    available: "10 days",
    status: "Approved",
    reason: "Personal matters",
    appliedDate: "May 25, 2024",
  },
]

export function HRLeaveManagement() {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedRequests, setSelectedRequests] = useState<number[]>([])
  const [filters, setFilters] = useState({
    employeeName: "",
    financialYear: "2024",
    leavePolicy: "all",
    leaveStatus: "all",
    dateFrom: "",
    dateTo: "",
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

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRequests(leaveRequests.map((req) => req.id))
    } else {
      setSelectedRequests([])
    }
  }

  const handleSelectRequest = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedRequests([...selectedRequests, id])
    } else {
      setSelectedRequests(selectedRequests.filter((reqId) => reqId !== id))
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Leave Requests</h1>
          <p className="text-gray-600 mt-1">Manage and review employee leave applications</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4 mr-2" />
            Filter Leave Requests
          </Button>

          <Button size="sm" className="bg-primary" style={{ backgroundColor: "oklch(0.637 0.237 25.331)" }}>
            <Plus className="h-4 w-4 mr-2" />
            New Request
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Main Content */}
        <div className={`${showFilters ? "lg:col-span-3" : "lg:col-span-4"}`}>
          <Card className="border-0 shadow-sm">
            <CardHeader className="px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 text-gray-400 -translate-y-1/2" />
                  <Input
                    placeholder="Search employees..."
                    className="pl-9"
                    value={filters.employeeName}
                    onChange={(e) => setFilters({ ...filters, employeeName: e.target.value })}
                  />
                </div>

                <div className="flex items-center gap-2">
                  {selectedRequests.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Check className="h-4 w-4 mr-1" />
                        Approve ({selectedRequests.length})
                      </Button>
                      <Button size="sm" variant="destructive">
                        <X className="h-4 w-4 mr-1" />
                        Reject ({selectedRequests.length})
                      </Button>
                    </div>
                  )}

                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-4 sm:px-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2">
                        <Checkbox
                          checked={selectedRequests.length === leaveRequests.length}
                          onCheckedChange={handleSelectAll}
                        />
                      </th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Employee Name</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Policy</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Request</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Available</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-2 font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveRequests.map((request) => (
                      <tr key={request.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-2">
                          <Checkbox
                            checked={selectedRequests.includes(request.id)}
                            onCheckedChange={(checked) => handleSelectRequest(request.id, checked as boolean)}
                          />
                        </td>
                        <td className="py-4 px-2">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={request.employee.avatar || "/placeholder.svg"} />
                              <AvatarFallback className="text-xs">
                                {request.employee.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                                {request.employee.name}
                              </p>
                              <p className="text-xs text-gray-500">{request.employee.department}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <span className="text-sm">{request.policy}</span>
                        </td>
                        <td className="py-4 px-2">
                          <div>
                            <p className="text-sm font-medium">{request.request}</p>
                            <p className="text-xs text-gray-500 italic">{request.duration}</p>
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <span className="text-sm text-green-600 font-medium">{request.available}</span>
                        </td>
                        <td className="py-4 px-2">
                          <Badge
                            variant={getStatusColor(request.status)}
                            className="text-xs"
                            style={getStatusStyle(request.status)}
                          >
                            {request.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-2">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              {request.status === "Pending" && (
                                <>
                                  <DropdownMenuItem className="text-green-600">
                                    <Check className="h-4 w-4 mr-2" />
                                    Approve
                                  </DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600">
                                    <X className="h-4 w-4 mr-2" />
                                    Reject
                                  </DropdownMenuItem>
                                </>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-sm">
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="text-lg font-semibold">Filter Leave Request</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 sm:px-6">
                <div>
                  <Label htmlFor="employee-name" className="text-sm font-medium">
                    Employee name
                  </Label>
                  <Input
                    id="employee-name"
                    placeholder="Lucy Hale"
                    value={filters.employeeName}
                    onChange={(e) => setFilters({ ...filters, employeeName: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="financial-year" className="text-sm font-medium">
                      Financial year
                    </Label>
                    <Select
                      value={filters.financialYear}
                      onValueChange={(value) => setFilters({ ...filters, financialYear: value })}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="leave-policy" className="text-sm font-medium">
                      Leave Policy
                    </Label>
                    <Select
                      value={filters.leavePolicy}
                      onValueChange={(value) => setFilters({ ...filters, leavePolicy: value })}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Policies</SelectItem>
                        <SelectItem value="casual">Casual Leave</SelectItem>
                        <SelectItem value="sick">Sick Leave</SelectItem>
                        <SelectItem value="annual">Annual Leave</SelectItem>
                        <SelectItem value="bereavement">Bereavement Leave</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Leave status</Label>
                  <div className="flex gap-2 mt-2">
                    <Button
                      size="sm"
                      variant={filters.leaveStatus === "approved" ? "default" : "outline"}
                      onClick={() => setFilters({ ...filters, leaveStatus: "approved" })}
                      className="text-xs"
                      style={
                        filters.leaveStatus === "approved"
                          ? { backgroundColor: "oklch(0.637 0.237 25.331)", color: "white" }
                          : {}
                      }
                    >
                      Approved
                    </Button>
                    <Button
                      size="sm"
                      variant={filters.leaveStatus === "pending" ? "secondary" : "outline"}
                      onClick={() => setFilters({ ...filters, leaveStatus: "pending" })}
                      className="text-xs"
                    >
                      Pending
                    </Button>
                    <Button
                      size="sm"
                      variant={filters.leaveStatus === "rejected" ? "destructive" : "outline"}
                      onClick={() => setFilters({ ...filters, leaveStatus: "rejected" })}
                      className="text-xs"
                    >
                      Rejected
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Date range</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Custom" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="custom">Custom</SelectItem>
                      <SelectItem value="this-month">This Month</SelectItem>
                      <SelectItem value="last-month">Last Month</SelectItem>
                      <SelectItem value="this-quarter">This Quarter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="date-from" className="text-sm font-medium">
                      From
                    </Label>
                    <Input
                      id="date-from"
                      type="date"
                      value={filters.dateFrom}
                      onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="date-to" className="text-sm font-medium">
                      To
                    </Label>
                    <Input
                      id="date-to"
                      type="date"
                      value={filters.dateTo}
                      onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Cancel
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Reset
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary"
                    style={{ backgroundColor: "oklch(0.637 0.237 25.331)" }}
                  >
                    Apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
