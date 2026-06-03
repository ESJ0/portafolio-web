import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const FILTERS = [
  { key: "all",     label: "Todo" },
  { key: "project", label: "Proyectos" },
  { key: "lab",     label: "Labs" },
  { key: "task",    label: "Tareas" },
];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? projects
    : projects.filter(p => p.type === active);

  return (
    <section id="proyectos">
      <div className="container">
        <p className="section-label">03 — Proyectos</p>
        <h2 className="section-title">
          El trabajo<br />
          <span style={{ color: "var(--accent)" }}>que hice</span>
        </h2>

        <p style={{
          color: "var(--text-secondary)",
          maxWidth: "520px",
          marginBottom: "2.5rem",
          lineHeight: 1.8,
        }}>
          Laboratorios, tareas y proyectos completos. Cada uno con su repositorio
          público, README detallado e instrucciones de instalación.
        </p>

        {/* Filtros */}
        <div style={{
          display: "flex",
          gap: "8px",
          marginBottom: "2.5rem",
          flexWrap: "wrap",
        }}>
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.05em",
                padding: "8px 18px",
                borderRadius: "100px",
                border: "1px solid",
                borderColor: active === f.key ? "var(--accent-border)" : "var(--border)",
                background: active === f.key ? "var(--accent-dim)" : "transparent",
                color: active === f.key ? "var(--accent)" : "var(--text-muted)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {f.label}
              <span style={{
                marginLeft: "6px",
                fontSize: "10px",
                opacity: 0.6,
              }}>
                {f.key === "all"
                  ? projects.length
                  : projects.filter(p => p.type === f.key).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1rem",
        }}>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA GitHub */}
        <div style={{
          marginTop: "3rem",
          padding: "2rem",
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "18px",
              fontWeight: 600,
              marginBottom: "4px",
            }}>
              Todo el codigo viene de GitHub
            </p>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
              Repos publicos de Jose Abril, organizados por proyectos, labs y tareas.
            </p>
          </div>
          
          <a
            href="https://github.com/ESJ0"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              background: "var(--accent)",
              color: "#fff",
              borderRadius: "var(--radius-md)",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: 500,
              whiteSpace: "nowrap",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            Ver GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
