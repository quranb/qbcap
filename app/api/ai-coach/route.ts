import { NextResponse } from "next/server"

export async function POST(req) {
  const { query } = await req.json()
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: query }],
      temperature: 0.7
    })
  })

  const data = await res.json()
  return NextResponse.json({ answer: data.choices?.[0]?.message?.content || "No response from AI." })
}