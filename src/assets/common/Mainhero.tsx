import fondo from '../img/Fondot.png'


const Mainhero = () => {
    return (

        <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center " style={{ backgroundImage: `url(${fondo})` }}>
            <main className="text-left text-[#858B6F] px-6 md:px-20 max-w-xl py-10 md:py-20   ">
                <h2 className="text-xl font-mono mb-5  transition duration-300 hover:scale-110  md:text-2xl  ">
                    VISTE TU ESENCIA
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-7xl  font-serif leading-tight mb-2 transition duration-300 hover:scale-110   ">
                    Moda que  te representa
                </h1>
                <p className="mb-6 transition duration-300 hover:opacity-50   md:text-lg  ">
                    Ropa sostenible, diseño atemporal y calidad para acompañarte siempre.
                </p>
                <button className="bg-[#243e05] text-white px-10 py-3 rounded-lg hover:bg-yellow-700 transition ">
                    Descubrir el paraíso →
                </button>
            </main>
        </div>

    )
}

export default Mainhero