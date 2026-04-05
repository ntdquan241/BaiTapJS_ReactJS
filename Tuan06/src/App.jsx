import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import DashBoard from './components/DashBoard'
import UserProfile from './components/UserProfile'

function App() {

  return (
    <>
    <nav>
      <Link to="/">Home/</Link>
      <Link to="/contact">Contact/</Link>
      <Link to="/about">About/</Link>
      <Link to="/dashboard">DashBoard/</Link>

    </nav>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/contact' element = {<Contact/>}></Route>
      <Route path='/about' element = {<About/>}></Route>
      <Route path='/dashboard' element = {<DashBoard/>}>
              <Route path='profile' element = {<UserProfile/>}></Route>
      </Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
