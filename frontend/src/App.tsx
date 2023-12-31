import { Routes, Route } from "react-router-dom";
import {
  Home,
  ForgottenPassword,
  Login,
  Register,
  ResetPassword,
} from "./screens";
import RequireAuth from "./config/RequireAuth";

const App = () => {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="forgot-password" element={<ForgottenPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default App;
