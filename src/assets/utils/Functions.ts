import type { ItemCarrito } from "../../types/ItemCarrito"

export const AgregarCarrito = (idtendenciayC:number , nombre:string, precio:number, tallas:string, cantidad:number) => {
        const itemCarrito: ItemCarrito = {
                idtendenciayC:idtendenciayC,
                nombre: nombre,
                precio: precio,
                tallas: tallas,
                cantidad: cantidad
        }

        let carrito: ItemCarrito[] = localStorage.getItem("carritocompras") == null
                                     ? []
                                     : JSON.parse(localStorage.getItem("carritocompras") || "[]" )

        const index: number = carrito.findIndex(item => item.idtendenciayC === itemCarrito.idtendenciayC)

        if (index === -1){

        carrito.push(itemCarrito)
        }
        else {
                carrito[index].cantidad += cantidad
        }

        localStorage.setItem("carritocompras", JSON.stringify(carrito))

        if(typeof window !== "undefined"){
                window.dispatchEvent(new Event("CarritoActualizado"))
        }
}