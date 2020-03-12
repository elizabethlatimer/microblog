import {
  LOAD_POSTS,
  LOAD_POST_DETAIL,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  SHOW_ERR,
  CLEAR_ERR
} from './actionTypes';
import axios from 'axios';

const API_URL = "http://localhost:5000/api/posts";

export function loadPostsFromAPI() {
  return async function (dispatch) {
    let res = await axios.get(API_URL);
    dispatch(gotPosts(res.data));
  }
}

function gotPosts(posts) {
  return { type: LOAD_POSTS, payload: posts };
}

export function loadPostDetailFromAPI(postId) {
  return async function (dispatch) {
    try {
    let res = await axios.get(`${API_URL}/${postId}`);
    console.log(res)
    dispatch(gotPostDetail(res.data));
    } catch (err) {
      dispatch(showErr(err));

    }
  }
}

function gotPostDetail(post) {
  return {type: LOAD_POST_DETAIL, payload: post};
}

export function addPost(newPost) {
  return {
    type: ADD_POST,
    payload: newPost
  }
}

export function deletePost(postId) {

  return {
    type: DELETE_POST,
    payload: { postId: postId }
  }
}

export function editPost(postId, formData) {

  return {
    type: EDIT_POST,
    payload: { ...formData, postId: postId }
  }
}

export function addComment(postId, newComment) {

  return {
    type: ADD_COMMENT,
    payload: { ...newComment, postId }
  }
}

export function deleteComment(postId, commentId) {

  return {
    type: DELETE_COMMENT,
    payload: { postId, commentId }
  }
}

function showErr(err) {
  return {type: SHOW_ERR, payload: err}
}

export function clearError() {
  return {type: CLEAR_ERR};
}