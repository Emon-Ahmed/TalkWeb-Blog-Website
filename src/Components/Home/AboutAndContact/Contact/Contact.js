import React from "react";

const Contact = () => {
  return (
    <div className="bg-white p-4 my-3">
      <h3 className="mb-4 mt-2">If You Need Any Query!!!</h3>
      <form className="mb-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Your Message
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-dark active py-2 px-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
