import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {clearError} from './actions';

function NotFound() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError())
  });

  return (
    <div className="NotFound">
      The content you're looking for couldn't be found.
    </div>
  )
}

export default NotFound;
