import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, picture, price } = product || "";

  return (
    <Col>
      <Card className="card-style text-center">
        <div className="d-flex align-items-center justify-content-center">
          <Card.Img className="card-img-style" variant="top" src={picture} />
        </div>
        <div className="px-2 py-3">
          <Card.Title>
            <p className="text-primary text-black text-thin font-size">{name}</p>
          </Card.Title>
          <Card.Title>
            <p className="text-primary text-black price-font">${price}</p>
          </Card.Title>
          <Link to={`/products/${_id}`}>
            <button className="btn btn-outline-success w-75">Buy Now</button>
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default Product;
