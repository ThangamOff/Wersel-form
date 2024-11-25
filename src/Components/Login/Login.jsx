import React from "react";
import "./Login.css";
import logo from '../../Assets/Images/logo.svg'
import data1 from '../../Assets/Images/data1.avif'
import { useState } from "react";

const Login = () => {
  const [inputs, setinputs] = useState({ email: "", password: "" });
  const [error, seterror] = useState({ email: false, password: false });
  function changedata(e) {
    console.log("gjdfkjb");
    
    let names = e.target.name;
    console.log(names);
    let values = e.target.value;
    console.log(values);
    setinputs({ ...inputs, [names]: values });
    seterror({...error,[names]:false})
  }
  console.log(inputs);
  function changedata1(params) {
    if (inputs.email == "" || inputs.password == "") {
      seterror({ ...error, email: true, password: true });
    }
  }
  console.log(error.email, error.password);

  return (
    <>
      <div className="login_container">
        <div className="form_container">
          <div className="login_left">
            <img src={data1} alt="" className="data_img" />
            <p>"Access made simple. Experience enhanced"</p>
          </div>

          <div className="login_right">
            <div className="form">
              <div className="header">
                <img src={logo} alt="" />
              </div>
              <div className="log_content">
                <div className="check">
                <input
                      type="text"
                      name="email"
                      onChange={changedata}
                      className={error.email ? "ch" : "ch1"}
                  />
                   <label for="name" className="labels1">Email Address</label>
                </div>
                  {error.email && <p title="">Please enter your Email address</p>}{" "}
                 <div className="check">
                 <input
                      type="password"
                      name="password"
                      onChange={changedata}
                      className={error.password ? "ch" : "ch1"}
                  />
                  <label for="name" className="labels1">Password</label>
                 </div>
                {error.password && <p title="">Please enter your Password</p>}
                <button onClick={changedata1}>LOGIN</button>
                <p className="forgot-password">Forgot Password? <a href="#">Click here to change</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
