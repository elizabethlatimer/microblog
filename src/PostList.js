import React, { useContext } from 'react';
import PostCard from './PostCard';
import PostContext from './postContext';

function PostList() {
  const {posts} = useContext(PostContext);

  return (
    <div className="PostList">
      {posts.map(post => {
        return (<PostCard key={post.id} post={post} />)
      })}
    </div>
  )
}

export default PostList;