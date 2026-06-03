import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const typeConfig = {
    project: { label: "Proyecto", color: "var(--accent)", bg: "var(--accent-dim)", border: "var(--accent-border)" },
    lab: { label: "Lab", color: "#4ade80", bg: "rgba(74,222,128,0.1)", border: "rgba(74,222,128,0.3)" },
    task: { label: "Tarea", color: "#f59e0b", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)" },
  };

  const config = typeConfig[project.type];

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: `1px solid ${project.featured ? "var(--accent-border)" : "var(--border)"}`,
        borderRadius: "var(--radius-lg)",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "border-color 0.2s, transform 0.2s, background 0.2s",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = config.border;
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.background = "var(--bg-card-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = project.featured ? "var(--accent-border)" : "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = "var(--bg-card)";
      }}
    >
      {project.featured && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
          }}
        />
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: config.color,
            background: config.bg,
            border: `1px solid ${config.border}`,
            borderRadius: "4px",
            padding: "3px 10px",
          }}
        >
          {config.label}
        </span>

        <div style={{ display: "flex", gap: "12px" }}>
          <Link
            to={`/proyectos/${project.id}`}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--accent)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Detalle
          </Link>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--accent)",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Demo -&gt;
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--text-muted)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            GitHub -&gt;
          </a>
        </div>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "16px",
          fontWeight: 600,
          color: "var(--text-primary)",
          lineHeight: 1.3,
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          fontSize: "13px",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {project.description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              padding: "3px 8px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
