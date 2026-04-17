import React, {useState} from 'react'

const ContactPage = () => {
    const [open, setOpen] = useState(true);
    let SubjectMessage = "New Message";
    let myTextInput = document.getElementById('subject');


    return (
        <div className="bg-[#F8FAFD]">
            <div className="fixed w-full h-full bg-white top-30 left-70 rounded-xl"></div>
            <img src="/assets/media/img/threeLines.png" alt="Tabs Menu" className="w-12 h-9 absolute top-17 left-3"/>
            <img src="/assets/media/img/gmailLogo.png" alt="Gmail" className="absolute top-15 left-17 w-55 h-12"/>

            <button
                onClick={() => setOpen(true)}
                className="fixed top-40 left-4 px-6 py-4 flex justify-between items-center w-48 h-19 cursor-pointer text-black text-xl bg-linear-to-r from-cyan-400 to-blue-400 font-semibold rounded-3xl transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                <img src="https://www.gstatic.com/images/icons/material/system_gm/2x/create_black_24dp.png" alt="nothing" className="w-8 h-8"/>
                Compose
            </button>
            {open &&
                <div className="flex flex-col  w-200 h-190 fixed bottom-0 right-4 bg-white rounded-2xl shadow-lg  shadow-gray-700">
                    <div className="flex justify-between align-middle items-center bg-blue-50 w-full rounded-t-2xl h-15 ">
                        <h1 className="text-xl ml-6 font-bold">{SubjectMessage}</h1>
                        <h1 className="fixed top-47 right-15 text-3xl font-bold text-gray-500">_</h1>
                        <button onClick={() => setOpen(false)}
                                className="flex cursor-pointer align-middle items-center justify-center fixed top-49 w-8 h-7 right-6 text-3xl font-bold text-gray-500 hover:bg-gray-200">x
                        </button>
                    </div>
                    <form className="ml-2">
                        <div className="w-full h-20 ">
                            <input type="text" id="name" placeholder="Sender"
                                   className="border-b h-20 w-full text-2xl border-gray-300 py-0 transition-colors focus:outline-none peer bg-inherit"
                                   required/>
                        </div>

                        <div className="w-full h-max-10 ">
                            <input type="text" id="subject" placeholder="Subject"
                                   className="border-b h-20 w-full text-2xl border-gray-300 py-0 transition-colors focus:outline-none peer bg-inherit"
                                   required/>
                        </div>

                        <div className="w-full ">
                            <textarea id="name"
                                      className="border-0  py-1 transition-colors text-xl focus:border-0 focus:outline-none peer bg-inherit resize-none h-140 w-full"
                                      required/>
                        </div>

                        <div className="fixed bottom-20 right-165 flex justify-center">
                            <button
                                className="group relative inline-flex items-center cursor-pointer justify-center overflow-hidden rounded-4xl border-2 border-blue-500 p-4 px-5 py-2.5 font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
                            >
            <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-blue-400 duration-300 group-hover:translate-x-0">
              <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
                                <span className="absolute flex h-full w-full transform items-center justify-center bg-blue-500 text-white transition-all duration-300 group-hover:translate-x-full">
              Button Text
            </span>
                                <span className="invisible relative">Button Text</span>
                            </button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}
export default ContactPage
