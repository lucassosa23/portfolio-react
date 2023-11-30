
import 'animate.css';
import image from "../assets/image.jpg"


import { Data } from './home/Data';
//import Social from './home/Social';

export function TextWithImage(props) {
        return(
            <section className="home-section">
            <div className='home-container container grid'>
            <div className='home-content grid'>
            <div className='home-img animate__zoomInDown animate__animated animate__bounce'> <img src={image} alt='esta es la imagen'></img></div>
            
            
          
            <Data/>
            
          </div>
          </div>
          </section>
        )
}