import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/auth/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("apiKey", response.data.apiKey);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        setError("Registration failed. Please check your credentials.");
      });
  };

  return (
    <div className="min-h-screen bg-primary-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md backdrop-blur bg-white bg-opacity-40 rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-primary-800 mb-8">
          Create Account
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">
              Username
            </label>
            <input
              type="text"
              className="w-full p-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="your_username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full p-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium transition"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-primary-600 hover:text-primary-800 font-medium"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}