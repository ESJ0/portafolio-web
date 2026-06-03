import { techStack } from "../data/projects";
import {
  SiCss,
  SiDocker,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const iconMap = {
  SiCss,
  SiDocker,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
};

export default function TechStack() {
  return (
    <section id="tecnologias" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <p className="section-label">02 — Tecnologías</p>
        <h2 className="section-title">
          El stack que elegí<br />
          <span style={{ color: "var(--accent)" }}>y por qué lo elegí</span>
        </h2>

        <p style={{
          color: "var(--text-secondary)",
          maxWidth: "560px",
          marginBottom: "3.5rem",
          lineHeight: 1.8,
        }}>
          No elegí herramientas por popularidad. Cada tecnología tiene una razón
          técnica concreta dentro de los proyectos que construí.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
          gap: "1px",
          background: "var(--border)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
        }}>
          {techStack.map((tech, i) => {
            const Icon = iconMap[tech.icon];
            return (
              <div
                key={tech.name}
                style={{
                  background: "var(--bg-card)",
                  padding: "1.75rem 2rem",
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  transition: "background 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--bg-card-hover)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--bg-card)"}
              >
                {/* Icono */}
                <div style={{
                  flexShrink: 0,
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {Icon && (
                    <Icon style={{ fontSize: "22px", color: tech.color }} />
                  )}
                </div>

                {/* Texto */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "6px",
                  }}>
                    <h3 style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}>
                      {tech.name}
                    </h3>
                    <span style={{
                      width: "6px",
                      height: "1px",
                      background: "var(--text-muted)",
                    }} />
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}>
                      {i < 2 ? "front-end" : i < 4 ? "back-end" : "tooling"}
                    </span>
                  </div>
                  <p style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}>
                    {tech.reason}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
