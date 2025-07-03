import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function LogoDash({ width = 220, height = 80, className, priority = true }: LogoProps) {
  return (
    <div className={cn("", className)}>
      <Image
        src="/thinkg.png"
        alt="Think-Lab Group - Innovation, Development, Finance"
        width={width}
        height={height}
        priority={priority}
        className="object-contain"
      />
    </div>
  )
}
