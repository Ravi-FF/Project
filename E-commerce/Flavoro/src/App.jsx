import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Success from './Pages/Success'
export default function App() {
  return (
    <div className='py-3 px-5'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='Success' element={<Success />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
