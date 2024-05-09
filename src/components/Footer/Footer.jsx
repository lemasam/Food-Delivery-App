import React from 'react'
import './Footer.css'
import { assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'></div>
        <img src= {assets.logo} alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam doloremque ducimus eos dolores magni amet obcaecati voluptatibus, incidunt aut reprehenderit nemo cumque consectetur, a distinctio quia, quam qui? Nihil.</p>
         <div className="footer-social-icon">
          <img scr={assets.facebook_icon} alt=""/>
          <img src={assets.twitter_icon} alt=""/>
          <img src={assets.linkedin_icon} alt=""/>
         </div>
      </div>
      <div className="footer-content-center">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy POlicy</li>
        </ul>

      </div>

          
</div>
    
  )
}

export default Footer