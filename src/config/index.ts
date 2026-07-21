export const CONFIG = {
    API_URL: import.meta.env.VITE_API_BASE_URL,
    ENV: import.meta.env.VITE_ENVIRONMENT,

    ENDPOINTS:{
        TENDENCIASYCOLECCIONES: '/tendencias_colecciones.php',
        ROPA:'/Ropas.php',  
        EMPLEADO: '/Empleado.php',
        CLIENTES: '/cliente.php',
        EMPLEADO_INSERT: '/Empleadoinsert.php',
        EMPLEADO_UPDATE: '/Empleadoupdate.php',
        EMPLEADO_DELETE: '/EmpleadoDelete.php',
        MARCAS: '/marcas.php',
    },

    version: '1.0.0'
} as const