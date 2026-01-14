import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        padding: scrolled ? "1rem 0" : "1.5rem 0",
        background: scrolled ? "rgba(5, 5, 5, 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="#"
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            fontFamily: "var(--font-heading)",
          }}
        >
          The Life Calendar
        </a>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <a
            href="#features"
            style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
          >
            Features
          </a>
          <a
            href="#tech"
            style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}
          >
            Tech Stack
          </a>
          <a
            href="https://github.com/niteshmandall/thelifecalendar"
            target="_blank"
            className="btn-secondary"
            style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
