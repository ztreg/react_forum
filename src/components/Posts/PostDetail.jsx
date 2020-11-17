import React, { useContext, useEffect, useState } from 'react'
import { ForumContext } from '../../contexts/ForumContext'
import forumKit from '../../data/forumKit'
import PostDetailItem from './PostDetailItem'

export default function PostDetail(props) {
  const [postItem, setPostItem] = useState(null)
  const {postData} = useContext(ForumContext)
  // let postID = props.match.params.id;
  const ForumKit = new forumKit()

  function fetchPostData() {
    if(postData) {
      const itemFromContext = postData.find(post => post.id == props.postID);
      setPostItem(itemFromContext)
    } else {
      ForumKit.fetchSinglePost(props.postID)
      .then(res => res.json())
      .then(data => {
        setPostItem(data)
      })
    }
  }

  useEffect(() => {
    fetchPostData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      {postItem && (
        <PostDetailItem detailItem={postItem}/>
      )}
    </div>
  )
}
