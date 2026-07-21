import {useQuery} from "@tanstack/react-query"
import {fetchRopaDetalle} from "../../services/Ropa_services"
import type {ropa_lunora} from "../../../types/Ropa"



 export const useRopaDetalle = ( idRopas?: number | string  ) => {

    const { data, isLoading, error} = useQuery({
             queryKey: ['ropadetalle', idRopas ],
             queryFn: ({ signal }) => fetchRopaDetalle(idRopas, signal)
    
    })

    const ropadetalle: ropa_lunora = Array.isArray(data) && data.length > 0 ? data[0] : {} as ropa_lunora;
    
    
    return {
        ropadetalle,
        cargando: isLoading,
        error: error? error.message : null,
        tieneDatosRopaDetalle: Array.isArray(data) && data.length>0,

    }
}