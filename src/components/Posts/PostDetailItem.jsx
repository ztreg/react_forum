import React from 'react'
import ReactMarkdown from 'react-markdown';
import calculator from '../../data/calculator';
import { StyledDetailsItem, StyledSingleItem } from '../../theme/StyledListComponents';
import PostRepliesList from './PostReplies';

export default function PostDetailItem(props) {
  const {detailItem } = props

  let fullName;
  let country;
  let authorEmail = ''
  console.log(detailItem);
  if(detailItem.author){
    const {firstName, lastName, email} = detailItem.author 
    authorEmail = email
    fullName = firstName.concat(' ' + lastName) 
    country = calculator.displayCountry(detailItem.author.country)
  }
  return (
    <>
      <StyledDetailsItem>
        <p>This article has {detailItem.countResponses} replies</p>
        <h2><ReactMarkdown source={detailItem.title} allowDangerousHtml /></h2>
        <ReactMarkdown className="content" source={detailItem.content} allowDangerousHtml />
        
        <div className="postInfo">
          <p>{detailItem.createdAt}</p>
          <p> {!detailItem.author ? 'No author given' : 'Written by: ' + fullName} from {country && country}</p>  
          <p>{authorEmail ? 'Contact Author : ' + authorEmail: 'No email given'}</p>

          <p>This Article was created at {detailItem.createdAt}</p>
          <p>{Date.parse(detailItem.createdAt)}</p>
          <p>This Article was updated at {detailItem.updatedAt}</p>
          <p>This Article has {detailItem.countResponses} reponses.</p>

          <p>This article is {!detailItem.isClosed ? 'open' : 'closed'}</p>
          <p>You are {detailItem.userSubscribed ? 'Subscribed' : 'Not subscribed' } to this article.</p>
          <p>Viewcount on article: {detailItem.viewCount}</p>
        </div>
        
      </StyledDetailsItem>
      <PostRepliesList postID={detailItem.id}/>
    </>
  )
}
