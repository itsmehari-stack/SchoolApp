import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (role && id && password) {
      navigate(`/${role.toLowerCase()}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Login</h2>
        <select
          className="role-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="Teacher">Class Teacher</option>
          <option value="Principal">Principal</option>
        </select>
        <input
          type="text"
          placeholder="User ID"
          className="input-field"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="auth-button"
          onClick={handleLogin}
          disabled={!role || !id || !password}
        >
          Login
        </button>
        <p className="switch-text">Don't have an account?</p>
        <button className="switch-button" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
