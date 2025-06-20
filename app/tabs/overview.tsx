
// QBCapital Overview Page (Styled)
// File: overview.tsx
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BarChart3, Bot, Brain, Radar, Activity } from 'lucide-react';

const tileData = [
  { title: 'Markets', icon: BarChart3, href: '/tabs/markets', color: 'bg-gradient-to-r from-blue-500 to-purple-600' },
  { title: 'AI Hub', icon: Brain, href: '/tabs/ai-coach', color: 'bg-gradient-to-r from-emerald-400 to-cyan-500' },
  { title: 'TradingView', icon: Radar, href: '/tabs/tradingview', color: 'bg-gradient-to-r from-yellow-400 to-orange-500' },
  { title: 'ETF Screener', icon: BarChart3, href: '/tabs/etf-screener', color: 'bg-gradient-to-r from-pink-500 to-red-600' },
  { title: 'Airdrops', icon: Activity, href: '/tabs/airdrops', color: 'bg-gradient-to-r from-teal-500 to-indigo-600' },
  { title: 'Risk Strategy', icon: Bot, href: '/tabs/risk-ai-strategy', color: 'bg-gradient-to-r from-lime-400 to-green-600' },
];

export default function Overview() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {tileData.map(({ title, icon: Icon, href, color }) => (
        <Link key={title} href={href}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`rounded-2xl p-5 text-white shadow-lg ${color} cursor-pointer transition duration-300`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon size={28} />
                <span className="text-xl font-semibold">{title}</span>
              </div>
              <ArrowRight />
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
