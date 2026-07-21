import { useEffect, useState } from "react"

export interface Ranking {
    id: number;
    nombre: string;
    puntos: number;
    compras: number;
    nivel: string;
    ciudad: string
}

const ranking = () => {

     const[ListaRanking, setListaRanking] = useState<Ranking[]>([])

     useEffect(() => {
        leerServicio()
     }, [])

     const leerServicio = () => {

    fetch("https://andersones78x0.alwaysdata.net/categorias.php")
        .then(Response => Response.json())
        .then(datos => {
            console.log(datos)
            setListaRanking(datos)
        })
        }

    return (
    <section className="min-h-screen bg-[#F9FAFB]">
        <div className='max-w-7xl mx-auto px-3 py-20 -mt-10'>
            <h2 className="text-3xl md:text-6xl  flex justify-center items-center gap-6 text-[#858B6F] font-semibold mb-10 ">Ranking ✰</h2>
            <div className="overflow-x-auto">
            <table className="min-w-full">
                <thead className='border rounded-xl p-5'>
                    <tr>
                        <th className="border rounded-xl p-5">codigo</th>
                        <th className="border rounded-xl p-5">nombre</th>
                        <th className="border rounded-xl p-5">puntos</th>
                        <th className="border rounded-xl p-5">compras</th>
                        <th className="border rounded-xl p-5">nivel</th>
                        <th className="border rounded-xl p-5">ciudad</th>
                    </tr>
                </thead>
                    <tbody>
                        {ListaRanking.map(itemRanking => (
                     <tr  key={itemRanking.id} className=" hover:bg-green-200 transition duration-300 ">       
                        <td className="border p-5 text-center">{itemRanking.id}</td>
                        <td className="border p-5 text-center">{itemRanking.nombre}</td>
                        <td className="border p-5 text-center">{itemRanking.puntos}</td>
                        <td className="border p-5 text-center">{itemRanking.compras}</td>
                        <td className="border p-5 text-center">{itemRanking.nivel}</td>
                        <td className="border p-5 text-center">{itemRanking.ciudad}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    </section>
  )
}

export default ranking