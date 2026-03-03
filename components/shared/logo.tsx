import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "sm" | "default" | "lg" | "xl"
  variant?: "default" | "light"
}

const sizeMap = {
  sm: { img: 28, text: "text-lg" },
  default: { img: 32, text: "text-xl" },
  lg: { img: 38, text: "text-2xl" },
  xl: { img: 48, text: "text-5xl" },
}

export function Logo({
  size = "default",
  variant = "default",
}: LogoProps) {
  const { img, text } = sizeMap[size]
  const isLight = variant === "light"

  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="SyncLog"
        width={img}
        height={img}
        className="shrink-0"
        priority
      />
      <span className={cn(text, "font-semibold tracking-[0.3px]")}>
        <span className={isLight ? "text-white" : "text-[#009965]"}>Sync</span>
        <span className={isLight ? "text-white/80" : "text-[#515151]"}>log</span>
      </span>
    </div>
  )
}
