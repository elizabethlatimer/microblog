import { v4 as uuid } from 'uuid';
import { ADD_POST,
        DELETE_POST,
        EDIT_POST,
        ADD_COMMENT,
        DELETE_COMMENT } from './actionTypes';

export function addPost(newPost) {
  newPost.postId = uuid();
  newPost.comments = [];

  return {
    type: ADD_POST,
    payload: newPost
  }
}

export function deletePost(postId) {

  return {
    type: DELETE_POST,
    payload: {postId: postId}
  }
}

export function editPost(postId, formData) {

  return {
    type: EDIT_POST,
    payload: {...formData, postId: postId}
  }
}

export function addComment(postId, newComment) {
  newComment.commentId = uuid();

  return {
    type: ADD_COMMENT,
    payload: {...newComment, postId}
  }
}

export function deleteComment(postId, commentId) {

  return {
    type: DELETE_COMMENT,
    payload: {postId, commentId}
  }
}