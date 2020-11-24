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

  const [nextPage, setNextPage] = useState('')
  const [previousPage, setPreviousPage] = useState('')
  const [loading , setLoading] = useState('')

  function fetchPostData(yes) {
    if(!postData || yes) {
      setLoading('Loading...')
      ForumKit.fetchPosts()
      .then(res => res.json())
      .then(data => {
        if(data.next) {
          setNextPage(data.next)
        } if (data.previous) {
          setPreviousPage(data.previous)
        }
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

  // Next Page, Previous Page.
  // The worst code Ive ever written, super generalized and handy.
  function onClickNextHandlePages(){
    setLoading('Loading...')
    ForumKit.fetchMorePosts(nextPage)
      .then(res => res.json())
      .then(data => {
        if(data.next) {
          setNextPage(data.next)
        } if (data.previous) {
          setPreviousPage(data.previous)
        }
        setLoading('')
        setPostData(data.results)
      })
  }
  function onClickPreviousHandlePages(){
    setLoading('Loading...')
    ForumKit.fetchMorePosts(previousPage)
      .then(res => res.json())
      .then(data => {
        if(data.next) {
          setNextPage(data.next)
        } if (data.previous) {
          setPreviousPage(data.previous)
        }
        console.log(data);
        setLoading('')
        setPostData(data.results)
      })
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
        <PostList 
          previousPage={previousPage}
          nextPage={nextPage}
          onClickPreviousHandlePages={onClickPreviousHandlePages} 
          onClickNextHandlePages={onClickNextHandlePages} 
          postData={postData} 
        />
      )}
    </>
  )
}
