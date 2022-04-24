import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function NavBar() {
  return (
    <div>  
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Bubble T</Navbar.Brand>
              <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              
              <NavDropdown title="My Account" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/loginpage">Log In</NavDropdown.Item>
                  <NavDropdown.Item href="/signuppage">Sign Up</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/createentrypage">Create Post</Nav.Link>
              </Nav>
            </Container>
        </Navbar>
  </div>
  )
}

export default NavBar