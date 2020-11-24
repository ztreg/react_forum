/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import PostList from '../components/Posts/PostList'
import { ForumContext } from '../contexts/ForumContext'
import forumKit from '../data/forumKit'
import { StyledHero } from '../theme/StyledComponents'
import image from '../heroImages/img3.jpg'

export default function Posts() {
  const {postData, setPostData, allowedToFetch, setAllowedToFetch} = useContext(ForumContext)
  const ForumKit = new forumKit()

  const [loading , setLoading] = useState('')

  function fetchPostData(yes) {
    if(!postData || yes) {
      setLoading('Loading...')
      ForumKit.fetchPosts()
      .then(res => res.json())
      .then(data => {
        setPostData(data.results)
        setLoading('')
        setAllowedToFetch(false)
        timeForFetch()
      })
    } else {
      console.log('has posts data');
    }
  }

  function timeForFetch() {
    setTimeout(() => {
      setAllowedToFetch(true)
    }, 60000);
  }

  useEffect(() => {
    if (allowedToFetch) {
      fetchPostData(true)
    }
  }, [allowedToFetch]);

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
