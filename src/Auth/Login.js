import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         username: username,
         password: password,
        //username: "kminchelle",
        //password: "0lelplR",
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.token) {
          localStorage.setItem("token", data?.token);
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleLogin}>
            <h2 className="mb-4">Login</h2>

            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Email address
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="...username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
