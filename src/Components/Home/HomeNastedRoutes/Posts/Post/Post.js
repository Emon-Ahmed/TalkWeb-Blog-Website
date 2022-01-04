import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FcAdvance } from "react-icons/fc";


const Post = (props) => {
  const { _id, name, posts } = props?.post || {};

  return (
    <Col>
      <Card className="card-style">
        <Link to={`/posts/${_id}`}>
          <Card.Body className="card-body-style">
            <Card.Title>
              <h2 className="text">{name.slice(0,80)}</h2>
            </Card.Title>
            <Card.Text>
              <p className="text">{posts.slice(0,240)} <span className="fw-bold text-black"> {" "}
              <FcAdvance /> Read More</span></p>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default Post;
