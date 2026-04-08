import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./components/login";
import Admin from "./components/admin"
import Cliente from "./components/cliente"
import RutaProtegida from "./components/ruta"; 
import Navbar from "./components/navbar"
import { useEffect, useState } from "react";


function App(){
    const [user, setUser] = useState(null);

    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user") || "null");
      setUser(storedUser);
    }, []);

  return(
    
    <BrowserRouter>
      {user && <Navbar/>}
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route
            path="/admin"
            element={
              <RutaProtegida tipo="admin">
                <Admin />
              </RutaProtegida>
            }
          />
          <Route
            path="/cliente"
            element={
              <RutaProtegida tipo="cliente">
                <Cliente />
              </RutaProtegida>
            }
          />
      </Routes>
    </BrowserRouter>
  );
}
export default App
