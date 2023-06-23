import { Component } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import "./index.css";

class SignupForm extends Component {
  state = { btn: false };

  eyeB = () => {
    this.setState((p) => ({ btn: !p.btn }));
  };

  render() {
    const { btn } = this.state;
    const bt = btn ? <AiOutlineEye /> : <AiOutlineEyeInvisible />;
    return (
      <div className="main">
        <h1>Login</h1>
        <p>Easily Using</p>
        <p className="g">G</p>
        <p>OR Using Account Details</p>
        <form onSubmit={this.login} className="main1">
          <input className="input" type="text" placeholder="Your Username" />
          <div className="pass">
            <input
              className="input5"
              type={btn ? "text" : "password"}
              placeholder="Enter Password"
            />
            <button className="button5" onClick={this.eyeB} type="button">
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
  }
}

export default SignupForm;
