import React, {  useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import forumKit from '../../data/forumKit'
import { StyledItem, StyledList, StyledMessageItem } from '../../theme/StyledListComponents'
import PostReply from './PostReply'

export default function PostReplies(props) {
  const {postID} = props
  const [postReplies, setPostReplies] = useState(null)
  const [position, setPosition] = useState('right')
  const {userData} = useContext(UserContext)
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
      <StyledList>
      <h2>Replies</h2>
      {postReplies && (
        postReplies.reverse().map((replyItem, index) => {
          // replyItem.author.email === userData.email && setPosition('left')
          var stripedHtml = replyItem.title.replace(/<[^>]+>/g, '');
          var stripedHtml2 = replyItem.content.replace(/<[^>]+>/g, '');
          return(
            <StyledMessageItem key={index} position={position}>
              <h4>{stripedHtml}</h4>
              <p>{stripedHtml2}</p>
              <p>Reply by: {replyItem.author === null ? 'No author given' : replyItem.author.firstName}</p>
            </StyledMessageItem>
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
