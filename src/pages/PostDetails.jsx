import React from 'react'
import PostDetail from '../components/Posts/PostDetail'

export default function PostDetails(props) {

  const postID = props.match.params.id

  return (
    <div>
      <p>Detail Page for {postID}</p>
        <PostDetail postID={postID} />
    </div>
  )
}
