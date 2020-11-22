import React from 'react'
import MainLogin from '../components/Login/MainLogin'
import { StyledHero } from '../theme/StyledComponents'
import image from '../heroImages/img3.jpg'
export default function Login(props) {
  return (
    <div>
      <StyledHero image={image}> LOGIN</StyledHero>
      <MainLogin />
    </div>
  )
}
