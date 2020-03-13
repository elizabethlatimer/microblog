import React from 'react';
import PostList from './PostList';
import './Homepage.css'
import { Container } from 'reactstrap';

function Homepage() {
  return (
    <Container className="Homepage">
      <h3 className="Homepage-header">Welcome to the blog of the future!</h3>
      <PostList />
    </Container>
  )
}

export default Homepage;