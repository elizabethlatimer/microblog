import React from 'react';
import { Button } from 'reactstrap';

function Post({ post, setEditing, deletePost, postId, vote }) {

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
      <span>{post.votes}</span>
      <Button onClick={() => vote(postId, 'up')}>
        <i className="far fa-thumbs-up"></i>
      </Button>
      <Button onClick={() => vote(postId, "down")}>
        <i className="far fa-thumbs-down"></i>
      </Button>
    </div>
  )

}

export default Post;