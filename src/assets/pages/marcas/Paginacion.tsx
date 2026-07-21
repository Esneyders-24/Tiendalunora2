import { useSearchParams } from "react-router-dom"

interface Props{
    totalPagina: number
    paginaActual: number
}

const Paginacion = ({ totalPagina, paginaActual }: Props) => {
    const [searchParams, setSearchParams] = useSearchParams()
    if(totalPagina <= 1) return null

    const CambiarPagina = (nuevaPagina: number) => {
        searchParams.set('pagina', nuevaPagina.toString())
        setSearchParams(searchParams)
    }

    return (
        
        <nav className="flex items-center justify-center space-x-2 mt-6 pb-4">
                <button 
                   onClick={() => CambiarPagina(paginaActual - 1)} 
                   disabled={paginaActual<=1}
                   className="px-4 py-2 border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed ">
                    Anterior
                </button>
                <span className="text-sm text-shadow-amber-700 px-4">
                    Pagina <span className="font-semibold">{paginaActual}</span> de <span className="font-semibold">{totalPagina}</span>
                </span>

                <button 
                   onClick={() => CambiarPagina(paginaActual + 1)} 
                   disabled={paginaActual>= totalPagina}
                   className="px-4 py-2 border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed ">
                    Siguiente
                </button>
        </nav>

    )
        
    
}

export default Paginacion