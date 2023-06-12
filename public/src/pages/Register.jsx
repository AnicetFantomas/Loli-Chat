import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form");
  };

  const handleChange = (e) => {

  };

  return (
    <FormContainer>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="brand">
          <img src={Logo} alt="logo" />
          <h1>snappy</h1>
        </div>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="confirm password"
          name="confrmPassword"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Create User</button>
        <span>Already have an account? <Link to="/login">Login</Link></span>
      </form>
    </FormContainer>
  );
};
const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #131324;
  .brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      img {
          height: 5rem;
      }
  }
  `;

export default Register;
