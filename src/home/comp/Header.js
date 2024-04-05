import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='sticky-top'>
     <Navbar bg="dark" expand="lg" data-bs-theme="dark">
        <Container className='d-flex'>
          <Navbar.Brand href="#home">Razo Trans Utility</Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='' />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto align-items-center gap-3">
            <NavLink className={({isActive})=> isActive ? "text-dark bg-light text-decoration-none p-1 rounded":"text-light text-decoration-none p-1 rounded"} to="/">About Us</NavLink>
            <NavLink  className={({isActive})=> isActive ? "text-dark bg-light text-decoration-none p-1 rounded":"text-light text-decoration-none p-1 rounded"} to="/terms">Terms & condition</NavLink>
            <NavLink className={({isActive})=> isActive ? "text-dark bg-light text-decoration-none p-1 rounded":"text-light text-decoration-none p-1 rounded"} to="/refund">Refund & Return Policy</NavLink>
            <NavLink className={({isActive})=> isActive ? "text-dark bg-light text-decoration-none p-1 rounded":"text-light text-decoration-none p-1 rounded"} to="/privacy">Privacy</NavLink>
            <NavLink  className={({isActive})=> isActive ? "text-dark bg-light text-decoration-none p-1 rounded":"text-light text-decoration-none p-1 rounded"} to="/contact">Contact Us</NavLink>
            <NavLink  className='btn btn-light bg-info border-0 text-dark' to="/login">Login</NavLink>
           
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
