import React, { useState } from 'react'
import GeneralisedForm from '../components/Forms/GeneralisedForm'
import formDataKit from '../data/formDataKit'

export default function PostCreate() {
  
  const [createPostData, setCreatePostData] = useState({
    title: '',
    content: '',
    category: ''
  })
  const formArray = formDataKit.createCustomerFormData(createPostData)

  function handleInputOnChange(e) {
    setCreatePostData({...createPostData, [e.target.name]: e.target.value})
  }

  function handleOnClickCreatePost() {
    console.log('creating post', createPostData);
  }

  return (
    <div>
      <h4>Create post Page</h4>
        <GeneralisedForm 
          formArray={formArray} 
          onChange={handleInputOnChange}
          handleOnClickCreatePost={handleOnClickCreatePost}
        />
    </div>
  )
}
