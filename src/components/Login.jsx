import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {

  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

  function handleLogin() {
    if (username === "123" && password === "123") {
    login();
    navigate("/welcome");
  }
else{
    alert("Invalid credentials");
    navigate("/");
}
  }
  return (
    <div className="container mt-5">
        <input
  type="text"
  className="form-control mb-3"
  placeholder="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>

<input
  type="password"
  className="form-control mb-3"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
