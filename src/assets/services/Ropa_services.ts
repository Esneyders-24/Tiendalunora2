import { CONFIG } from "../../config";
import type { ropa_lunora } from "../../types/Ropa";

const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.ROPA}`

export const fectRopa = async ( Categoria?: string, signal?: AbortSignal): 
    Promise<ropa_lunora[]> => {
    const url = new URL(API_URL)
    if(Categoria){
        url.searchParams.append("idCategoria", Categoria.toString())
    }
    
    const response = await fetch(url.toString(), {signal})
    if(!response.ok){
        throw new Error(`Error al obtener Ropa: ${response.status} ${response.statusText}`)
    }
    return response.json()
}

export const fetchRopaDetalle = async (
    idRopas?: number | string,
    signal?: AbortSignal
): Promise<ropa_lunora[]> => {
    const url = new URL(API_URL)

    if(idRopas){
        url.searchParams.append("idRopas", idRopas.toString())
    }

    const response = await fetch(url.toString(),{signal})
    if(!response.ok){
        throw new Error(`Error al obtener el producto: ${response.status} ${response.statusText}`)
    }
    return response.json()
}