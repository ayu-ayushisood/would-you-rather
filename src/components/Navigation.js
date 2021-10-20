import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Nav>
        <Nav.Item>
          <NavLink to="/questions">Home</NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/add">New Question</NavLink>
        </Nav.Item>
        <Nav.Item>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
