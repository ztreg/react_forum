import React from 'react'
import { StyledList } from '../../theme/StyledListComponents'
import PostListItem from './PostListItem'

export default function PostList(props) {
  
  return (
    <StyledList>
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
