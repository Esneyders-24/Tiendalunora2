import useEmblaCarousel from 'embla-carousel-react'
import Carrito from '../img/Carrito.png'
import Casita from '../img/Casita.png'
import Escudo from '../img/Escudo.png'
import reloj from '../img/reloj.png'
import promocion1 from '../img/promocional.png'
import promocional2 from '../img/promcional2.png'
import mama1 from '../img/mama1.jpeg'
import mama2 from '../img/mama2.jpeg'
import mama3 from '../img/mama3.jpeg'
import mama4 from '../img/mama4.png'
import mama5 from '../img/mama5.jpeg'
import mama6 from '../img/mama6.jpeg'
import mama7 from '../img/mama7.png'
import mama8 from '../img/mama8.png'
import mama9 from '../img/mama9.png'
import carrsuel1 from '../img/carrusel1.png'
import carrusel2 from '../img/carrusel2.png'
import carrusel3 from '../img/carrusel3.png'
import carrusel4 from '../img/carrusel4.png'
import bicicleta1 from '../img/bicicleta1.png'
import bicicleta2 from '../img/bicicleta2.png'
import bicicleta3 from '../img/bicicleta3.png'
import bicicleta4 from '../img/bicicleta4.png'


const Cuerpo = () => {
        const [emblaRef] = useEmblaCarousel()
        return (
                <main className="min-h-screen bg-[#F9FAFB] text-[#858B6F] text-3xl md:text-6xl text-center mt-20 font-semibold  ">
                        <h1>Sobre LUNORA</h1>
                        <p className="text-base md:text-2xl ">Somos una tienda de ropa comprometida con ofrecerte las últimas tendencias en  <br />moda. Desde 2020, hemos vestido a miles de clientes con estilo y calidad.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mr-5">
                                <section className="w-72 bg-white rounded-xl shadow-lg p-6 mt-15  hover:shadow-xl transition  ">
                                        <img src={Casita} alt="Casita" />
                                        <h3 className='text-2xl font-bold mb-4'>Calidad Premium</h3>
                                        <p className="text-xl">Productos de alta calidad seleccionados cuidadosamente</p>
                                </section>
                                <section className="w-72 bg-white rounded-xl shadow-lg p-6 mt-15  hover:shadow-xl transition  ">
                                        <img src={Carrito} alt="Carrito" />
                                        <h3 className='text-2xl font-bold mb-4'>Envío Gratis</h3>
                                        <p className="text-xl">En compras mayores a $50</p>
                                </section>
                                <section className="w-72 bg-white rounded-xl shadow-lg p-6 mt-15  hover:shadow-xl transition  ">
                                        <img src={Escudo} alt="Escudo" />
                                        <h3 className='text-2xl font-bold mb-4'>Compra Segura</h3>
                                        <p className="text-xl">Protección en todas tus transacciones</p>
                                </section>
                                <section className="w-72 bg-white rounded-xl shadow-lg p-6 mt-15  hover:shadow-xl transition  ">
                                        <img src={reloj} alt="reloj" />
                                        <h3 className='text-2xl font-bold mb-4'>Atención 24/7</h3>
                                        <p className="text-xl">Siempre disponibles para ayudarte</p>
                                </section>
                        </div>
                        <div className="flex flex-col lg:flex-row  items-center">
                                <section className="block object-contain transition duration-400 hover:brightness-75 w-full h-auto  mt-10 md:w-full md:h-auto  md:mt-10">
                                        <img src={promocion1} alt="" />
                                </section>
                                <section className="block object-contain transition duration-400 hover:brightness-75 w-full h-auto  mt-10 md:w-full md:h-auto md:ml-10 md:mt-10">
                                        <img src={promocional2} alt="" />
                                </section>
                        </div>
                        <section className="text-center relative mt-10 ">
                                <h1 className="font-serif text-5xl ">El Estilo de Mamá ❀ ❤</h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 pt-4 w-fit mx-auto justify-items-center">
                                        <img className="transition duration-400 hover:brightness-75" src={mama1} alt="mama1" />
                                        <img className="transition duration-400 hover:brightness-75" src={mama2} alt="mama2" />
                                        <img className="transition duration-400 hover:brightness-75" src={mama3} alt="mama3" />
                                        <img className="transition duration-400 hover:brightness-75" src={mama4} alt="mama4" />
                                        <img className="transition duration-400 hover:brightness-75" src={mama6} alt="mama5" />
                                        <img className="transition duration-400 hover:brightness-75" src={mama5} alt="mama6" />
                                        <img className="transition duration-400 hover:brightness-75" src={mama7} alt="mama7" />
                                        <img className="transition duration-400 hover:brightness-75" src={mama8} alt="mama8" />
                                        <img className="transition duration-400 hover:brightness-75" src={mama9} alt="mama9" />
                                </div>
                        </section>
                        <section className="mt-20">
                                <h1 className=" -mt-5 font-serif">Explora tu Conjunto ✦ </h1>
                        <div className="overflow-hidden max-w-7xl mx-auto mt-10 " ref={emblaRef}>
                               <div className="flex gap-4 ml-10">
                                   <div className="flex-[0_0_auto]">
                                        <img  className="w-50 h-50 object-cover md:w-auto md:h-auto " src={carrsuel1}/>
                                        </div>
                                    <div className="flex-[0_0_auto]  ">
                                        <img  className="w-50 h-50 object-cover md:w-auto md:h-auto " src={carrusel2}/>
                                        </div>
                                     <div className="flex-[0_0_auto]  ">
                                        <img  className="w-50 h-50 object-cover md:w-auto md:h-auto " src={carrusel3}/>
                                        </div>
                                     <div className="flex-[0_0_auto]  ">
                                        <img  className="w-50 h-50 object-cover md:w-auto md:h-auto " src={carrusel4}/>
                                        </div>    
                                </div>
                        </div>
                 </section>
                 <section className="mt-20">
                        <h1 className="font-serif">Tops de Bicicletas ×͜×</h1>
                        <div className="grid grid-cols-4 gap-3 pt-8 w-fit mx-auto justify-items-center ">
                                        <img className="transition duration-400 hover:brightness-75" src={bicicleta1} alt="bicicleta1" />
                                        <img className="transition duration-400 hover:brightness-75" src={bicicleta2} alt="bicicleta2" />
                                        <img className="transition duration-400 hover:brightness-75" src={bicicleta3} alt="bicicleta3" />
                                        <img className="transition duration-400 hover:brightness-75" src={bicicleta4} alt="bicicleta4" />
                        </div>
                       
                 </section>
                </main>

        )
}

export default Cuerpo