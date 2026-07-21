export interface LoginResponse {
    success: boolean;
    mensaje?: string;
    id?: number;
    nombre?: string;
    correo?: string;
    telefono?: string;
}