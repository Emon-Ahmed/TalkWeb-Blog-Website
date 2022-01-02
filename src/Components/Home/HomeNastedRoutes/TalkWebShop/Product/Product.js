import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    /* props.course destructring */
    const {_id ,teacherName, courseName, picture, courseFee} = props?.product || {}

    return (
     
            
            <Col >
                  {/* card section using react bootstrap */}

        <Card className="card-style">

            {/*extra course image use dynamic */}
            <div className=" d-flex align-items-center justify-content-center ">
            <Card.Img className="card-img-style" variant="top" src={picture} />
            </div>

            {/*extra course name use dynamic */}
            <Card.Body className="card-body-style">
            <Card.Title><h2>{courseName}</h2></Card.Title>
            

            {/*extra course fee use dynamic */}
            <h4> 
            <Card.Text>
            <b>Course fee:</b> {courseFee} 
            </Card.Text>
            </h4>

            {/*extra course teacher name use dynamic */}
            <h4> 
            <Card.Text>
            <b>Teacher Name:</b> {teacherName}
            </Card.Text>
            </h4>

                        

            {/* button use dynamic */}
             <Link to={`purchase/${_id}`}>
            <button className="btn btn-danger">Buy Now</button>
            </Link>
            
            </Card.Body>
            </Card>
            
            </Col>
        
    );
};

export default Product;