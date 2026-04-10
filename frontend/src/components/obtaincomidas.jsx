import { useEffect, useState } from "react";
import { authFetch } from "../api/authFetch";

function TablaComidas(){
    const [comida, setcomida] = useState([]);
    const [mostrarModal, setMostrarModal] =useState (false);
    const [editar, setEditar] =useState(null);
    const [form,setForm] = useState({});

    // Abrir modal
    const abrirModal = (item) => {
        console.log("ITEM:", item);
        setForm(item);
        setEditar(item.idComida);
        setMostrarModal(true);
    };

    useEffect(()=>{
        authFetch("http://127.0.0.1:8000/api/comida/")
            .then(res =>res.json())
            .then(data => setcomida(data))
            .catch(err => console.error(err));
    },[]);

    const handleEditar =(item) =>{
        setEditar(item.idComida);
        setForm(item);
    }

    const handleGuardar = async () => {
        try {
            const res = await authFetch(
            `http://127.0.0.1:8000/api/comida/${editar}/`,
            {
                method: "PUT",
                body: JSON.stringify(form),
            }
            );

            const data = await res.json();
            console.log(data);

            setcomida(
                comida.map((item) =>
                    item.idComida === editar ? { ...item, ...form } : item
                )
            );

            setEditar(null);
        } catch (error) {
            console.error("Error al actualizar:", error);
        }
    };

    return(
        <div className="flex flex-col w-2rem h-full overflow-scroll text-gray-700 bg-[#c8d2d7] shadow-md rounded-xl bg-clip-border p-10 m-10">
            
        <h2>Comidas</h2>

        <table className="w-full text-left table-auto min-w-max">
            <thead>
            <tr>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">ID Comida</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">ID Pedidos</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Información</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Cantidad</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Dirección</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Persona</th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Acciones</th>
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
                    <td key={p.idComida} className="p-4 border-b border-blue-gray-50"> <button className="bg-sky-500 hover:bg-sky-700 text-gray-900 p-2 rounded-lg" onClick={() => abrirModal(p)}>Editar</button></td>
                </tr>
            ))}
            </tbody>
        </table>
            {mostrarModal && (
                <div>
                    <div>
                        <h3>Editar Comida</h3>

                        <input
                        value={form.info}
                        onChange={(e) =>
                            setForm({ ...form, info: e.target.value })
                        }
                        placeholder="Info"
                        />

                        <input
                        type="number"
                        value={form.cantidad}
                        onChange={(e) =>
                            setForm({ ...form, cantidad: e.target.value })
                        }
                        placeholder="Cantidad"
                        />

                        <input
                        value={form.direccion}
                        onChange={(e) =>
                            setForm({ ...form, direccion: e.target.value })
                        }
                        placeholder="Dirección"
                        />

                        <div style={{ marginTop: "10px" }}>
                        <button onClick={handleGuardar}>Guardar</button>
                        <button onClick={() => setMostrarModal(false)}>
                            Cancelar
                        </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default TablaComidas;