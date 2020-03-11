import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useDispatch } from "react-redux";
import { addPost, editPost } from './action';

const INITIAL_STATE = {
  title: "",
  description: "",
  body: "",
}

function PostForm({ post = INITIAL_STATE, editing = false, setEditing, postId}) {
  const [formData, setFormData] = useState(post);
  const dispatch = useDispatch();
  const history = useHistory();

  const add = (formData) => dispatch(addPost(formData));
  const edit = (postId, data) => dispatch(editPost(postId, data));

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    if (editing) {
      edit(postId, formData);
      setFormData(INITIAL_STATE);
      setEditing(false);
    } else {
      add(formData);
      setFormData(INITIAL_STATE);
      history.push('/');
    }
  }

  const cancel = () => {
    history.push('/');
  }

  return (
    <div className="PostForm">
      <h2>New Post</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title:</Label>
          <Input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description:</Label>
          <Input type="text" id="description" name="description" value={formData.description} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="body">Body:</Label>
          <Input type="textarea" id="body" name="body" value={formData.body} rows='5' onChange={handleChange} />
        </FormGroup>
        <Button color='primary' type='submit'>Save</Button>
        <Button color='secondary' type='button' onClick={cancel}>Cancel</Button>
      </Form>
    </div>
  )
}

export default PostForm;