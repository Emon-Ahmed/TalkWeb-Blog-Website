import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, picture, company, price } = product || "";

  return (
    <Col>
      <Card className="card-style">
        <div className=" d-flex align-items-center justify-content-center ">
          <Card.Img className="card-img-style" variant="top" src={picture} />
        </div>
        <div className="p-3">
        <Card.Title>
          <h3 className="text-primary"> Name : {name}</h3>
        </Card.Title>
        <Card.Title>
          <h3 className="text-primary">Price: ${price}</h3>
        </Card.Title>
        <Link to={`/products/${_id}`}>
          <button className="btn btn-danger">Buy Now</button>
        </Link>
        </div>
      </Card>
    </Col>
  );
};

export default Product;
