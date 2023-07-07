// import { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Header from './components/layout/headerComponents/header';
import Profile from './pages/profile/profile';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import { UserContextProvider } from './components/context/userContext';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import Project from './pages/project';
import Balance from './pages/balance';
import EditProfile from './pages/profile/editprofile';

function App() {
  const [token, setToken] = useState(undefined);
  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get('token')) {
      setToken(cookies.get('token'));
    }
  }, []);
  return (
    <div className='w-full h-full flex flex-col'>
      <UserContextProvider token={token}>
        <Header />
        <Routes>
          <Route path="/project/:id" element={<Project />} />
          <Route path="/balance" element={<Balance />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path={'*'} element={<Home />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
