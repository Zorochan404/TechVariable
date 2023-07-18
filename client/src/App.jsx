import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './assets/components/Login'
import Signup from './assets/components/Signup';

import './App.css'
import Home from './assets/components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
