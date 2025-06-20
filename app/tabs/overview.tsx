"use client"
import { useRouter } from "next/navigation"

export default function Overview() {
  const router = useRouter()
  const tiles = [
    { label: "Markets", href: "/tabs/markets" },
    { label: "AI Coach", href: "/tabs/ai-coach" },
    { label: "TradingView", href: "/tabs/tradingview" },
    { label: "Gmail Digest", href: "/tabs/gmail-email" },
    { label: "Risk Strategy", href: "/tabs/risk-ai-strategy" },
    { label: "Airdrops", href: "/tabs/airdrops" },
    { label: "ETF Screener", href: "/tabs/etf-screener" },
  ]

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {tiles.map((tile) => (
        <div
          key={tile.href}
          className="p-6 rounded-2xl shadow bg-white/10 hover:bg-purple-600 cursor-pointer transition-all"
          onClick={() => router.push(tile.href)}
        >
          <h2 className="text-xl font-bold">{tile.label}</h2>
        </div>
      ))}
    </div>
  )
}