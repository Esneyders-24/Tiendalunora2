import { useParams } from "react-router-dom"
import { useRopaDetalle } from "./useRopaDetalle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faMoneyBill, faStar as fasStar  } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { AgregarCarrito } from "../../utils/Functions"



import { CONFIG } from "../../../config";
import { useState } from "react";


    const ProductiDetalle = () => {
        const { idRopas } = useParams<{ idRopas: string }>()
        const { ropadetalle, cargando, error, tieneDatosRopaDetalle } = useRopaDetalle(idRopas)
        const [tallaSeleccionada, setTallaseleccionada] = useState("")
       const reviews = { href: '#', average: 4, totalCount: 117 }
       function classNames(...classes: string[] ) {
           return classes.filter(Boolean).join(' ')
       }
    
     if ( cargando) return(
         <div className="p-20 text-center space-y-4">
            <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin"/>
            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase"> Cargando tendencias...</p>
         </div>
     )
   
      if (error) return (
        <div className="p-20 text-center">
            <p className="text-red-500"> {error}  </p>
        </div>
    )

     const ZoomImagen = (event: any) => {
      const { left, top, width, height } = event.target.getBoundingClientRect()
      const x = ((event.clientX - left) / width) * 100
      const y = ((event.clientY - top) / height) * 100
      event.target.style.transformOrigin = `${x}% ${y}%`
   } 

    

  return (
   <div className="bg-white">
         <div className="pt-6">
   
           {/* Image gallery */}
           <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8  ">
             <div className="row-span-2 overflow-hidden rounded-3xl">
             <img src={`${CONFIG.API_URL}/img/${ropadetalle.imagenGrande}`} className="row-span-2 aspect-4/5 size-full object-contain md:object-cover sm:rounded-3xl lg:aspect-3/4  transition-transform duration-300 hover:scale-[2]"
             onMouseMove={ZoomImagen}/>
             </div>
             <img src={`${CONFIG.API_URL}/img/${ropadetalle.imagen}`}className="col-start-2 aspect-3/2 size-full rounded-3xl object-cover-contain  max-lg:hidden transition-all duration-300 hover:scale-105 "/>
             <img src={`${CONFIG.API_URL}/img/${ropadetalle.ImgenP2}`} className="col-start-2 row-start-2 aspect-3/2 size-full rounded-3xl object-cover-contain max-lg:hidden transition-all duration-300 hover:scale-105"/>
             <div  className="row-span-2 overflow-hidden rounded-3xl">
             <img src={`${CONFIG.API_URL}/img/${ropadetalle.ImgenP1}`} className="row-span-2 aspect-4/5 size-full object-contain md:object-cover sm:rounded-3xl lg:aspect-3/4  transition-transform duration-300 hover:scale-[2]"
             onMouseMove={ZoomImagen}/>
             </div>
           </div>
   
           {/* Product info */}
           <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
             <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
               <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{ropadetalle.nombre}</h1>
             </div>
   
             {/* Options */}
             <div className="mt-4 lg:row-span-3 lg:mt-0">
               <h2 className="text-2xl">Precio <FontAwesomeIcon icon={faMoneyBill} className="text-[#858B6F]"/> </h2>           
               <p className="text-3xl tracking-tight text-gray-900 mt-2">  {'S/'} {ropadetalle.precio}</p>
   
   
   
             {/*Tallas*/}
    
             <div className="mt-6">
                 <h2 className="mt-4">Tallas</h2> 
                 <div className="grid grid-cols-4 gap-3 mt-4">
                   {ropadetalle.tallas.split(',').map((talla) => (
                       <label key={talla} className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-[#858B6F] has-checked:bg-[#858B6F] has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-[#858B6F] has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25 ">
                         <input type="radio" name="size "  value={talla}  onChange={(e) => setTallaseleccionada(e.target.value)}  className="opacity-0 absolute inset-0  appearance-none focus:outline-none disabled:cursor-not-allowed "/>
                         <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white"> {talla}</span>
                       </label>
                   ))}
                 </div>             
             </div>

               {/* Reviews */}
               <div className="mt-6">
                 <h3 className="sr-only">Reviews</h3>
                 <div className="flex items-center">
                   <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => {
               const promedio =  Math.floor(  ropadetalle?.valoracion ?? 0 )
               const estrellaLlena = index < promedio;
               return(
                 <span key={index}>
                   <FontAwesomeIcon icon={ estrellaLlena ?  fasStar : farStar} className="text-amber-400"/>
                 </span>
               )
             })}
                   </div>
                   <a href={reviews.href} className="ml-3 text-sm font-medium text-[#858B6F] hover:text-[#858B6F]">
                     {ropadetalle.personas_viendo} Visualizaciones
                   </a>
                 
                 </div>
                 <div className="mt-4">
                       <p className="flex gap-2 items-center">
                      <FontAwesomeIcon icon={faGlobe} className="text-2xl"/>
                      <span>{ropadetalle.pais}</span>
                      </p>
                   </div>
               </div>
   
               {/*Boton*/}
               <form className="mt-10">
                 <button
                   type="submit"
                   onClick={() => {if (!tallaSeleccionada){
                      alert("Selecciona la talla por favor")
                      return
                   }
                   AgregarCarrito(ropadetalle.idRopas, ropadetalle.nombre, ropadetalle.precio ,tallaSeleccionada, 1 )

                   alert("Se agrego existosamente al carrito")
                  }} 
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#858B6F] px-8 py-3 text-base font-medium text-white hover:bg-[#858B6F] focus:ring-2 focus:ring-[#858B6F] focus:ring-offset-2 focus:outline-hidden"> Agregar Carrito 
                 </button>
               </form>
             </div>
   
             <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
               {/* Description and details */}
               <div>
                 <h3 className="sr-only">Description</h3>
   
                 <div className="space-y-6">
                   <p className="text-base text-gray-900">{ropadetalle.descripcion_profunda}</p>
                 </div>
               </div>
   
              <div className="mt-10">
               <h3 className="text-sm font-medium text-gray-900">Reflejos</h3>
                 <div className="mt-4">
                     <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                       {ropadetalle.Reflejos.split('.').filter(reflejo => reflejo.trim() !== '').map((Reflejos) => (
                         <li key={Reflejos} className="text-gray-400">
                            <span className="text-gray-600">{Reflejos}</span>
                         </li>
                       ))}
                     </ul>
                 </div>
              </div>
              
             </div>
           </div>
         </div>
       </div>
  )

}


export default ProductiDetalle