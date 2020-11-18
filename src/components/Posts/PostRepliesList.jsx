import React, {  useEffect, useState } from 'react'
import forumKit from '../../data/forumKit'
import { StyledItem, StyledList } from '../../theme/StyledListComponents'
import PostReply from './PostReply'


export default function PostRepliesList(props) {
  const {postID} = props
  const [postReplies, setPostReplies] = useState(null)
  const ForumKit = new forumKit()

  function fetchReplies(){
    if(!postReplies) {
      ForumKit.fetchReplyList(postID)
      .then(res => res.json())
      .then(data => {
        setPostReplies(data.results)
      })
    }
  }

  useEffect(() => {
    fetchReplies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
     <h2>Replies</h2>
    <StyledList>
      {postReplies && (
        
        postReplies.map((replyItem, index) => {
          return(
            <StyledItem key={index}>
              {/* <p>Author: {replyItem.author === null ? 'No author given' : replyItem.author.firstName}</p> */}
              <p>{replyItem.title}</p>
              <p>{replyItem.content}</p>
            </StyledItem>
          )
        })
  
      )}
    </StyledList>
    
    {postReplies && (
      <PostReply 
        postID={postID} 
        postReplies={postReplies} 
        setPostReplies={setPostReplies}
      />
    )}
    </>
  )
}
