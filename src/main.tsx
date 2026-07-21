import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

import './index.css'
import App from './App.tsx'
import { AuthProvider } from './Context/AuthContext.tsx'
import ProtectedRoute from './assets/Components/ProtectedRoute.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
})

const vinculacion = createBrowserRouter([
  {
    path: "/", 
    element: <App/>,
    children: [
      {
        index: true,
        lazy: async () => {
        return {Component: (await import('./assets/pages/inicio.tsx')).default}
        }
      },
      {
        path: "Tendencias",
        lazy: async () => ({ Component: (await import('./assets/pages/Tendenciaycolecciones/index.tsx')).default}
      )
      },
      {
        path: "Ropas",
        lazy: async () => ({ Component: (await import('./assets/pages/Ropa/index.tsx')).default}
      )
    },
    {
        path: "Zapatos",
        lazy: async () => ({ Component: (await import('./assets/pages/Zapatos.tsx')).default}
      )
    },

        {
        path: "marca",
        lazy: async () => ({ Component: (await import('./assets/pages/marcas/index.tsx')).default}
      )
    },

    {
        path: "Accesorios",
        lazy: async () => ({ Component: (await import('./assets/pages/Accesorios.tsx')).default}
      )
    },
    {
      path: "Camisetas",
        lazy: async () => ({ Component: (await import('./assets/pages/camisetas.tsx')).default}
      )
    },

    {
      path: "AccesorioDeportivo",
        lazy: async () => ({ Component: (await import('./assets/pages/AceesorioDeportivo.tsx')).default}
      )
    },
    {
      path: "Fitness",
        lazy: async () => ({ Component: (await import('./assets/pages/Fitness.tsx')).default}
      )
    },
    {
      path: "Bicicletas",
        lazy: async () => ({ Component: (await import('./assets/pages/Bicicletas.tsx')).default}
      )
    },
    {
      path: "Promociones",
        lazy: async () => ({ Component: (await import('./assets/pages/promociones.tsx')).default}
      )
    },

    {
      path: "carrito",
        lazy: async () => ({ Component: (await import('./assets/pages/Carrito')).default}
      )
    },

    {
      path: "*",
        lazy: async () => ({ Component: (await import('./assets/pages/Pagina404.tsx')).default}
      )
    },
    {
      path: "Ropadetalle/:idRopas",
        lazy: async () => ({ Component: (await import('./assets/pages/RopaDetalle/index.tsx')).default}
      )
    },
    {
      path: "detalletendencia/:idtendenciayC",
        lazy: async () => ({ Component: (await import('./assets/pages/productoDetalles/indexTendencia.tsx')).default}
      )
    },
       
     {
      path: "Login",
        lazy: async () => ({ Component: (await import('./assets/pages/Login/Login.tsx')).default}
      )
    },

    {
      path: "mapa",
      lazy : async () => ({ Component: (await import('./assets/pages/mapa/index.tsx')).default})
    },

    {
       element:<ProtectedRoute/>,
        children: [
             {
      path: "Empleado",
        lazy: async () => ({ Component: (await import('./assets/pages/Empleado/Empleadotabla.tsx')).default}
      )
    }
        ]
    },
    
     {
      path: "perfil",
        lazy: async () => ({ Component: (await import('./assets/pages/Login/perfil.tsx')).default}
      )
    },
    
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router = {vinculacion} />
    <ReactQueryDevtools initialIsOpen= {false}/>
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)