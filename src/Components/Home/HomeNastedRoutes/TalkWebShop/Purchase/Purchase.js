import React, { useEffect, useState } from "react";
import { Alert, Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Purchase = () => {
  const user = useSelector((state) => state.user);
  const { productId } = useParams();
  const initialInfo = {
    userName: "",
    email: "",
    phone: "",
    address: "",
    status: "Pending",
  };

  const [orderInfo, setOrderInfo] = useState(initialInfo);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [purchase, setPurchase] = useState({});

  useEffect(() => {
    fetch(
      `https://talkweb-blog-website-server.onrender.com/products/${productId}`
    )
      .then((res) => res.json())
      .then((data) => setPurchase(data[0]));
  }, [productId]);

  const handleOnBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value;
    setOrderInfo(newInfo);
  };
  const handlePurchase = (event) => {
    alert("Purchasing");
    const order = {
      ...orderInfo,
      productId,
      orderName: purchase.name,
    };
    fetch("https://talkweb-blog-website-server.onrender.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setOrderSuccess(true);
        }
      });
    event.target.reset();
    event.preventDefault();
  };

  return (
    <div>
      <div className="mt-3 mb-4">
        <div className="d-flex bg-white p-4">
          <div className="w-50">
            <Card.Img className="w-100" variant="top" src={purchase?.picture} />
          </div>
          <div className="w-50">
            <Card.Body>
              <Card.Title>
                <p className="text-primary text-black text-thin font-size h1">
                  {purchase?.name}
                </p>
              </Card.Title>
              <Card.Title>
                <p className="text-primary text-black price-font my-3">
                  ${purchase?.price}
                </p>
              </Card.Title>
              <Card.Title>
                <p className="text-primary text-black text-thin font-size my-3">
                  {purchase?.about}
                </p>
              </Card.Title>
              <Card.Title>
                <a
                  href="#checkout"
                  className="btn btn-outline-dark active py-2 px-4"
                >
                  Checkout
                </a>
              </Card.Title>
            </Card.Body>
          </div>
        </div>
      </div>

      {orderSuccess && (
        <Alert severity="success">
          Order successfully! <Link to="/dashboard/manageAllOrders">Check</Link>{" "}
        </Alert>
      )}
      <div>
        <Card id="checkout" className="p-5">
          <h3 className="ml-5">Checkout</h3>

          {/*---------- using form ---------- */}

          <Form
            style={{ width: "85%", marginTop: "20px", marginBottom: "20px" }}
            onSubmit={handlePurchase}
          >
            <FloatingLabel
              onBlur={handleOnBlur}
              className="mb-3"
              controlId="floatingInput"
              label=" Your Name"
            >
              <Form.Control name="userName" type="Text" />
            </FloatingLabel>

            <FloatingLabel
              onBlur={handleOnBlur}
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
              defaultValue={user?.currentUser?.email}
            >
              <Form.Control name="email" type="email" />
            </FloatingLabel>

            <Form.Control
              name="price"
              onBlur={handleOnBlur}
              className="mb-3"
              disabled
              defaultValue={purchase?.price}
              type="number"
            />

            <Form.Control
              onBlur={handleOnBlur}
              className="mb-3"
              disabled
              defaultValue={purchase.name}
              type="text"
            />

            <Form.Control
              name="productName"
              onBlur={handleOnBlur}
              className="mb-3"
              disabled
              defaultValue={productId}
              type="text"
            />

            <FloatingLabel
              onBlur={handleOnBlur}
              className="mb-3"
              controlId="floatingInput"
              label="Shipping Address"
            >
              <Form.Control name="address" type="Text" />
            </FloatingLabel>

            <Button
              type="submit"
              className="btn btn-outline-dark active py-2 px-4"
            >
              Purchase
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Purchase;
