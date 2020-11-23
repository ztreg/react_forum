import React from 'react'
import ReactMarkdown from 'react-markdown';
import calculator from '../../data/calculator';
import { StyledDetailsItem } from '../../theme/StyledListComponents';
import PostRepliesList from './PostReplies';
import TimeAgo from 'timeago-react';
import { FaCheck, FaCommentAlt, FaCross, FaRegEye } from 'react-icons/fa';

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
        <div className="topInfo">
          <span><FaRegEye /> {detailItem.viewCount}</span>
          <span><FaCommentAlt />: {detailItem.countResponses}</span>
        </div>
       
        <h2><ReactMarkdown source={detailItem.title} allowDangerousHtml /></h2>
        <p> {!detailItem.author ? 'No author given' : 'Written by: ' + fullName} from {country && country}</p>
        <p><ReactMarkdown className="content" source={detailItem.content} allowDangerousHtml /></p>
        
        <div className="postInfo"> 

          <p>This Article was created <TimeAgo 
            datetime={detailItem.createdAt}
            locale='sv-SV'
            /></p>
          <p>Last Update: <TimeAgo 
            datetime={detailItem.updatedAt}
            locale='sv-SV'
            />
            </p>

            <p>{authorEmail ? 'Contact Author : ' + authorEmail: 'No email given'}</p>
          <p>PostStatus: {!detailItem.isClosed ? <FaCheck /> : <FaCross /> }</p>
          <p>You are {detailItem.userSubscribed ? 'Subscribed' : 'Not subscribed' } to this article.</p>
        </div>
        
      </StyledDetailsItem>
      <PostRepliesList postID={detailItem.id}/>
    </>
  )
}
