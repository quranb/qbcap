'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to Overview tab by default
    router.replace('/tabs/overview')
  }, [router])

  return <p className="p-6 text-white">Redirecting...</p>
}
