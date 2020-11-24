import React, {  useContext, useEffect, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import { UserContext } from '../../contexts/UserContext'
import forumKit from '../../data/forumKit'
import { StyledPrimaryButton } from '../../theme/StyledComponents'
import { StyledMessageItem, StyledRepliesList } from '../../theme/StyledListComponents'
import PostReply from './PostReply'

export default function PostReplies(props) {
  const {postID} = props
  const [postReplies, setPostReplies] = useState(null)
  const [hide, setHide] = useState(true)
  let BGcolor = ''
  const {userData} = useContext(UserContext)
  const ForumKit = new forumKit()

  function fetchReplies(){
    if(!postReplies) {
      ForumKit.fetchReplyList(postID)
      .then(res => res.json())
      .then(data => {
        setPostReplies((data.results).reverse())
      })
    }
  }

  function showOrHide() {
    setHide(!hide)
  }

  useEffect(() => {
    fetchReplies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <StyledRepliesList>
        <StyledPrimaryButton onClick={showOrHide}>{hide ? 'Create Comment' :  <FaWindowClose /> }</StyledPrimaryButton>
        {postReplies && !hide && (
          <PostReply 
            postID={postID} 
            postReplies={postReplies} 
            setPostReplies={setPostReplies}
            hide={hide}
          />
        )}
      {postReplies && (
        postReplies.map((replyItem, index) => {
          userData.email === replyItem.author.email ? BGcolor = 'green' : BGcolor = ''
          return(
            <StyledMessageItem BGcolor={BGcolor} key={index}>
              <div  className="replyText">
                <div>
                  <ReactMarkdown source={replyItem.title} allowDangerousHtml />
                  <ReactMarkdown source={replyItem.content} allowDangerousHtml />
                  <p>Reply by: {replyItem.author === null ? 'No author given' : replyItem.author.firstName}</p>
                </div>
              </div>
            </StyledMessageItem>
            )
          })
  
      )}
    </StyledRepliesList>

    </>
  )
}
