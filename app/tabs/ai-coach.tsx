"use client"
import { useState } from "react"

export default function AICoach() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")

  const handleAsk = async () => {
    const res = await fetch("/api/ai-coach", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: input })
    })
    const data = await res.json()
    setResponse(data.answer)
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">🧠 AI Coach</h1>
      <input
        type="text"
        className="bg-black border border-white/10 px-4 py-2 w-full rounded-xl"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask your AI Coach something..."
      />
      <button onClick={handleAsk} className="mt-4 bg-purple-700 px-4 py-2 rounded-xl hover:bg-purple-800">
        Ask Coach
      </button>
      {response && <div className="mt-6 p-4 rounded-xl bg-white/10">{response}</div>}
    </div>
  )
}