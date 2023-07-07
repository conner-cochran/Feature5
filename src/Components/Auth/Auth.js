import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";

const AuthModule = () => {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate("/Main");
  };
  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/Account");
    }
  }, [navigate]);

  return (
    <section>
      <h1>Account Page</h1>
      <p>This is the Account section</p>
      <button onClick={buttonHandler}>Home</button>
      <h4>Welcome to Cookbook Helper!</h4>
      <div>
        <Link to="/auth/register">
          <button>Register</button>
        </Link>
        <br />
        <br />
        <Link to="/auth/login">
          <button>Login</button>
        </Link>
      </div>
    </section>
  );
};

export default AuthModule;
