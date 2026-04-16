import React from 'react'
import {NavLink} from "react-router-dom";

const LinkedinPage = () => {
    return (
        <div className="bg-[#F4F2EE] ">
            <div className="flex items-center w-full h-14 justify-evenly align-middle fixed top-12 right-0 bg-white">
                <div className="flex items-center justify-center">
                    <img src="/assets/media/img/linkedin_logo.png" alt="LinkedIn" className="p-0 w-9 h-9 mx-1 "/>
                    <div className="flex px-3 py-1.5 rounded-4xl border border-gray-400 overflow-hidden ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                         className="fill-black mr-3 rotate-x-180 rotate-90">
                        <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                        </path>
                    </svg>
                    <input type="email" placeholder="Search"
                           className="w-full outline-none bg-transparent text-gray-600 text-sm"/>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-center items-center m-4">
                        <img src="/assets/media/img/homebutton.png" alt="HomeButton" className="w-6 h-6"/>
                        <h2 className="text-xs text-gray-500 font-semibold">Home</h2>
                    </div>
                    <div className="flex flex-col justify-center items-center m-4">
                        <img src="/assets/media/img/Network.png" alt="HomeButton" className="w-6.5 h-6 my-0"/>
                        <h2 className="text-xs text-gray-500 font-normal">My Network</h2>
                    </div>
                    <div className="flex flex-col justify-center items-center m-4">
                        <img src="/assets/media/img/suitcase.png" alt="HomeButton" className="w-6 h-6"/>
                        <h2 className="text-xs text-gray-500 font-normal">Jobs</h2>
                    </div>
                    <div className="flex flex-col justify-center items-center m-4">
                        <img src="/assets/media/img/message.png" alt="HomeButton" className="w-6 h-6"/>
                        <h2 className="text-xs text-gray-500 font-normal">Messages</h2>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="/assets/media/img/notification.png" alt="HomeButton" className="w-6 h-6"/>
                        <h2 className="text-xs text-gray-500 font-normal">Notifications</h2>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="/assets/media/img/user.png" alt="HomeButton" className="w-6 h-6 mx-6"/>
                        <h2 className="text-xs text-gray-500 font-normal">Me▼</h2>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-col justify-center items-center border-l w-40">
                        <img src="/assets/media/img/grid.png" alt="HomeButton" className="w-8 h-8 mx-0"/>
                        <h2 className="text-xs text-gray-500 font-semibold">For Business▼</h2>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="/assets/media/img/premium.png" alt="HomeButton" className="w-5 h-5 my-1.5"/>
                        <h2 className="text-xs text-gray-500 font-normal">Try for ARS0</h2>
                    </div>
                </div>
            </div>

            <div className="w-full h-14"/>

            <div className="flex flex-row my-15 justify-center">
                <div className="flex flex-col items-center w-200 m-2">
                    {/* First Profile Box */}
                    <div className="flex flex-col  items-center rounded-xl border border-gray-200 bg-white h-160 w-200 m-1">
                        <img src="/assets/media/img/Banner.jpg" alt="Profile" className=" rounded-t-xl w-full h-50"/>
                        <div className="bg-white fixed top-55 left-100 w-46 h-46 rounded-[50%]">
                            <img src="/assets/media/img/Pfp.jpg"
                                 alt="Profile Picture"
                                 className="rounded-[50%] p-1 "/>
                            <h1 className="font-semibold text-xl w-100">👤Santiago Ferreyra</h1>
                            <h2 className="w-90 text-lg">WebDev reaching for new horizons and learnig as much as i can!</h2>
                            <h3 className="w-100 text-sm text-gray-500">Cordoba, Cordoba, Argentina</h3>
                        </div>

                        {/*Contact Button*/}
                        <div className="flex justify-center fixed top-130 left-100 bg-[#FFC200] rounded-xl">
                            <NavLink
                                to={"/Contact"}
                                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-4 border-[#221C40] p-4 px-5 py-2.5 font-medium text-[#FFC200] shadow-md transition duration-300 ease-out"
                            >
            <span className="absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#221C40] text-[#FFC200] duration-300 group-hover:translate-y-0">
              <svg
                  width="25.7"
                  height="32.4"
                  viewBox="0 0 514 647"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFC200" d="M259.503 74.0749L131.003 0.574921L0.503479 74.0749L5.50348 496.575L269.003 645.575L513.003 496.575V354.075L388.003 273.075L259.503 346.575V74.0749Z" stroke="#FFC300"/>
              </svg>
            </span>
                                <span className="absolute flex h-full w-full transform items-center justify-center text-lg font-bold text-[#221C40] transition-all duration-300 group-hover:translate-y-full">
              Contact
            </span>
                                <span className="invisible relative">Button</span>
                            </NavLink>
                        </div>

                    {/* Second Box */}
                    </div>
                    <div className="flex flex-col justify-center items-center rounded-xl border border-gray-200 bg-white h-80 w-200 m-2 my-1"></div>
                </div>
                <div className="flex flex-col justify-baseline w-90 m-2 ">
                    <div className="flex flex-col justify-center items-center rounded-xl border border-gray-200 bg-white h-70 w-80 mx-4 my-1"></div>
                    <div className="flex flex-col justify-center items-center rounded-xl border border-gray-200 bg-white h-170 w-80 mx-4 my-3"></div>
                </div>
            </div>
        </div>
    )
}
export default LinkedinPage
