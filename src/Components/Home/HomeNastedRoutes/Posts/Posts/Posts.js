import React, { useEffect, useState } from 'react';
import { Col,  Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
          <aside className="rounded p-3 aside-bg text-secondary ">
               <p><NavLink className='link-style'  to="/home">Home</NavLink></p> 
               <p><NavLink className='link-style'  to="/posts">Blog</NavLink></p>
               <p><NavLink className='link-style'  to="/addPost">Create Post</NavLink></p>
               <p><NavLink className='link-style'  to="/addProduct">Add Product</NavLink></p>
               <p><NavLink className='link-style'  to="/products">TalkWeb Shop</NavLink></p>
               <p><NavLink className='link-style'  to="/manageProducts">Manage Products</NavLink></p>
               <p><NavLink className='link-style'  to="/managePosts">Manage Posts</NavLink></p>
               <p><NavLink className='link-style'  to="/manageAllOrders">Manage Orders</NavLink></p>

              <h4 className='text-dark'>Others</h4>
               <p><NavLink className='link-style'  to="/privacyPolicy">Privacy Policy</NavLink></p>
               <p><NavLink className='link-style'  to="/faq">FAQ</NavLink></p>
               <p><NavLink className='link-style'  to="/termsOfUse">Terms & Condition</NavLink></p>
               <p><NavLink className='link-style'  to="/sponsors">Sponsors</NavLink></p>
               <p><NavLink className='link-style'  to="/contact">Contact</NavLink></p>
               <p><NavLink className='link-style'  to="/about">About</NavLink></p>

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