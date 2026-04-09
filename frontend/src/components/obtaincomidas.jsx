import { useEffect, useState } from "react";
import { authFetch } from "../api/authFetch";

function TablaComidas(){
    const [comida, setcomida] = useState([]);

    useEffect(()=>{
        authFetch("http://127.0.0.1:8000/api/comida/")
            .then(res =>res.json())
            .then(data => setcomida(data))
            .catch(err => console.error(err));
    },[]);

    return(
        <div className="relative flex flex-col w-2rem h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            
        <h2>Pedidos</h2>

        <table className="w-full text-left table-auto min-w-max">
            <thead>
            <tr>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">ID Comida</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">ID Pedidos</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Información</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Cantidad</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Dirección</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Persona</th>
            </tr>
            </thead>

            <tbody>
            {comida.map((p) => (
                <tr  key={p.idComida}>
                    <td className="p-4 border-b border-blue-gray-50">{p.idComida}</td>
                    <td className="p-4 border-b border-blue-gray-50">{p.idPedidos}</td>
                    <td className="p-4 border-b border-blue-gray-50">{p.info}</td>
                    <td className="p-4 border-b border-blue-gray-50">{p.cantidad}</td>
                    <td className="p-4 border-b border-blue-gray-50">{p.direccion}</td>
                    <td className="p-4 border-b border-blue-gray-50">{p.persona}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default TablaComidas;