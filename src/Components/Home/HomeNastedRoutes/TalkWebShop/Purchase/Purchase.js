import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, FloatingLabel, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Purchase.css';

const Purchase = () => {
    
    const { purchaseId } = useParams();

    // initial state declare
    // const initialInfo = {userName: user.displayName, email: user.email, phone: '', address: '', status : 'Pending'}
    const initialInfo = {userName: '', email: '', phone: '', address: '', status : 'Pending'}

    // order info state declare
    const [orderInfo, setOrderInfo] = useState(initialInfo);

   // success message
    const [orderSuccess, setOrderSuccess] = useState(false)


    // parchase data load state declare
    const [purchase, setPurchase] = useState({});

   // load data
    useEffect(() => {
        fetch(`http://localhost:5000/products/${purchaseId}`)
          .then(res => res.json())
        
          .then(data => setPurchase(data));
      }, [purchaseId]); 


  // handle on Blur 
      const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newInfo = {...orderInfo};
        newInfo[field] = value;
        setOrderInfo(newInfo);
     
    } 




      const handlePurchase = event => {

   
    
        alert ('Purchasing');

        // collect data
        const order = {
          ...orderInfo,
          purchaseId,
          orderName: purchase.name,
      }
        
    

         // send to the server 
        fetch('http://localhost:5000/orders', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(order)
     })
     .then(res => res.json())
     .then( data => {

         if(data.insertedId) {           
            setOrderSuccess(true);
        }        
     })      
        event.target.reset();
        event.preventDefault();
      }


 
    return (
        <div className='container'>
            <h2 className="text-center text-info p-5"> Order Id:  {purchaseId}</h2>


                <div className="container mb-5">


                    {/* card from react bootstrap */}
                <Card>

                    {/*  single service image */}
                    <div >
                    <Card.Img className=" h-100 w-100 " variant="top" src={purchase?.picture} />
                    </div>

                    {/* card body */}
                    <Card.Body className="bg-light">

                        {/*products name */}
                    <Card.Title><h3 className="text-primary"> Name : {purchase?.name}</h3></Card.Title>

                        {/*products brand */}
                    <Card.Title><h3 className="text-danger">Brand: {purchase?.company} </h3></Card.Title>

                        {/*products Fees */}
                    <Card.Title><h3 className="text-primary">Price:   ${purchase?.price}</h3></Card.Title>

                        {/*products details */}
                    <Card.Title><h3 className="text-primary">{purchase?.about}</h3></Card.Title>


                    </Card.Body>
                </Card>
                </div>
                
         {orderSuccess && <Alert severity="success">Order successfully!</Alert>}
         <div>
           <Card className='p-5'>
              
          <h4 className='ml-5'>
           Product Name:  {purchase.name}
          </h4>
          
        
        
          {/*---------- using form ---------- */}
           
           <Form style={{width: "85%", marginTop: '20px', marginBottom : "20px"}}  onSubmit={handlePurchase}>
          
           <Form.Control  onBlur={handleOnBlur} className="mb-3" disabled defaultValue={purchaseId} type="text"  />
              
               <FloatingLabel
                onBlur={handleOnBlur}
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control name="email" type="email"  />
            </FloatingLabel>


            <FloatingLabel onBlur={handleOnBlur} className="mb-3"  controlId="floatingInput" label=" Your Name">
                <Form.Control  name="userName"  type="Text"  />
            </FloatingLabel>


            <FloatingLabel onBlur={handleOnBlur} className="mb-3"  controlId="floatingInput" label="Mobile Number">
                <Form.Control  name="phone"  type="number"  />
            </FloatingLabel>

            <Form.Control  name="price" onBlur={handleOnBlur} className="mb-3" disabled defaultValue={purchase?.price} type="number"  />
            
            <Form.Control  name="productName" onBlur={handleOnBlur} className="mb-3" disabled defaultValue={purchase?.name} type="text"  />
                     
            <FloatingLabel onBlur={handleOnBlur} className="mb-3"  controlId="floatingInput" label="Shipping Address">
                <Form.Control  name="address"  type="Text" />
            </FloatingLabel>

               <Button  type="submit" variant="secondary">Purchase</Button>
           </Form>
            
           </Card>  
        </div>
           

       </div>
    );
};

export default Purchase;