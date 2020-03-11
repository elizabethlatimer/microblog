import React from 'react';
import {Card, CardText} from 'reactstrap';
import {Link} from 'react-router-dom';

function PostCard({ post, id }) {
  return (
    <Card>
      <Link to={`/post/${id}`}>{post.title}</Link>
      <CardText>{post.description}</CardText>
    </Card>
  )
}

export default PostCard;