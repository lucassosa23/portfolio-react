import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

const Contact = () => {
  
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qpinx8q', 'template_r33n0ib', form.current, 'Xf4aP3CZ1yyvQ2zRe')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  
  
    return (
  
    <section className='contact section' id="contact">
    <h1 className='section__title'>
    Contact
   </h1>
   <span className='section__subtitle'> Comunicate</span>
    <div className='contact__container container grid'>
     <div className='contact__content'>
     <h3 className='contact__title'>Contactame</h3>
     

     <div className='contact__info'>
     <div className='contact__card'>
     <i className="contact__card-icon"></i>
     <h3 className='contact__card-title'>Email</h3>
     <span className='contact__card-data'>luucassosa4@gmail.com</span>
     <a href="mailto:luucassosa4@gmail.com" className='contact__button'><i className="uis uis-angle-right-b contact__buton-icon"> </i></a>
     </div>

     <div className='contact__info'>
     <div className='contact__card'>
     <i className="contact__card-icon"></i>
     <h3 className='contact__card-title'>Whatsapp</h3>
     <span className='contact__card-data'>1122530713</span>
     <a href="mailto:luucassosa4@gmail.com" className='contact__button'><i className="uis uis-angle-right-b contact__buton-icon"></i></a>
     </div>

     <div className='contact__info'>
     <div className='contact__card'>
     <h3 className='contact__card-title'>Github</h3>
     <span className='contact__card-data'>lucassosa23</span>
     <a href="https://github.com/lucassosa23" className='contact__button'> Write me <i className="uis uis-corner-down-left contact__button-icon"></i></a>
     </div>

     </div>

     <div className='contact__info'>
     <div className='contact__card'>
     <h3 className='contact__card-title'>Linkedin</h3>
     <span className='contact__card-data'>Lucas Sosa</span>
     <a href="https://www.linkedin.com/in/lucas-sosa-b66165233/ " className='contact__button'> Write me <i className="uis uis-corner-down-left contact__button-icon"></i></a>
     </div>
     </div>

     <div className='contact__info'>
     <div className='contact__card'>
     <h3 className='contact__card-title'>Instagram</h3>
     <span className='contact__card-data'>lucassosa4</span>
     <a href="https://www.instagram.com/lucassosa4/" className='contact__button'> Write me <i className="uis uis-corner-down-left contact__button-icon"></i></a>
     </div>
     </div>
     </div>
     </div>
     </div>
    
     <div className='contact__content'>
    <h3 className='contact__title'>Write your project</h3>
    <form className='contact__form' ref={form} onSubmit={sendEmail}>
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