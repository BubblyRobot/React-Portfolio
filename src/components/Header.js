import React from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/Contact">Susan Cagle </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/AboutMe">About Me</Nav.Link>
        <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/Resume">Resume</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
