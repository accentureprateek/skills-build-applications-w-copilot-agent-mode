import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'

const CODESPACE = import.meta.env.VITE_CODESPACE_NAME;
const API_BASE = CODESPACE ? `https://${CODESPACE}-8000.app.github.dev/api` : 'http://localhost:8000/api';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/activities">Activities</Link> | <Link to="/leaderboard">Leaderboard</Link> | <Link to="/teams">Teams</Link> | <Link to="/users">Users</Link> | <Link to="/workouts">Workouts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<div>Welcome to OctoFit Tracker</div>} />
        <Route path="/activities" element={<Activities apiBase={API_BASE} />} />
        <Route path="/leaderboard" element={<Leaderboard apiBase={API_BASE} />} />
        <Route path="/teams" element={<Teams apiBase={API_BASE} />} />
        <Route path="/users" element={<Users apiBase={API_BASE} />} />
        <Route path="/workouts" element={<Workouts apiBase={API_BASE} />} />
      </Routes>

      <footer>
        <p>API: {API_BASE}</p>
        <small>Define VITE_CODESPACE_NAME in .env.local if running in Codespaces to build the Codespaces API URL.</small>
      </footer>
    </div>
  )
}
