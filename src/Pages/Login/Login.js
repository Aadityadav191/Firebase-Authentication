import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import LoginIMG from "../../Assects/images/Login.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  function handleOnchange(e) {
    const { name, value } = e.target;
    setlogindata({ ...logindata, [name]: value });
  }

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        logindata.email,
        logindata.password
      );
      toast("Signed in successfully!");
      // Navigate to the Home page
      navigate("/Home",{ replace: true });
    } catch (err) {
      let errorMessage = "Something went wrong. Please try again.";

      // Customize specific error messages based on Firebase error codes
      if (err.code === "auth/invalid-credential") {
        errorMessage =
          "The credentials you entered are invalid. Please check your email and password.";
      } else if (err.code === "auth/user-not-found") {
        errorMessage =
          "No account found with that email. Please check and try again.";
      } else if (err.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please try again.";
      } else if (err.code === "auth/invalid-email") {
        errorMessage =
          "The email format is invalid. Please enter a valid email.";
      }

      // Displaying the custom error message
      toast(errorMessage);
    }
  };

  return (
    <>
      <main className="main-login">
        <form className="form-login" onSubmit={handlelogin}>
          <p className="form-title-login">Sign in to your account</p>
          <div className="input-container-login">
            <input
              required
              type="email"
              placeholder="Enter email"
              value={logindata.email}
              name="email"
              onChange={handleOnchange}
            />
            <span></span>
          </div>
          <div className="input-container-login">
            <input
              required
              type="password"
              placeholder="Enter password"
              value={logindata.password}
              name="password"
              onChange={handleOnchange}
            />
          </div>
          <button type="submit" className="submit-login">
            Sign in
          </button>
          <p className="signup-link-login">
            No account?
            <Link to="/">
              <a href="/">Sign up</a>
            </Link>
          </p>
        </form>

        <div>
          <img src={LoginIMG} alt="Login" width="500" height="500" />
        </div>
      </main>
      
    </>
  );
}
