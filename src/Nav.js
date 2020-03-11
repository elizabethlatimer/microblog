import React from 'react';
import { Card, CardTitle, CardBody, CardText, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <Card>
      <CardBody>
        <CardTitle>Microblog</CardTitle>
        <CardText>Get in the Rithm of blogging!</CardText>
        <NavItem>
          <NavLink to="/">Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/new">Add a new post</NavLink>
        </NavItem>
      </CardBody>
    </Card>
  )
}

export default Nav;