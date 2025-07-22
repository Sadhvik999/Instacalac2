import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import "./common.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <div>
      <nav>
        <h2>INSTACALC</h2>
        <div className='login-signup'>
          {!user && (
          <>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>SignUp</button>
          </>
          )}
        </div>
        <div className='logout'>
          {user && (
          <button
            onClick={() => {
              auth.signOut();
            }}
            className="logout-btn"
          >
            Logout
          </button>
        )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
