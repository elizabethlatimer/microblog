import React from 'react';
import PostCard from './PostCard';
import { useSelector } from "react-redux";

function PostList() {
  const posts = useSelector(st => st.posts)

  return (
    <div className="PostList">
      {Object.keys(posts).map(postId => {
        console.log(postId);
        return (<PostCard key={postId} post={posts[postId]} id={postId}/>)
      })}
    </div>
  )
}

export default PostList;