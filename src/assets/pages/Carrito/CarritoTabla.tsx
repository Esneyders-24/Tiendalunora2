import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useCarrito } from "./Usecarrito"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const tableStyles = {
   wrapper: "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm",
   table : "min-w-full divide-y divide-slate-200",
   thead: "bg-slate-50",
   th: "px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",
   tbody:"divide-y divide-slate-200 bg-white",
   tr: "transition-colors hover:bg-slate-50",
   td: "px-6 py-4 text-sm text-slate-700 whitespace-nowrap"
}
const CarritoTabla = () => {
  const {listaItems, hasListaItems, vaciarcarrito, eliminarPila, total, dismunirCantidad, IncrementarCantidad} = useCarrito()

  return (
     <>
            {!hasListaItems ? (
                <div>No se encontraron datos de directores</div>
            ) : (
                <>
            <div className={tableStyles.wrapper}>
              <table className={tableStyles.table}>
                <thead className={tableStyles.thead}>
                    <tr className={tableStyles.tr}>
                       <th className={tableStyles.th}>CÓDIGO</th>
                       <th className={tableStyles.th}>PRODUCTO</th>
                       <th className={tableStyles.th}>PRECIO</th>
                       <th className={tableStyles.th}>TALLA</th>
                       <th className={tableStyles.th}>CANTIDAD</th>
                       <th className={tableStyles.th}>SUBTOTAL</th>
                    </tr>
                </thead>

                  <tbody className={tableStyles.tbody}>
                      {listaItems.map((item) => (
                      <tr key={item.idtendenciayC}>
                          <td className={tableStyles.td}>{item.idtendenciayC}</td>
                          <td className={tableStyles.td}>{item.nombre}</td>
                          <td className={tableStyles.td}> S/ {item.precio}</td>
                          <td className={tableStyles.td}>{item.tallas}</td>
                          <td className={tableStyles.td}>
                            
                            <div className=" flex items-center gap-3">  
                                <button 
                                onClick={() => dismunirCantidad(item.idtendenciayC)}
                                className="cursor-pointer">-</button>                         
                                <span>{item.cantidad}</span>
                                <button
                                 onClick={() => IncrementarCantidad(item.idtendenciayC)} 
                                className="cursor-pointer">+</button>
                                 </div>

                            
                            </td>
                          <td className={tableStyles.td}> S/ {(item.precio * item.cantidad).toFixed(2)}</td>
                          <td className={tableStyles.td}>
                             <button className="cursor-pointer text-red-500 hover:text-red-800"
                             onClick={ () => eliminarPila(item.idtendenciayC)}>
                                <FontAwesomeIcon icon={faTrash} />
                             </button>
                             </td>
                       </tr>
                      ))}
                  </tbody>
               </table>
             </div>
          <div className=" flex mt-4 gap-4 ">
             <div className="w-30 h-10 py-2 bg-green-800 rounded-lg  text-center text-white " >
                Total: <span className="text-white text-center"> S/{total.toFixed(2)}</span> 
             </div>
             <div onClick={vaciarcarrito}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors cursor-pointer"> Vaciar Carrito
             </div>
           </div>
           
                </>
            )}
        </>
    
  )
}

export default CarritoTabla