import { useCallback, useEffect, useMemo, useState } from "react"
import type { ItemCarrito } from "../../../types/ItemCarrito"

const getCarrito  = () => {
        if(typeof window !== "undefined"){
            const datos = localStorage.getItem("carritocompras")
            return datos ? JSON.parse(datos) : []
        }
        return []
    
}

export const useCarrito = () => {



    const [ listaItems, setListaItems] = useState<ItemCarrito[]>(getCarrito)

    useEffect(() => {
        const sync =() => setListaItems(getCarrito())

        window.addEventListener("CarritoActualizado", sync)
        window.addEventListener("storage", sync)

        return () => {
            window.removeEventListener("CarritoActualizado", sync)
            window.removeEventListener("storage", sync)
        }
    },[])

    const actualizarCarrito = useCallback((nuevoCarrito: ItemCarrito[]) => {
            localStorage.setItem("carritocompras", JSON.stringify(nuevoCarrito))
            setListaItems(nuevoCarrito)
            window.dispatchEvent(new Event("CarritoActualizado"))
    }, [])



    const vaciarcarrito = useCallback(() => actualizarCarrito([]), [actualizarCarrito])

    const eliminarPila = useCallback((id: number) => {
        actualizarCarrito(listaItems.filter(item => item.idtendenciayC !== id))
    },[listaItems, actualizarCarrito])

    const total = useMemo(() =>
        listaItems.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
     ,[listaItems])

     const  IncrementarCantidad = useCallback(( id: number) => {
        actualizarCarrito(listaItems.map(item =>
            item.idtendenciayC === id ? {...item, cantidad: item.cantidad + 1 } : item
        ))
     }, [listaItems, actualizarCarrito])

      const  dismunirCantidad = useCallback(( id: number) => {
        actualizarCarrito(listaItems.map(item =>
            item.idtendenciayC === id && item.cantidad > 1? {...item, cantidad: item.cantidad - 1 } : item
        ))
     }, [listaItems, actualizarCarrito])
     
     

    return {
        listaItems,
        hasListaItems: Array.isArray(listaItems) && listaItems.length>0,
        vaciarcarrito, 
        eliminarPila,
        total,
        dismunirCantidad, 
        IncrementarCantidad
    }
}
