import { CONFIG } from "../../config";
import type { tendencias_colecciones } from "../../types/TendenciaYC";

const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.TENDENCIASYCOLECCIONES}`

export const fectTendenciayc = async (categoria?: string, signal?: AbortSignal): 
Promise<tendencias_colecciones[]> => {
    const url = new URL(API_URL)
    if(categoria){
       url.searchParams.append("idcategoria", categoria.toString())
    }

    const response = await fetch(url.toString(), {signal})
    if(!response.ok){
        throw new Error(`Error al obtener productos: ${response.status} ${response.statusText}`)
    }
    return response.json()
}

export const fetchTendenciaDetalle = async (
    idtendenciayC?: number | string,
    signal?: AbortSignal
): Promise<tendencias_colecciones[]> => {
    const url = new URL(API_URL)

    if(idtendenciayC){
        url.searchParams.append("idtendenciayC", idtendenciayC.toString())
    }

    const response = await fetch(url.toString(), {signal})
    if(!response.ok){
        throw new Error(`Error al obtener el producto: ${response.status} ${response.statusText}`)
    }
    return response.json()
}


