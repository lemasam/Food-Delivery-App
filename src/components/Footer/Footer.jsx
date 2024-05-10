import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <p>Embark on a gastronomic journey at our intimate eatery. Offering an eclectic menu brimming with delectable options, we strive to cater to every taste bud. Whether you crave traditional favorites or crave-worthy innovations, each dish is meticulously prepared to guarantee a memorable culinary escapade for all patrons.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+254 748 771 270 / 0703312080</li>
                <li>aloiceadriot@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Footer
