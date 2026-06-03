import GitHubProfile from "./GitHubProfile";

export default function About() {
  const contacts = [
    { label: "GitHub", value: "@ESJ0", href: "https://github.com/ESJ0" },
    { label: "Email", value: "usuariojs3p1@gmail.com", href: "mailto:usuariojs3p1@gmail.com" },
    { label: "Ingles", value: "Nivel avanzado", href: null },
    { label: "Repos web", value: "GitHub", href: "https://github.com/ESJ0?tab=repositories" },
    { label: "Perfil", value: "Activo desde 2022", href: "https://github.com/ESJ0" },
  ];

  return (
    <section id="sobre-mi">
      <div className="container">
        <p className="section-label">01 — Sobre mí</p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}>
          {/* Columna izquierda — texto */}
          <div>
            <h2 className="section-title">
              Desarrollador web<br />
              <span style={{ color: "var(--accent)" }}>full-stack junior</span>
            </h2>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              color: "var(--text-secondary)",
              fontSize: "1rem",
              lineHeight: 1.8,
            }}>
              <p>
                Soy Jose Abril, desarrollador en formacion con proyectos publicos
                en GitHub bajo el usuario ESJ0. Mi trabajo combina interfaces web,
                backends en Go y practica con bases de datos.
              </p>
              <p>
                En mis repos web aparecen proyectos con HTML, CSS, JavaScript,
                TypeScript, React, Go, PostgreSQL, Docker y Python. El foco del portafolio
                es mostrar trabajo real y verificable, no tarjetas de ejemplo.
              </p>
              <p>
                Actualmente sigo construyendo proyectos academicos y personales:
                desde juegos y calculadoras hasta apps web separadas por frontend
                y backend.
              </p>
            </div>

            {/* Formación */}
            <div style={{
              marginTop: "2.5rem",
              padding: "1.5rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
            }}>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
                Formación
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { year: "2026", title: "Proyectos web y backend", place: "JavaScript, TypeScript, Go, PostgreSQL" },
                  { year: "2026", title: "Ingles", place: "Nivel avanzado" },
                  { year: "2024 - 2025", title: "Programacion orientada a objetos", place: "Java" },
                  { year: "2024", title: "Fundamentos de programacion", place: "Python" },
                ].map((item) => (
                  <div key={item.title} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}>
                    <div>
                      <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-primary)" }}>
                        {item.title}
                      </p>
                      <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                        {item.place}
                      </p>
                    </div>
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      whiteSpace: "nowrap",
                    }}>
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha — contacto */}
          <div id="contacto">
            <div style={{
              position: "sticky",
              top: "6rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-muted)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}>
                Contacto
              </p>

              {contacts.map(({ label, value, href }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem 1.25rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border-hover)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
                >
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}>
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      style={{
                        fontSize: "14px",
                        color: "var(--accent)",
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={e => e.target.style.opacity = "0.7"}
                      onMouseLeave={e => e.target.style.opacity = "1"}
                    >
                      {value} ↗
                    </a>
                  ) : (
                    <span style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
                      {value}
                    </span>
                  )}
                </div>
              ))}

              <GitHubProfile />

              {/* GitHub button */}
              <a
                href="https://github.com/ESJ0?tab=repositories"
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "14px",
                  border: "1px solid var(--accent-border)",
                  borderRadius: "var(--radius-md)",
                  background: "var(--accent-dim)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(124,106,247,0.25)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--accent-dim)"}
              >
                Ver repositorios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
