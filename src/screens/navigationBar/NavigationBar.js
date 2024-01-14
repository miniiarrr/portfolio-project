import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { navigationLinks } from '../../helpers/navigationLinks';

function renderLinks() {
  return navigationLinks.map((e, idx) => (
    <Nav.Item id={idx}>
      <></>
      <Nav.Link href={e.ref}>{e.name}</Nav.Link>
    </Nav.Item>
  ));
}

function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container fluid="lg">
          <Navbar.Brand>Rakhimkulov Miniiar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>{renderLinks()}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
