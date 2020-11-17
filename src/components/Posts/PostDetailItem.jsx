import React from 'react'
import { StyledSingleItem } from '../../theme/StyledListComponents';

export default function PostDetailItem(props) {
  const {detailItem} = props
  console.log(detailItem);


  return (
    <StyledSingleItem>
      <h2>{detailItem.title}</h2>
      <p>{detailItem.content}</p>
      <p>{detailItem.content}</p>
      <p>{detailItem.content}</p>
      <p>{detailItem.content}</p>
      <p>{detailItem.content}</p>
    </StyledSingleItem>
  )
}
