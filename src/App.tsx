// import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Profile from './pages/profile'

function App() {
  return (
    <>

      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path={"*"} element={<Home />} />
      </Routes>
    </>
  )
}

export default App
