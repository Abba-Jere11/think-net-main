"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, AlertTriangle } from "lucide-react"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500 text-white">
            <AlertTriangle className="h-8 w-8" />
          </div>

          <h1 className="text-center text-3xl font-bold text-gray-900">500 - Server Error</h1>

          <p className="text-center text-gray-600">
            Sorry! Something went wrong on our server. We&apos;re working to fix the issue.
          </p>

          <div className="flex w-full flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button onClick={() => reset()} className="flex items-center justify-center space-x-2">
              Try Again
            </Button>

            <Button asChild className="flex items-center justify-center space-x-2">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go to Homepage
              </Link>
            </Button>

            <Button
              variant="outline"
              className="flex items-center justify-center space-x-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ThinkLab Group. All rights reserved.
        </div>
      </div>
    </div>
  )
}
