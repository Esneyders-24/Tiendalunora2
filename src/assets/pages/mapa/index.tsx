import { APIProvider, Circle, Map, Marker, Polygon, Polyline } from '@vis.gl/react-google-maps';

const API_KEY = "AIzaSyBfzuwD3o0MvqrzLQ1PbkYMcNiytGIe-8o";

const center = { lat: -12.040765, lng :-77.061620 }

const barberia = { lat: -12.040719826315785, lng :-77.06205909082726}

const tienda = { lat: -12.04054825245451, lng :-77.06274844094466}

const poligono =  [
  { lat: -12.042995403676928, lng: -77.06221421192647 },
  { lat: -12.04356667729934, lng: -77.06215895636967 },
  { lat: -12.043521146951328, lng: -77.06135542909986 },
  { lat: -12.042912424836118, lng: -77.06141711048961 },
]

const polilinea = [
    {lat:-12.040807921503685, lng:-77.06206374462865},
    {lat:-12.0407850256733,lng: -77.06161042474612},
    {lat:-12.041392805236319, lng:-77.0615593464495},
    {lat:-12.042200844039787, lng:-77.06148468470481},
    { lat:-12.042799438925211, lng:-77.06141365920506},
    {lat:-12.04355088642599, lng:-77.06133089406717},
    {lat:-12.04493437243469, lng:-77.06118380025742},
    {lat:-12.045180332979076, lng:-77.06213800491135},
    {lat:-12.04508537274781, lng:-77.06361389431316},
    {lat:-12.045180332979559, lng:-77.06475965057784}

]



const mapa = () => {

      const mostrarMensaje = () =>{
        alert("Alacance 4000 metros")
      }

    return (
        <>
           <section>
            <h1 className='text-3xl md:text-3xl text-center mt-3.5 font-semibold text-[#858B6F]'>Nuestro ubicacion</h1>
      <div className="max-w-9xl h-125 mt-5 rounded-lg overflow-hidden shadow-lg">
        <APIProvider apiKey={API_KEY}>
          <Map
            defaultZoom={17}
            defaultCenter={center}
            gestureHandling="greedy"
            disableDefaultUI={true}
          >
            <Marker
              position={barberia}
              title="Barbería"/>
            <Circle center={tienda} radius={200} 
           strokeColor={'#858B6F'} strokeOpacity = {0.6}
            strokeWeight = {5}
            fillColor = {'#858B6F'} fillOpacity = {0.3} 
            clickeable={true} onClick={mostrarMensaje}     />
            <Polygon paths={poligono}
             strokeColor={'#858B6F'} strokeOpacity = {0.6}
            strokeWeight = {2}
            fillColor = {'#858B6F'} fillOpacity = {0.3} />
            <Polyline path={polilinea}
             strokeColor={'#858B6F'} strokeOpacity = {1}
            strokeWeight = {10}
            />

          </Map>
        </APIProvider>
      </div>
    </section>
        </>
    )
}

export default mapa;



