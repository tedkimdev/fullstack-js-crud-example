import React, { useEffect } from 'react';
import { Navbar, Card } from 'react-bootstrap';
import Link from 'next/link';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/static/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Plexxis Full-Stack JS Exercise'}
        </Navbar.Brand>
        <Link href="/employee/create"><a>Create</a></Link>
      </Navbar>
      {children}
    </div>
  );
};

export default AppLayout;