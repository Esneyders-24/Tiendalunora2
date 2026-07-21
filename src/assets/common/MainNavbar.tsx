import { useState } from 'react'
import { NavLink, useAsyncValue } from 'react-router-dom'
import img2 from '../img/Simbolito (1).png'
import img1 from '../img/img1tv.png'
import { faBars, faCartShopping, faUser, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import Carrito from '../pages/Carrito/index'
import { useAuth } from '../../Context/AuthContext'




const Nav_inicio = [

    {
        id: "Tendencias y colecciones",
        etiqueta: "Productos",
        submenu: ["Tendencias y colecciones", "Ropas", "Zapatos", "Accesorios"],
        ruta: ["/Tendencias", "/Ropas", "/Zapatos", "/Accesorios"]

    },
    {
        id: "Ropas",
        etiqueta: "Deportes y Aire libre",
        submenu: ["Camisetas", "Accesorios deportivos", "Fitness", "Bicicletas"],
        ruta: ["/Camisetas", "/AccesorioDeportivo", "/Fitness", "/Bicicletas"]

    },
    {
        id: "Ofertas",
        etiqueta: "Ofertas",
        submenu: ["Promociones"],
        ruta: ["/Promociones"]
    },
    {
        id: "Empleados",
        etiqueta: "Empleados",
        submenu: ["Empleados", "marca", "mapa"],
        ruta: ["/Empleado", "/marca", "/mapa"]
    },

]


const MainNavbar = () => {

    const [menuMovilVisible, setMenuMovilVisible] = useState(false)
    const { user, isAuthConticated } = useAuth();
    



    return (
        <nav className="bg-[#858B6F] sticky top-0 z-50 shadow-lg">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 py-4">
                <Link to="/">
                    <img className="w-20 h-auto object-cover" src={img1} alt="logo" />
                </Link>
                <div className="hidden md:flex">

                    <ul className="flex list-none ml-8">
                        {Nav_inicio.map(itemMenu => (
                            <li key={itemMenu.id} className="relative group">

                                <div className="flex items-center gap-2 px-5 py-3  text-white text-sm  hover:bg-yellow-300  hover:text-black rounded-lg transition duration-300"> {itemMenu.etiqueta} <img src={img2} className="w-4 h-auto object-contain" alt="" /></div>
                                <ul className="hidden group-hover:block absolute top-full left-0 bg-white min-w-55 rounded-xl shadow-xl overflow-hidden">
                                    {itemMenu.submenu.map((sub, index) => (
                                        <li key={index}> <NavLink to={itemMenu.ruta[index]} className="block px-4 py-3 text-black hover:bg-yellow-300 transition duration-300">{sub}</NavLink></li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center gap-4">

                    {isAuthConticated ? (
                         <button className="p-2  text-white hover:text-yellow-300 transition duration-300 cursor-pointer">
                        <Link to="/perfil">
                            <FontAwesomeIcon icon={faUser} /> {user?.nombre}
                            
                        </Link>
                        </button>
                    ) : (
                        <button className="p-2  text-white hover:text-yellow-300 transition duration-300 cursor-pointer">
                        <Link to="/Login">
                            <FontAwesomeIcon icon={faUser} /> Usuario
                        </Link>
                        </button>
                    )}

                    <button className="p-2  text-white hover:text-yellow-300 transition duration-300 cursor-pointer">
                        <Link to="/carrito">
                            <FontAwesomeIcon icon={faCartShopping} className="size-5" />  Shopping
                        </Link>
                    </button>
                    <button className="p-2  text-white hover:text-yellow-300 transition duration-300 cursor-pointer">
                        <Link to="/Login" >
                            <FontAwesomeIcon icon={faUser} className="size-5" />  cambiar de cuenta
                        </Link>
                    </button>

                    <button className="md:hidden p-2 text-white hover:text-yellow-300 transition duration-300 cursor-pointer"
                        onClick={() =>
                            setMenuMovilVisible(!menuMovilVisible)}>
                        <FontAwesomeIcon icon={menuMovilVisible ? faXmark : faBars} className="size-6" />
                    </button>
                </div>
            </div>
            {menuMovilVisible && (
                <div className="md:hidden bg-[#6F755C] border-t  border-white/10 shadow-2xl">
                    <ul className="flex flex-col py-4">
                        {Nav_inicio.map(itemMenu => (
                            <li key={itemMenu.id} className="border-b border-white/10">
                                <a href="" className="flex justify-between items-center px-6 py-4 text-white hover:bg-yellow-300 hover:text-black transition duration-300">{itemMenu.etiqueta}<img src={img2} className="w-4 h-auto hidden" alt="" /></a>
                                <ul className="bg-[#6F755C]">
                                    {itemMenu.submenu.map((sub, index) => (
                                        <li key={index}>
                                            <NavLink to={itemMenu.ruta[index]} className=" block px-10 py-3 text-white  hover:bg-yellow-300 transition duration-300 ">{sub} </NavLink></li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>

    )

}

export default MainNavbar