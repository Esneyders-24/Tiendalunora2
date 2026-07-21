import img404 from "../img/Error404.png"
import { Link } from "react-router-dom"

const Pagina404 = () => {
  return (
    <>
        <section>
            <div className=" mx-auto px-3 py-20 h-full w-full">
                <figure>                    
                    <img src={img404} alt="" />
                    <Link to="/">
                    <button className=' flex  bg-[#858B6F] rounded-2xl text-white font-serif hover:bg-yellow-300 transition-all duration-300  mx-auto  px-3 py-4 '>
                        <h1>Ir a la pagina principal</h1>
                    </button>
                    </Link>
                </figure>
            </div>     
       </section>      
    </>
  )
}

export default Pagina404