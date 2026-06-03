export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mi", href: "#sobre-mi" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Proyectos", href: "#proyectos" },
  ];

  const socials = [
    { label: "GitHub", href: "https://github.com/ESJ0" },
    { label: "Email", href: "mailto:usuariojs3p1@gmail.com" },
    { label: "Repos", href: "https://github.com/ESJ0?tab=repositories" },
    { label: "Portafolio", href: "https://github.com/ESJ0/portafolio-web" },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        padding: "4rem 0 2rem",
      }}
    >
      <div className="container">
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) auto",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          <div>
            <a
              href="#inicio"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem",
                fontWeight: 700,
                marginBottom: "1rem",
              }}
            >
              Jose Abril<span style={{ color: "var(--accent)" }}>.</span>
            </a>

            <p
              style={{
                color: "var(--text-secondary)",
                maxWidth: "460px",
                lineHeight: 1.8,
              }}
            >
              Desarrollador web con proyectos publicos en HTML, CSS,
              JavaScript, TypeScript, React, Go, PostgreSQL y Python.
            </p>
          </div>

          <div
            className="footer-links"
            style={{
              display: "flex",
              gap: "3rem",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--accent)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Navegacion
              </p>

              <nav
                aria-label="Navegacion secundaria"
                style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}
              >
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "14px",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--accent)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Contacto
              </p>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}
              >
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "14px",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {social.label} -&gt;
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
          }}
        >
          <span>&copy; {currentYear} Jose Abril</span>
          <span>Hecho con React + Vite</span>
        </div>
      </div>
    </footer>
  );
}
