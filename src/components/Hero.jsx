import { useEffect, useRef } from "react";

export default function Hero() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity =
          cursorRef.current.style.opacity === "0" ? "1" : "0";
      }
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid de fondo decorativo */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
      }} />

      {/* Glow de fondo */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(124,106,247,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Badge superior */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "var(--accent-dim)",
          border: "1px solid var(--accent-border)",
          borderRadius: "100px",
          padding: "6px 16px",
          marginBottom: "2rem",
        }}>
          <span style={{
            width: "6px", height: "6px",
            borderRadius: "50%",
            background: "var(--accent)",
            boxShadow: "0 0 8px var(--accent)",
            animation: "pulse 2s infinite",
          }} />
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--accent)",
            letterSpacing: "0.1em",
          }}>
            Perfil publico actualizado desde GitHub
          </span>
        </div>

        {/* Nombre */}
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 800,
          lineHeight: 1.0,
          marginBottom: "1.5rem",
          letterSpacing: "-0.02em",
        }}>
          Jose Abril
          <br />
          <span style={{ color: "var(--accent)" }}>Web</span>
          <br />
          Developer
          <span
            ref={cursorRef}
            style={{
              display: "inline-block",
              width: "4px",
              height: "0.85em",
              background: "var(--accent)",
              marginLeft: "8px",
              verticalAlign: "middle",
              transition: "opacity 0.1s",
            }}
          />
        </h1>

        {/* Descripción */}
        <p style={{
          fontSize: "1.1rem",
          color: "var(--text-secondary)",
          maxWidth: "520px",
          marginBottom: "2.5rem",
          lineHeight: 1.8,
        }}>
          Construyo proyectos web con HTML, CSS, JavaScript, TypeScript, React,
          Go, PostgreSQL, Python y Docker. Este portafolio se alimenta de repos
          publicos reales publicados en GitHub.
        </p>

        {/* Botones */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#proyectos"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "var(--radius-md)",
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              fontWeight: 500,
              transition: "opacity 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={e => {
              e.target.style.opacity = "0.85";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.target.style.opacity = "1";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Ver proyectos →
          </a>
          <a
            href="https://github.com/ESJ0"
            target="_blank"
            rel="noreferrer"
            style={{
              border: "1px solid var(--border-hover)",
              color: "var(--text-primary)",
              padding: "14px 28px",
              borderRadius: "var(--radius-md)",
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              transition: "border-color 0.2s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={e => {
              e.target.style.borderColor = "var(--accent-border)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = "var(--border-hover)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            GitHub ↗
          </a>
        </div>

        {/* Stack badges inferiores */}
        <div style={{
          display: "flex",
          gap: "12px",
          marginTop: "4rem",
          flexWrap: "wrap",
        }}>
          {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Go", "Python"].map(tech => (
            <span
              key={tech}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                padding: "4px 10px",
                letterSpacing: "0.05em",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
