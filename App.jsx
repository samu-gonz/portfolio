"use client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import ProjectsPage from "./views/ProjectsPage";

export default function App({ onLogout }) {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <Navbar onLogout={onLogout} />
        <main className="pt-[72px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
