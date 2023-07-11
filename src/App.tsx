// import { useState } from 'react'
import './App.css';
import router from "./router"
import {
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <div className='w-full h-full flex flex-col'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
