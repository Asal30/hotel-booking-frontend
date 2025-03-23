import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./components/pages/admin-pages/admin";
import HomePage from "./components/pages/home-page/homePage";
import LoginPage from "./components/pages/login-page/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;