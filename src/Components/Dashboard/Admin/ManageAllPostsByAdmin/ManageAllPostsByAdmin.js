import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const ManageAllPostsByAdmin = () => {
  const [managePosts, setManagePosts] = useState([]);

  useEffect(() => {
    fetch(`https://pacific-escarpment-25603.herokuapp.com/posts`)
      .then((response) => response.json())
      .then((data) => setManagePosts(data));
  }, []);

  const handleManageOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`https://pacific-escarpment-25603.herokuapp.com/posts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Delete Post");
            const remaining = managePosts.filter((row) => row._id !== id);
            setManagePosts(remaining);
          }
        });
    }
  };

  return (
    <div className="container">
      <h3>Total Posts {managePosts.length}</h3>
      <Row>
        {managePosts.map((managePosts) => (
          <Col
            xs={12}
            md={6}
            lg={4}
            key={managePosts._id}
            managePosts={managePosts}
          >
            <Card>
              <Card.Img
                className="card-img-style"
                variant="top"
                src={managePosts.picture}
              />
              <div className="p-3">
                <h3 gutterBottom component="div">
                  {managePosts.name}
                </h3>

                <Button
                  onClick={() => handleManageOrder(managePosts._id)}
                  variant="outline-danger"
                >
                  Delete
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ManageAllPostsByAdmin;
