import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { deletePost, addComment, deleteComment} from './action'
import Post from './Post';
import PostForm from './PostForm';
import Comments from './Comments';

function PostDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const post = useSelector(st => st.posts[id]);

  const deletePostFn = (id) => dispatch(deletePost(id));
  const addCmt = (id, comment) => dispatch(addComment(id, comment));
  const deleteCmt = (id, commentId) => dispatch(deleteComment(id, commentId));

  if (!post) {
    return <Redirect exact to='/' />
  }

  return (
    <div className="PostDetail">
      {editing
      ? <PostForm post={post}
                  editing="true"
                  setEditing={setEditing}
                  postId={id}/>
        : <Post post={post}
                setEditing={setEditing}
                deletePost={deletePostFn}
                postId={id}/>}
      <hr />
      <Comments comments={post.comments}
                add={addCmt}
                remove={deleteCmt}/>
    </div>
  )
}

export default PostDetail;