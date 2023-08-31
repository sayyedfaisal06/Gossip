import { Link } from "react-router-dom";
import { Input, Button } from "../../components";

const Register = () => {
  return (
    <div className="authWrapper">
      <div className="authLeft">Left</div>
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
          />
          <Input
            type="text"
            showLabel={true}
            labelText="Username"
            borderType="outline"
            customError={false}
            error="Username is required"
          />
          <Input
            type="email"
            showLabel={true}
            labelText="Email"
            borderType="outline"
            customError={false}
            error="Email is required"
          />
          <Input
            type="text"
            showLabel={true}
            labelText="Phone"
            borderType="outline"
            customError={false}
            error="Phone is required"
          />
          <div className="authPasswordInputs">
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
        </div>

        <Button variant="primary">Register</Button>
        <p className="navigateLink">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
