import { useState } from "react";
import { loginUsuario } from "../../services/cliente";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext"
import Fondo from "../../img/Fonlog.png"


const Loginpanel1 = () => {
    const navigate = useNavigate();

    const [correotelefono, setCorreoTelefono] = useState("");
    const [clave, setClave] = useState("");
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        try {

            const respuesta = await loginUsuario(correotelefono, clave);

            if (respuesta.success) {

               login({
                    id: respuesta.id!,
                    nombre: respuesta.nombre!,
                    correo: respuesta.correo!,
                    telefono: respuesta.telefono!
                });

                navigate("/perfil");

            } else {

                alert(respuesta.mensaje);

            }

        } catch (error) {

            console.error(error);
            alert("Error al iniciar sesión");

        }

    };

    return (


        <div className="max-w-7xl mx-auto px-3 py-20">

            <form onSubmit={handleSubmit}>

                <div className="space-y-5 mt-20">

                    <h1> LOGIN</h1>
                    <input
                        type="text"
                        required
                        value={correotelefono}
                        onChange={(e) => setCorreoTelefono(e.target.value)}
                        placeholder="Correo o teléfono"
                        className="w-full px-4 py-2 border border-slate-500"
                    />

                    <input
                        type="password"
                        required
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                        placeholder="Contraseña"
                        className="w-full px-4 py-2 border border-slate-500"
                    />

                    <button
                        type="submit"
                        className="px-5 py-2 border border-slate-500 rounded-full"
                    >
                        Iniciar sesión
                    </button>

                </div>

            </form>

        </div>
        

    );

}

export default Loginpanel1