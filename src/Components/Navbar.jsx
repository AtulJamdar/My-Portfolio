import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const ThemeButton = ({ mobile = false }) => (
    <button
      onClick={() => {
        toggleTheme();
        if (mobile) setOpen(false);
      }}
      className={`flex items-center gap-3 ${
        mobile ? "w-full px-6 py-4" : ""
      }`}
    >
      <span className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 overflow-hidden">
        <span
          className={`absolute transition-all duration-300 ${
            theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`}
        >
          <FiSun />
        </span>
        <span
          className={`absolute transition-all duration-300 ${
            theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        >
          <FiMoon />
        </span>
      </span>
      {/* {mobile && <span>Toggle Theme</span>} */}
    </button>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[rgb(var(--bg))]/90 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-semibold text-lg">Atul Jamdar</span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="relative hover:text-[rgb(var(--primary))] transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[rgb(var(--primary))] hover:after:w-full after:transition-all"
              >
                {l.name}
              </a>
            </li>
          ))}
          <ThemeButton />
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl transition-transform duration-300 ${
            open ? "rotate-90" : "rotate-0"
          }`}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out
        ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-[rgb(var(--bg))] border-t border-gray-200 dark:border-gray-700">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {l.name}
            </a>
          ))}

          {/* Theme toggle INSIDE menu */}
          <ThemeButton mobile />
        </div>
      </div>
    </header>
  );
}
