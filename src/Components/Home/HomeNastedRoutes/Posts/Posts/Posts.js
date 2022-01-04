import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Post from "../Post/Post";


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <Col xs={12} md={12} lg={12}>
        <Row xs={1} md={1} lg={1} className="g-4">
          {/* single post maping */}
          {posts.map((post) => (
            <Post key={post._id} post={post}></Post>
          ))}
        </Row>
      </Col>
    </div>
    )
}

export default Posts;
