import React, {useState} from 'react'

const Footer = () => {
    const [active, setActive] = useState(true)
    let color = !active ? "bg-[#333333]" : "bg-white";
    let searchColor = !active ? "../../public/assets/media/img/searchGray.png" : "../../public/assets/media/img/search.png"
    const textcolor = active
        ? "placeholder-black"
        : "placeholder-gray-300"

    const bordercolor = !active
        ? "border-gray-600"
        : "border-blue-400"
    const border = !active
        ? "border"
        : "border-2"


    return (
        <>
            <div className="fixed bottom-0 left-0 flex items-left justify-center w-full h-10 bg-[#353b42] opacity-98"/>
            <div className={`fixed bottom-0 left-12 w-86 h-10 ${border} ${bordercolor} ${color}`}>
                <input
                    type="text"
                    color="blue"
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                    placeholder='Type here to search'
                    name='SearchBar'
                    className={`w-80 h-11 ${textcolor} placeholder:opacity-95 outline-none border-none text-left fixed left-22 bottom-0`}/>
                <img src={searchColor} alt="Search Bar" className={`fixed left-15 bottom-2 size-5.5`}/>
            </div>
        </>


    )
}
export default Footer
