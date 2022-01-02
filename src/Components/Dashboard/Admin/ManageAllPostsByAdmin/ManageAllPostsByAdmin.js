import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './ManageAllPostsByAdmin.css';

const ManageAllPostsByAdmin = () => {
    
   // useState declare
   const [managePosts, setManagePosts ] = useState([]);


   // data load from database
   useEffect(() => {
       fetch(`http://localhost:5000/posts`)
       .then(response => response.json())
       .then(data => setManagePosts(data))
   }, [])



   const handleManageOrder = (id) => {
      
       const proceed = window.confirm('Are you sure, you want to delete?');
       if (proceed) {
       fetch(`http://localhost:5000/posts/${id}`, {
         method: "DELETE"
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.deletedCount) {
             alert ('Delete Post')
             const remaining = managePosts.filter(row => row._id !==id);
             setManagePosts(remaining);
           }
         });
       };
     }; 
 


    return (
        <div className='container'> 
        <h3>Total Posts {managePosts.length}</h3>
            <Row >
           
                {
                   managePosts.map(managePosts => <Col  xs={12} md={6} lg={4}
                        key = {managePosts._id}
                        managePosts = {managePosts}  
                        
                                            
                    >
                        
                            <Card>
                             <Card.Img className="card-img-style" variant="top" src={managePosts.picture} />
                               
                                <h3  gutterBottom component="div">
                                    {managePosts.name}
                                </h3>
                                
                        
                            {/* delete button */}
                                <Button onClick={() => handleManageOrder(managePosts._id)} variant="outline-danger">Delete</Button>

                         </Card>       
                                             
              </Col>)                      
                }

             </Row>                
    </div>
    );
};

export default ManageAllPostsByAdmin;