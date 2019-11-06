import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Nav.css";

const NavigationBar = () => {
  return (
    <header style={{ borderBottom: ".5rem solid #fff" }}>
      <Navbar expand='lg' variant='dark'>
        <Navbar.Brand href='/'>
          <i
            className='fas fa-quran'
            style={{
              color: "#fff",
              fontSize: "3rem",
              marginLeft: "1.5rem",
              marginRight: "1.5rem"
            }}
          />
          <span className='logo'> الأمة الإرشادية</span>
        </Navbar.Brand>

        <h1 className='main-title'>The Guided Ummah</h1>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto' style={{ fontSize: "2rem" }}>
            <Nav.Link href='/' style={{ color: "#fff" }}>
              Home
            </Nav.Link>
            <Nav.Link href='/about' style={{ color: "#fff" }}>
              About
            </Nav.Link>
            <Nav.Link href='/contact' style={{ color: "#fff" }}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavigationBar;
