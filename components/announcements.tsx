"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, Info, AlertTriangle, CheckCircle, RefreshCw } from "lucide-react"
import { useAnnouncements } from "@/hooks/useAnnouncements"
import { formatDistanceToNow } from "date-fns"

const getAnnouncementIcon = (type: string) => {
  switch (type) {
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-orange-500" />
    case "urgent":z
      return <AlertCircle className="h-4 w-4 text-red-500" />
    case "success":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    default:
      return <Info className="h-4 w-4 text-blue-500" />
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "destructive"
    case "medium":
      return "default"
    case "low":
      return "secondary"
    default:
      return "outline"
  }
}

export function NoticeBoard() {
  const { announcements, loading, error, refetch } = useAnnouncements(undefined, 5)

  const handleRefresh = () => {
    refetch()
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">Notice Board</CardTitle>
          <p className="text-sm text-muted-foreground">Latest announcements and updates</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={handleRefresh} disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button size="sm">View All</Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading && announcements.length === 0 ? (
          <div className="flex items-center justify-center py-8">
            <div className="text-center">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Loading announcements...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-8">
            <div className="text-center">
              <AlertCircle className="h-8 w-8 mx-auto mb-2 text-red-500" />
              <p className="text-sm text-red-600">{error}</p>
              <Button size="sm" variant="outline" onClick={handleRefresh} className="mt-2 bg-transparent">
                Try Again
              </Button>
            </div>
          </div>
        ) : announcements.length === 0 ? (
          <div className="flex items-center justify-center py-8">
            <div className="text-center">
              <Info className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">No announcements at this time</p>
            </div>
          </div>
        ) : (
          announcements.map((announcement) => (
            <div key={announcement.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-start gap-3">
                {getAnnouncementIcon(announcement.type)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-medium text-sm leading-tight">{announcement.title}</h4>
                    <Badge variant={getPriorityColor(announcement.priority)} className="text-xs shrink-0">
                      {announcement.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{announcement.content}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground">
                      By {announcement.author.firstname} {announcement.author.lastname}
                      {announcement.author.department && ` • ${announcement.author.department}`}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(announcement.createdAt), { addSuffix: true })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}
