import React from 'react'
import "./MainSection.css"

function Footer() {
  return (
   <>
   <section className='footer'>
    <h1>sunnyside</h1>
    <div className="link">
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Projects</a>
    </div>
    <div className='social-links'>
      <img src="./src/assets/images/icon-facebook.svg" alt="icon-facebook" />
      <img src="./src/assets/images/icon-instagram.svg" alt="icon-instagram" />
      <img src="./src/assets/images/icon-pinterest.svg" alt="icon-pinterest" />
      <img src="./src/assets/images/icon-twitter.svg" alt="icon-twitter" />
    </div>

   </section>
   </>
  )
}

export default Footer
