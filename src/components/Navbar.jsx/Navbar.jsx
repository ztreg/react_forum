import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNavBar } from '../../theme/StyledComponents'
import UserInfo from '../UserInfo/UserInfo'



export default function Navbar() {
  return (
    <StyledNavBar>
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <UserInfo />
    </StyledNavBar>
  )
}
