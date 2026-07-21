import logofooter from '../img/img1tv.png'
import { faFacebook, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

const redesociales = [
      {nombre: "X", Vinculo: "http://x.com", icono: faXTwitter},
      {nombre: "Instagram", Vinculo: "http://instagram.com", icono: faInstagram},
      {nombre: "Facebook", Vinculo:"http://facebook.com", icono: faFacebook },
      {nombre: "Tik tok", Vinculo: "http://tiktok.com", icono: faTiktok},
      {nombre: "Whatapps", Vinculo: "http://whatsapp.com", icono: faWhatsapp}
]

  return (
    <footer className="bg-[#838B6F] text-white py-10 mt-10">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        <div>
          <h1 className="flex w-24 md:w-30 h-auto object-cover">
            <img src={logofooter} alt="" />
          </h1>

          <p className="mt-3 text-white-300  text-sm md:text-base">
            Encuentra el equilibrio perfecto entre sofisticación y adrenalina. Ropa de vestir, equipamiento deportivo y las mejores bicicletas en un solo lugar.
          </p>

            <div className="flex gap-4 mt-2 ">
              {redesociales.map(irdsociales => (
                   <a key={irdsociales.nombre} 
                    href={irdsociales.Vinculo} target='_blank'
                    className='hover:text-teal-300 items-center justify-center' >
                       <FontAwesomeIcon
                        icon={irdsociales.icono}
                       />
                    </a>
            ))}
            </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
          <div className=" flex flex-col gap-4 whitespace-nowrap  ">
            <h2 className=" text-xl md:text-2xl font-semibold mb-4 ">
              Categorias
            </h2>

            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition ">
                Tendencias y colecciones
              </li>

              <li className="hover:text-white transition">
                Ropas
              </li>

              <li className="hover:text-white transition">
                Zapatos
              </li>

              <li className="hover:text-white transition">
                Accesorios
              </li>

            </ul>
          </div>

          <div className=" flex flex-col gap-4 md:whitespace-nowrap ml-0 lg:ml-20 ">
            <h2 className=" text-xl md:text-2xl font-semibold mb-4   ">
              Ayuda al Cliente
            </h2>

            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition">
                Preguntas Frecuentes
              </li>

              <li className="hover:text-white transition">
                Política de Envíos
              </li>

              <li className="hover:text-white transition">
                Devoluciones y Cambios
              </li>

              <li className="hover:text-white transition">
                Guía de Tallas
              </li>

              <li className="hover:text-white transition">
                Términos y Condiciones
              </li>

              <li className="hover:text-white transition">
                Política de Privacidad
              </li>

            </ul>
          </div>

          <div className=" flex flex-col gap-4 whitespace-nowrap  ">
            <h2 className=" text-xl md:text-2xl font-semibold mb-4 ml-0 md:translate-x-40  ">
              Contacto
            </h2>

            <ul className="space-y-2 text-gray-300 ml-0 lg:translate-x-40 ">
              <li className="hover:text-white transition ">
                ⚲ Av. Principal 123 Ciudad, País
              </li>

              <li className="hover:text-white transition">
                🕻 +1 234 567 8900
              </li>

              <li className="hover:text-white transition">
                ✉︎ ventas@lunora.com
              </li>

              <li className="hover:text-white transition ">
                Horario de Atención: <br />
                Lun - Vie: 9:00 AM - 8:00 PM <br />
                Sábados: 10:00 AM - 6:00 PM <br />
                Domingos: 11:00 AM - 5:00 PM 
              </li>

            </ul>
          </div>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="border-t border-white-600 mt-10 pt-5 text-center text-white-400">
        © 2026 Lunora. Todos los derechos reservados.
      </div>

    </footer>
  )
}


export default Footer