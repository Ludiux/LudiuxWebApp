import React, {useState} from 'react'

const Footer = () => {
    const [active, setActive] = useState(false)
    const [onHover, setHovered] = useState(false)
    let color = !active ? "bg-[#333333]" : "bg-white";
    let searchColor = !active ? "../../assets/media/img/searchGray.png" : "../../assets/media/img/search.png"
    const textcolor = active
        ? "placeholder-black"
        : "placeholder-gray-300"

    const bordercolor = !active
        ? "border-gray-600"
        : "border-blue-400"
    const border = !active
        ? "border"
        : "border-2"
    const hover = !active
        ? "hover:border-gray-400 hover:bg-gray-700"
        : ""
    const winButtonHover = !onHover ? "bg-[#333333]" : "bg-[#65636d]"
    const winButtonHover2 = onHover ? "-bottom-12.5 left-4.5" : "bottom-3.75 -left-15"

    return (
        <>
            <div className="fixed bottom-0 left-0 flex items-left justify-center w-full h-15 bg-[#353b42] opacity-98"/>
            <div className="fixed bottom-0 left-0 w-13.5 h-12 flex items-center justify-center"
                 onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}>
                <button className={`${winButtonHover} fixed bottom-0 left-0 w-18 h-15`}></button>
                <img src="public/assets/media/img/WindowsLogo.png" alt="Windows Logo" className={`${winButtonHover2} w-27 h-22.5 fixed pointer-events-none`} />
            </div>


            <div className={`fixed bottom-0 left-18 w-129 h-15 ${hover} ${border} ${bordercolor} ${color}`}>
                <input
                    type="text"
                    color="blue"
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                    placeholder='Type here to search'
                    name='SearchBar'
                    className={`w-120 h-16.5 ${textcolor} placeholder:opacity-95 outline-none text-xl border-none text-left fixed left-33 bottom-0`}/>
                <img src={searchColor} alt="Search Bar" className={`fixed left-22.5 bottom-3 size-8.25`}/>
            </div>

        </>


    )
}
export default Footer
