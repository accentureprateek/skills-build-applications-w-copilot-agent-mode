import React, { useEffect, useState } from 'react'

const CODESPACE = import.meta.env.VITE_CODESPACE_NAME;
const API_BASE = CODESPACE ? `https://${CODESPACE}-8000.app.github.dev/api` : 'http://localhost:8000/api';

export default function Teams() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${API_BASE}/teams/`)
      const json = await res.json()
      setTeams(Array.isArray(json) ? json : json.data || [])
    }
    load()
  }, [])

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map((t) => (
          <li key={t.id || t._id}>{t.name}</li>
        ))}
      </ul>
    </div>
  )
}
