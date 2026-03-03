"use client"

import { PageLoader } from "@/components/shared/page-loader"
import { TimecardTable } from "@/components/timecard/timecard-table"
import { TimecardToolbar } from "@/components/timecard/timecard-toolbar"
import { useDateRange } from "@/hooks/use-date-range"
import { mockTimecards } from "@/lib/mock/timecards"

export default function MyTimecardPage() {
  const { range, setRange } = useDateRange()
  const timecard = mockTimecards[0]

  return (
    <PageLoader>
    <div className="animate-in fade-in duration-500 pb-16 pt-16">
      <div className="mx-auto max-w-[1440px] px-10">
        {/* Page title */}
        <h1 className="text-center text-[40.7px] font-bold leading-[52.8px] text-[#262626]">
          Your Time Card
        </h1>

        {/* Toolbar */}
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100 mt-10">
          <TimecardToolbar range={range} onRangeChange={setRange} />
        </div>

        {/* Table */}
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-150 mt-8 overflow-x-auto rounded-[6.4px] shadow-[0px_8px_12px_0px_rgba(0,0,0,0.05)]">
          <TimecardTable timecard={timecard} />
        </div>
      </div>
    </div>
    </PageLoader>
  )
}
