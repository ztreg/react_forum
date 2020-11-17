import React from 'react'
import { Link } from 'react-router-dom'
import userKit from '../../data/userKit'
import { StyledNavBar } from '../../theme/StyledComponents'
import UserInfo from '../UserInfo/UserInfo'



export default function Navbar() {
  const UserKit = new userKit()
  return (
    <StyledNavBar>
      <Link to="/">Home</Link>
      {UserKit.checkToken() && (
        <>
          <Link to="/posts/create">Create Post</Link>
          <Link to="/posts">Posts</Link>
        </>
      )}
      {!UserKit.checkToken() && (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
  
      
      <UserInfo />
    </StyledNavBar>
  )
}
