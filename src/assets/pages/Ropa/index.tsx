import Headres from "../../Components/Headres"
import img1 from "../../img/d1.png"
import Ropa from "./RopaLista"

const Ropas = () => {
  return (
     <>
    <Headres titulo="MODA DE VANGUARDIA" subtitulo="Sastrería contemporánea y textiles inteligentes que redefinen tu presencia."  boton="Explore the drop"   img={img1} boton1="Shop the collection"/> 
    <div className="max-w-7xl mx-auto px-3 py-20">
         <Ropa/>
     </div>
    </>
  )
}

export default Ropas