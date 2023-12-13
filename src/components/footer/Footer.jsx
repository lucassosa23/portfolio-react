import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer_container container'>
            <h1 className='footer__title'>Lucas</h1>
        <ul className='footer__list'>
            <li>
                <a href="#about" className='footer__link'>About</a>
            </li>

            <li>
                <a href="#skills" className='footer__link'>Skills</a>
            </li>

        </ul>
        <div className='footer__social'>
        <div className='home__social'>
    <a href='https://www.instagram.com/lucassosa4/' className='home__social-link' target="_blank" rel='noreferrer'>
        <i className="uil uil-instagram"></i>
    </a>

    <a href='https://github.com/lucassosa23' className='home__social-link' target="_blank" rel='noreferrer'>
    <i className="uil uil-github-alt"></i>
</a>    

<a href='https://www.linkedin.com/in/lucas-sosa-b66165233/' className='home__social-link' target="_blank" rel='noreferrer'>   
<i className="uil uil-dribbble"></i>
</a>
</div>
<span className='footer__copy'>
    &#169; Lucassosa4. All right reserved
</span>
        </div>
        </div>
    </footer>
  )
}

export default Footer