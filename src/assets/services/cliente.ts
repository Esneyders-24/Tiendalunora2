import { CONFIG } from "../../config";
import type { Cliente } from "../../types/cliente";
import type { LoginResponse } from "../../types/LoginR";

const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.CLIENTES}`;

export const loginUsuario = async (
    correotelefono: string,
    clave: string
): Promise<LoginResponse> => {

    const formData = new FormData();

    formData.append("correotelefono", correotelefono);
    formData.append("clave", clave);

    const response = await fetch(API_URL, {
        method: "POST",
        body: formData
    });

    if (!response.ok) {
        throw new Error("Error del servidor");
    }

    return await response.json();
};

export const obtenerPerfil = async (
    id: number
): Promise<Cliente> => {

    const formData = new FormData();

    formData.append("id", id.toString());

    const response = await fetch(API_URL, {
        method: "POST",
        body: formData
    });

    if (!response.ok) {
        throw new Error("Error del servidor");
    }

    return await response.json();
};