import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./styles/Login.css";
import logo from "../images/PULSE-negative.png";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const emailRef = useRef();
  const pwdRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(auth, email, pwd);
      console.log(response);
      if (response.user.accessToken) {
        // success login
        setErrMsg("");
        navigate("/myProfile"); // navigate to my profile component
      } else {
        setErrMsg("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      if (
        err.code === "auth/user-not-found" ||
        err.code === "auth/wrong-password"
      ) {
        setErrMsg("Invalid email or password");
      } else {
        setErrMsg("Login failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="App-2">
      <section className="section-1">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <div className="section-top">
          <a href="/">
            <img className="logo-login" src={logo} alt="logo" />
          </a>
          <h1 className="login">Log In</h1>
          <p>Unlock Your Creative Journey: Register and Explore!</p>
        </div>
        <form className="form-1" onSubmit={handleSubmit}>
          <div className="input-label">
            <label className="label-1" htmlFor="email">
              Email:
            </label>
            <input
              className="input-1"
              type="email"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="input-label">
            <label className="label-1" htmlFor="password">
              Password:
            </label>
            <input
              className="input-1"
              type="password"
              id="password"
              ref={pwdRef}
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </div>
          <button className="button-1 sign-in" type="submit">
            Sign In
          </button>
        </form>
        <div className="register-end">
          <p>
            Don't have an account?{" "}
            <span className="line">
              <Link to="/register">Sign Up</Link>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
