import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { auth } from "../firebase";
import './styles/Auth.css'

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <button onClick={userSignOut} className="logout-button">Sign Out</button>
        </>
      ) : (
        <>
          {/* Nur anzeigen, wenn nicht angemeldet */}
          <Link to="/register" className="login-button">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthDetails;
