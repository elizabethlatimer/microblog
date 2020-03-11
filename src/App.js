import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Nav from "./Nav";
import Routes from './Routes';
import PostContext from './postContext';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    post.id = uuid();
    setPosts(posts => [...posts, post]);
  }

  const deletePost = (postId) => {
    const filteredPosts = posts.filter(post => post.id !== postId);
    setPosts(filteredPosts);
  }

  const editPost = (postId, editedPost) => {
    let editedPosts = posts.map(post => post.id === postId
      ? {...editedPost}
      : post)
    setPosts(editedPosts);
  }

  return (
    <div className="App">
      <PostContext.Provider value={{ posts, addPost, deletePost, editPost }}>
        <BrowserRouter>
          <Nav />
          <Routes />
        </BrowserRouter>
      </PostContext.Provider>
    </div>
  );
}

export default App;
