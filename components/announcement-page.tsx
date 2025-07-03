"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus, Filter, Bell, Megaphone, AlertCircle, Info, Calendar, Eye, Edit, Trash2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const announcements = [
  {
    id: 1,
    title: "Holiday Schedule Updated",
    content:
      "New Year holidays have been updated in the system. Please check your calendar for the latest dates and plan accordingly.",
    type: "info",
    priority: "Medium",
    author: {
      name: "HR Department",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    department: "All Departments",
    publishDate: "Dec 10, 2024",
    expiryDate: "Jan 15, 2025",
    status: "Published",
    views: 247,
    isUrgent: false,
  },
  {
    id: 2,
    title: "Mandatory Training Reminder",
    content:
      "All employees must complete cybersecurity training by Dec 31. Login to the training portal to get started. Failure to complete may result in system access restrictions.",
    type: "warning",
    priority: "High",
    author: {
      name: "IT Security Team",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    department: "All Departments",
    publishDate: "Dec 8, 2024",
    expiryDate: "Dec 31, 2024",
    status: "Published",
    views: 189,
    isUrgent: true,
  },
  {
    id: 3,
    title: "Office Renovation Notice",
    content:
      "3rd floor will be under renovation from Jan 15-30. Alternative workspaces will be provided. Please contact facilities for workspace allocation.",
    type: "info",
    priority: "Low",
    author: {
      name: "Facilities Team",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    department: "Engineering",
    publishDate: "Dec 5, 2024",
    expiryDate: "Feb 1, 2025",
    status: "Published",
    views: 156,
    isUrgent: false,
  },
  {
    id: 4,
    title: "New Employee Benefits Program",
    content:
      "We're excited to announce enhanced health benefits starting January 2025. Details have been sent to your email. Please review and update your preferences.",
    type: "announcement",
    priority: "Medium",
    author: {
      name: "Benefits Team",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    department: "All Departments",
    publishDate: "Dec 3, 2024",
    expiryDate: "Jan 31, 2025",
    status: "Draft",
    views: 0,
    isUrgent: false,
  },
  {
    id: 5,
    title: "Team Building Event - Save the Date",
    content:
      "Annual team building event scheduled for February 15, 2025. More details to follow. Start planning your participation!",
    type: "announcement",
    priority: "Low",
    author: {
      name: "Events Team",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    department: "All Departments",
    publishDate: "Dec 1, 2024",
    expiryDate: "Feb 20, 2025",
    status: "Scheduled",
    views: 98,
    isUrgent: false,
  },
]

export function AnnouncementPage() {
  const [showNewAnnouncementDialog, setShowNewAnnouncementDialog] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    priority: "all",
    department: "all",
    status: "all",
  })
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    type: "info",
    priority: "Medium",
    department: "All Departments",
    expiryDate: "",
    isUrgent: false,
  })

  const getTypeColor = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-orange-100 text-orange-700 border-orange-200"
      case "announcement":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "info":
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertCircle className="h-5 w-5 text-orange-600" />
      case "announcement":
        return <Megaphone className="h-5 w-5 text-blue-600" />
      case "info":
      default:
        return <Info className="h-5 w-5 text-gray-600" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive"
      case "Medium":
        return "default"
      case "Low":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "default"
      case "Draft":
        return "secondary"
      case "Scheduled":
        return "outline"
      default:
        return "outline"
    }
  }

  const getStatusStyle = (status: string) => {
    if (status === "Published") {
      return { backgroundColor: "oklch(0.637 0.237 25.331)", color: "white" }
    }
    return {}
  }

  const handleSubmitAnnouncement = () => {
    console.log("Submitting announcement:", newAnnouncement)
    setShowNewAnnouncementDialog(false)
    setNewAnnouncement({
      title: "",
      content: "",
      type: "info",
      priority: "Medium",
      department: "All Departments",
      expiryDate: "",
      isUrgent: false,
    })
  }

  const filteredAnnouncements = announcements.filter((announcement) => {
    return (
      (filters.search === "" ||
        announcement.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        announcement.content.toLowerCase().includes(filters.search.toLowerCase())) &&
      (filters.type === "all" || announcement.type === filters.type) &&
      (filters.priority === "all" || announcement.priority === filters.priority) &&
      (filters.department === "all" || announcement.department === filters.department) &&
      (filters.status === "all" || announcement.status === filters.status)
    )
  })

  return (
    <div className="min-h-screen bg-gray-50/30 p-3 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Announcements</h1>
            <p className="text-gray-600 mt-1">Manage company announcements and important updates</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 text-gray-400 -translate-y-1/2" />
              <Input
                placeholder="Search announcements..."
                className="pl-9 w-full sm:w-64"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              />
            </div>

            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>

            <Dialog open={showNewAnnouncementDialog} onOpenChange={setShowNewAnnouncementDialog}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-primary" style={{ backgroundColor: "oklch(0.637 0.237 25.331)" }}>
                  <Plus className="h-4 w-4 mr-2" />
                  New Announcement
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Create New Announcement</DialogTitle>
                  <DialogDescription>
                    Create a new announcement to share with your team or organization.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter announcement title..."
                      value={newAnnouncement.title}
                      onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Enter announcement content..."
                      value={newAnnouncement.content}
                      onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
                      className="mt-1"
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="type">Type</Label>
                      <Select
                        value={newAnnouncement.type}
                        onValueChange={(value) => setNewAnnouncement({ ...newAnnouncement, type: value })}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="info">Information</SelectItem>
                          <SelectItem value="warning">Warning</SelectItem>
                          <SelectItem value="announcement">Announcement</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="priority">Priority</Label>
                      <Select
                        value={newAnnouncement.priority}
                        onValueChange={(value) => setNewAnnouncement({ ...newAnnouncement, priority: value })}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="High">High</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Select
                        value={newAnnouncement.department}
                        onValueChange={(value) => setNewAnnouncement({ ...newAnnouncement, department: value })}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="All Departments">All Departments</SelectItem>
                          <SelectItem value="Engineering">Engineering</SelectItem>
                          <SelectItem value="Marketing">Marketing</SelectItem>
                          <SelectItem value="Sales">Sales</SelectItem>
                          <SelectItem value="HR">HR</SelectItem>
                          <SelectItem value="Finance">Finance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        type="date"
                        value={newAnnouncement.expiryDate}
                        onChange={(e) => setNewAnnouncement({ ...newAnnouncement, expiryDate: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowNewAnnouncementDialog(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSubmitAnnouncement}
                    className="bg-primary"
                    style={{ backgroundColor: "oklch(0.637 0.237 25.331)" }}
                  >
                    Publish Announcement
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <Card className="border-0 shadow-sm">
            <CardHeader className="px-4 sm:px-6">
              <CardTitle className="text-lg font-semibold">Filter Announcements</CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="filter-type">Type</Label>
                  <Select value={filters.type} onValueChange={(value) => setFilters({ ...filters, type: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="info">Information</SelectItem>
                      <SelectItem value="warning">Warning</SelectItem>
                      <SelectItem value="announcement">Announcement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="filter-priority">Priority</Label>
                  <Select
                    value={filters.priority}
                    onValueChange={(value) => setFilters({ ...filters, priority: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priorities</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="filter-department">Department</Label>
                  <Select
                    value={filters.department}
                    onValueChange={(value) => setFilters({ ...filters, department: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="All Departments">All Departments</SelectItem>
                      <SelectItem value="Engineering">Engineering</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                      <SelectItem value="Sales">Sales</SelectItem>
                      <SelectItem value="HR">HR</SelectItem>
                      <SelectItem value="Finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="filter-status">Status</Label>
                  <Select value={filters.status} onValueChange={(value) => setFilters({ ...filters, status: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Published">Published</SelectItem>
                      <SelectItem value="Draft">Draft</SelectItem>
                      <SelectItem value="Scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Announcements List */}
        <div className="space-y-4">
          {filteredAnnouncements.map((announcement) => (
            <Card
              key={announcement.id}
              className={`border-0 shadow-sm hover:shadow-md transition-shadow ${
                announcement.isUrgent ? "ring-2 ring-red-200 bg-red-50/30" : ""
              }`}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="mt-1">{getTypeIcon(announcement.type)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg text-gray-900">{announcement.title}</h3>
                        {announcement.isUrgent && (
                          <Badge variant="destructive" className="text-xs">
                            <Bell className="h-3 w-3 mr-1" />
                            URGENT
                          </Badge>
                        )}
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">{announcement.content}</p>

                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Avatar className="h-5 w-5">
                            <AvatarImage src={announcement.author.avatar || "/placeholder.svg"} />
                            <AvatarFallback className="text-xs">
                              {announcement.author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span>{announcement.author.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{announcement.publishDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{announcement.views} views</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                    <div className="flex flex-wrap gap-2">
                      <Badge className={`text-xs border ${getTypeColor(announcement.type)}`} variant="outline">
                        {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                      </Badge>
                      <Badge variant={getPriorityColor(announcement.priority)} className="text-xs">
                        {announcement.priority}
                      </Badge>
                      <Badge
                        variant={getStatusColor(announcement.status)}
                        className="text-xs"
                        style={getStatusStyle(announcement.status)}
                      >
                        {announcement.status}
                      </Badge>
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
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                {announcement.expiryDate && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      <strong>Expires:</strong> {announcement.expiryDate} • <strong>Department:</strong>{" "}
                      {announcement.department}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAnnouncements.length === 0 && (
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <Megaphone className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No announcements found</h3>
              <p className="text-gray-500 mb-4">No announcements match your current filters.</p>
              <Button
                onClick={() =>
                  setFilters({ search: "", type: "all", priority: "all", department: "all", status: "all" })
                }
                variant="outline"
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
