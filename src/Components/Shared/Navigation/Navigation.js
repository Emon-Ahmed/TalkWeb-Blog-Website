import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import talkweblogo from "../../../Image/talkwebLogo.png";
import "./Navigation.css";

import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../../Redux/Action";

const Navigation = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSingOut = () => {
    if (user.currentUser?.email) {
      dispatch(logoutInitiate());
    }
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <img
              src={talkweblogo}
              width="30"
              height="30"
              className="d-inline-block align-top rounded"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand className="text-danger">Talk Web</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav variant="pills">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/posts">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Shop
              </Nav.Link>

              <Nav.Link as={Link} to="/signin">Log in</Nav.Link>
              <Nav.Link as={Link} to="/signup">Create Account</Nav.Link>
              <NavDropdown title="Display Name" id="collasible-nav-dropdown">
                <NavDropdown.Item>display name and email</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Dashboard</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/addPost">
                  Create Post
                </NavDropdown.Item>
                <NavDropdown.Item>Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                {user.currentUser?.email ? (
                  <NavDropdown.Item onClick={handleSingOut}>
                    Log Out
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item as={Link} to="/signin">Log In</NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
