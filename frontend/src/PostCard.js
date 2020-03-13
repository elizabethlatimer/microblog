import React from 'react';
import { Card, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function PostCard({ post, vote }) {
  return (
    <Card>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
      <CardText>{post.description}</CardText>
      <p>{post.votes} votes</p>
      <Button onClick={() => vote(post.id, 'up')}>
        <i className="far fa-thumbs-up"></i>
      </Button>
      <Button onClick={() => vote(post.id, "down")}>
        <i className="far fa-thumbs-down"></i>
      </Button>
    </Card>
  )
}

export default PostCard;