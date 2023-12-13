import React from 'react'
import CV from "../../assets/CV.pdf"
import "./about.css"


export const About = () => {
  return (
    <div className='about-sectione' id="about">
    <div className='about-section container'>
      <h1 className='about-title'>
        About
      </h1>
      <span className='about-subtitle'> Mi introduccion</span>
     
     

     
      <div className='about-data'>
 
      <p className='about-parrafo'>
      Actualmente, estoy cursando la Tecnicatura en Desarrollo Web en la Universidad De La Matanza. Poseo habilidades en el versionado de proyectos, utilizando Git y GitHub, así como experiencia en el diseño con Figma y la gestión de proyectos a través de Trello. Me destaco por ser una persona responsable, creativa y dinámica, con una energía enérgica y la capacidad para enfrentar desafíos. Disfruto colaborar en equipo y tengo un enfoque autodidacta en mi proceso de aprendizaje.
        </p>
      <a  download="" href={CV} className='button button--flex'> Descargar CV</a>
      </div>
    </div>
    </div>
  )
}
