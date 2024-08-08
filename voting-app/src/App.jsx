import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Button } from './components/ui/button'
import { TypographyDemo } from './components/ui/typography'
import SidebarMenu from './components/ui/sidebar'
import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import ManageElections from './pages/manage_elections'
import Profile from './pages/profile'
import Login from './pages/login'
import Results from './pages/results'
import CastVote from './pages/cast_vote'

function App() {

  return (
    
    <Router>
    <div className="flex bg-black-">
      <SidebarMenu />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage_elections" element={<ManageElections />} />
          <Route path="/results" element={<Results />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cast_vote" element={<CastVote />} />
          <Route path="/login" element={<Login  />} />
        </Routes>
      </div>
    </div>
  </Router>

   
    
  )
}

export default App
