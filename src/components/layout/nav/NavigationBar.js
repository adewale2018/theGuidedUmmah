import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Nav.css";

const NavigationBar = props => {
  return (
    <header style={{ backgroundColor: "#ffca4f" }}>
      <Navbar expand='lg' variant='dark'>
        <Navbar.Brand href='/'>
          <i
            className='fas fa-quran'
            style={{
              color: "#22a2ff",
              fontSize: "3rem",
              marginLeft: "1.5rem",
              marginRight: "1.5rem"
            }}
          />
          <span className='logo'> الأمة الإرشادية</span>
        </Navbar.Brand>

        <h1 className='main-title'>{props.title}</h1>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto' style={{ fontSize: "2rem" }}>
            <Nav.Link
              href='/'
              style={{ color: "#1a1300", fontWeight: "200" }}
              className='link'
            >
              Home
            </Nav.Link>
            <Nav.Link
              href='/about'
              style={{ color: "#1a1300", fontWeight: "200" }}
              className='link'
            >
              About
            </Nav.Link>
            <Nav.Link
              href='/posts'
              style={{ color: "#1a1300", fontWeight: "200" }}
              className='link'
            >
              Posts
            </Nav.Link>
            <Nav.Link
              href='/contact'
              style={{ color: "#1a1300", fontWeight: "200" }}
              className='link'
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavigationBar;
