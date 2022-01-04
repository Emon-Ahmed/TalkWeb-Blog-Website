import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import {
  FcOpenedFolder,
  FcAddImage,
  FcPaid,
  FcNews,
  FcBarChart,
  FcViewDetails
} from "react-icons/fc";
const Dashboard = () => {
  return (
    <div>
      <div className="container service-style py-4">
        <Row>
          <Col xs={12} md={12} lg={3}>
            <aside className="rounded p-3 aside-bg text-secondary mb-5">
              <p>
                <NavLink className="link-style" to="/dashboard">
                  <span className="icon-size">
                    <FcOpenedFolder />
                  </span>{" "}
                  <span className="icon-font">Dashboard</span>
                </NavLink>
              </p>
              <p>
                <NavLink className="link-style" to="/dashboard/addpost">
                  <span className="icon-size">
                    <FcAddImage />
                  </span>{" "}
                  <span className="icon-font">Add Post</span>
                </NavLink>
              </p>
              <p>
                <NavLink className="link-style" to="/dashboard/addproduct">
                  <span className="icon-size">
                    <FcPaid />
                  </span>{" "}
                  <span className="icon-font">Add Product</span>
                </NavLink>
              </p>
              <p>
                <NavLink className="link-style" to="/dashboard/managePosts">
                  <span className="icon-size">
                    <FcNews />
                  </span>{" "}
                  <span className="icon-font">Manage Post</span>
                </NavLink>
              </p>
              <p>
                <NavLink className="link-style" to="/dashboard/manageProducts">
                  <span className="icon-size">
                    <FcViewDetails />
                  </span>{" "}
                  <span className="icon-font">Manage Product</span>
                </NavLink>
              </p>
              <p>
                <NavLink className="link-style" to="/dashboard/manageAllOrders">
                  <span className="icon-size">
                    <FcBarChart />
                  </span>{" "}
                  <span className="icon-font">Manage Order</span>
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

export default Dashboard;
