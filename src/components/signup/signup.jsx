import React from "react";

const SignupPage = () => {
  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <h2>Create an account</h2>
        <p className="subtext">Enter your details below to create your account</p>

        <form>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />

          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />

          <label>Password</label>
          <input type="password" placeholder="••••••••" />

          <label>Confirm Password</label>
          <input type="password" placeholder="••••••••" />

          <button type="submit" className="btn signup-btn">Sign up</button>
          <button type="button" className="btn google-btn">Sign up with Google</button>
        </form>

        <p className="login-text">
          Already have an account? <a href="login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;