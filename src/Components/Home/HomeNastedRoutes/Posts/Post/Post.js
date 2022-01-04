import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  /* props.post destructring */
  const { _id, name } = props?.post || {};

  return (
    <Col>
      {/* card section using react bootstrap */}

      <Card className="card-style">
        <Link to={`/posts/${_id}`}>
          <Card.Body className="card-body-style">
            <Card.Title>
              <h2>{name}</h2>
            </Card.Title>

            {/* button use dynamic */}
            {/*  <Link to={`/extraCourseDetails/${_id}`}>
            <button className="btn btn-danger">Join Now</button>
          </Link> */}
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default Post;
