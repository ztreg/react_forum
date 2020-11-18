import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import GeneralisedForm from '../components/Forms/GeneralisedForm'
import formDataKit from '../data/formDataKit'
import forumKit from '../data/forumKit'

export default function PostCreate() {
  let history = useHistory()
  const [createStatus, setCreateStatus] = useState('')
  const [createPostData, setCreatePostData] = useState({
    title: '',
    content: '',
    category: ''
  })
  const formArray = formDataKit.createCustomerFormData(createPostData)
  const ForumKit = new forumKit()

  function handleInputOnChange(e) {
    setCreatePostData({...createPostData, [e.target.name]: e.target.value})
  }

  function handleOnClickCreatePost() {
    ForumKit.publishPost(createPostData)
    .then(res => res.json())
    .then(data => {
      setCreateStatus('Post created!')
      history.push('/posts')
    })
    .catch(e => console.log(e))
  }

  return (
    <div>
      <h4>Create post Page</h4>
      {formArray && (
        <GeneralisedForm 
          formArray={formArray}
          buttonText='Create Post'
          onChange={handleInputOnChange}
          handleOnClick={handleOnClickCreatePost}
          createStatus={createStatus}
        />
      )}

    </div>
  )
}
