import React, { useEffect, useState } from 'react'

export default function Teams({ apiBase }) {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${apiBase}/teams`)
      const json = await res.json()
      setTeams(Array.isArray(json) ? json : json.data || [])
    }
    load()
  }, [apiBase])

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
