import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./components/login";
import Admin from "./components/admin"
import Cliente from "./components/cliente"
import RutaProtegida from "./components/ruta";  

function App(){

  // return <Login />
  return(
  <BrowserRouter>
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
