import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEmpleado } from "./useEmpleado"
import { faEdit, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react"
import { deleteEmpleadoService, InserEmpleadoService, updateEmpleadoService } from "../../services/Empleadoservices"
import { useQueryClient } from "@tanstack/react-query"



const tableStyles = {
    wrapper: "overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm mt-10",
    table: "min-w-full divide-y divide-slate-200",
    thead: "bg-slate-50",
    th: "px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 ",
    tbody: "divide-y divide-slate-200 bg-white",
    tr: "transition-colors hover:bg-slate-50",
    td: "px-6 py-4 text-sm text-slate-700 whitespace-nowrap"
}


const Empleadotabla = () => {
    const { Empleado, cargando, error, hasEmpleado } = useEmpleado()
    const [modalConfig, setModalConfig] = useState<{ tipo: 'insert' | 'update' | 'delete' | null }>({ tipo: null })

    const [idempleados, setidempleados] = useState("")
    const [Nombres, setNombres] = useState("")
    const [Correo, setCorreo] = useState("")
    const [rol, setrol] = useState("")
    const [Apellidos, setApellidos] = useState("")
    const [Telefono, setTelefono] = useState("")

    const cerrarModal = () => {
        setModalConfig({ tipo: null })
        setidempleados("")
        setNombres("")
        setCorreo("")
        setrol("")
        setApellidos("")
        setTelefono("")
    }

    const queryClient = useQueryClient();

    const handleInsert = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await InserEmpleadoService(Nombres, Correo, rol, Apellidos, Telefono);

            await queryClient.invalidateQueries({
                queryKey: ["Empleado"]
            });

            cerrarModal();

        } catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await updateEmpleadoService(idempleados, Nombres, Correo, rol, Apellidos, Telefono);

            await queryClient.invalidateQueries({
                queryKey: ["Empleado"]
            });

            cerrarModal();

        } catch (err) {
            console.log("Error al actualizar", err);
        }
    }

    const handDelete = async (event: React.FormEvent<HTMLFormElement>) => {
           event.preventDefault();
            try {
            await deleteEmpleadoService(idempleados);

            await queryClient.invalidateQueries({
                queryKey: ["Empleado"]
            });

            cerrarModal();

        } catch (err) {
            console.log("Error al eliminar", err);
        }
    }


    if (cargando) return (
        <div className="p-20 text-center space-y-4">
            <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Cargando directores...</p>
        </div>
    )
    if (error) return (
        <div className="p-20 text-center space-y-4">
            <div className="inline-block w-8 h-8 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">{error}</p>
        </div>
    )



    return (
        <>
            <button className="mt-6 text-sm bg-red-100 px-6 py-2 rounded-2xl text-red-500 hover:text-red-700 transition-colors cursor-pointer ml-4 "
                onClick={() => setModalConfig({ tipo: 'insert' })}>Nuevo Empleado</button>
            <div className={tableStyles.wrapper}>
                {!hasEmpleado ? (
                    <div>No se encotraron datos de directores</div>
                ) : (
                    <table className={tableStyles.table}>
                        <thead className={tableStyles.thead}>
                            <tr className={tableStyles.tr}>
                                <th className={tableStyles.th}>Código</th>
                                <th className={tableStyles.th}>NOMBRE</th>
                                <th className={tableStyles.th}>APELLIDOS</th>
                                <th className={tableStyles.th}>CORREO</th>
                                <th className={tableStyles.th}>TELEFONO</th>
                                <th className={tableStyles.th}>ROLES</th>
                                <th className={tableStyles.th}></th>
                            </tr>
                        </thead>
                        <tbody className={tableStyles.tbody}>
                            {Empleado.map(itemEmpleado => (
                                <tr key={itemEmpleado.idempleados} className={tableStyles.tr + " group"}>
                                    <td className={tableStyles.td}>{itemEmpleado.idempleados}</td>
                                    <td className={tableStyles.td}>{itemEmpleado.Nombres}</td>
                                    <td className={tableStyles.td}>{itemEmpleado.Apellidos}</td>
                                    <td className={tableStyles.td}>{itemEmpleado.Correo}</td>
                                    <td className={tableStyles.td}>{itemEmpleado.Telefono}</td>
                                    <td className={tableStyles.td}>{itemEmpleado.rol}</td>
                                    <td className={tableStyles.td}><button
                                        onClick={() => {
                                            setidempleados(itemEmpleado.idempleados.toString())
                                            setNombres(itemEmpleado.Nombres)
                                            setApellidos(itemEmpleado.Apellidos)
                                            setCorreo(itemEmpleado.Correo)
                                            setTelefono(itemEmpleado.Telefono)
                                            setrol(itemEmpleado.rol)
                                            setModalConfig({ tipo: 'update' })
                                        }}
                                        title="Editar"><FontAwesomeIcon icon={faEdit} className="opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:text-red-600 cursor-pointer" /></button></td>
                                    <td className={tableStyles.td}><button 
                                      onClick={() => {
                                         setidempleados(itemEmpleado.idempleados.toString())
                                         setNombres(itemEmpleado.Nombres)
                                         setModalConfig({ tipo: 'delete' })
                                      }}
                                    
                                    title="Eliminar"><FontAwesomeIcon icon={faTrash} className="opacity-0 invisible group-hover:opacity-100 group-hover:visible hover:text-red-600  cursor-pointer" /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            {modalConfig.tipo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md -mt-32 ">

                        <div className="flex justify-between items-center p-5 border-b">
                            <h3 className="text-xl font-bold text-slate-800">
                                {modalConfig.tipo === 'insert' && 'Nuevo Empleado'}
                                {modalConfig.tipo === 'update' && 'Editar Empleado'}
                                {modalConfig.tipo === 'delete' && 'Eliminar Empleado'}
                            </h3>
                            <button onClick={cerrarModal} className="text-slate-400 hover:text-slate-700">
                                <FontAwesomeIcon icon={faXmark} className="text-xl" />
                            </button>
                        </div>
                        <div className="p-5">
                            {modalConfig.tipo === 'delete' ?
                               (<form onSubmit={ handDelete} className="space-y-4">
                                    <p>
                                        ¿Estas seguro de eliminar el empleador <strong>{Nombres}</strong>?
                                    </p>

                                  <div className="flex justify-center py-6 gap-3 border-t pt-4">
                                    <button type="button" className="mt-6 text-sm bg-red-100 px-6 py-2 rounded-2xl text-red-500 hover:text-red-700 font-medium transition-colors cursor-pointer "
                                        onClick={() => setModalConfig({ tipo: null })}> Cerrar</button>
                                    <button type="submit" className="mt-6 text-sm bg-green-100 px-6 py-2 rounded-2xl text-green-500 hover:text-green-700 font-medium transition-colors cursor-pointer "
                                    > Eliminar</button>
                                </div>

                               </form>)
                            :(

                            <form onSubmit={modalConfig.tipo === 'insert' ? handleInsert : handleUpdate} className="space-y-4">
                                <input type="text"
                                    placeholder="Nombres"
                                    required
                                    minLength={3}
                                    value={Nombres}
                                    onChange={(event) => setNombres(event.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 border-slate-300 focus: outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <input type="text"
                                    placeholder="Apellidos"
                                    required
                                    minLength={10}
                                    value={Apellidos}
                                    onChange={(event) => setApellidos(event.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 border-slate-300 focus: outline-none focus:ring-2 focus:ring-indigo-500 "
                                />

                                <input type="text"
                                    placeholder="Correo electronico"
                                    required
                                    minLength={10}
                                    value={Correo}
                                    onChange={(event) => setCorreo(event.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 border-slate-300 focus: outline-none focus:ring-2 focus:ring-indigo-500"
                                />

                                <input type="text"
                                    placeholder="Telefono"
                                    required
                                    minLength={9}
                                    value={Telefono}
                                    onChange={(event) => setTelefono(event.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 border-slate-300 focus: outline-none focus:ring-2 focus:ring-indigo-500"
                                />

                                <input type="Text"
                                    placeholder="rol"
                                    required
                                    minLength={10}
                                    value={rol}
                                    onChange={(event) => setrol(event.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 border-slate-300 focus: outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <div className="flex justify-center py-6 gap-3 border-t pt-4">
                                    <button type="button" className="mt-6 text-sm bg-red-100 px-6 py-2 rounded-2xl text-red-500 hover:text-red-700 font-medium transition-colors cursor-pointer "
                                        onClick={() => setModalConfig({ tipo: null })}> Cerrar</button>
                                    <button type="submit" className="mt-6 text-sm bg-green-100 px-6 py-2 rounded-2xl text-green-500 hover:text-green-700 font-medium transition-colors cursor-pointer "
                                    > Guardar</button>
                                </div>
                            </form>)}
                        </div>
                    </div>
                </div>
            )}

        </>

    )
}

export default Empleadotabla