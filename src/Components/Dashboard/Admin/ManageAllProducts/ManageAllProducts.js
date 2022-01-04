import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const ManageAllProducts = () => {
  const [manageProducts, setManageProducts] = useState([]);

  useEffect(() => {
    fetch(`https://pacific-escarpment-25603.herokuapp.com/products`)
      .then((response) => response.json())
      .then((data) => setManageProducts(data));
  }, []);

  const handleManageOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`https://pacific-escarpment-25603.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Cancle Order");
            const remaining = manageProducts.filter((row) => row._id !== id);
            setManageProducts(remaining);
          }
        });
    }
  };

  return (
    <div className="container">
      <h3>Total Products {manageProducts.length}</h3>
      <Row>
        {manageProducts.map((manageProduct) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            key={manageProduct._id}
            manageproduct={manageProduct}
          >
            <Card className="card-style">
              {/* image use dynamic */}
              <Card.Img
                className="card-img-style"
                variant="top"
                src={manageProduct.picture}
              />

              {/* name use dynamic */}
              <Card.Body className="card-body-style">
                <Card.Title>
                  <h2>{manageProduct.name}</h2>
                </Card.Title>
                <Card.Text>Price: ${manageProduct.price}</Card.Text>
                <Button
                  onClick={() => handleManageOrder(manageProduct._id)}
                  variant="outline-danger"
                >
                  Delete Product
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ManageAllProducts;
