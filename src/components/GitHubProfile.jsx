import { useEffect, useState } from "react";

const profileUrl = "https://api.github.com/users/ESJ0";

export default function GitHubProfile() {
  const [profile, setProfile] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  const loadProfile = async (showLoading = true) => {
    if (showLoading) {
      setStatus("loading");
      setError("");
    }

    try {
      const response = await fetch(profileUrl);

      if (!response.ok) {
        throw new Error(`GitHub respondio con estado ${response.status}`);
      }

      const data = await response.json();
      setProfile(data);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err.message || "No se pudo cargar el perfil de GitHub.");
    }
  };

  useEffect(() => {
    let ignore = false;

    fetch(profileUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GitHub respondio con estado ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        if (!ignore) {
          setProfile(data);
          setStatus("success");
        }
      })
      .catch((err) => {
        if (!ignore) {
          setStatus("error");
          setError(err.message || "No se pudo cargar el perfil de GitHub.");
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div
      style={{
        padding: "1rem 1.25rem",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--text-muted)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
        }}
      >
        API GitHub
      </p>

      {status === "loading" && (
        <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
          Cargando perfil publico...
        </p>
      )}

      {status === "error" && (
        <div>
          <p style={{ color: "#f87171", fontSize: "14px", marginBottom: "0.75rem" }}>
            Error visible: {error}
          </p>
          <button
            type="button"
            onClick={loadProfile}
            style={{
              border: "1px solid var(--accent-border)",
              background: "var(--accent-dim)",
              color: "var(--accent)",
              borderRadius: "var(--radius-sm)",
              padding: "8px 12px",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
            }}
          >
            Reintentar
          </button>
        </div>
      )}

      {status === "success" && profile && (
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <p style={{ color: "var(--text-primary)", fontSize: "14px" }}>
            @{profile.login} conectado desde API REST.
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: "13px" }}>
            {profile.public_repos} repos publicos - perfil creado en 2022
          </p>
        </div>
      )}
    </div>
  );
}
