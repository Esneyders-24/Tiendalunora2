import { useQuery } from "@tanstack/react-query"
import { fetchTendenciaDetalle } from "../../services/tendenciasYC_services"
import type {tendencias_colecciones} from "../../../types/TendenciaYC"


export const useTendenciaDetalle = ( idtendenciayC?:number | string ) => {

    const { data, isLoading, error } = useQuery({
            queryKey: ['tendencia', idtendenciayC],
            queryFn: ({ signal }) => fetchTendenciaDetalle(idtendenciayC, signal)

                   
    })

      const tendencia: tendencias_colecciones = Array.isArray(data) && data.length > 0 ? data[0] : {} as tendencias_colecciones; 

        
    return {
        tendencia,
        cargando: isLoading,
        error: error ? error.message : null,
        tieneDatos: Array.isArray(data) && data.length>0,
    }
}