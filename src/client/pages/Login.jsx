import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AttendanceLogo from "../assets/logoattendance.png";
const Login = () => {
  const [data, setData] = useState({});
  const handleInputChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendForm = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + data.email + " " + data.password);
    event.preventDefault();
    fetch("http://localhost:9000/login/auth", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          history.push({
            pathname: "/courseslist",
            state: data,
          });
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };
  return (
    <main class="login">
      <form action="" class="login-form" onSubmit={sendForm}>
        <img src={AttendanceLogo} alt="" />
        <div class="form-block">
          <label for="email">EMAIL</label>
          <input
            type="email"
            id="email"
            placeholder="type your email"
            onChange={handleInputChange}
            name="email"
          />
        </div>
        <div class="form-block">
          <label for="password">PASSWORD</label>
          <input
            type="password"
            placeholder="*****"
            id="password"
            onChange={handleInputChange}
            name="password"
          />
        </div>
        <input type="submit" class="button primary-button" value="SIGN IN" />
      </form>
    </main>
  );
};

export default Login;
