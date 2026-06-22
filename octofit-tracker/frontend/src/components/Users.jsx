import React, { useEffect, useState } from 'react'

const CODESPACE = import.meta.env.VITE_CODESPACE_NAME;
const API_BASE = CODESPACE ? `https://${CODESPACE}-8000.app.github.dev/api` : 'http://localhost:8000/api';

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${API_BASE}/users/`)
      const json = await res.json()
      setUsers(Array.isArray(json) ? json : json.data || [])
    }
    load()
  }, [])

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id || u._id}>{u.name}</li>
        ))}
      </ul>
    </div>
  )
}
