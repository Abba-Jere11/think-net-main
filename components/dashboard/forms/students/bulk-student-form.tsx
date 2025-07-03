import {  CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Users } from 'lucide-react'
import React from 'react'

export default function BulkStudent() {
  return (
    <div>
        <CardHeader className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-primary-800">
                <Users className="h-6 w-6 text-primary" />
                Bulk Staff Import
              </CardTitle>
              <CardDescription className="text-primary-600">
                Upload multiple staff members simultaneously using CSV or Excel files
              </CardDescription>
            </CardHeader>
    </div>
  )
}
