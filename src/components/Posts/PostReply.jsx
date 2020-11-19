import React, { useState } from 'react'
import formDataKit from '../../data/formDataKit'
import forumKit from '../../data/forumKit'
import GeneralisedForm from '../Forms/GeneralisedForm'

export default function PostReply(props) {
  const {postID, setPostReplies, postReplies } = props
  const ForumKit = new forumKit()
  const [replyFormData, setReplyFormData] = useState({
    title: '',
    content: '',
  })
  const [replyStatus, setReplyStatus] = useState(null)
  const formArray = formDataKit.createReplyFormData(replyFormData)

  function handleOnInputReply(e) {
    setReplyFormData({...replyFormData, [e.target.name]: e.target.value})
  }

  function handleOnClickCreateReply() {
    const payload = {
      ...replyFormData,
      parent: postID
    }
    ForumKit.replyToPost(payload)
    .then(res => res.json())
    .then(data => {
      if(data.hasOwnProperty('author')) {
        console.log(data.author);
        setReplyStatus('Reply sent')
        let copy =  [...postReplies]
        copy.push(data)
        setPostReplies(copy);
      } else {
        for (const [key, value] of Object.entries(data)) {
          setReplyStatus(`${key} : ${value}`)
        }
      }
    })
  }

  return (
    formArray && (
      <GeneralisedForm 
        formArray={formArray}
        onChange={handleOnInputReply}
        buttonText='Send Reply'
        handleOnClick={handleOnClickCreateReply}
        createStatus={replyStatus}
      />
    )

  )
}
