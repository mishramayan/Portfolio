import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr' 

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/mayan-kumar-mishra-24085a122/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com" target="_blank"><BsGithub /></a>
      <a href="https://facebook.com" target="_blank"><GrFacebook /></a>
    </div>
  )
}

export default HeaderSocials
