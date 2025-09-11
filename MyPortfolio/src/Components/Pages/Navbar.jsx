import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="/" className="navbar-logo">
        MyPortfolio
      </a>

      {/* Desktop Menu */}
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <ThemeToggle />
      </ul>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setOpen(!open)} 
        className="menu-btn"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="mobile-menu">
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          <ThemeToggle />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
