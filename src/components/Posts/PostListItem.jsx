import React from 'react'
import { FaArrowAltCircleRight, FaCheck, FaCommentAlt, FaCross, FaRegEye } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom'
import { StyledVerticalLine } from '../../theme/RandomStyledComponents';
import { StyledReadMoreButton } from '../../theme/StyledComponents';
import { StyledNewsListItem } from '../../theme/StyledListComponents'
import TimeAgo from 'timeago-react';

export default function PostListItem(props) {
  let {isPinned} = props.post
  let fullName;
  if(props.post.author){
    const {firstName, lastName} = props.post.author 
    fullName = firstName.concat(' ' + lastName) 
  }
  let cuttedString = props.post.content
  if(props.post.content && props.post.content.length >=200) {
    cuttedString = props.post.content.substring(0, 100);
    cuttedString = cuttedString.concat(' ', '...');
  }

  return (
    <StyledNewsListItem isPinned={isPinned}>
      {props.post && (
      <>
        <div className="mainPart">
          <h1> <ReactMarkdown source={props.post.title} allowDangerousHtml /></h1>
         
          <ReactMarkdown source={cuttedString} allowDangerousHtml/>
          <Link to={`/posts/${props.post.id}`}><StyledReadMoreButton>READ MORE   <FaArrowAltCircleRight /></StyledReadMoreButton></Link>

        </div>
        <StyledVerticalLine></StyledVerticalLine>
        <div className="sidePart">
        <strong> Author: {props.post.author === null ? 'No author given' : fullName}</strong> 
          <p>Created: <TimeAgo 
            datetime={props.post.createdAt}
            locale='sv-SV'
          /></p>
          <p><FaRegEye /> {props.post.viewCount}</p>  
          <p><FaCommentAlt />: {props.post.countResponses}</p>
          <p>PostStatus: {!props.post.isClosed ? <FaCheck /> : <FaCross /> }</p>
        </div>
      
      </>
      )}
    </StyledNewsListItem>
  )
}
