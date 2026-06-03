import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["sobre-mi", "tecnologias", "proyectos", "contacto"];
  const labels = ["Sobre mí", "Tecnologías", "Proyectos", "Contacto"];

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: scrolled ? "rgba(10,10,10,0.9)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition: "all 0.3s ease",
    }}>
      <span style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: "1.1rem",
        color: "var(--text-primary)",
      }}>
        Jose Abril<span style={{ color: "var(--accent)" }}>.</span>
      </span>

      <ul style={{
        display: "flex",
        gap: "2rem",
        listStyle: "none",
      }}>
        {links.map((link, i) => (
          <li key={link}>
            <a
              href={`/#${link}`}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "var(--text-secondary)",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
              onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}
            >
              {labels[i]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
