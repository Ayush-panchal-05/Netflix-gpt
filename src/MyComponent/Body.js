import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'

const Body = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/browse" element={<Browse/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Body
