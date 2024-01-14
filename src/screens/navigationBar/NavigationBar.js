import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { navigationLinks } from '../../helpers/navigationLinks';

function renderLinks() {
  return navigationLinks.map((e, idx) => (
    <Nav.Item id={idx}>
      <Nav.Link href={e.ref}>{e.name}</Nav.Link>
    </Nav.Item>
  ));
}

function NavigationBar() {
  return (
    <div>
      <Navbar expand="md" className="bg-primary">
        <Navbar.Brand>Rakhimkulov Miniiar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>{renderLinks()}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
