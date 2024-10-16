import React, { useState } from "react";
import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (event) => {
    setEmail(event.target.value);
  };

  const handleAdminSubmit = (event) => {
    const user = { email };

    fetch("https://talkweb-blog-website-server.onrender.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    event.target.reset();
    event.preventDefault();
  };

  return (
    <div className="container" style={{ marginBottom: "90px" }}>
      <h1>MakeAdmin</h1>
      <form onSubmit={handleAdminSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            onBlur={handleOnBlur}
            className="w-75"
            type="email"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <Button type="submit" variant="outline-danger">
          Make Admin
        </Button>{" "}
      </form>
      {/* success fully login and register message */}
      {success && <Alert severity="success">Make Admin Successfully</Alert>}
    </div>
  );
};

export default MakeAdmin;
