import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/login.css"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      
      const res = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data));

        if (data.typeUsers === "admin") {
          navigate("/admin");
        } else {
          navigate("/cliente");
        }

      } else {
        setError(data.error || "Error en login");
      }

    } catch {
      setError("Error de conexión");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Ingresar</button>
        </form>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;