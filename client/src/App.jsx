import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes, Navigate } from 'react-router-dom'
import DashbordLayout from './pages/dashbordLayout'
import Dashboard from './pages/Dashboard'
import Kunden from './pages/Kunden'
import Menu2 from './pages/Menu2'
import Menu3 from './pages/Menu3'

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Navigate to="/dashbord/dashboard" replace />} />
        <Route path="/dashbord" element={<DashbordLayout />}>
          <Route index element={<Navigate to="/dashbord/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="kunden" element={<Kunden />} />
          <Route path="menu2" element={<Menu2 />} />
          <Route path="menu3" element={<Menu3 />} />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
