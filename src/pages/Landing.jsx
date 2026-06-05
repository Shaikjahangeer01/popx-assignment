import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div>
        <h1>Welcome to PopX</h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <button onClick={() => navigate("/signup")}>
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            style={{
              background: "#E5D8FF",
              color: "#1D2226",
            }}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}