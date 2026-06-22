import React, { useEffect, useState } from 'react'

export default function Users({ apiBase }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${apiBase}/users`)
      const json = await res.json()
      setUsers(Array.isArray(json) ? json : json.data || [])
    }
    load()
  }, [apiBase])

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
