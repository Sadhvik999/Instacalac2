import React from 'react';
import { Link } from 'react-router-dom';
import "./common.css"
const Navbar = () => (
  <div>
  <nav>
      <h2>INSTACALC</h2>
      <a href="login">Login</a>
      <a href="signup">Signup</a>
  </nav>
  </div>
);

export default Navbar;
