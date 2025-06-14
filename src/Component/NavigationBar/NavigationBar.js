import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import "./NavigationBar.css";
import { Link } from 'react-router';
import ProfilePopup from '../Profile/ProfilePopup';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className='hobernab' href="/">Project π</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto mx-auto navberlink hobernab">
            <Link to="/">Home</Link>
            <Link to="/services" >Services</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/Feedback">Feedback</Link>
          </Nav>
          <Nav className='hobernab navberlink22'> 
            <Link to="/cart"><FaShoppingCart />Your order</Link>
            <Link ><ProfilePopup /></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
