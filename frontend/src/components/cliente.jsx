import LogoutButton from "./logout";
import Carrusel from "./carrusel";


function Cliente(){
    
    return (
            <div>
                <section className="h-auto content-center py-20">
                    <div className="flex content-center-safe px-40">
                        <div className="flex-1">
                            <h3 className=" text-[#41d791]">Panel de Cliente</h3>
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

                <section className="flex h-auto content-center  py-10 bg-[#c8d2d7]">
                    <div className="flex-1 text-[#41d791] m-10">
                        <div className="flex col-span-4 col-start-2 content-center w-1/3 p-4 m-5 rounded-lg flex-none bg-[#0f2d3c]">
                            <h1>Carrusel de la información</h1>
                        </div>
                    <Carrusel/>
                    </div>
                    <div className="flex-1 ">
                            Notas del restaurant
                    </div>
                </section>

                <LogoutButton/>
            </div>
            
    );
}

export default Cliente;