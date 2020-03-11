import React, { useContext, useState } from 'react';
import PostContext from './postContext';
import { Redirect, useParams } from 'react-router-dom';
import Post from './Post';
import PostForm from './PostForm';

function PostDetail({cantFind}) {
  const { id } = useParams();
  const [editing, setEditing] = useState(false);
  const { posts, deletePost } = useContext(PostContext);

  const post = (posts.filter(post => post.id === id))[0];

  if (!post) {
    return <Redirect exact to='/' />
  }

  return (
    <div className="PostDetail">
      {editing
      ? <PostForm post={post} editing="true" setEditing={setEditing}/>
      : <Post post={post}  setEditing={setEditing} deletePost={deletePost}/>
}
    </div>
  )
}

export default PostDetail;