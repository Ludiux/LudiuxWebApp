import React, { useState} from 'react'
import hammerStore from '../services/store.js'

const GitPortfolio = () => {
    const [ClicksBeforeBroken, setClicksBeforeBroken] = useState(0);
    const [Broken, setBroken] = useState(false);
    const [Questions, setQuestions] = useState(1);
    const hammerVisible = hammerStore((state) => state.hammerVisible);
    const [sign, setSign] = useState([]);

    const BrokenSystemHandler = async () => {
        setClicksBeforeBroken(ClicksBeforeBroken + 1)

        if(ClicksBeforeBroken === 4){

            await new Promise(resolve => setTimeout(resolve, 1000));

            setBroken(true);

            setQuestions(1);
        }

    }

    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center" >
                {sign.includes(1) && (
                    <>
                        <div className="bg-gray-950 text-red-500 py-2 px-3 font-console border absolute top-26 left-6 z-10 border-gray-600 ">
                            <h1>Error</h1>
                        </div>
                    </>
                )
                }

                {sign.includes(2) && (
                    <>
                        <div className="bg-gray-950 text-red-500 py-2 px-3 font-console border absolute top-26 left-39 z-10 border-gray-600 ">
                            <h1>Error</h1>
                        </div>
                    </>
                )
                }

                {sign.includes(3) && (
                    <>
                        <div className="bg-gray-950 text-red-500 py-2 px-3 font-console border absolute top-26 left-77 z-10 border-gray-600 ">
                            <h1>Error</h1>
                        </div>
                    </>
                )
                }

                {sign.includes(4) && (
                    <>
                        <div className="bg-gray-950 text-red-500 py-2 px-3 font-console border absolute top-26 left-105 z-10 border-gray-600 ">
                            <h1>Error</h1>
                        </div>
                    </>
                )
                }

                {sign.includes(5) && (
                    <>
                        <div className="bg-gray-950 text-red-500 py-2 px-3 font-console border absolute top-26 left-132 z-10 border-gray-600 ">
                            <h1>Error</h1>
                        </div>
                    </>
                )
                }

                {sign.includes(6) && (
                    <>
                        <div className="bg-gray-950 text-red-500 py-11 px-46.5 font-console border absolute top-56.5 left-161 z-10 border-gray-600 ">
                            <h1>Error</h1>
                        </div>
                    </>
                )
                }

                {sign.includes(7) && (
                    <>
                        <div className="bg-gray-950 text-red-500 py-11 px-46.5 font-console border absolute top-56.5 left-280 z-10 border-gray-600 ">
                            <h1>Error</h1>
                        </div>
                    </>
                )
                }

                {sign.includes(8) && (
                    <>
                        <div className="bg-gray-950 text-red-500 py-7.5 px-46.5 font-console border absolute top-90.5 left-161 z-10 border-gray-600 ">
                            <h1>Error</h1>
                        </div>
                    </>
                )
                }

                {sign.includes(9) && (
                    <>
                        <div className="bg-gray-950 text-red-500 py-7.5 px-46.5 font-console border absolute top-90.5 left-280 z-10 border-gray-600 ">
                            <h1>Error</h1>
                        </div>
                    </>
                )
                }

                {sign.includes(10) && (
                    <>
                        <div className="bg-gray-950 text-red-500 py-7.5 px-46.5 font-console border absolute top-117 left-161 z-10 border-gray-600 ">
                            <h1>Error</h1>
                        </div>
                    </>
                )
                }

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
                            <button onClick={() => {
                                BrokenSystemHandler();
                                setSign([...sign, 1]);
                            }} className="px-1 py-2.5 ml-4 z-2 border-b cursor-pointer border-red-500 text-white">
                                <div className="transition-colors hover:bg-gray-900 rounded-xs flex items-center px-1 gap-2">
                                    <img src="/assets/media/img/openbook.png" alt="Overflow" className="w-4.5 py-1.5 shrink-0"/>
                                    <h2 className="font-semibold">Overview</h2>
                                </div>
                            </button>

                            {/* Repo Button */}
                            <button onClick={() => {
                                BrokenSystemHandler();
                                setSign([...sign, 2]);
                            }} className="px-2 relative py-2.5 z-2 cursor-pointer text-white">
                                <div className="transition-colors hover:bg-gray-900 rounded-xs flex items-center px-1 gap-2">
                                    <img src="/assets/media/img/repo.png" alt="" className="w-5"/>
                                    <h2 className="font-normal text-sm">Repositories</h2>
                                    <div className="absolute w-3.5 h-3.5 bg-white left-33.5 rounded-full z-2 "></div>
                                    <h2 className="text-2xl text-gray-800 z-3">❻</h2>
                                </div>
                            </button>
                            {/* Projects Button */}
                            <button onClick={() => {
                                BrokenSystemHandler();
                                setSign([...sign, 3]);
                            }} className="py-1 z-2 cursor-pointer text-white">
                                <div className="transition-colors hover:bg-gray-900 rounded-xs flex py-2 items-center px-2 gap-2">
                                    <img src="/assets/media/img/repo2.png" alt="" className="w-5"/>
                                    <h2 className="font-normal text-sm">Projects</h2>
                                </div>
                            </button>
                            {/* Packages Button */}
                            <button onClick={() => {
                                BrokenSystemHandler();
                                setSign([...sign, 4]);
                            }} className="py-1 z-2 cursor-pointer text-white">
                                <div className="transition-colors hover:bg-gray-900 rounded-xs flex py-2 items-center px-2 gap-2">
                                    <img src="/assets/media/img/cube.png" alt="" className="w-5"/>
                                    <h2 className="font-normal text-sm">Packages</h2>
                                </div>
                            </button>
                            {/* Stars Button */}
                            <button onClick={() => {
                                BrokenSystemHandler();
                                setSign([...sign, 5]);
                            }} className="py-1 z-2 cursor-pointer text-white">
                                <div className="transition-colors hover:bg-gray-900 rounded-xs flex py-2 items-center px-2 gap-2">
                                    <h2 className="font-light">☆</h2>
                                    <h2 className="font-normal text-sm">Stars</h2>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Body element */}
                <div
                    className="w-full h-full flex flex-row bg-[#0D1117] justify-center items-start">

                    {/* Left side*/}
                    <div className="w-74 h-150 flex flex-col justify-start items-start">
                        <img src="/assets/media/img/LudiuxLogoRemaster.png" alt="Profile pic" className="w-70 mt-10 mb-3 border-2 border-[#3D444D] transform-gpu backface-hidden rounded-full" />
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
                    <div className="w-235 h-full flex flex-col justify-start items-baseline ">
                        {/* Repositories */}
                        <h1 className="text-lg font-normal text-white text-left mt-10">Popular repositories</h1>
                        <div className="w-240 h-90 flex-row">
                            <button className="w-115 h-fit border m-2 text-blue-500 rounded-lg border-[#3D444D]">
                                <div className="flex flex-row items-center justify-start py-3 pb-2 px-3">
                                    <img src="/assets/media/img/repo.png" alt="Repository" className="w-5 mx-1"/>
                                    <a onClick={() => {
                                        BrokenSystemHandler();
                                        setSign([...sign, 6]);
                                    }} className="font-semibold mx-1 hover:text-blue-400 hover:underline cursor-pointer">LudiuxWebApp</a>
                                    <div className=" py-0.5 px-2 mx-1 border border-gray-700 text-gray-400 text-xs rounded-4xl">Public</div>
                                </div>
                                <h2 className="text-left text-xs text-gray-400 px-4">My Personal Web, here is all the source code and some explanations of how i made it! </h2>
                                <h2 className="text-left text-xs py-3 pb-4 px-4 text-gray-400">🟡JavaScript</h2>
                            </button>
                            <button className="w-115 h-fit border m-2 text-blue-500 rounded-lg border-[#3D444D]">
                                <div className="flex flex-row items-center justify-start py-3 pb-2 px-3">
                                    <img src="/assets/media/img/repo.png" alt="Repository" className="w-5 mx-1"/>
                                    <a onClick={() => {
                                        BrokenSystemHandler();
                                        setSign([...sign, 7]);
                                    }} className="font-semibold mx-1 hover:text-blue-400 hover:underline cursor-pointer"> NotesWebApp</a>
                                    <div className=" py-0.5 px-2 mx-1 border border-gray-700 text-gray-400 text-xs rounded-4xl">Public</div>
                                </div>
                                <h2 className="text-left text-xs text-gray-400 px-4">A simple Notes App made with Spring boot for backend and react for the frontend  </h2>
                                <h2 className="text-left text-xs py-3 pb-4 px-4 text-gray-400">🟠Java</h2>
                            </button>
                            <button className="w-115 h-fit border m-2 text-blue-500 rounded-lg border-[#3D444D]">
                                <div className="flex flex-row items-center justify-start py-3 pb-2 px-3">
                                    <img src="/assets/media/img/repo.png" alt="Repository" className="w-5 mx-1"/>
                                    <a onClick={() => {
                                        BrokenSystemHandler();
                                        setSign([...sign, 8]);
                                    }} className="font-semibold mx-1 hover:text-blue-400 hover:underline cursor-pointer">ems-web-app</a>
                                    <div className=" py-0.5 px-2 mx-1 border border-gray-700 text-gray-400 text-xs rounded-4xl">Public</div>
                                </div>
                                <h2 className="text-left text-xs py-3 pb-4 px-4 text-gray-400">🟡JavaScript</h2>
                            </button>
                            <button className="w-115 h-fit border m-2 text-blue-500 rounded-lg border-[#3D444D]">
                                <div className="flex flex-row items-center justify-start py-3 pb-2 px-3">
                                    <img src="/assets/media/img/repo.png" alt="Repository" className="w-5 mx-1"/>
                                    <a onClick={() => {
                                        BrokenSystemHandler();
                                        setSign([...sign, 9]);
                                    }} className="font-semibold mx-1 hover:text-blue-400 hover:underline cursor-pointer">OnWorkPage</a>
                                    <div className=" py-0.5 px-2 mx-1 border border-gray-700 text-gray-400 text-xs rounded-4xl">Public</div>
                                </div>
                                <h2 className="text-left text-xs py-3 pb-4 px-4 text-gray-400">🟣CSS</h2>
                            </button>
                            <button className="w-115 h-fit border m-2 text-blue-500 rounded-lg border-[#3D444D]">
                                <div className="flex flex-row items-center justify-start py-3 pb-2 px-3">
                                    <img src="/assets/media/img/repo.png" alt="Repository" className="w-5 mx-1"/>
                                    <a onClick={() => {
                                        BrokenSystemHandler();
                                        setSign([...sign, 10]);
                                    }} className="font-semibold mx-1 hover:text-blue-400 hover:underline cursor-pointer">Tomy-s-Website</a>
                                    <div className=" py-0.5 px-2 mx-1 border border-gray-700 text-gray-400 text-xs rounded-4xl">Public</div>
                                </div>
                                <h2 className="text-left text-xs py-3 pb-4 px-4 text-gray-400">🟣CSS</h2>
                            </button>
                        </div>
                        <img src="/assets/media/img/Screenshot_2026-04-23-19-05-12.png" alt="Contributions"/>
                    </div>
                </div>
            </div>
            { Broken &&
                <div className="flex flex-col justify-center items-center bg-black outline-0 w-screen h-screen z-50 fixed top-0 left-0">
                    { Questions === 1 &&
                        <div className="w-150 h-100 border border-gray-600 text-white rounded-xs flex flex-col items-center justify-center">
                            <h1>The portfolio is boring still wanna see it?</h1>
                            <div className="flex flex-row items-center justify-start py-3 px-4">
                                <button onClick={() => {setQuestions(Questions + 1)}} className="p-1 border border-gray-600 hover:bg-gray-900 w-12 rounded-md mx-1">YES</button>
                                <button className="p-1 border border-gray-600 hover:bg-gray-900 mx-1 rounded-md w-12">NO</button>
                            </div>
                        </div>
                    }
                    { Questions === 2 &&
                        <div className="w-150 h-100 border border-gray-600 text-white rounded-xs flex flex-col items-center justify-center">
                            <h1>Do you really wanna see this portfolio? it's really boring</h1>
                            <div className="flex flex-row items-center justify-start py-3 px-4">
                                <button onClick={() => {setQuestions(Questions + 1)}} className="p-1 border w-12 rounded-md mx-1 border-gray-600 hover:bg-gray-900">YES</button>
                                <button className="p-1 border border-gray-600 hover:bg-gray-900 w-12 rounded-md mx-1">NO</button>
                            </div>
                        </div>
                    }
                    { Questions === 3 &&
                        <div className="w-150 h-100 border border-gray-600 text-white rounded-xs flex flex-col items-center justify-center">
                            <h1 className="text-red-600">The portfolio doesn't want you to see it, will you let it command you?</h1>
                            <div className="flex flex-row items-center justify-start py-3 px-4 text-white">
                                <button onClick={() => {window.parent.postMessage(
                                    { type: 'SET_HAMMER', value: true },
                                    window.location.origin
                                );
                                    setQuestions(Questions + 1);}
                                } className="p-1 border border-gray-600 hover:bg-gray-900 w-12 rounded-md mx-1">
                                    NO
                                </button>

                                <button className="p-1 border border-gray-600 hover:bg-gray-900 w-12 rounded-md mx-1">YES</button>
                            </div>
                        </div>
                    }
                    { Questions >= 4 &&
                        <div className="w-200 h-100 border border-gray-600 rounded-xs flex flex-col items-center justify-center">
                            <h1 className="font-normal text-red-600 text-5xl font-console">Break the glass</h1>
                        </div>
                    }
                </div>
            }
        </>
    )
}
export default GitPortfolio
