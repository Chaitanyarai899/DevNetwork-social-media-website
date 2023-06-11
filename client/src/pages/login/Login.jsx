import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "Rishabh",
    password: "9891438186",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h2>DevNetwork</h2>
          <p>
          Welcome to devNetwork! A social media website for Developers!
          This webapp is built by Chaitanya Rai!
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button class="login-button" onClick={handleLogin}>Login</button>
<p></p>
<div class="divider">
  <span class="divider-text">OR</span>
</div>
<p>Just click the button below to login as a guest</p>
<button class="guest-button" onClick={handleLogin}>Login as Guest</button>

           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
