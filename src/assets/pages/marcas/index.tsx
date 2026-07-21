import { useSearchParams } from "react-router-dom"
import  MarcaTabla from "./MarcasTabla"
import { useState } from "react"

const marcas = () =>  {

   const [searchParams, setSearchParams] = useSearchParams()
   const [busquedaLocal, setBusquedaLocal] = useState(searchParams.get('texto_buscar') || '')

   const manejarBusqueda = (e: React.SubmitEvent) =>{
            e.preventDefault();
            if(busquedaLocal.trim() !== ''){
               searchParams.set('texto_buscar', busquedaLocal)
            }else{
               searchParams.delete('texto_buscar')
            }

            searchParams.set("pagina",'1')
            setSearchParams(searchParams)
   }

  return (
     <>
        <section>
            <div className="max-w-7xl mx-auto px-3 py-20">
               <form onSubmit={manejarBusqueda} className="flex gap-2 w-full">
                  <input 
                     type="text" 
                     placeholder="Buscar marca, pais o representante..."
                     value={busquedaLocal}
                     onChange={(e) => setBusquedaLocal(e.target.value)}
                     className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-slate-500"
                  />
                  <button type="submit" className=" px-4  py-2 text-white  bg-[#858B6F]  hover:bg-green-800"> Buscar

                  </button>

               </form>
                <MarcaTabla/>
            </div>
        </section>    
     </>
  )
}

export default marcas