import { Link } from "react-router-dom";
import ForgetImg from "../../assets/forget.svg";
import { Button, Input } from "../../components";

const ForgottenPassword = () => {
  return (
    <div className="authWrapper">
      <div className="authLeft">
        <img src={ForgetImg} alt="Forget Image" />
      </div>
      <div className="authRight">
        <div className="authWelcome">
          <h2>Forget Password,</h2>
          <h3>We got you</h3>
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
        </div>
        <Button variant="primary">Forget</Button>
        <p className="navigateLink">
          Go back to <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgottenPassword;
