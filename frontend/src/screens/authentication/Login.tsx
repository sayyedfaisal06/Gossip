import { Link } from "react-router-dom";
import { Input, Button } from "../../components";
import LoginImg from "../../assets/login.svg";
const Login = () => {
  return (
    <div className="authWrapper">
      <div className="authLeft">
        <img src={LoginImg} alt="Login Image" />
      </div>
      <div className="authRight">
        <div className="authWelcome">
          <h2>Welcome back,</h2>
          <h3>Please Login</h3>
        </div>

        <div className="authInputs login">
          <Input
            type="text"
            showLabel={true}
            labelText="Username or Email"
            borderType="outline"
            customError={false}
            error="Username or Email is required"
          />
          <Input
            type="password"
            showLabel={true}
            labelText="Password"
            borderType="outline"
            customError={false}
            error="Password is required"
          />
        </div>
        <div className="rememberMe">
          <div className="check">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <p className="navigateLink">
            <Link to="/forgot-password">Forget Password</Link>
          </p>
        </div>
        <Button variant="primary">Login</Button>
        <p className="navigateLink">
          Create new account <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
