import React, { useState } from "react";
import "../styles/AdminLogin.css";
import { toast } from "react-hot-toast";
import logo from "../assets/logo copy.png"; // <-- Add your logo path here

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // <-- state for loading

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // start loading

    try {
      const res = await fetch(`${API_BASE}/api/admin-auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Login failed");
        setLoading(false); // stop loading on error
        return;
      }

      localStorage.setItem("adminToken", data.token);
      window.location.href = "/admin";
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      setLoading(false); // stop loading on error
    }
  };

  return (
    <div className="admin-login-container">
      <form onSubmit={handleSubmit}>
        {/* Logo Section */}
        <div className="admin-logo-container">
          <img src={logo} alt="Admin Logo" />
        </div>

        <label htmlFor="username">Admin ID</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          disabled={loading} // disable input while loading
        />

        <label htmlFor="password">Admin Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading} // disable input while loading
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
