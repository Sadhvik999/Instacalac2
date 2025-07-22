import React from "react";

const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login to your account</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />

          <div className="password-row">
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>

          <button type="submit" className="btn login-btn">Login</button>
          <button type="button" className="btn google-btn">Login with Google</button>
        </form>

        <p className="signup-text">Don’t have an account? <a href="signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default LoginPage;

