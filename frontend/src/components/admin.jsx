import LogoutButton from "./logout";
import TablaProductos from "./obtain";
import TablaComidas from "./obtaincomidas";
import TablaPedidos from "./obtainpedidos";
import RutaProtegida from "./ruta"; 


function Admin(){
    
    return (
        <div>
            <section className="h-auto content-center py-20">
                <div className="flex content-center-safe px-40">
                    <div className="flex-1">
                        <h3 className=" text-[#41d791]">Panel de Administrador</h3>
                        <h1 className="text-[#c8d2d7]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, vel necessitatibus id placeat rerum fuga at neque laboriosam nobis sint magnam illo nihil omnis ex distinctio libero voluptas consectetur aut.</h1>
                    </div>
                    <div className="flex-1">
                        
                    </div>
                </div>

                <div className="flex content-center-safe px-40 ">
                    <button className="px-10 py-1 bg-[#41d791] rounded-lg">
                        Pedir
                    </button>
                </div>
            </section>

            <section>
                <RutaProtegida tipo="admin">
                    <TablaProductos/>
                </RutaProtegida>

                <RutaProtegida tipo="admin">
                    <TablaPedidos/>
                </RutaProtegida>

                <RutaProtegida tipo="admin">
                    <TablaComidas/>
                </RutaProtegida>
            </section>

        <LogoutButton/>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            </footer>
            
        </div>
        
    );
}

export default Admin;