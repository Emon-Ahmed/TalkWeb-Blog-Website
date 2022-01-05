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
            <Card className="card-style mb-3">
              {/* image use dynamic */}
              <Card.Img
                className="card-img-style"
                variant="top"
                src={manageProduct.picture}
              />

              {/* name use dynamic */}
              <Card.Body className="card-body-style text-center">
                <Card.Title>
                  <p className="text-primary text-black text-thin font-size">{manageProduct.name}</p>
                </Card.Title>
                <Card.Text> <p className="text-primary text-black price-font">${manageProduct.price}</p> </Card.Text>
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
