import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import talkweblogo from "../../../Image/talkwebLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../../Redux/Action";
import { FcBusinessman } from "react-icons/fc";

const Navigation = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSingOut = () => {
    if (user.currentUser?.email) {
      dispatch(logoutInitiate());
    }
  };
  return (
    <div className="nav-bg">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={talkweblogo}
              width="30"
              height="30"
              className="d-inline-block align-top rounded"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand className="fw-bold" as={Link} to="/">
            Talk Web
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav variant="pills" className="d-flex align-items-center">
              <Nav.Link as={Link} to="dashboard/addpost">
                <span type="button" className="btn btn-outline-dark mx-2">
                  Create Post
                </span>
              </Nav.Link>
              <NavDropdown
                className="icon-font"
                title={<FcBusinessman />}
                id="collasible-nav-dropdown"
              >
                
                  {user.currentUser?.email && (
                    
                    <NavDropdown.Item
                      style={{ overflowX: "scroll", width: "150px" }}
                    >
                      {user.currentUser?.email}
                    </NavDropdown.Item>
                   
                  )}
                
                
                <NavDropdown.Item as={Link} to="/dashboard">
                  Dashboard
                </NavDropdown.Item>
                
                {user.currentUser?.email ? (
                  <NavDropdown.Item
                    className="text-danger"
                    onClick={handleSingOut}
                  >
                    Log Out
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item as={Link} to="/signin">
                    Log In
                  </NavDropdown.Item>
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
