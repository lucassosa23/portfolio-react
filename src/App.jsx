
import React from 'react'
import { Navbar } from './components/navbar/NavBar'
import { CenteredText } from './components/CenteredText'
import "./App.css"
import { TextWithImage } from './components/TextWithImage'
import Skills from './components/skills/Skills'









export default function App () {
  return (
 
    <div className='root'>
      <Navbar/>
      <TextWithImage/>
      <CenteredText/>
      <Skills/>
    
    </div>


  )
}


