import { Data_novedades } from "../data/NovedadesData"
import gif from "../img/novedades.gif"



 const Novedades = () => {
    return (
        <section className="min-h-screen bg-[#F9FAFB]">
            <div className='max-w-7xl mx-auto px-3 py-20 '>
                <h2 className="text-4xl md:text-7xl  flex justify-center items-center gap-4 text-[#858B6F] font-semibold mt-10 ">Novedades <img  className=' w-14 md:w-23 'src={gif} alt="" /> </h2>
                <div className="grid md:grid-cols-3 gap-8">

                    {Data_novedades.map(itemNovedad =>(
                        <article key={itemNovedad.id}>
                            <figure className="mb-3">
                                <img src={itemNovedad.imagen} alt="" className="w-full h-52 md:h-60 object-cover hover:shadow-xl transition rounded-xl mt-5" />
                            </figure>
                            <h3 className="font-bold">{itemNovedad.titulo}</h3>
                            {itemNovedad.contenido.map((itemParrafo, index) => (
                                <p  className="text-gray-600 " key={index}>{itemParrafo}</p>
                            ))}
                        </article>
                    ))}
                    
                    
                </div>
            </div>
        </section>
    )
}

export default Novedades