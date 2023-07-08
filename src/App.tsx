// import { useState } from 'react'
import './App.css';
import router from "./router"
import { UserContextProvider } from './context/userContext';
import {
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <UserContextProvider>
      <div className='w-full h-full flex flex-col'>
        <RouterProvider router={router} />
      </div>
    </UserContextProvider>
  );
}

export default App;
