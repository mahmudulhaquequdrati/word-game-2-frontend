import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./Regsiter.css";

const Register = () => {
  const navigate = useNavigate();
  const date = new Date().toLocaleDateString();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    const users = {
      // item_name: phone_details.phone_name,
      user_name: name,
      email: email,
      password: password,
      date,
    };

    fetch("http://localhost:5000/users/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Register Successfully")
          navigate("/login");
        } 
else {
         toast.error("Please enter valid input");
        }
      });
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
