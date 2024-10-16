import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const ManageAllPostsByAdmin = () => {
  const [managePosts, setManagePosts] = useState([]);

  useEffect(() => {
    fetch(`https://talkweb-blog-website-server.onrender.com/posts`)
      .then((response) => response.json())
      .then((data) => setManagePosts(data));
  }, []);

  const handleManageOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`https://talkweb-blog-website-server.onrender.com/posts/${id}`, {
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
                <p
                  className="text-primary text-black  font-size"
                  gutterBottom
                  component="div"
                >
                  {managePosts.name}
                </p>

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
