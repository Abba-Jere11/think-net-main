import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, UserPlus } from "lucide-react"

export function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-bold">
              Staff Management
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/department">
              <Button variant="ghost" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Department
              </Button>
            </Link>
            <Link href="/add-staff">
              <Button variant="ghost" className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Add Staff
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
