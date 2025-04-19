"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface LoaderProps {
  className?: string
  text?: string
  duration?: number
}

export default function Loader({ className, text = "Loading", duration = 2000 }: LoaderProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!visible) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500",
        className,
      )}
    >
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-full animate-pulse rounded-full bg-zinc-800"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-zinc-500"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-8 w-8 animate-ping rounded-full bg-zinc-400"></div>
        </div>
      </div>

      <div className="mt-8 text-zinc-400">
        <p className="animate-pulse text-center font-mono text-sm tracking-widest">
          {text}
          <span className="animate-ellipsis">...</span>
        </p>
      </div>
    </div>
  )
}
