import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App