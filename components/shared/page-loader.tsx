"use client"

import { useState, useEffect } from "react"

interface PageLoaderProps {
  children: React.ReactNode
  duration?: number
}

export function PageLoader({ children, duration = 2000 }: PageLoaderProps) {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), duration - 500)
    const hideTimer = setTimeout(() => setLoading(false), duration)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [duration])

  return (
    <>
      {loading && <LoadingOverlay fadeOut={fadeOut} duration={duration} />}
      {children}
    </>
  )
}

function LoadingOverlay({
  fadeOut,
  duration,
}: {
  fadeOut: boolean
  duration: number
}) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="flex flex-col items-center gap-7"
        style={{
          animation: "syncLoaderEntry 0.6s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <ProgressRing duration={duration} />
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-0.5 text-xl font-bold tracking-tight">
            <span className="text-[#009965]">Sync</span>
            <span className="text-[#515151]">log</span>
          </div>
          <LoadingDots />
        </div>
      </div>

      <style>{`
        @keyframes syncLoaderEntry {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

function ProgressRing({ duration }: { duration: number }) {
  return (
    <div className="relative h-32 w-32">
      {/* SVG progress ring */}
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 128 128">
        {/* Track */}
        <circle
          cx="64"
          cy="64"
          r="62"
          fill="none"
          stroke="#009965"
          strokeOpacity="0.08"
          strokeWidth="3"
        />
        {/* Animated arc */}
        <circle
          cx="64"
          cy="64"
          r="62"
          fill="none"
          stroke="#009965"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 62}`}
          strokeDashoffset={`${2 * Math.PI * 62}`}
          style={{
            animation: `syncRingFill ${duration}ms cubic-bezier(0.4,0,0.2,1) forwards`,
          }}
        />
      </svg>

      {/* Clock face inside the ring */}
      <div className="absolute inset-3">
        <ClockFace />
      </div>

      <style>{`
        @keyframes syncRingFill {
          from { stroke-dashoffset: ${2 * Math.PI * 62}; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  )
}

function ClockFace() {
  return (
    <div className="relative h-full w-full">
      {/* Outer glow */}
      <div className="absolute inset-0 animate-pulse rounded-full bg-[#009965]/8" />

      {/* Clock body */}
      <div className="absolute inset-0.5 rounded-full border-2 border-[#009965]/15 bg-white shadow-[0_4px_24px_rgba(0,153,101,0.1)]">
        {/* Hour markers */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `rotate(${i * 30}deg)` }}
          >
            <div
              className={`-translate-x-1/2 rounded-full ${
                i % 3 === 0
                  ? "h-2 w-[3px] bg-[#262626]"
                  : "h-1.5 w-[2px] bg-[#d4d4d4]"
              }`}
              style={{ marginTop: "-44px" }}
            />
          </div>
        ))}

        {/* Center dot */}
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#009965] shadow-[0_0_8px_rgba(0,153,101,0.5)]" />

        {/* Hour hand */}
        <div
          className="absolute left-1/2 top-1/2 origin-bottom"
          style={{
            animation: "syncClockHour 8s linear infinite",
            width: "3px",
            height: "24px",
            marginLeft: "-1.5px",
            marginTop: "-24px",
            borderRadius: "2px",
            backgroundColor: "#262626",
          }}
        />

        {/* Minute hand */}
        <div
          className="absolute left-1/2 top-1/2 origin-bottom"
          style={{
            animation: "syncClockMinute 2s linear infinite",
            width: "2px",
            height: "32px",
            marginLeft: "-1px",
            marginTop: "-32px",
            borderRadius: "2px",
            backgroundColor: "#009965",
          }}
        />

        {/* Second hand */}
        <div
          className="absolute left-1/2 top-1/2 origin-bottom"
          style={{
            animation: "syncClockSecond 1s linear infinite",
            width: "1px",
            height: "36px",
            marginLeft: "-0.5px",
            marginTop: "-36px",
            backgroundColor: "#ee4444",
          }}
        />
      </div>

      <style>{`
        @keyframes syncClockHour {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes syncClockMinute {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes syncClockSecond {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

function LoadingDots() {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-[#009965]"
          style={{
            animation: "syncDotPulse 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes syncDotPulse {
          0%, 80%, 100% { opacity: 0.15; transform: scale(0.7); }
          40% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </div>
  )
}
