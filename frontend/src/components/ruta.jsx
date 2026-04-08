import { Navigate } from "react-router-dom";

function RutaProtegida({children,tipo}){
    const token = localStorage.getItem("access_token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token) return <Navigate to="/" />;
    if (tipo && user?.typeUsers !== tipo) {
        return <Navigate to="/" />;
    }

    return children;

}

export default RutaProtegida;