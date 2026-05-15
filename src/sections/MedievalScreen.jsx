import React from 'react'
import Countdown from 'react-countdown';
import {LoaderManager} from "./NotFound.jsx";

const MedievalScreen = () => {
    return (
        <>
            <LoaderManager />
            <div className="bg-yellow-700 w-screen h-400 flex justify-center items-baseline overflow-scroll">
                <img src="/assets/media/img/Wood.jpg" alt="Wood" className="w-full h-full z-0 absolute " />
                <img src="/assets/media/img/Paper.png" alt="paperTexture" className=" h-450 -top-25 opacity-98 z-0 absolute " />
                <h1 className="m-15 text-8xl text-black font-fe z-10">El Desafio se Acerca...</h1>
                <p className="absolute m-10 top-40 text-4xl text-center font-seagram opacity-85">
                    Queridos aventureros, el tiempo se os está agotando... <br/>
                    ¡Si estáis leyendo esto significa que habéis aceptado el desafío!<br/>
                    Cada quien habéis recibido vuestras cartas, vuestro rol ha sido<br/>
                     asignado y vuestra voluntad el contrato arcano ha sellado. <br/>
                    <br/>
                    Terminad de prepararos, pues las pruebas no serán sencillas. <br/>
                    <Countdown
                        date={'2026-05-23T13:00:00'}
                        renderer={({ days }) => <span className="text-red-700">{days}</span>}
                    /> Lunas quedan para que El Dominio os reclame,  <br/>
                    y tengáis que enfrentaros al mismo... <br/>
                    <br/>
                    Por otro lado... Seria injusto de mi parte no daros ninguna <br/>
                    pistilla o una pequeña advertencia, verda? Pues si, <br/>
                    y no es mi problema yo no soy ningun rey ni gobernante <br/>
                    yo soy el amo de este dominio, y si tuviste las agallas <br/>
                    para querer enfrentar mi desafio, tendreis que conseguir por <br/>
                    cuenta propia lo que deseais, ahora que los caballeros forgen <br/>
                    sus cuerpos hasta volverlos de acero; los magos entrenen su <br/>
                    mente para resolver hasta el mas dificil de los problemas; <br/>
                    q
                </p>
            </div>
        </>
    )
}
export default MedievalScreen
