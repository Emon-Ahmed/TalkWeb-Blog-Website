import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {

    /* props.course destructring */
    const {_id, name, picture, company, price} = product || '';

    return (
     
            
            <Col >
                  {/* card section using react bootstrap */}

        <Card className="card-style">

            {/*products image use dynamic */}
            <div className=" d-flex align-items-center justify-content-center ">
            <Card.Img className="card-img-style" variant="top" src={picture} />
            </div>

            {/*products name */}
            <Card.Title><h3 className="text-primary"> Name : {name}</h3></Card.Title>

            {/*products brand */}
            <Card.Title><h3 className="text-danger">Brand: {company} </h3></Card.Title>

            {/*products Fees */}
            <Card.Title><h3 className="text-primary">Price:   ${price}</h3></Card.Title>

       
            {/* button use dynamic */}
             <Link to={`/products/${_id}`}>
            <button className="btn btn-danger">Buy Now</button>
            </Link>
            
            </Card>
            
            </Col>
        
    );
};

export default Product;