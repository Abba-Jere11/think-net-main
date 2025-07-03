import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div>
        <h2>Trust the process</h2>
        <Button asChild>
          <Link href="/dashboard/staff/new">New Staffs</Link>
        </Button>
    </div>
      
    
  )
}
