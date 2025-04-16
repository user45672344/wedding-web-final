import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap';

const Navbar = () => (
  <BsNavbar bg="light" expand="lg" className="shadow-sm">
    <Container>
      <BsNavbar.Brand as={Link} to="/">Lexi & Mason</BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BsNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/rsvp">RSVP</Nav.Link>
          <Nav.Link as={Link} to="/events">Events</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/travel">Travel</Nav.Link>
          <Nav.Link as={Link} to="/dresscode">Dress Code</Nav.Link>
          <Nav.Link as={Link} to="/registry">Registry</Nav.Link>
        </Nav>
      </BsNavbar.Collapse>
    </Container>
  </BsNavbar>
);

export default Navbar;