
import React from 'react'
import { Navbar } from './components/navbar/NavBar'
import { CenteredText } from './components/CenteredText'
import "./App.css"
import { TextWithImage } from './components/TextWithImage'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'









export default function App () {
  return (
 
    <div className='root'>
      <Navbar/>
      <TextWithImage/>
      <CenteredText/>
      <Skills/>
      <Contact/>
      <Footer/>
    
    </div>


  )
}


