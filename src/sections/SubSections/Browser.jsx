import React from 'react'
import Taskbar from "../../components/Taskbar.jsx";
import Header from "../../components/Header.jsx";
import LinkedinPage from "../../components/LinkedinPage.jsx";

const Browser = (pageLocation) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-[#F4F2EE] z-10 ">
            <Header/>
            <LinkedinPage/>
            <Taskbar/>
        </div>
    )
}
export default Browser
