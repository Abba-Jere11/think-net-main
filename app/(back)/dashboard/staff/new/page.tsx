import { Users, UserPlus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SingleStudent from "@/components/dashboard/forms/students/single-student"
import BulkStudent from "@/components/dashboard/forms/students/bulk-student-form"

export default function Component() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Staff Admission Portal</h1>
        <p className="text-gray-600">Choose your preferred method to add new staff members</p>
      </div>

      <Tabs defaultValue="single" className="w-full ">
        <TabsList className="grid w-full grid-cols-2 mb-8 h-14">
          <TabsTrigger
            value="single"
            className="flex items-center gap-3 text-base font-medium data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-primary/20"
          >
            <UserPlus className="h-5 w-5" />
            Single Staff Admission
          </TabsTrigger>
          <TabsTrigger
            value="bulk"
            className="flex items-center gap-3 text-base font-medium data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:border-primary/20"
          >
            <Users className="h-5 w-5" />
            Bulk Staff Admission
          </TabsTrigger>
        </TabsList>

        <TabsContent value="single" className="space-y-6">
          <Card className="border-primary-200 shadow-sm">
            <SingleStudent/>
          </Card>
        </TabsContent>

        <TabsContent value="bulk" className="space-y-6">
          <Card className="border-primary-200 shadow-sm">
            <BulkStudent/>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
