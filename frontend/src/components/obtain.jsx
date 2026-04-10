import { useEffect, useState } from "react";
import { authFetch } from "../api/authFetch";

function TablaProductos(){
    const [usuarios_db, type_usuarios_db] = useState([]);

    useEffect(()=>{
        authFetch("http://127.0.0.1:8000/api/usuarios_db/")
            .then(res =>res.json())
            .then(data => type_usuarios_db(data))
            .catch(err => console.error(err));
    },[]);

    return(
        <div className="flex flex-1 w-2rem h-full text-gray-700 bg-[#c8d2d7] shadow-md rounded-xl bg-clip-border p-10 m-10">
            
        <h2>Usuarios</h2>

        <table className="w-full text-left table-auto min-w-max">
            <thead>
            <tr>
                <th className="p-4 border-b border-b-gray-100  bg-">ID</th>
                <th className="p-4 border-b border-b-gray-100  bg-blue-gray-50">Tipo de usuario</th>
            </tr>
            </thead>

            <tbody>
            {usuarios_db.map((p) => (
                <tr  key={p.idUsuarios_db}>
                <td className="p-4 border-b border-blue-gray-50">{p.idUsuarios_db}</td>
                <td className="p-4 border-b border-blue-gray-50">{p.typeUsers_db}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default TablaProductos;