"use client"
import { useEffect } from "react"

export default function TradingViewChart() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/tv.js"
    script.async = true
    script.onload = () => {
      new window.TradingView.widget({
        container_id: "tradingview",
        autosize: true,
        symbol: "NASDAQ:AAPL",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en"
      })
    }
    document.body.appendChild(script)
  }, [])

  return <div id="tradingview" className="h-[500px] w-full rounded-xl" />
}