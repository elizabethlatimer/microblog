import { ADD_POST, DELETE_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';

const INITIAL_STATE = { posts: {} };

function rootReducer(state = INITIAL_STATE, action) {
  let postId = action.payload ? action.payload.postId : null;

  switch (action.type) {
    case ADD_POST:
      let { title, description, body, comments } = action.payload;
      return { ...state, posts: { ...state.posts, [postId]: { title, description, body, comments } } };

    case DELETE_POST:
      let postsCopy = { ...state.posts };
      delete postsCopy[postId]
      return { ...state, posts: postsCopy };

    case EDIT_POST:
      let postToEdit = state.posts[postId];
      let edit = {
        ...postToEdit,
        title: action.payload.title,
        description: action.payload.description,
        body: action.payload.body
      }
      return { ...state, posts: { ...state.posts, [postId]: edit } };

    case ADD_COMMENT:
      let postToComment = state.posts[postId];
      let addComment = {
        ...postToComment,
        comments: [...postToComment.comments,
        {
          comment: action.payload.comment,
          commentId: action.payload.commentId
        }]
      };
      return { ...state, posts: { ...state.posts, [postId]: addComment } };

    case DELETE_COMMENT:
      let oldComments = state.posts[postId].comments;
      let editedComments = oldComments.filter(comment => {
        return comment.commentId !== action.payload.commentId});
      return {
        ...state, posts: {
          ...state.posts, [postId]: {
            ...state.posts[postId],
            comments: editedComments
          }
        }
      };

    default:
      return state;
  }
}

export default rootReducer;
