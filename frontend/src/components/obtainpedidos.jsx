import { useEffect, useState } from "react";
import { authFetch } from "../api/authFetch";

function TablaPedidos(){
    const [pedidos, pedidos_db] = useState([]);

    useEffect(()=>{
        authFetch("http://127.0.0.1:8000/api/pedidos/")
            .then(res =>res.json())
            .then(data => pedidos_db(data))
            .catch(err => console.error(err));
    },[]);

    return(
        <div className="flex flex-1 h-full text-gray-700 bg-[#c8d2d7] shadow-md rounded-xl bg-clip-border m-10 p-10">
            
        <h2>Pedidos</h2>

        <table className="w-full text-left table-auto min-w-max">
            <thead>
            <tr>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">ID Pedidos</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">ID Usuario</th>
                
            </tr>
            </thead>

            <tbody>
            {pedidos.map((p) => (
                <tr  key={p.idPedidos}>
                <td className="p-4 border-b border-blue-gray-50">{p.idPedidos}</td>
                <td className="p-4 border-b border-blue-gray-50">{p.idUsuario}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default TablaPedidos;