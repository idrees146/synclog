import Image from "next/image"
import {
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
  Hash,
} from "lucide-react"

const footerColumns = [
  {
    title: "Features",
    links: [
      "Online Time Clock",
      "Mobile Time Clock",
      "Payroll",
      "GPS",
      "Time Off Tracking (PTO)",
      "Shift Scheduling",
      "Payroll Integrations",
    ],
  },
  {
    title: "Our Company",
    links: [
      { text: "Call (888)-753-5999", bold: true },
      "19176 Hall Road, Suite #260,",
      "Clinton Township, MI 48038",
      "Careers",
      "Meet Us",
      "Blog",
      "Philanthropy",
    ],
  },
  {
    title: "Customers",
    links: [
      "Customer Reviews",
      "Customer Success Stories",
      "Help Topics",
      "FAQ",
      "Helpful Videos",
      "Uptime Reports",
    ],
  },
  {
    title: "Free Resources",
    links: [
      "Free TimeCard Calculator",
      "Decimal Hours Converter",
      "Time Duration Calculator",
      "Excel Timesheet Calculator",
      "Free Timesheet / Time Card Template",
      "United States Business Holidays",
      "More Free Tools",
    ],
  },
]

const socialIcons = [
  { icon: Hash, label: "TikTok" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "X / Twitter" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
  { icon: Mail, label: "Email" },
]

export function AdminFooter() {
  return (
    <footer className="border-t border-[#efefef] bg-white">
      {/* 4-column links grid */}
      <div className="mx-auto max-w-[1440px] px-[44.5px] pt-20 pb-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[18.6px] font-semibold text-[#262626]">
                {col.title}
              </h3>
              <ul className="mt-8 space-y-0">
                {col.links.map((link) => {
                  const text = typeof link === "string" ? link : link.text
                  const isBold = typeof link === "object" && link.bold
                  return (
                    <li key={text}>
                      <a
                        href="#"
                        className={`block cursor-pointer py-[5px] text-[15px] transition-colors duration-150 hover:text-[#009965] ${
                          isBold
                            ? "font-semibold text-[#262626] underline"
                            : "text-[#686868]"
                        }`}
                      >
                        {text}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social media section */}
      <div className="border-t border-[#ddd] py-12">
        <p className="text-center text-[18.6px] font-semibold text-[#262626]">
          Join us on Social Media
        </p>
        <p className="mt-1 text-center text-[14.9px] text-[#515151]">
          {"We'd love to hear from you"}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          {socialIcons.map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-2 border-[#aaa] text-[#515151] transition-all duration-200 hover:border-[#009965] hover:text-[#009965] hover:scale-110 active:scale-95"
            >
              <Icon className="h-[17px] w-[17px]" />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#f7f7f7] px-[44.5px] py-7">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-1 text-[15.9px] text-[#262626]">
            <span>© {new Date().getFullYear()}</span>
            <span className="ml-1 flex items-center gap-1">
              <Image src="/logo.png" alt="SyncLog" width={18} height={18} />
              SyncLog
            </span>
          </div>
          <span className="text-[14px] text-[#686868]">
            Made with ❤️ in Michigan
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="cursor-pointer text-[14.6px] text-[#686868] transition-colors duration-150 hover:text-[#009965]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="cursor-pointer text-[14.8px] text-[#686868] transition-colors duration-150 hover:text-[#009965]"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
