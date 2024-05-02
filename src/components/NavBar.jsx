import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  const { user, logout } = useAuthContext();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
            {user ? (
              <Button variant="outline-danger" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
