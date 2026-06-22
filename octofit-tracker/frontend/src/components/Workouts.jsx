import React, { useEffect, useState } from 'react'

export default function Workouts({ apiBase }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${apiBase}/workouts`)
      const json = await res.json()
      setItems(Array.isArray(json) ? json : json.data || [])
    }
    load()
  }, [apiBase])

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {items.map((w) => (
          <li key={w.id || w._id}>{w.name}</li>
        ))}
      </ul>
    </div>
  )
}
