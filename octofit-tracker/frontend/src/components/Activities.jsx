import React, { useEffect, useState } from 'react'

const CODESPACE = import.meta.env.VITE_CODESPACE_NAME;
const API_BASE = CODESPACE ? `https://${CODESPACE}-8000.app.github.dev/api` : 'http://localhost:8000/api';

export default function Activities() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_BASE}/activities/?page=${page}`)
      const json = await res.json()
      // support both paginated {data: [], meta: {}} and plain array
      setData(Array.isArray(json) ? json : json.data || [])
    }
    fetchData()
  }, [page])

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {data.map((a) => (
          <li key={a._id || a.id}>{a.type} — {a.durationMinutes} min</li>
        ))}
      </ul>
      <button onClick={() => setPage((p) => Math.max(1, p - 1))}>Prev</button>
      <button onClick={() => setPage((p) => p + 1)}>Next</button>
    </div>
  )
}
