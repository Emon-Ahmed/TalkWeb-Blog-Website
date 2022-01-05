import React from "react";
import {  Col, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import {
  FcHome,
  FcReading,
  FcShop,
  FcBusinessContact,
  FcAbout,
  FcAddressBook,
  FcIdea,
  FcBookmark,
} from "react-icons/fc";

const Home = () => {
  return (
    <div>
      <div className="container service-style py-4">
        <Row>
          <Col xs={12} md={12} lg={3}>
            <aside className="rounded p-3 aside-bg text-secondary mb-5">
              <p>
                <NavLink className="link-style" to="/">
                  <span className="icon-size">
                    <FcHome />
                  </span>{" "}
                  <span className="icon-font">Home</span>
                </NavLink>
              </p>
              <p>
                <NavLink className="link-style" to="/posts">
                  <span className="icon-size">
                    <FcReading />
                  </span>{" "}
                  <span className="icon-font">Reading List</span>
                </NavLink>
              </p>
              <p>
                <NavLink className="link-style" to="/posts">
                  <span className="icon-size">
                    <FcBookmark />
                  </span>{" "}
                  <span className="icon-font">Bookmark</span>
                </NavLink>
              </p>
              <p>
                <NavLink className="link-style" to="/tags">
                  <span className="icon-size">
                    <FcAddressBook />
                  </span>{" "}
                  <span className="icon-font">Tags</span>
                </NavLink>
              </p>
              <p>
                <NavLink className="link-style" to="/faq">
                  <span className="icon-size">
                    <FcIdea />
                  </span>{" "}
                  <span className="icon-font">FAQ</span>
                </NavLink>
              </p>
              <p>
                <NavLink className="link-style" to="/products">
                  <span className="icon-size">
                    <FcShop />
                  </span>{" "}
                  <span className="icon-font">TalkWeb Shop</span>
                </NavLink>
              </p>
              <p>
                <NavLink className="link-style" to="/about">
                  <span className="icon-size">
                    <FcAbout />
                  </span>{" "}
                  <span className="icon-font">About</span>
                </NavLink>
              </p>
              <p>
                <NavLink className="link-style" to="/contact">
                  <span className="icon-size">
                    <FcBusinessContact />
                  </span>{" "}
                  <span className="icon-font">Contact</span>
                </NavLink>
              </p>
            </aside>
          </Col>
          <Col xs={12} md={12} lg={9}>
            <Outlet />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
