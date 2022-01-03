import React, {useSate} from "react";

export const Account = () => {
    
    const [state, setState] = useSate({
        email: "",
        password: ""
    })
    const {email, password} = state;
    const handleLogin = () => {
    }
    const handleGoogle = () =>{
    }
    const handleRegister = () =>{
    }
    const handleChange = () => {
    }
  return (
    <div className="container d-flex my-5 py-5">
      <div className="w-50 mx-2">
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
          <button type="button" className="btn btn-outline-dark active my-2 py-2 px-4" onClick={handleLogin}>Login</button>
          <button type="button" className="btn btn-outline-dark active my-2 py-2 px-4 mx-2" onClick={handleGoogle}>Google</button>
        </div>
      </div>
      <div className="w-50 mx-2">
        <h1>Register</h1>
        <div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="emailReg"
              value={email}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="passwordReg"
              value={password}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button type="button" className="btn btn-outline-dark active my-2 px-5 py-2" onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
};
