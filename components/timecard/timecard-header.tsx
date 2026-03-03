import {
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const boldCols = ["Day", "Date", "TOTAL", "REG", "OT1", "OT2", "OT3", "VAC", "HOL", "SIC", "PER", "PBR", "UBR"]

export function TimecardHeader() {
  return (
    <TableHeader>
      <TableRow className="border-b-2 border-[#efefef] bg-white hover:bg-white">
        {boldCols.map((col) => (
          <TableHead
            key={col}
            className="py-5 pl-6 pr-2 text-sm font-bold text-[#262626] whitespace-nowrap"
          >
            {col}
          </TableHead>
        ))}
        <TableHead className="py-5 pl-6 pr-2 text-sm font-semibold text-[#24b353] whitespace-nowrap">
          IN
        </TableHead>
        <TableHead className="py-5 pl-6 pr-6 text-sm font-semibold text-[#ff130d] whitespace-nowrap">
          OUT
        </TableHead>
      </TableRow>
    </TableHeader>
  )
}
