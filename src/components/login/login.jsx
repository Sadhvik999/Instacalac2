import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../lib/firebase";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault(); 
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
};

  const handleGoogleLogin = async (e) => {
    e.preventDefault()
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
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login to your account</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com"onChange={(e) => setEmail(e.target.value)}/>

          <div className="password-row">
            <label>Password</label>
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <button type="submit" className="btn login-btn" onClick={handleEmailLogin}>Login</button>
          <button type="button" className="btn google-btn" onClick={handleGoogleLogin}>Login with Google</button>
        </form>

        <p className="signup-text">Don’t have an account? <a href="signup">Create account</a></p>
      </div>
    </div>
  );
};

export default LoginPage;