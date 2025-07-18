import { cn } from "@/lib/utils"
import React from "react"

type FeatureType = {
  title: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  description: string
}

type FeatureCardProps = React.ComponentProps<"div"> & {
  feature: FeatureType
}

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
  const p = genRandomPattern()
  return (
    <div
      className={cn(
        "relative overflow-hidden p-6 bg-black/50 hover:bg-black/60 transition-all duration-300 group backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/30",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="from-blue-400/10 to-blue-600/5 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={p}
            className="fill-blue-400/10 stroke-blue-200/40 absolute inset-0 h-full w-full mix-blend-overlay group-hover:stroke-blue-300/50 group-hover:fill-blue-400/15 transition-all duration-300"
          />
        </div>
      </div>
      <feature.icon
        className="text-blue-300/90 group-hover:text-blue-200 size-6 transition-colors duration-300 drop-shadow-sm"
        strokeWidth={1.5}
        aria-hidden
      />
      <h3 className="mt-10 text-sm md:text-base font-semibold text-white group-hover:text-blue-50 transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-gray-300 group-hover:text-gray-200 relative z-20 mt-2 text-xs font-light leading-relaxed transition-colors duration-300">
        {feature.description}
      </p>
    </div>
  )
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
  const patternId = React.useId()
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} />
          ))}
        </svg>
      )}
    </svg>
  )
}

function genRandomPattern(length?: number): number[][] {
  length = length ?? 5
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
    Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
  ])
}
