export interface Marcas {
    idmarca: number;
    nombre: string;
    pais: string;
    ciudad: string | null;
    representante: string | null;
    anio_registro: number | null;
    categoria: string;
    descripcion: string;
    estado: string;
}

export interface Paginacioninfo {
    total_registros: number;
    total_paginas: number;
    pagina_actual: number;
    limite: number;
}

export interface MarcasResponse{
    paginacion: Paginacioninfo;
    datos: Marcas[];
}