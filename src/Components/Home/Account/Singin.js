import React, { useState } from "react";

export const Singin = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const {email, password} = state;
    const handleLogin = () => {
    }
    const handleChange = () => {
    }
  return (
    <div>
      <div className="container d-flex my-5 py-5">
        <div className="w-75 mx-2">
          <h1>Login</h1>
          <div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button
              type="button"
              className="btn btn-outline-dark active my-2 py-2 px-4"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-outline-dark active my-2 py-2 px-4 mx-2"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
