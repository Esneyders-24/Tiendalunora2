
import { CONFIG } from "../../config"
import type { Empleado } from "../../types/Empleado"



export const fectEmpleado = async (signal? : AbortSignal): Promise<Empleado[]> =>{
    const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.EMPLEADO}`;
    const response = await fetch(API_URL, {signal})
    if(!response.ok){
        throw new Error(`Error al obtener directores: ${response.status}${response.statusText}`)
    }
    return response.json()
}

export const InserEmpleadoService = async(Nombres: string, Correo: string, rol:string, Apellidos:string, Telefono:string) =>{
    const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.EMPLEADO_INSERT}`;
    const formData = new FormData()
    formData.append("Nombres", Nombres)
    formData.append("Correo", Correo )
    formData.append("rol", rol)
    formData.append("Apellidos", Apellidos)
    formData.append("Telefono", Telefono)

    const response = await fetch(API_URL,{
        body: formData,
        method: "POST"
    })
    return response.text()
    
}


export const updateEmpleadoService = async( idempleados: string , Nombres: string, Correo: string, rol:string , Apellidos:string, Telefono:string) =>{
    const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.EMPLEADO_UPDATE}`;
    const formData = new FormData()
    formData.append("idempleados", idempleados)
    formData.append("Nombres", Nombres)
    formData.append("Correo", Correo )
    formData.append("rol", rol)
    formData.append("Apellidos", Apellidos)
    formData.append("Telefono", Telefono)

    const response = await fetch(API_URL,{
        body: formData,
        method: "POST"
    })
    return response.text()
    
}

export const deleteEmpleadoService = async( idempleados: string ) =>{
    const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.EMPLEADO_DELETE}`;
    const formData = new FormData()
    formData.append("idempleados", idempleados)
    const response = await fetch(API_URL,{
        body: formData,
        method: "POST"
    })
    return response.text()
    
}