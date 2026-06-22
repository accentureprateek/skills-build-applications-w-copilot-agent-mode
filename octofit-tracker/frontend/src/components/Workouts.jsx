import React, { useEffect, useState } from 'react'

const CODESPACE = import.meta.env.VITE_CODESPACE_NAME;
const API_BASE = CODESPACE ? `https://${CODESPACE}-8000.app.github.dev/api` : 'http://localhost:8000/api';

export default function Workouts() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${API_BASE}/workouts/`)
      const json = await res.json()
      setItems(Array.isArray(json) ? json : json.data || [])
    }
    load()
  }, [])

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
