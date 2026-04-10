import React, {useEffect} from 'react'
import {NavLink} from "react-router-dom";
import { useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation();
    let pageLocation = location.pathname;

    let tab = "bg-gray-400";
    let tab2 = "bg-gray-400";
    let tab3 = "bg-gray-400";
    let tab4 = "bg-gray-400";

    useEffect(() => {
        console.log(pageLocation);
    }, [location]);
    switch(pageLocation) {
        case "/Browser":
            tab2 = "bg-gray-500"
            tab = "bg-gray-700"
            break;
        case "/TabGithub":
            tab = "bg-gray-500"
            tab2 = "bg-gray-700"
            break;
    }

    return (
        <>
            <div className={`w-full h-11.5 bg-gray-700 p-0 m-0`}>
                <NavLink to="/Browser" className={`fixed top-0 left-0 p-0 m-0 w-45 h-11.5 flex items-center justify-center rounded-xl hover:bg-gray-600 font-light  ${tab2} text-3xl leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg`}>
                    <img src="/assets/media/img/linkedin_logo.png" alt="LinkedIn" className="p-0 w-9 h-9 mx-1 "/>
                    <h1 className="m-1">Linkedin</h1>
                </NavLink>
                <NavLink to="/TabGithub" className={`fixed top-0 left-45 py-1 px-7 hover:bg-gray-600 font-light rounded-xl flex justify-baseline items-center ${tab} text-3xl leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg`}>
                    <img src="/assets/media/img/github_logo.png" alt="LinkedIn" className="p-0 w-9 h-9 mx-1 ml-0 "/>
                    <h1 className="m-0">GitHub</h1>
                </NavLink>
                <NavLink to="/Desktop" className="fixed top-0 right-0 py-1 px-7 hover:bg-red-400 font-light bg-gray-600 text-3xl uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg">
                    x
                </NavLink>
            </div>
        </>
    )
}
export default Header