import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
     <Navbar bg="dark" expand="lg" data-bs-theme="dark">
        <Container className='d-flex'>
          <Navbar.Brand href="#home">Razo Trans Utility</Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='' />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto align-items-center gap-3 text-uppercase">
            <NavLink className='text-light text-decoration-none' to="/">About Us</NavLink>
            <NavLink  className='text-light text-decoration-none' to="/terms">Terms & condition</NavLink>
            <NavLink className='text-light text-decoration-none' to="/refund">Return & Refund</NavLink>
            <NavLink  className='text-light text-decoration-none' to="/contact">Contact Us</NavLink>
            <NavLink  className='btn btn-light bg-light text-dark' to="/login">Login</NavLink>
           
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
