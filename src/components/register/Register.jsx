import React from "react";
import { Link } from "react-router-dom";
import "./Regsiter.css";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };

  return (
    <div className="body">
      <section className="signup-container">
        {/* <!-- Signup Section --> */}
        <div className="form signup">
          <h3>Signup</h3>
          <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Full name" required />
            <input
              name="email"
              type="text "
              placeholder="Email address"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
            />

            <input type="submit" value="Signup" />
          </form>
        </div>
        <div className="text-container">
          <span className="inner-text">Already have an account?</span>
          <Link to="/login">Login</Link>
        </div>
      </section>
    </div>
  );
};

export default Register;
