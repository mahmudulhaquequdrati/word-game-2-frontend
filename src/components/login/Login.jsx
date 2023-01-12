import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div className="body">
      <section className="login-container">
        {/* <!-- Login Section --> */}
        <div className="form login">
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <input type="text " placeholder="Email address" required />
            <input type="password" placeholder="Password" required />

            <input type="submit" value="login" />
          </form>
        </div>
        <div className="text-container">
          <span className="inner-text">Need an account?</span>
          <Link to="/register">Signup</Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
