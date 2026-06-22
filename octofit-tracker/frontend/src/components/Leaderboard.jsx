import React, { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export default function Leaderboard() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${API_BASE}/leaderboard/`)
      const json = await res.json()
      setItems(Array.isArray(json) ? json : json.data || [])
    }
    load()
  }, [])

  return (
    <div>
      <h2>Leaderboard</h2>
      <ol>
        {items.map((it) => (
          <li key={it.id || it._id}>{it.name} — {it.score}</li>
        ))}
      </ol>
    </div>
  )
}
