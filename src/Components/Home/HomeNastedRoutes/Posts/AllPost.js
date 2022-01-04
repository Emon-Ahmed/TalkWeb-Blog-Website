import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "../../Slider/Slider";
import Post from "./Post/Post";

const AllPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch(`https://pacific-escarpment-25603.herokuapp.com/posts`)
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }, []);
  return (
    <div>
      <Col xs={12} md={12} lg={12}>
        <div className="mb-4"><Slider /></div>
        <Row xs={1} md={1} lg={1} className="g-4">
          {/* single post maping */}
          {posts.map((post) => (
            <Post key={post._id} post={post}></Post>
          )).slice(0,5)}
        </Row>
      </Col>
    </div>
  );
};

export default AllPost;
