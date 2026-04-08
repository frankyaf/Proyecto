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

      const res = await fetch("http://127.0.0.1:8000/api/login/token/",{
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({username,password}),
      });

      const data = await res.json();

      if (res.ok) {
        //localStorage.setItem("user", JSON.stringify(data));

        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        localStorage.setItem("user",JSON.stringify({username,typeUsers: data.typeUsers}));
        
        console.log("TYPE USER:", data.typeUsers);
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
        <h2 className="text-black">Iniciar Sesión</h2>

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

          <button className="bg-sky-500 hover:bg-sky-700 text-gray-900 p-2 rounded-lg" type="submit">Ingresar</button>
        </form>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;