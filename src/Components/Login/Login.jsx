import React from "react";
import "./Login.css";
import logo from '../../Assets/Images/logo.svg'
import data from '../../Assets/Images/data.jpg'
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
                  <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      onChange={changedata}
                      className={error.email ? "ch" : "ch1"}
                  />
                  {error.email && <p title="">Please enter your Email address</p>}{" "}
                  <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={changedata}
                      className={error.password ? "ch" : "ch1"}
                  />
                {error.password && <p title="">Please enter your Password</p>}
                <button onClick={changedata1}>LOGIN</button>
                <p>Forget Password ? Click here to change</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
