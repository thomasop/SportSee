import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Profil from "./Pages/Profil";
import Settings from "./Pages/Settings";
import Community from "./Pages/Community";
import Error404 from "./Pages/Error404";
import "./css/style.css"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/community" element={<Community />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
);
