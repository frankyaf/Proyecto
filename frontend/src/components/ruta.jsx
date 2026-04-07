import { Navigate } from "react-router-dom";

function RutaProtegida({children,requiredType}){
    const token = localStorage.getItem("access_token");
    const typeUsuario = localStorage.getItem("typeUsuario"); 

    if (!token) return <Navigate to="/login" />;
    if (requiredType && typeUsuario !== requiredType) return <Navigate to="/" />;

    return children;

}

export default RutaProtegida;