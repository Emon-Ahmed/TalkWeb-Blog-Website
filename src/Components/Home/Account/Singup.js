import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerInitiate } from "../../../Redux/Action";

export const Singup = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.currentUser) {
      navigate("/");
    }
  }, [user, navigate]);
  const dispatch = useDispatch();
  const { email, password } = state;
  const handleRegister = () => {
    dispatch(registerInitiate(email, password));
    setState({ email: "" });
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div>
      <div className="container d-flex my-5 py-5">
        <div className="w-100 mx-2">
          <h1 className="pb-2">Register</h1>
          <div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                value={email}
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
                value={password}
                onChange={handleChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button
              type="button"
              className="btn btn-outline-dark active my-2 px-5 py-2"
              onClick={handleRegister}
            >
              Register
            </button>
            <Link to="/signin">
              <button
                type="button"
                className="btn btn-outline-dark my-2 py-2 px-4 mx-2"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
