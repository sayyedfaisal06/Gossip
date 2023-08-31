import { Link } from "react-router-dom";
import { Input, Button } from "../../components";
const Login = () => {
  return (
    <div className="authWrapper">
      <div className="authLeft">Left</div>
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
          <Input
            type="password"
            showLabel={true}
            labelText="Confirm Password"
            borderType="outline"
            customError={false}
            error="Confirm Password is required"
          />
        </div>
        <div className="rememberMe">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Remember Me</label>
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
