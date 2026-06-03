import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((item) => String(item.id) === projectId);

  if (!project) {
    return (
      <main style={{ minHeight: "70vh", padding: "9rem 0 5rem" }}>
        <div className="container">
          <p className="section-label">Proyecto</p>
          <h1 className="section-title">No encontre ese proyecto</h1>
          <Link to="/#proyectos" style={{ color: "var(--accent)" }}>
            Volver a proyectos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "70vh", padding: "9rem 0 5rem" }}>
      <div className="container">
        <Link
          to="/#proyectos"
          style={{
            display: "inline-block",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            marginBottom: "2rem",
          }}
        >
          &lt;- Volver a proyectos
        </Link>

        <p className="section-label">
          {project.type === "project" ? "Proyecto" : project.type === "lab" ? "Laboratorio" : "Tarea"}
        </p>
        <h1 className="section-title">{project.title}</h1>

        <p
          style={{
            color: "var(--text-secondary)",
            maxWidth: "720px",
            lineHeight: 1.8,
            marginBottom: "2rem",
          }}
        >
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2.5rem" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--text-secondary)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                padding: "5px 10px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                padding: "12px 22px",
                borderRadius: "var(--radius-md)",
                background: "var(--accent)",
                color: "#fff",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
              }}
            >
              Abrir demo -&gt;
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              padding: "12px 22px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-hover)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
            }}
          >
            Abrir repositorio -&gt;
          </a>
        </div>
      </div>
    </main>
  );
}
