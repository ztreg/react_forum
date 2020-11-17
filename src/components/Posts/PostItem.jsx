import React from 'react'
import { Link } from 'react-router-dom'
import { StyledItem } from '../../theme/StyledListComponents'

export default function PostItem(props) {
  return (
    <StyledItem>
      {props.post && (
      <>
        <h3>Title: {props.post.title}</h3>
        <p>Content: {props.post.content}</p>
        <p>Country: {props.post.country}</p>
        <p>CreatedAt: {props.post.createdAt}</p> 
        <p>Author: {props.post.author === null ? 'No author given' : props.post.author.firstName}</p>  
        <p>Replies: {props.post.countResponses}</p>
        <Link to={`/posts/${props.post.id}`}>View post</Link>
      </>
      )}
    </StyledItem>
  )
}
