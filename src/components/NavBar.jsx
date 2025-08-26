import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu
import "../css/Navbar.css";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          Movie App
        </Link>
      </div>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
          Home
        </Link>
        <Link to="/favorites" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;