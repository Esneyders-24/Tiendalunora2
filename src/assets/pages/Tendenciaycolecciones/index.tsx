import Headres from "../../Components/Headres"
import img1 from "../../img/ds3.png"
import TendenciayClista1 from "./tendenciayCLista"

const tendenciasycolecciones = () => {
  return (
    <>
    <Headres titulo="Elegancia y Estilo " subtitulo="Descubre lo último en moda para mujer  con piezas inspiradas en las tendencias globales."  boton="Colleccion Premiun"   img={img1} boton1="Lets go"/> 
    <div className="max-w-7xl mx-auto px-3 py-20">
     <TendenciayClista1/>
     </div>
    </>
  )
}

export default tendenciasycolecciones