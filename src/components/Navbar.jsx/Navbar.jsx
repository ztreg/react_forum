import React from 'react'
import { Link } from 'react-router-dom'
import userKit from '../../data/userKit'
import { StyledNavBar } from '../../theme/StyledComponents'
import UserInfo from '../UserInfo/UserInfo'
import { FaHome, FaListUl, FaNewspaper } from 'react-icons/fa';

export default function Navbar() {
  const UserKit = new userKit()
  return (
    <StyledNavBar>
      <Link to="/"><FaHome /> Home</Link>
      {UserKit.checkToken() && (
        <>
          <Link to="/posts/create"><FaNewspaper/> Create Post</Link>
          <Link to="/posts"><FaListUl /> Posts</Link>
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
