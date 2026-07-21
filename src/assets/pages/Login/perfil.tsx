import { useEffect, useState } from "react";
import { obtenerPerfil } from "../../services/cliente";
import type { Cliente } from "../../../types/cliente";

const Perfil = () => {

    const [cliente, setCliente] = useState<Cliente | null>(null);

    useEffect(() => {

        const cargarPerfil = async () => {

            const id = Number(localStorage.getItem("idCliente"));

            const datos = await obtenerPerfil(id);

            setCliente(datos);

        };

        cargarPerfil();

    }, []);

    return (

        <div className="text-center mt-20">

            <h1>Mi Perfil</h1>

            <p><b>Nombre:</b> {cliente?.nombre}</p>

            <p><b>Correo:</b> {cliente?.correo}</p>

            <p><b>Teléfono:</b> {cliente?.telefono}</p>

        </div>

    );

};

export default Perfil;