import { useState } from "react"
import { useRopa } from "./useRopa"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faBagShopping, faEye } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { CONFIG } from "../../../config"


const RopaLista = () => {
     const { Ropas, cargando, error, tieneDatos1
        } = useRopa()
    
        const [CategoriaSeleccionada, seleccionarCategorias] =
            useState("Mujer")

            
    if (cargando) return (
        <div className="p-20 text-center space-y-4">
            <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />

            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">
                Cargando tendencias...
            </p>
        </div>
    )

    if (error) return (
        <div className="p-20 text-center">
            <p className="text-red-500">
                {error}
            </p>
        </div>
    )

 const CategoriasUnicasRopa: string[] =[];
    Ropas.forEach(p => {
    if (!CategoriasUnicasRopa.includes(p.Categoria)){
        CategoriasUnicasRopa.push(p.Categoria);
        }
    })

  return (
    <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/4 bg-white shadow-xl rounded-2xl p-6 h-fit">
                <h3 className="text-2xl font-bold mb-6"> Categorías</h3>
                {!tieneDatos1 ? (
                    <div> No se encontraron datos</div>
                ) : (
                    <ul className="space-y-3">
                        {CategoriasUnicasRopa.map(Categoria => (
               <li key={Categoria} className={`p-3 rounded-xl cursor-pointer transition duration-300 font-medium
                ${CategoriaSeleccionada === Categoria ? "bg-[#6F755C] text-white": "hover:bg-green-300"}`}
                onClick={() => seleccionarCategorias(Categoria)}>{Categoria}
                <span className="ml-2 text-sm text-black">
                         ({Ropas.filter(item => item.Categoria === Categoria).length})</span>
                        </li>
                          ))}
                    </ul>
                 )}

            </div>
                <div className="w-full md:w-3/4">
                    <div className="flex justify-between items-center mb-8">
                     <div>
                     <h2 className="text-3xl font-bold">{CategoriaSeleccionada}</h2>
                        <p className="text-black mt-1">
                            {Ropas.filter(item => item.Categoria === CategoriaSeleccionada ).length} {" "}productos encontrados
                        </p>
                    </div>
                 </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Ropas .filter( item => item.Categoria === CategoriaSeleccionada).map(({idRopas, nombre, imagen, descripcion, precio, Stock, tallas}) => (
                            <div key={idRopas} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 relative group">
                                <Link to={`/Ropadetalle/${idRopas}`}>
                                <img src={`${CONFIG.API_URL}/img/${imagen}`} alt="/" className="w-full h-72 object-cover"/>
                                </Link>
                                 <div className="absolute bg-black/10  pointer-events-none    flex items-center justify-center inset-0 gap-3  group-hover:opacity-100  opacity-0 transition-opacity duration-300 z-20 ">
                                    {[
                                        { icon: faEye, label: 'Vista rapida', delay:'' },
                                        { icon: faBagShopping, label: 'Añadir al carrito', delay:'delay-75' },
                                    ].map((btn, idx) => (
                                        <button key={idx}
                                            type="button"
                                            title={btn.label}
                                            className={`flex items-center pointer-events-auto cursor-pointer justify-center w-10 h-10 rounded-full bg-white text-[#6F755C]  hover:bg-[#6F755C] 
                                             hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg focus:ring-2 focus:ring-[#6F755C]  ${btn.delay}`}>
                                            <FontAwesomeIcon icon={btn.icon}/>

                                        </button>
                                     ))}

                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-lg line-clamp-1">{nombre}</h3>
                                    <p className="text-gray-500 text-sm mt-3 line-clamp-3"> {descripcion}</p>
                                    <div className="flex justify-between items-center mt-5">
                                        <span className="text-2xl font-bold text-[#6F755C]">S/ {precio}</span>
                                        <span className="text-sm text-gray-500">Stock: {Stock}</span>
                                    </div>

                                </div>
                           
                            </div>
                             

                        ))}

                </div>

            </div>

        </div>
  )
}

export default RopaLista