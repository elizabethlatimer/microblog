import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import PostForm from './PostForm';
import PostDetail from './PostDetail';

function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route exact path='/new'>
        <PostForm />
      </Route>
      <Route exact path='/post/:id'>
        <PostDetail cantFind="/"/>
      </Route>
    </Switch>
  )
}

export default Routes;