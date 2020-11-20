import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom'
import { StyledVerticalLine } from '../../theme/RandomStyledComponents';
import { StyledReadMoreButton } from '../../theme/StyledComponents';
import { StyledNewsListItem } from '../../theme/StyledListComponents'


export default function PostListItem(props) {

  let fullName;
  if(props.post.author){
    const {firstName, lastName} = props.post.author 
    fullName = firstName.concat(' ' + lastName) 
  }
  let cuttedString = props.post.content
  if(props.post.content.length >=200) {
    cuttedString = props.post.content.substring(0, 100);
  }
  return (
    <StyledNewsListItem>
      {props.post && (
      <>
        <div className="mainPart">
          <h1> <ReactMarkdown source={props.post.title} allowDangerousHtml /></h1>
          <p> Author: {props.post.author === null ? 'No author given' : fullName}</p>  
          <ReactMarkdown source={cuttedString} allowDangerousHtml/>
          <Link to={`/posts/${props.post.id}`}><StyledReadMoreButton>READ MORE   <FaArrowAltCircleRight /></StyledReadMoreButton></Link>
          
        </div>
        <StyledVerticalLine></StyledVerticalLine>
        <div className="sidePart">
          <p>Views {props.post.viewCount}</p>  
          <p>Country: {props.post.country}</p>  
          <p>CreatedAt: {props.post.createdAt}</p> 
          <p>Replies: {props.post.countResponses}</p>
        </div>
      
      </>
      )}
    </StyledNewsListItem>
  )
}
