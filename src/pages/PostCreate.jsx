import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import GeneralisedForm from '../components/Forms/GeneralisedForm'
import { ForumContext } from '../contexts/ForumContext'
import formDataKit from '../data/formDataKit'
import forumKit from '../data/forumKit'

export default function PostCreate() {
  let history = useHistory()
  const {categories, setCategories} = useContext(ForumContext)
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

  function fetchCategories() {
    if(!categories) {
      ForumKit.fetchCategories()
      .then(res => res.json())
      .then(data=> {
        setCategories(data.results)
      })
      .catch(e => console.log(e))
    }
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

  useEffect(() => {
    fetchCategories()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          selectedProps='categories'
        />
      )}

    </div>
  )
}
