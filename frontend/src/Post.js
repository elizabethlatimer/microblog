import React from 'react';
import { Button } from 'reactstrap';

function Post({ post, setEditing, deletePost, postId }) {
  
  return (
    <div className="Post">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.body}</p>
      <Button onClick={() => deletePost(postId)}>
        <i className="far fa-trash-alt"></i>
      </Button>
      <Button onClick={() => setEditing(true)}>
        <i className="far fa-edit"></i>
      </Button>
    </div>
  )

}

export default Post;