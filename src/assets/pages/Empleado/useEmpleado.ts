import {  useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {fectEmpleado, InserEmpleadoService, updateEmpleadoService, deleteEmpleadoService  } from "../../services/Empleadoservices"

export const useEmpleado = () => {
    const  queryClient = useQueryClient()

    const { data, isLoading, error } = useQuery({
        queryKey: ['Empleado'],
        queryFn: ({ signal }) =>  fectEmpleado(signal)
    })

    //INSERT 
    const insertMutation = useMutation({
            mutationFn: ({Nombres, rol, Correo, Apellidos , Telefono }: {Nombres: string, rol: string , Correo: string , Apellidos:string, Telefono:string}) =>
                InserEmpleadoService(Nombres, rol, Correo, Apellidos, Telefono ),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['Empleado'] })
            }
    })
    
    //UPDATE 
    const updatetMutation = useMutation({
            mutationFn: ({idempleados,Nombres, rol, Correo, Apellidos , Telefono}: { idempleados: string , Nombres: string, rol: string , Correo: string , Apellidos:string, Telefono:string }) =>
                updateEmpleadoService(idempleados, Nombres, rol, Correo , Apellidos, Telefono),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['Empleado'] })
            }
    })

    //DELETE
    const deletetMutation = useMutation({
            mutationFn: ({idempleados}: {idempleados: string }) =>
                deleteEmpleadoService(idempleados),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['Empleado'] })
            }
    })


    return {
        Empleado: Array.isArray(data) ? data : [],
        cargando:isLoading,
        error: error ? error.message : null,
        hasEmpleado: Array.isArray(data) && data.length>0,

        insertMutation: insertMutation.mutateAsync,
        updatetMutation: updatetMutation.mutateAsync,
        deletetMutation: deletetMutation.mutateAsync
    }
}