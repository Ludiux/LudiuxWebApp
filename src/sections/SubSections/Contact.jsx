import React from 'react'
import Taskbar from "../../components/Taskbar.jsx";
import Header from "../../components/Header.jsx";
import ContactPage from "../../components/ContactPage.jsx";

const Contact = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-[#F8FAFD]">
            <Header/>
            <ContactPage/>
            <Taskbar/>
        </div>
    )
}
export default Contact
