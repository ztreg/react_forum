import React, { useContext, useEffect } from 'react'
import PostList from '../components/Posts/PostList'
import { ForumContext } from '../contexts/ForumContext'
import forumKit from '../data/forumKit'
import { StyledHero } from '../theme/StyledComponents'
import image from '../heroImages/img3.jpg'
export default function Posts(props) {

  const {postData, setPostData} = useContext(ForumContext)
  const ForumKit = new forumKit()
  function fetchPostData() {
    if(!postData) {
      ForumKit.fetchPosts()
      .then(res => res.json())
      .then(data => {
        setPostData(data.results)
        console.log(data.results);
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
      {postData && (
        <PostList postData={postData} />
      )}
    </>
  )
}
