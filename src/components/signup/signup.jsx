import React, { useState } from "react";
import "./signup.css";
import {createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  
  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <h2>Create an account</h2>
        <p className="subtext">Enter your details below to create your account</p>

        <form>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />

          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" onChange={(e) => setEmail(e.target.value)}/>

          <label>Password</label>
          <input type="password" placeholder="••••••••" />

          <label>Confirm Password</label>
          <input type="password" placeholder="••••••••" onChange={(e) => setPassword(e.target.value)}/>

          <button type="submit" className="btn signup-btn" onClick={handleEmailSignup}>Sign up</button>
          <button type="button" className="btn google-btn" onClick={handleGoogleLogin}>Sign up with Google</button>
        </form>

        <p className="login-text">
          Already have an account? <a href="login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;