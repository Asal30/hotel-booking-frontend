import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/home-page/homePage";
import LoginPage from "./components/pages/login-page/login";
import RegisterPage from "./components/pages/register-page/register";
import Header from "./components/header/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;