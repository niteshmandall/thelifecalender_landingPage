
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <a href="#" className="navbar-logo">
          The Life Calendar
        </a>
        
        <div className="nav-links">
          <a href="#features" className="nav-link-item">Features</a>
          <a href="#tech" className="nav-link-item">Tech Stack</a>
          <a href="https://github.com/niteshmandall/thelifecalendar_android" target="_blank" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
