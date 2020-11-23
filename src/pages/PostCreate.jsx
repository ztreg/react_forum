import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import GeneralisedForm from '../components/Forms/GeneralisedForm'
import formDataKit from '../data/formDataKit'
import forumKit from '../data/forumKit'
import { StyledHero } from '../theme/StyledComponents'
import image from '../heroImages/img2signup.jpg'

export default function PostCreate() {
  
  const [createStatus, setCreateStatus] = useState('')
  const [errorType, setErrorType] = useState('')
  const [createPostData, setCreatePostData] = useState({
    title: '',
    content: '',
    category: ''
  })

  const formArray = formDataKit.createCustomerFormData(createPostData)
  const ForumKit = new forumKit()
  let history = useHistory()

  function handleInputOnChange(e) {
    setCreatePostData({...createPostData, [e.target.name]: e.target.value})
  }

  function handleOnClickCreatePost() {
    ForumKit.publishPost(createPostData)
    .then(res => res.json())
    .then(data => {
      if(data.id) {
        setCreateStatus('Post created!')
        history.push('/posts')
      } else {
        for (const [key, value] of Object.entries(data)) {
          setErrorType(`${key}`)
          setCreateStatus(`${value}`)
        }
      }
    })
    .catch(e => console.log(e))
  }

  return (
    <>
    <StyledHero image={image}> VOICE YOUR THOUGHTS</StyledHero>
      {formArray && (
        <GeneralisedForm 
          formArray={formArray}
          buttonText='Create Post'
          onChange={handleInputOnChange}
          handleOnClick={handleOnClickCreatePost}
          errorType={errorType}
          status={createStatus}
          selectedProps='categories'
        />
      )}

    </>
  )
}
