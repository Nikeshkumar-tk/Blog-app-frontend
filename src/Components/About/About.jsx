import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
      <section className='section-one'>
        <div className="sectionone-inner">
          <a href='#aboutus'>
            
            <h4 className='about-us'>
            About us
          </h4>
            </a>
            <a href='#contribute'>

          <h4 className='contribute'>
            Contribute
          </h4>
            </a>
            <a  href='#contactus'>

          <h4 className='contact'>
            contact us
          </h4>
            </a>
           
        </div>
       

      </section>
      <section className='section-two' id='aboutus'>
        <h3>About us</h3><span className='u-span'></span>
       <div className='about-text-wrap'><h4 className='about-text'>We provide a platform for sharing ideas related to information technology of different innovative minds from different parts of the world.We are diverse as ideas our users share.Our website is provided with all essential features that eases your way in sharing and seeking ideas.Anyone can have ideas.We want you to have the power and support to get it online.Ideas are of no use if it is not shared with the right people and right place,this platform will be a great opportunity for those who have ideas in their mind and people who seek new ideas in the IT industry.At TechShare our vision is to democratize the art of sharing ideas.We provide a world-class platform to over 1 million users worldwide, empowering anyone to express themselves and build their online presence.</h4>
       </div> </section>
      <section className='section-three' id='contribute'>
        <h3>contribute</h3><span className='u-span-contribute'></span>
      <div className='contribute-text-wrap'> <h4>We are inviting awesome developers around the world to contribute to our code base</h4></div> 
      </section>
      <section className='section-four' id='contactus'>
        <h3>Contact Us</h3>
        <div className='icon-wrap'>

        <i className="contact-icon fa-solid fa-envelope email-icon"></i>
        <h5 className='email-add'>techshare2022@gmail.com</h5>
        <i className="contact-icon fa-brands fa-github github-icon" ></i>
        <h5 className='contribute-add'>contribute</h5>
        <h4 className='follow-us'>Follow us</h4>
        <span className='follow-u-span'></span>
        

        <i className="contact-icon fa-brands fa-facebook facebook-icon" ></i>
        <i className="contact-icon fa-brands fa-instagram instagram-icon"></i>
       
        </div>
      </section>
      </div>
      
  )
}

export default About