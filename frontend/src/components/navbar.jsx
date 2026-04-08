import {Link} from 'react-router-dom'
import { useEffect,useState } from 'react';

function Navbar(){
    
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "null");
        setUser(storedUser);
    }, []);

    if (!user) return null;

    const tipo = user.typeUsers?.toLowerCase();
    console.log("Es de "+tipo);

  return (
    <header>

    
    <nav className='grid grid-cols-3 gap-4 bg-[#c8d2d7] p-4'>
      <span className='col-start-1 col-end-2 w-1/3 justify-start bg-[#0f2d3c] p-3 m-2 text-[#c8d2d7] rounded-lg'>
        Bienvenido, {user.username}
      </span>

      {/* Opciones ADMIN */}
      {tipo === "admin" && (
        <div className='col-start-3 w-auto'>
          <Link to="/admin" >
            Dashboard
          </Link>
          <Link to="/usuarios">
            Usuarios
          </Link>
          <Link to="/reportes">
            Reportes
          </Link>
        </div>
      )}

      {/* Opciones CLIENTE */}
      {tipo === "cliente" && (
        <div className='col-start-3 '>
          <div className='flex justify-items-center'>
                <Link to="/cliente" className='bg-[#41d791] p-2 m-2 rounded-lg'>
                    Inicio
                </Link>
                <Link to="/perfil" className='bg-[#41d791] p-2 m-2 rounded-lg'>
                    Perfil
                </Link>
                <Link to="/compras" className='bg-[#41d791] p-2 m-2 rounded-lg'>
                    Mis Compras
                </Link>
          </div>
        </div>
      )}

    </nav>
    </header>
  );
}

export default Navbar;