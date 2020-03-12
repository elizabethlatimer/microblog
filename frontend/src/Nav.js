import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card,
         CardTitle,
         CardBody,
         CardText} from 'reactstrap';
import './Nav.css'

function Nav() {
  return (
    <Card>
      <CardBody>
        <CardTitle>Microblog</CardTitle>
        <CardText>Get in the Rithm of blogging!</CardText>
          <NavLink className="NavBlog" to="/">Blog</NavLink>
          <NavLink className="NavBlog" to="/new">Add a new post</NavLink>
      </CardBody>
    </Card>
  )
}

export default Nav;