import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/profile");
  };

  return (
    <div className="login-container">
      <h1>
        Signin to your <br />
        PopX account
      </h1>

      <p>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <p
        style={{
          textAlign: "right",
          color: "#6C25FF",
          fontSize: "14px",
          marginTop: "-10px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Forgot Password?
      </p>

      <button
        onClick={handleLogin}
        style={{
          background: "#6C25FF",
          color: "#FFFFFF",
          marginTop: "10px",
          height: "50px",
          borderRadius: "8px",
        }}
      >
        Login
      </button>
    </div>
  );
}