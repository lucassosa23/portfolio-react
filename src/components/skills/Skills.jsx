import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import "./skills.css"

const Skills = () => {
  return (
 
   <div className='skills__section container' id="skills">
      <h1 className="skills-title">
        Skills
      </h1>
      <span className='skills-subtitle'> Nivel Tecnico</span>
      <div className='skills__container container grid '>

      <Frontend/>

      <Backend/>

      </div>
     
    </div>
  )
}

export default Skills