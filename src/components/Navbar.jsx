import { useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-screen ml-8 mr-8 px-4">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavigation("/home")}
            className="cursor-pointer font-mono text-xl font-bold bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent text-glow"
          >
            Raghav Joshi
          </button>

          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <ThemeToggle/>

            <button
              onClick={() => handleNavigation("/home")}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>

            <button
              onClick={() => handleNavigation("/about")}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>

            <button
              onClick={() => handleNavigation("/projects")}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </button>

            <button
              onClick={() => handleNavigation("/contact")}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer mr-8"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
