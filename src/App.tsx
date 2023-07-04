// import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Profile from './pages/profile'
import Header from './components/layout/headerComponents/header';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import { UserContextProvider } from './components/context/userContext';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

function App() {
  const [token, setToken] = useState(undefined)
  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get('token')) {
      setToken(cookies.get('token'))
    }
  }, [])
  return (
    <div className='w-full h-full flex flex-col'>
      <UserContextProvider token={token}>
        <Header />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path={"*"} element={<Home />} />
        </Routes>
      </UserContextProvider>
    </div>
  )
}

export default App
