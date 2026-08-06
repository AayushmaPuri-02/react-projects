import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Info from './components/Info.jsx'
import About from './components/About.jsx'
import Interests from './components/Interests.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className='head'>
    <div className="main">
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </div>
    
    </div>
  )
}


export default App
