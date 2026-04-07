import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./components/login";
import Admin from "./components/admin"
import Cliente from "./components/cliente"

function App(){

  // return <Login />
  return(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cliente" element={<Cliente />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App
