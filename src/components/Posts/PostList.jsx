import React from 'react'
import { StyledList } from '../../theme/StyledListComponents'
import PostItem from './PostItem'

export default function PostList(props) {
  
  return (
    <StyledList>
      {props.postData &&
        props.postData.map((post, index) => {
          return(
            <PostItem key={index} post={post}/>
          )
        })
      }
    </StyledList>
  )
}
