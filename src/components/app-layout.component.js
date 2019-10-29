import React, { useEffect } from 'react';
import { Navbar, Card } from 'react-bootstrap';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/static/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Plexxis Full-Stack JS Exercise'}
        </Navbar.Brand>
      </Navbar>
      {children}
    </div>
  );
};

export default AppLayout;