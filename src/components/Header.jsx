import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function Header() {

  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <Link className="navbar-brand fw-bold" to="/welcome">
          TodoApp
        </Link>

        <ul className="navbar-nav me-auto">
          {isAuthenticated && (
            <li className="nav-item">
              <Link className="nav-link" to="/welcome">Home</Link>
            </li>
          )}
        </ul>

        <ul className="navbar-nav">
          {!isAuthenticated && (
            <li className="nav-item">
              <Link className="nav-link" to="/">Login</Link>
            </li>
          )}

          {isAuthenticated && (
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </ul>

      </div>
    </nav>
  );
}
