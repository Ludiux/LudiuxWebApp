import React from 'react'
import Header from "../../components/Header.jsx";
import Taskbar from "../../components/Taskbar.jsx";
import GitPortfolio from "../../components/GitPortfolio.jsx";

const TabGithub = (Hammer, setHammer) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-[#010409]">
            <Header/>
            <GitPortfolio/>
            <Taskbar/>
        </div>
    )
}
export default TabGithub
