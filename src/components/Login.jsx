import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const BRUCE_USERNAME = import.meta.env.VITE_BRUCE_USERNAME;
    const BRUCE_PASSWORD = import.meta.env.VITE_BRUCE_PASSWORD;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Hard-coded credentials
        if (username === BRUCE_USERNAME && password === BRUCE_PASSWORD) {
            onLogin(); // update App's login state
            navigate("/admin"); // redirect to admin panel
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl mb-4">Bruce's Events</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded"
                />
                <button type="submit" className="bg-blue-600 text-white py-2 rounded">
                    Login
                </button>
            </form>
            {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>
    );
}

export default Login;
