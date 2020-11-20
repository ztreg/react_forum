import React from 'react'
import { StyledList } from '../../theme/StyledListComponents'
import PostListItem from './PostListItem'

export default function PostList(props) {
  
  return (
    <StyledList>
      <h4> Our Latest News</h4>
      {props.postData &&
        props.postData.map((post, index) => {
          return(
            <PostListItem key={index} post={post}/>
          )
        })
      }
    </StyledList>
  )
}
