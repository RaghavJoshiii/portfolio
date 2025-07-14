import "./index.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { LoadingScreen } from "./components/LoadingScreen";
import { Home } from "./components/section/Home";
import { About } from "./components/section/About";
import { Projects } from "./components/section/Projects";
import { NotFound } from "./components/NotFound"

// Scroll helper
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { StarBackground } from "./components/StarBackground";
const ScrollToSection = () => {
  const location = useLocation();
  useEffect(() => {
    const id = location.pathname === "/" ? "home" : location.pathname.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return null;
};

function App() {
  const [isLoaded, setisLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setisLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-2000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-background text-foreground`}
      >
        <StarBackground/>
        <BrowserRouter>
          <ScrollToSection />
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Routes>
            {/* You must define routes so router matches */}
            <Route path="/" element={<></>} />
            <Route path="/home" element={<></>} />
            <Route path="/about" element={<></>} />
            <Route path="/projects" element={<></>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
