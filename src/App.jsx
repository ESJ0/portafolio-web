import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";

function PortfolioPage() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/proyectos/:projectId" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}
