import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./components/pages/admin-page/admin";
import HomePage from "./components/pages/home-page/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;