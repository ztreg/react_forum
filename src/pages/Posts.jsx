import React, { useContext, useEffect, useState } from 'react'
import PostList from '../components/Posts/PostList'
import { ForumContext } from '../contexts/ForumContext'
import forumKit from '../data/forumKit'
import { StyledHero } from '../theme/StyledComponents'
import image from '../heroImages/img3.jpg'
export default function Posts(props) {

  const {postData, setPostData} = useContext(ForumContext)
  const ForumKit = new forumKit()
  const [loading , setLoading] = useState('')

  function fetchPostData() {
    if(!postData) {
      setLoading('Loading...')
      ForumKit.fetchPosts()
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setPostData(data.results)
        setLoading('')
      })
    } else {
      console.log('has posts data');
    }
  }

  useEffect(() => {
    fetchPostData()
  }, [])

  return (
    <>
    <StyledHero image={image}>LATEST NEWS</StyledHero>
      {!postData && (
        <h1 style={{color: "black", textAlign: 'center'}}>{loading}</h1>
      )}
      {postData && (
        <PostList postData={postData} />
      )}
    </>
  )
}
