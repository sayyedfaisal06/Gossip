import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "../../components";
import RegisterImg from "../../assets/register.svg";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    fullname: "",
    phoneNumber: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm((prevValue: any) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    // e.preventDefault();
    console.log(registerForm);
  };

  return (
    <div className="authWrapper">
      <div className="authLeft">
        <img src={RegisterImg} alt="Register Image" />
      </div>
      <div className="authRight">
        <div className="authWelcome">
          <h2>Welcome,</h2>
          <h3>Please Register</h3>
        </div>

        <div className="authInputs">
          <Input
            type="text"
            showLabel={true}
            labelText="Full Name"
            borderType="outline"
            customError={false}
            error="Full Name is required"
            name="fullname"
            value={registerForm.fullname}
            onChange={handleChange}
          />
          <Input
            type="text"
            showLabel={true}
            labelText="Username"
            borderType="outline"
            customError={false}
            error="Username is required"
            name="username"
            value={registerForm.username}
            onChange={handleChange}
          />
          <Input
            type="email"
            showLabel={true}
            labelText="Email"
            borderType="outline"
            customError={false}
            error="Email is required"
            name="email"
            value={registerForm.email}
            onChange={handleChange}
          />
          <Input
            type="text"
            showLabel={true}
            labelText="Phone"
            borderType="outline"
            customError={false}
            error="Phone is required"
            name="phoneNumber"
            value={registerForm.phoneNumber}
            onChange={handleChange}
          />
          <div className="authPasswordInputs">
            <Input
              type="password"
              showLabel={true}
              labelText="Password"
              borderType="outline"
              customError={false}
              error="Password is required"
              name="password"
              value={registerForm.password}
              onChange={handleChange}
            />
            <Input
              type="password"
              showLabel={true}
              labelText="Confirm Password"
              borderType="outline"
              customError={false}
              error="Confirm Password is required"
              name="cpassword"
              value={registerForm.cpassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button onClick={handleSubmit} variant="primary">
          Register
        </Button>
        <p className="navigateLink">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
