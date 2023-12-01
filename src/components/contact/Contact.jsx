import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
  
    <section className='contact section' id="contact">
    <h1 className='section__title'>
    Contact
   </h1>
   <span className='section__subtitle'> My introduction</span>
    <div className='contact__container container grid'>
     <div className='contact__content'>
     <h3 className='contact__title'>Contactame</h3>
     

     <div className='contact__info'>
     <div className='contact__card'>
     <i className="contact__card-icon"></i>
     <h3 className='contact__card-title'>Email</h3>
     <span className='contact__card-data'>user@gmail.com</span>
     <a href="mailto:luucassosa4@gmail.com" className='contact__button'><i class="uis uis-angle-right-b contact__buton-icon"> Write me </i></a>
     </div>

     <div className='contact__info'>
     <div className='contact__card'>
     <i class="uis uis-apps"></i>
     <h3 className='contact__card-title'>Whatsapp</h3>
     <span className='contact__card-data'>112323232</span>
     <a href="/blank" className='contact__button'> Write me <i class="uis uis-corner-down-left contact__button-icon"></i></a>
     </div>

     <div className='contact__info'>
     <div className='contact__card'>
     <i class="uis uis-apps"></i>
     <h3 className='contact__card-title'>Github</h3>
     <span className='contact__card-data'>lucassosa23</span>
     <a href="/blank" className='contact__button'> Write me <i class="uis uis-corner-down-left contact__button-icon"></i></a>
     </div>

     </div>

     <div className='contact__info'>
     <div className='contact__card'>
     <i class="uis uis-apps"></i>
     <h3 className='contact__card-title'>Linkedin</h3>
     <span className='contact__card-data'>lucassosa2</span>
     <a href="/blank" className='contact__button'> Write me <i class="uis uis-corner-down-left contact__button-icon"></i></a>
     </div>
     </div>

     <div className='contact__info'>
     <div className='contact__card'>
     <i class="uis uis-apps"></i>
     <h3 className='contact__card-title'>Instagram</h3>
     <span className='contact__card-data'>lucassosa4</span>
     <a href="/blank" className='contact__button'> Write me <i class="uis uis-corner-down-left contact__button-icon"></i></a>
     </div>
     </div>
     </div>
     </div>
     </div>
    
     <div className='contact__content'>
    <h3 className='contact__title'>Write your project</h3>
    <form className='contact__form'>
        <div className='contact__form-div'>
            <label className='contact__form-tag'>Name</label>
            <input type='text' name='name' className='contact__form-input' placeholder='Insert your name'/>
        </div>
 

   
        <div className='contact__form-div'>
            <label className='contact__form-tag'>Email</label>
            <input type='email' name='email' className='contact__form-input' placeholder='Insert your mail'/>
        </div>

        
        <div className='contact__form-div contact__form-area'>
            <label className='contact__form-tag'>Message</label>
            <textarea name='message' cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>
        </div>
        <button className='button button-flex'>Send message</button>
    </form>
     </div>
    </div>          
  </section>
  
    )
}

export default Contact