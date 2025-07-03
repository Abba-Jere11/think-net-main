import CompanyOnboarding from '@/components/dashboard/forms/company/company-onboarding'
import { Card } from '@/components/ui/card'
import React from 'react'

export default function page() {
  return (
    <div>
       <div className="max-w-4xl mx-auto p-16">
        <Card className="border-t-4 border-primary shadow">
            <CompanyOnboarding/>
          </Card>
         
       </div>
    </div>
  )
}
