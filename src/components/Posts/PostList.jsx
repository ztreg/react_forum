import React from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { StyledPrimaryButton } from '../../theme/StyledComponents'
import { StyledList } from '../../theme/StyledListComponents'
import PostListItem from './PostListItem'

export default function PostList(props) {

  return (
    <StyledList>
      <div>
        {props.previousPage && (
          <StyledPrimaryButton onClick={props.onClickPreviousHandlePages}> <FaArrowCircleLeft /> Previous Page</StyledPrimaryButton>
        )}
        {props.nextPage && (
          <StyledPrimaryButton onClick={props.onClickNextHandlePages}>Next Page  <FaArrowCircleRight /></StyledPrimaryButton>
        )}
      </div>

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
