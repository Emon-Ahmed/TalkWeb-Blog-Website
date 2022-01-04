import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container mt-5">
      <h2 className="text-center text-black ">Have Some Question?</h2>
      <div className="row container mx-auto p-4">
        <div className="col-md-6">
          <InputGroup className="mb-3">
            <FormControl placeholder="Your name" />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl placeholder="Your Email" />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl placeholder="Your Phone" />
          </InputGroup>
        </div>
        <div className="col-md-6">
          <InputGroup style={{ height: "140px" }}>
            <FormControl
              as="textarea"
              placeholder="Write your message"
              aria-label="With textarea"
            />
          </InputGroup>
        </div>
        <button
          className="btn btn-danger mx-auto my-3"
          style={{ width: "100%" }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
