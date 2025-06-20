
'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const tiles = [
  { title: "Markets", href: "/tabs/markets", icon: "📊" },
  { title: "AI Hub", href: "/tabs/ai-coach", icon: "🧠" },
  { title: "TradingView", href: "/tabs/tradingview", icon: "📈" },
  { title: "ETF Screener", href: "/tabs/etf-screener", icon: "🧾" },
  { title: "Airdrops", href: "/tabs/airdrops", icon: "🪂" },
  { title: "Risk Strategy", href: "/tabs/risk-ai-strategy", icon: "⚠️" },
  { title: "Gmail Digest", href: "/tabs/gmail-email", icon: "📥" },
]

export default function Overview() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6 text-white">
      <h1 className="text-4xl font-bold mb-6">📊 Dashboard Overview</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {tiles.map((tile) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={tile.title}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 cursor-pointer shadow-xl hover:shadow-2xl"
            onClick={() => router.push(tile.href)}
          >
            <div className="text-4xl mb-3">{tile.icon}</div>
            <div className="text-xl font-semibold">{tile.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
