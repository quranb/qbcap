"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const tabs = [
  { name: "Overview", path: "/tabs/overview" },
  { name: "Markets", path: "/tabs/markets" },
  { name: "AI Coach", path: "/tabs/ai-coach" },
  { name: "TradingView", path: "/tabs/tradingview" },
  { name: "Gmail Digest", path: "/tabs/gmail-email" },
  { name: "Risk Strategy", path: "/tabs/risk-ai-strategy" },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <nav className="mb-6 flex flex-wrap gap-4">
        {tabs.map((tab) => (
          <Link key={tab.path} href={tab.path}>
            <span
              className={cn(
                "px-4 py-2 rounded-xl cursor-pointer transition-all",
                pathname === tab.path
                  ? "bg-purple-600 text-white shadow"
                  : "bg-white/10 hover:bg-white/20"
              )}
            >
              {tab.name}
            </span>
          </Link>
        ))}
      </nav>
      <main>{children}</main>
    </div>
  )
}
