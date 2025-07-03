import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  width?: number
  height?: number
  className?: string
  priority?: boolean
  responsive?: boolean
}

export default function Logo({ 
  width = 220, 
  height = 80, 
  className, 
  priority = true,
  responsive = false 
}: LogoProps) {
  if (responsive) {
    return (
      <div className={cn("relative", className)}>
        <Image
          src="/thinkg.png"
          alt="Think-Lab Group - Innovation, Development, Finance"
          width={width}
          height={height}
          priority={priority}
          className="w-auto h-8 sm:h-10 md:h-12 lg:h-16 object-contain"
        />
      </div>
    )
  }

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