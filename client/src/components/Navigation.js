import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const Navigation = () => { 
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Blog Rank by Yiyuan & Tianyi </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/editors_pick">Editor's Pick</Nav.Link>
            </Nav>

            <NavDropdown class="d-flex justify-content-right" title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tech</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Literature</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation;