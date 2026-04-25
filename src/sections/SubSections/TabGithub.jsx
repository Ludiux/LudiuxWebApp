import React from 'react'
import Header from "../../components/Header.jsx";
import Taskbar from "../../components/Taskbar.jsx";
import GitPortfolio from "../../components/GitPortfolio.jsx";

const TabGithub = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col bg-[#010409]">
            <Header/>
            <div className="flex-1 overflow-auto"> {/* This takes remaining space */}
                <GitPortfolio/>
            </div>
            <Taskbar/>
        </div>
    )
}
export default TabGithub
