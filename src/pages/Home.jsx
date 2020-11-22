import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { StyledHero, StyledHomePage } from '../theme/StyledComponents'
import image from '../heroImages/img3.jpg'
export default function Home(props) {
  return (
    <>
    <StyledHero image={image}>HOME</StyledHero>
      <StyledHomePage>
        <h1><FaUserFriends /> Welcome to the forum of free speech</h1>
        <div className="">

          <h2>Try out our functions today</h2>
          <div>
            <p>thing 1</p>
            <p>thing 2</p>
            <p>thing 3</p>
          </div>
        </div>
      </StyledHomePage>
  </>
  )
}
