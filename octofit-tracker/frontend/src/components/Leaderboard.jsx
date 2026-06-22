import React, { useEffect, useState } from 'react'

export default function Leaderboard({ apiBase }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${apiBase}/leaderboard`)
      const json = await res.json()
      setItems(Array.isArray(json) ? json : json.data || [])
    }
    load()
  }, [apiBase])

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
