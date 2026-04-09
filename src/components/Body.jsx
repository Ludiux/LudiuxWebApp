import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";

const Body = () => {
    const [windowsOpen, setWindowsOpen] = useState(false);
    const [iconVisible, setIconVisible] = useState(true);
    let hidden = iconVisible ? "visible" : "invisible" ;

    useEffect(() => {
        console.log(windowsOpen)
        console.log(iconVisible)
    },[windowsOpen])


    return (
        <>
            <div className={`${hidden} w-full h-100vh grid grid-cols-10 gap-2 p-5`}>
                <div>
                    <NavLink to="/Browser" onClick={(e) => {setWindowsOpen(!windowsOpen)}} className="w-38 h-38 p-1 flex justify-center align-center hover:border-2 hover:bg-cyan-50 border-cyan-400 opacity-30"></NavLink>
                    <button className="p-0 m-0 fixed top-7 left-6.5 pointer-events-none">
                        <img src={"/assets/media/img/internetLogo.png"} alt={"Internet Logo"} className="w-35 h-28"/>
                        <h2 className="text-lg font-normal">Browser</h2>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Body
