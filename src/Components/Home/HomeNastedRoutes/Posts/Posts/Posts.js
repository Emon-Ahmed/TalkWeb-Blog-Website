import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
      // post state declare
      const [posts, setPosts] = useState([]);


      // useEffect use and fatch call api
      useEffect(() => {
          fetch(`http://localhost:5000/posts`)
          .then(response => response.json())
          .then(data => setPosts(data))
      }, [])
  
    return (
        <div className="container service-style py-4">    
             
           
     <Row >

        <Col xs={12} md={12} lg={3}>
          <aside>
                My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!
          </aside>  
        </Col>
        <Col xs={12} md={12} lg={9}>

            <h1 className="text-danger pb-4">Total Posts : {posts.length}</h1> 

                <Row xs={1} md={1} lg={1} className="g-4">
            

            {/* single post maping */}
                {
                        posts.map(post => <Post
                            key = {post._id}
                            post = {post}
                            >

                            </Post>
                            )
                    }

            </Row>
         </Col>
       
        </Row>
  
        </div>
    );
};

export default Posts;