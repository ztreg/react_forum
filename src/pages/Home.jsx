import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { StyledHero, StyledHomePage } from '../theme/StyledComponents'
import image from '../heroImages/img3.jpg'
import { HomePageContent } from '../theme/StyledListComponents'
import userKit from '../data/userKit'
export default function Home(props) {
  const UserKit = new userKit()
  return (
    <>
    <StyledHero image={image}>HOME</StyledHero>
      <StyledHomePage>
        <h1><FaUserFriends /> Welcome to the forum of free speech <FaUserFriends /></h1>
        {UserKit.checkToken() && (
            <div>
            <h2>Now that you are signed up, here are things you can do: </h2>
              <p>Check out all posts in Posts section</p>
              <p>Create posts in the Create Post section</p>
              <p>Reply to posts when reading them</p>
              <h4>"10/10 a masterpiece" - IGN</h4>
            </div>
          )}
          {!UserKit.checkToken() && (
            <div>
            <h2>To View and create posts you need to be signed up</h2>
              <h3>Not convinced?</h3>
              <h2>Ever felt like you don't get your voice heard? Like you mean nothing?</h2>
              <h1>Neither have I, therefore we're alike and I love this site. Go signup now</h1>
            </div>
          )}

      </StyledHomePage>
  </>
  )
}
