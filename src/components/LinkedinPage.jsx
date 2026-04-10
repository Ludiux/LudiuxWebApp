import React from 'react'

const LinkedinPage = () => {
    return (
        <>
            <div className="flex items-center w-full h-14 justify-evenly align-middle bg-white">
                <div className="flex items-center justify-center">
                    <img src="/assets/media/img/linkedin_logo.png" alt="LinkedIn" className="p-0 w-9 h-9 mx-1 "/>
                    <div className="flex px-2.5 py-1.5 rounded-4xl border border-gray-400 overflow-hidden ">
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
        </>
    )
}
export default LinkedinPage
