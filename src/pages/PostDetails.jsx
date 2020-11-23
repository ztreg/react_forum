import React from 'react'
import PostDetail from '../components/Posts/PostDetail'
import { StyledHero } from '../theme/StyledComponents'
import image from '../heroImages/img3.jpg'
export default function PostDetails(props) {

  const postID = props.match.params.id

  return (
    <div>
      <StyledHero image={image}> DETAILS </StyledHero>
        <PostDetail postID={postID} />
    </div>
  )
}
