import React, { useEffect } from 'react';
import PostCard from './PostCard';
import { useSelector, useDispatch } from "react-redux";
import { loadPostsFromAPI, vote } from './actions';

function PostList() {
  const dispatch = useDispatch();
  const titles = useSelector(st => st.titles);

  useEffect(() => {
    dispatch(loadPostsFromAPI());
  }, [dispatch]);

  const submitVote = (postId, direction) => {
    dispatch(vote(postId, direction));
  }

  return (
    <div className="PostList">
      {titles.length
        ? titles.map(post => {
          return (<PostCard key={post.id} post={post} vote={submitVote} />)
        })
        : <h3>Loading Posts...</h3>
      }
    </div>
  )
}

export default PostList;