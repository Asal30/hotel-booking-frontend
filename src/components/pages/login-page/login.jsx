import background1 from "../../../assets/background1.png";
import background2 from "../../../assets/background2.png";
import logo from "../../../assets/logo.png";
import googleIcon from "../../../assets/google-icon.svg";
import facebookIcon from "../../../assets/fb-icon.svg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(background1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleBackground = () => {
    setBackgroundImage((prev) =>
      prev === background1 ? background2 : background1
    );
  };
  
  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };
  
  useEffect(() => {
    const interval = setInterval(toggleBackground, 30000);
    return () => clearInterval(interval);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Handle Login
      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }

      axios
        .post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("token", response.data.token);

          if (response.data.userType === "admin") {
            window.location.href = "/admin";
          } else {
            window.location.href = "/";
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Login failed. Please check your credentials.");
        });
    } else {
      // Handle Sign Up
      if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      axios
        .post(import.meta.env.VITE_BACKEND_URL + "/api/users/signup", {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          alert("Signup successful! Please log in.");
          setIsLogin(true);
        })
        .catch((error) => {
          console.error(error);
          alert("Signup failed. Please try again.");
        });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "0.5s ease-in-out",
      }}
    >
      {/* Login Form */}
      <div className="backdrop-blur bg-white bg-opacity-40 p-8 rounded-lg shadow-[0_0_30px_rgba(227,228,238,0.5)] border-[2px] border-[rgba(255,255,255,0.18)] z-10 w-[450px]">
        <img
          src={logo}
          alt="Hotel Logo"
          className="w-24 h-24 mx-auto mb-4 rounded-full"
        />
        
        {/* Toggle Button */}
        <div className="flex mb-6 mx-20 justify-evenly bg-[#E0ECDE] rounded-3xl">
          <button 
          onClick={toggleAuthMode}
          className={`px-6 py-1 my-2 rounded-2xl transition-colors ${isLogin? "bg-[#2C6975] text-white" : "bg-[#E0ECDE] text-[#2C6975] hover:bg-[#CDE0C9]"}`}
          >Login
          </button>
          <button
            onClick={toggleAuthMode}
            className={`px-4 py-1 my-2 rounded-2xl transition-colors ${ !isLogin ? "bg-[#2C6975] text-white" : "bg-[#E0ECDE] text-[#2C6975] hover:bg-[#CDE0C9]" }`}
          >Sign Up
          </button>
        </div>

        {/* Input Fields */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {/* Email Input */}
            <label className="block text-sm font-medium text-[#2C6975]">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2  rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            {/* Password Input */}
            <label className="block text-sm font-medium text-[#2C6975]">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password Input (Only for Sign Up) */}
          {!isLogin && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#2C6975]">
                Confirm Password
                </label>
                
                <input
                type="password"
                className="w-full p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2C6975]"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2C6975] text-white p-2 rounded-lg hover:bg-[#6B82A0] transition-colors"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Forgot Password Link (Only for Login) */}
        {isLogin && (
          <p className="text-sm text-[#2C6975] mt-4 text-center">
            <a href="#" className="hover:text-[#20a1c9] hover:underline transition-colors">
              Forgot Password?
            </a>
          </p>
        )}
        {/* OR Divider */}
        <div className="flex justify-between w-[full] mt-4">
          <hr className="border-t border-[#2C6975] my-4 mx-2 w-[100%]"></hr>
          <p className="text-sm text-[#2C6975] mt-1.5 px-4"> OR </p>
          <hr className="border-t border-[#2C6975] my-4 mx-2 w-[100%]"></hr>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center space-x-4 mt-4">
          <button className="flex items-center justify-center space-x-2 p-2 bg-white border border-[#6B82A0] rounded-lg hover:bg-[#E0ECDE] transition-colors">
            <img src={googleIcon} alt="Google Icon" className="w-5 h-5" />
            <span className="text-sm text-[#2C6975]">Login with Google</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-2 bg-white border border-[#6B82A0] rounded-lg hover:bg-[#E0ECDE] transition-colors">
            <img src={facebookIcon} alt="Facebook Icon" className="w-5 h-5" />
            <span className="text-sm text-[#2C6975]">Login with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
}