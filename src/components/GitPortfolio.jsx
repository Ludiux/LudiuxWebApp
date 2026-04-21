import React from 'react'

const GitPortfolio = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center" >
            {/* Header element*/}
            <div className="w-full h-25 flex flex-col bg-white">
                {/* Header Division Boxes */}
                <div className="w-full h-14 flex flex-row pt-3 bg-[#010409] items-center justify-between"> {/* Box 1 */}

                    {/* Box 1 Separation left Logo and menu*/}
                    <div className="w-fit h-fit ml-3 flex flex-row justify-center items-center">
                        <button className="border rounded-md border-[#3D444D] mx-2 p-1">
                            <img src="/assets/media/img/threeLines.png" alt="Side Menu Button" className="w-6"/>
                        </button>
                        <img src="/assets/media/img/github_logo_white.png" alt="Github Logo" className="w-10"/>
                        <h2 className="text-white font-semibold mx-2">Ludiux</h2>
                    </div>

                    {/* Box 1 Separation right pfp, searchbar, and various buttons*/}
                    <div className="w-fit h-fit mr-3 flex flex-row justify-center items-center">

                        <input
                            className="border border-[#3D444D] w-53 p-1 px-4 rounded-md text-white"
                            type="text"
                            placeholder="🔍︎  Type / to search"
                        />
                        <div className="border border-[#3D444D] mx-2 px-1 py-0.75 rounded-md flex flex-row justify-center items-center">
                            <button className="h-full border-r border-r-[#3D444D] p-1 pr-1.5 "><img src="/assets/media/img/copilot.png" alt="" className="w-4.5"/></button>
                            <button className=" px-1 pl-2 rounded-md text-[8px] text-gray-400">▼</button>
                        </div>
                        <div className="border-r border-[#3D444D] w-1 h-5 mr-1"></div>

                        <button className="border border-[#3D444D] mx-2 px-1 py-0 rounded-md flex justify-center items-center text-gray-400">
                            <h2 className="text-2xl pb-0.5 font-light px-1">+</h2>
                            <h2 className="text-[8px] pt-0.5 px-1">▼</h2>
                        </button>

                        <button className="border border-[#3D444D] text-gray-400 text-center px-2 mx-2 p-1 rounded-md">⨀</button>

                        <button className="border border-[#3D444D] text-gray-400 mx-2 p-1.5 rounded-md">

                            <img src="/assets/media/img/Pull.png" alt="Pull Request" className="w-5"/>
                        </button>

                        <button className="border border-[#3D444D] text-gray-400 mx-2 p-1.25 rounded-md">
                            <img src="/assets/media/img/repo.png" alt="Repository" className="w-5.5"/>
                        </button>

                        <button className="border border-[#3D444D] text-gray-400 mx-2 p-1.25 rounded-md">
                            <img src="/assets/media/img/inbox.png" alt="Inbox" className="w-5.5"/>
                        </button>

                        <button className="rounded-full"><img src="/assets/media/img/LudiuxLogoRemaster.png" alt="Profile picture" className="w-8"/></button>
                    </div>
                </div>
                <div className="w-full h-11 border-b border-[#3D444D] flex flex-row pt-3 bg-[#010409] items-center justify-between"> {/* Box 2 */}
                    <div className="w-fit h-fit mr-3 mb-4 flex gap-2 flex-row justify-center items-center">
                        {/* Overview Button */}
                        <button className="flex items-center gap-2 px-2 ml-4 py-2 z-2 border-b border-red-500 text-white">
                            <img src="/assets/media/img/openbook.png" alt="Overflow" className="w-4.5 py-2 shrink-0"/>
                            <h2 className="font-semibold">Overview</h2>
                        </button>
                        {/* Repo Button */}
                        <button className="flex relative items-center gap-2 px-2 py-2 z-2 text-white">
                            <img src="/assets/media/img/repo.png" alt="" className="w-5"/>
                            <h2 className="font-normal text-sm">Repositories</h2>
                            <div className="absolute w-3.5 h-3.5 bg-white left-32.5 rounded-full z-2 "></div>
                            <h2 className="text-2xl text-gray-800 z-3">❻</h2>
                        </button>
                        {/* Projects Button */}
                        <button className="flex items-center gap-2 px-2 py-2 z-2 text-white">
                            <img src="/assets/media/img/repo2.png" alt="" className="w-5"/>
                            <h2 className="font-normal text-sm">Projects</h2>
                        </button>
                        {/* Packages Button */}
                        <button className="flex items-center gap-2 px-2 py-2 z-2 text-white">
                            <img src="/assets/media/img/cube.png" alt="" className="w-5"/>
                            <h2 className="font-normal text-sm">Packages</h2>
                        </button>
                        {/* Stars Button */}
                        <button className="flex items-center gap-2 px-2 py-2 z-2 text-white">
                            <h2 className="font-light">☆</h2>
                            <h2 className="font-normal text-sm">Stars</h2>
                        </button>
                    </div>
                </div>
            </div>
            {/* Body element */}
            <div
                className="w-full h-full flex flex-row bg-[#0D1117] justify-center items-start">

                {/* Left side*/}
                <div className="w-80 h-150 mx-6 flex flex-col justify-start items-start">
                    <img src="/assets/media/img/LudiuxLogoRemaster.png" alt="Profile pic" className="w-70 mt-10 mb-3 border-2 border-[#3D444D] rounded-full" />
                    <h1 className="text-2xl font-bold py-0 my-0 h-fit text-white">Ludiux</h1>
                    <h2 className="text-xl font-light py-0 my-0 h-fit text-gray-400">Ludiux · he/him</h2>
                    <h2 className="text-base font-normal mt-3.5 text-white font-sans">Just trying to do better</h2>
                    <button className="rounded w-70 border border-gray-600 bg-gray-800 cursor-pointer transition-colors hover:bg-gray-700 text-sm my-3.5 py-1.25 text-white">Edit profile</button>
                    <a className="text-white flex text-sm py-2 pb-5 border-b w-70 border-gray-700">
                        <h2>🔗</h2>
                        <h2 className="hover:text-blue-400 hover:underline mx-2.5 cursor-pointer">Ludiux.net</h2>
                    </a>
                </div>

                {/*Right side*/}
                <div className="w-235 h-full flex flex-col justify-center items-center ">

                </div>
            </div>
        </div>
    )
}
export default GitPortfolio
