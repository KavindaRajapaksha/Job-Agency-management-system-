import React, { useState } from "react";
import "./login.css";
import NavBar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../pages/register"
import axios from "axios";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login">
      <div className="nav">
        <NavBar />{" "}
      </div>
      <div className="login-register-card">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <p onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Register here."
            : "Already have an account? Login here."}
        </p>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const navigate = useNavigate();
  //email  and  password statesa
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 



  //submit
  const submitHandler =  (e) => {
    

    e.preventDefault();
     //send data to backend
  const url = "http://localhost:8070/login";
  const data = { email, password };
  axios.post(url, data).then((res) => {
    console.log(res);
    if (res.data.status === 200) {
      navigate("/service");
    } else {
      alert(res.data.message);
    }
  });
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">Email</label>
      <input
        type="email"
        placeholder="someone@gmail.com"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        name="password"
      
        required
      />

      <button>
        Login
      </button>
    </form>
  );
};


export default Login;

