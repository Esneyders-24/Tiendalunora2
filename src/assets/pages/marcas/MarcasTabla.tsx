import { useSearchParams } from "react-router-dom"
import { useMarca } from "./useMarca"
import Paginacion from "./Paginacion"
const tableStyles = {
   wrapper: "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm",
   table : "min-w-full divide-y divide-slate-200",
   thead: "bg-slate-50",
   th: "px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500",
   tbody:"divide-y divide-slate-200 bg-white",
   tr: "transition-colors hover:bg-slate-50",
   td: "px-6 py-4 text-sm text-slate-700 whitespace-nowrap"
}

const MarcaTabla = () => {
    const {marca, cargando, error, hasMarca, isPlaceholderData, paginacion } = useMarca()
    const [searchParams, setSearchParams] = useSearchParams()

    const manejarOrden = (columna: string) =>{
        const ordenActual = searchParams.get('columna_orden')
        const tipoActual = searchParams.get('tipo_orden')
        let nuevoTipo = 'ASC'
        if(ordenActual === columna && tipoActual === 'ASC'){
            nuevoTipo = 'DESC'            
        }
        searchParams.set('columna_orden', columna)
        searchParams.set('tipo_orden', nuevoTipo)
        searchParams.set('pagina','1')
        setSearchParams(searchParams)
    }

    if ( cargando) return (
        <div className="p-20 text-center space-y-4">
            <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin"/>
            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Cargando marcas </p>
        </div>
    ) 
    if (error) return (
        <div className="p-20 text-center space-y-4">
                <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
                <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">{error}</p>
        </div>
    )
    
    return (
        <>
            <div className={`transition-opacity duration-200 ${isPlaceholderData} ? 'opacity-50' : 'opacity-100'}` }>
            <div className={tableStyles.wrapper}>
                {!hasMarca ? (
                    <div>No se encontraron datos de las marcas</div>
                ): (
                    <table className={tableStyles.table}>
                    <thead className={tableStyles.thead}>
                        <tr className={tableStyles.tr}>
                            <th className={tableStyles.th}onClick={() => manejarOrden('idmarca')}>Codigo</th>
                            <th className={tableStyles.th}onClick={() => manejarOrden('nombre')} >Nombre</th>
                            <th className={tableStyles.th}onClick={() => manejarOrden('pais')}>Pais</th>
                            <th className={tableStyles.th}onClick={() => manejarOrden('ciudad')}>Ciudad</th>
                            <th className={tableStyles.th}onClick={() => manejarOrden('representante')}>Representante</th>
                            <th className={tableStyles.th}onClick={() => manejarOrden('categoria')}>categoria</th>
                            <th className={tableStyles.th}onClick={() => manejarOrden('descripcion')}>Descripcion</th>
                            <th className={tableStyles.th}onClick={() => manejarOrden('estado')}>Estado</th>
                        </tr>
                    </thead>
                    <tbody className={tableStyles.tbody}>
                        {marca.map(itemMarca => (
                            <tr key={itemMarca.idmarca} className={tableStyles.tr}>
                                <td className={tableStyles.td}>{itemMarca.idmarca}</td>
                                <td className={tableStyles.td}>{itemMarca.nombre}</td>
                                <td className={tableStyles.td}>{itemMarca.pais}</td>
                                <td className={tableStyles.td}>{itemMarca.ciudad}</td>
                                <td className={tableStyles.td}>{itemMarca.representante}</td>
                                <td className={tableStyles.td}>{itemMarca.categoria}</td>
                                <td className={tableStyles.td}>{itemMarca.descripcion}</td>
                                <td className={tableStyles.td}>{itemMarca.estado}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                )}
                </div>
                    {paginacion  && (
                        <Paginacion
                            paginaActual={ paginacion.pagina_actual}
                            totalPagina={ paginacion.total_paginas}
                        />
                    )}

            </div>            
        
        
        </>
    )
}

export default MarcaTabla