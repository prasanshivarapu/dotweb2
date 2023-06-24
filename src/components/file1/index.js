import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Fill from "../file3";
import "./index.css";

const SignupForm = () => {
  const [btn, setBtn] = useState(false);
  const [input1, setInput1] = useState("");
  const [password1, setPassword1] = useState("");
  const [error, seterror] = useState(false);
  const navigate = useNavigate();

  const eyeB = () => {
    setBtn((prevBtn) => !prevBtn);
  };

  const inputText = (event) => {
    setInput1(event.target.value);
  };

  const passwordText = (event) => {
    setPassword1(event.target.value);
  };

  const loginTo = (event) => {
    event.preventDefault();

    if (input1 === "prasan" && password1 === "prasan") {
      navigate("/fill");
    } else {
      seterror(true);
    }
  };

  const bt = btn ? <AiOutlineEye /> : <AiOutlineEyeInvisible />;
  const E = error ? "Username and password not matched" : "";
  return (
    <div className="main">
      <h1>Login</h1>
      <p>Easily Using</p>
      <p className="g">G</p>
      <p>OR Using Account Details</p>
      <form onSubmit={loginTo} className="main1">
        <input
          value={input1}
          className="input"
          onChange={inputText}
          type="text"
          placeholder="Your Username"
        />
        <div className="pass">
          <input
            value={password1}
            className="input5"
            onChange={passwordText}
            type={btn ? "text" : "password"}
            placeholder="Enter Password"
          />
          <button className="button5" onClick={eyeB} type="button">
            {bt}
          </button>
        </div>

        <div className="box">
          <div className="check">
            <input type="checkbox" />
            <p className="rem">Remember</p>
          </div>
          <p className="for">Forgot Password?</p>
        </div>
        <p className="e">{E}</p>
        <button className="button1" type="submit">
          {" "}
          Login
        </button>
      </form>
      <p>New to RentalApp?</p>
      <button className="button2" type="button">
        Register
      </button>
    </div>
  );
};

export default SignupForm;
