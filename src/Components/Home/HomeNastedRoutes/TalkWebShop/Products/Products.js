import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  // product state declare
  const [products, setProducts] = useState([]);

  // useEffect use and fatch call api
  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="service-style py-4">
      <div className="container p-2">
        <h1 className="text-danger p-2 b-4">
          Total products : {products.length}
        </h1>

        <Row xs={1} md={2} lg={3} className="g-4">
          {/* single product maping */}
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Products;
