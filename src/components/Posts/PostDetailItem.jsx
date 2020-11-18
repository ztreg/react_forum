import React from 'react'
import { StyledSingleItem } from '../../theme/StyledListComponents';
import PostRepliesList from './PostRepliesList';
import PostReply from './PostReply';

export default function PostDetailItem(props) {
  const {detailItem} = props
  console.log(detailItem);


  return (
    <>
    <StyledSingleItem>
      <h2>{detailItem.title}</h2>
      <p>{detailItem.content}</p>
      <p>{detailItem.country}</p>
      <p>{detailItem.createdAt}</p>
      <p>Author: {detailItem.author === null ? 'No author given' : detailItem.author.firstName}</p>  
      <p>{detailItem.countResponses}</p>
      
    </StyledSingleItem>
    <PostRepliesList postID={detailItem.id}/>
  
    </>
  )
}
