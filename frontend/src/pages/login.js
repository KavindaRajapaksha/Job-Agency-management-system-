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

  return (
    <form>
      <label htmlFor="username">Email</label>
      <input
        type="email"
        placeholder="someone@gmail.com"
        name="email"
        onChange={handleChange}
        value={data.email}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={data.password}
        required
      />

      <button type="submit" onClick={()=>{navigate("/service")}}>
        Login
      </button>
    </form>
  );
};


export default Login;

