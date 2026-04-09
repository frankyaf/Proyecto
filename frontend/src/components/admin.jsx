import LogoutButton from "./logout";
import TablaProductos from "./obtain";
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
            </section>

        <LogoutButton/>
        
        </div>
    );
}

export default Admin;