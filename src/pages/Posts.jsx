import React, { useContext, useEffect } from 'react'
import PostList from '../components/Posts/PostList'
import { ForumContext } from '../contexts/ForumContext'
import forumKit from '../data/forumKit'

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
    <div>
      <h4>Posts</h4>
      {postData && (
        <PostList postData={postData} />
      )}
    </div>
  )
}
