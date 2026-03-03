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
    title: "Product",
    links: ["Time Clock", "My Timecard", "Who's In", "Excel Export"],
  },
  {
    title: "Support",
    links: ["Help Center", "FAQ", "Contact Us"],
  },
  {
    title: "Company",
    links: ["About SyncLog", "Privacy Policy", "Terms of Service"],
  },
  {
    title: "Resources",
    links: ["Setup Guide", "System Status", "Accessibility"],
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

export function Footer() {
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
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="block cursor-pointer py-[5px] text-[15px] text-[#686868] transition-colors duration-150 hover:text-[#009965]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
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
