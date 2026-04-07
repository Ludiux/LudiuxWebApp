import React from 'react'

const Header = () => {

    return (
        <>
            <div className="fixed left-1.5 top-1.5 bg-[#FDC800] rounded-2xl invisible">
                <a
                    href={"/embed"}
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border-7 w-48 h-20 border-[#221C40] p-4 px-5 py-2.5 font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
                >
            <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#221C40] text-white duration-300 group-hover:translate-y-0">
              <svg width="50" height="50" viewBox="0 0 514 647" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill="#FDC800"
                    d="M259.503 74.0749L131.003 0.574921L0.503479 74.0749L5.50348 496.575L269.003 645.575L513.003 496.575V354.075L388.003 273.075L259.503 346.575V74.0749Z" stroke="#FFC300"
                ></path>
              </svg>
            </span>
                    <span className="absolute flex h-full w-full text-3xl transform items-center justify-center text-[#221C40] transition-all duration-300 group-hover:translate-y-full">
              Exit
            </span>
                    <span className="invisible relative">Button</span>
                </a>
            </div>
        </>
    )
}
export default Header
