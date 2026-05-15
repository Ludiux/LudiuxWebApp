import React, {useEffect, useState} from 'react'
import {Canvas} from "@react-three/fiber";

const PortalGit = () => {
    const [transition, setTransition] = useState(true)

    useEffect(() => {

        const loaded = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000))
            setTransition(false)
        }
        loaded();

    }, [transition]);
    return (
        <>
            <div className="w-screen h-screen">
                <img src="/assets/media/img/dirt.webp"  alt={"Portal"} className={`
                w-screen h-screen
                transition-opacity 
                duration-500 ${transition ? "opacity-100" : "opacity-0"} 
                absolute inset-0 outline-0`}
                />
                <h1 className={`
                text-white font-normal font-gameboy
                text-2xl
                transition-opacity 
                duration-500 ${transition ? "opacity-100" : "opacity-0"} 
                absolute inset-0 outline-0 top-100 left-200`}
                >
                    Loading Portfolio
                </h1>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas
                    className="w-full h-full absolute inset-0"
                    camera={{ position: [-0.37, 1, -0.1], fov: 40 }}
                    shadows={true}
                >
                </Canvas>
            </div>
        </>
    )
}
export default PortalGit
