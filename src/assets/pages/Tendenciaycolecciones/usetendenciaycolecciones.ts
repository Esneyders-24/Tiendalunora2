import { useQuery } from "@tanstack/react-query"
import { fectTendenciayc } from "../../services/tendenciasYC_services"


export const usetendenciaycolecciones = ( categoria?:| string ) => {
    const { data, isLoading, error } = useQuery ({
            queryKey: ['tendenciaycolecciones', categoria],
            queryFn: ({ signal }) => fectTendenciayc(categoria, signal)
    })

    return{
        tendenciasycolecciones: Array.isArray(data) ? data: [],
        cargando: isLoading,
        error: error ? error.message : null,
        tieneDatos: Array.isArray(data) && data.length > 0
    }
}