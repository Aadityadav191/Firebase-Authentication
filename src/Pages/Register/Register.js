import React, { useState } from "react";
import "./Register.css";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import registerImage from "../../Assects/images/register.png";
import {Link,useNavigate}  from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


export default function Register() {
  const navigate = useNavigate(); 
  // Create a state object to store all form fields
  const [FormData, SetFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  // Handle input changes and update the relevant part of the formData object
  function handleOnChange(e) {
    const { name, value } = e.target;
    SetFormData({ ...FormData, [name]: value });
  }

  // Handle form submit and check for password confirmation
  
  const handleRegister = async (e) => {
    e.preventDefault();
    if (FormData.password !== FormData.confirmpassword) {
      toast("Password should be the same!");
      return;
    }

    try {
      // Create user with email, password  and first name
      await createUserWithEmailAndPassword(
        auth,
        FormData.email,
        FormData.password
      );
      alert("Account created successfully!");

      // Reset the form fields after successful registration
      SetFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
      });

      // Navigate to the login page
       navigate("/Login"); 
       
    } catch (err) {
      // Handle errors (optional)
      // alert("Error: " + err.message);
      toast("Error: " + err.message);
    }
  };

  return (
    <>
      <main>
        <form className="form" onSubmit={handleRegister}>
          <p className="title">Register</p>
          <p className="message">Signup now and get full access to our app.</p>

          <div className="flex">
            <label>
              <input
                required
                placeholder=""
                type="text"
                className="input"
                name="firstname"
                value={FormData.firstname}
                onChange={handleOnChange}
              />
              <span>Firstname</span>
            </label>

            <label>
              <input
                required
                placeholder=""
                type="text"
                className="input"
                name="lastname"
                value={FormData.lastname}
                onChange={handleOnChange}
              />
              <span>Lastname</span>
            </label>
          </div>

          <label>
            <input
              required
              placeholder=""
              type="email"
              className="input"
              name="email"
              value={FormData.email}
              onChange={handleOnChange}
            />
            <span>Email</span>
          </label>

          <label>
            <input
              required
              placeholder=""
              type="password"
              className="input"
              name="password"
              value={FormData.password}
              onChange={handleOnChange}
            />
            <span>Password</span>
          </label>

          <label>
            <input
              required
              placeholder=""
              type="password"
              className="input"
              name="confirmpassword"
              value={FormData.confirmpassword}
              onChange={handleOnChange}
            />
            <span>Confirm Password</span>
          </label>

          <button className="submit">Submit</button>

          <p className="signin">
            Already have an account?{" "}
            <Link to="/Login">
            <a href="/">Sign In</a>
            </Link>
          </p>        
        </form>
        <ToastContainer />
        <div>
          <img src={registerImage} alt="Register" width="600" height="500" />
        </div>
      </main>
    </>
  );
}
