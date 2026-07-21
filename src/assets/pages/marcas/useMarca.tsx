import { useQuery } from "@tanstack/react-query"
import { fectchMarcas } from "../../services/marcas.services"
import { useSearchParams } from "react-router-dom"

export const useMarca = () => {
        const [searchParams] = useSearchParams()
        const queryClient = searchParams.toString()


    const { data , isLoading, error, isPlaceholderData } = useQuery({
        queryKey: ['marcas', queryClient],
        queryFn: ({ signal }) => fectchMarcas( queryClient,  signal),
        placeholderData: (previousData) => previousData
    })

    const marca = data?.datos || []

    const infoPaginacion = data?.paginacion

    return {
        marca,
        paginacion: infoPaginacion,
        cargando: isLoading,
        error: error ? error.message : null,
        hasMarca: marca.length>0,
        isPlaceholderData
    }
}