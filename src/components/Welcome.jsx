import { useAuth } from "./security/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";

export default function Welcome() {

    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    // 🔥 Clean protected route method
    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    function handlewelcome() {
        navigate('/todos');
    }
    function helloworld(){
        fetch('http://localhost:8080/Hello World').then(response => response.text()).then(data => setMessage(data));
    }

    return (
        <div className="container text-center mt-5">
            <h1>Welcome to the Todo App!</h1>
            <p>Manage your tasks efficiently and stay organized.</p>
            <button className="btn btn-primary" onClick={handlewelcome}>
                Go to Todos Page
            </button>
            <button className="btn btn-secondary ms-3" onClick={helloworld}>
                Call Hello World API
            </button>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
}
