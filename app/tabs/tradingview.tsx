// Tile-based layout for TradingView charts tab
import React from "react";

export default function tradingview() {
  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      <div className="bg-white rounded-2xl shadow-xl p-4 hover:scale-105 transition">Tile 1</div>
      <div className="bg-white rounded-2xl shadow-xl p-4 hover:scale-105 transition">Tile 2</div>
      <div className="bg-white rounded-2xl shadow-xl p-4 hover:scale-105 transition">Tile 3</div>
      <div className="bg-white rounded-2xl shadow-xl p-4 hover:scale-105 transition">Tile 4</div>
    </div>
  );
}