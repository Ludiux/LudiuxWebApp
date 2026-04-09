import React from 'react'
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <>
            <NavLink to="/embed" className=" fixed top-0 right-0 py-1 px-7 hover:bg-red-400 font-light rounded bg-gray-400 text-3xl uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg">
                x
            </NavLink>
        </>
    )
}
export default Header