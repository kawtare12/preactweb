import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './logoh.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <Navbar bg="" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" width="50" height="30" className="d-inline-block align-top" />
          Pharmacies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto"></Nav>
                       <Nav>
                         <Nav.Link className="text-white" href="#">Acceuil</Nav.Link> 
                         <Nav.Link className="text-white" href="#">A propos</Nav.Link> 
                         <Nav.Link className="text-white" href="#">Search</Nav.Link>
                         <Nav.Link className="text-white" href="#">Contact</Nav.Link>
                       </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


