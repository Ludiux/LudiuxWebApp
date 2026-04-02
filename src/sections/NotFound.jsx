import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Ludiux Website!</title>

                <link rel="shortcut icon" href="../../public/favicon.svg" type="image/x-icon"/>
            </head>
            <body className="flex flex-col items-center bg-[#191437] text-[#FDC800] font-pixels m-0 p-0">

            <div className="flex flex-col text-center justify-center items-center align-center w-full h-full ">
                <h1 className="font-pixels text-[9vh]! p-5 pb-0 m-0! select-none">Error 404</h1>
                <h1 className="font-pixels text-[9vh]! p-2 pt-0 m-0! select-none">This Page doesnt exists!!</h1>
                <h2 className="text-[2vh] p-0 m-0 font-gameboy select-none">Sorry for the inconvinience, come back later when we create it!</h2>
                <img src="../../public/assets/media/img/LogoConstructor.png" alt="En Construccion" className="h-full w-[55vh] p-0 m-0 select-none" />
                <Link to="/" className="pb-4">
                    <button className="bg-yellow-400 text-[#191437] h-[7vh] w-[15vh] select-all">Go Back Home!</button>
                </Link>
            </div>

            </body>
        </>
    )
}
export default NotFound
