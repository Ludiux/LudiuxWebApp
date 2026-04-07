import * as THREE from 'three'
import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import {Environment, OrbitControls, useHelper} from "@react-three/drei";
import Subwoofer from "../components/Models/HometheaterSubwooffer.jsx";
import Speaker from "../components/Models/Speaker";
import Room from "../components/Models/Room.jsx";
import Desk from "../components/Models/Desk.jsx";
import {useEffect, useRef, useState} from "react";
import Monitor from "../components/Models/Monitor.jsx";
import Mouse from "../components/Models/Mouse.jsx";
import Dell from "../components/Models/DellPC.jsx";
import {Bloom, EffectComposer} from "@react-three/postprocessing";
import { useKeyboardControls } from '@react-three/drei'
import { Controls } from "../components/Controls.jsx"
import {PointLightHelper, Vector3} from "three";
import {Alert, Snackbar} from "@mui/material";
import WoodCube from "../components/Models/WoodCubes.jsx";
import Keyboard from "../components/Models/Keyboard.jsx"

const MonitorScene = ({onFocus, setOnFocus, escapePressed, setActive, active, lookingAt, setLookingAt}) => {
    const open = useLoader(THREE.TextureLoader, '/LudiuxWebApp/assets/media/img/icons8-collapse-100.png')
    const close = useLoader(THREE.TextureLoader, '/LudiuxWebApp/assets/media/img/icons8-expand-100.png')
    const texture = onFocus ? open : close;

    useEffect(() => {
        if(onFocus) {console.log("Focusing!")}
        if(!onFocus){console.log("NonFocusing!")}
    },[onFocus])
    const monitorClick = () => {
            setActive(!active);
            setLookingAt(1);
    }
    const collapseButton = () => {
        setOnFocus(!onFocus)
        setLookingAt(1);
    }

    return (
        <>
        <Monitor scale={[3, 3, 3]}
                 position={[3, -0.22, -0.1]}
                 rotation={[0, -1.55, 0]}
                 onClick={monitorClick}
                 escapePressed={escapePressed}
                 setActive={setActive}
                 active={active}/>
            {!active &&
                <mesh position={[2.96, 0.91, 0.76]}
                                    rotation={[0, -1.57, 0]}
                                    onClick={collapseButton}
            >
                <planeGeometry args={[0.1, 0.1]}/>
                <meshStandardMaterial color="blue"
                                      map={texture}
                                      transparent={true}
                />
            </mesh>}

        </>
    )
};

const Scene = ({onFocus, lookingAt, setLookingAt}) => {
    const meshRef = useRef()
    useEffect(() => {
        if(onFocus) {console.log("Focusing!")}
        if(!onFocus){console.log("NonFocusing!")}
    }, [onFocus]);

    useFrame((state) => {
        const { pointer, camera } = state

           if(!onFocus) {
               const OrigTarget = new Vector3(3.09, 0.5, -0.14)
               const originalPos = new Vector3(-0.4, camera.position.y, camera.position.z)
               let targetPos = meshRef.current.position;

               const deadzone = 0.6
                let x = pointer.x

                if (Math.abs(x) < deadzone) {
                    x = 0
                } else {
                    x = (x - Math.sign(x) * deadzone) / (1 - deadzone)
                }
                const baseZ = 0;
                const targetZ = baseZ + x * -1.4

                camera.position.z += (targetZ - camera.position.z) * 0.1
                camera.position.lerp(originalPos, 0.1);
                meshRef.current.position.lerp(OrigTarget, 0.05);
                camera.lookAt(targetPos)
           }else{
               let target
               let pos
               let targetPos = meshRef.current.position;

                switch (lookingAt) {
                    case 1:
                        pos = new Vector3(1.614, 0.3, -0.11);
                        target = new Vector3(3.09, 0.472, -0.14)
                    break;
                    case 2:
                        pos = new Vector3(2.426,0.58,-0.10);
                        target = new Vector3(2.47,0.485,1.59)
                    break;
                    case 3:
                        pos = new Vector3(2.426,1.6,-0.10);
                        target = new Vector3(2.47,1.62,1.59)
                    break;

                }
               camera.position.lerp(pos, 0.05);
               meshRef.current.position.lerp(target, 0.05);

               camera.lookAt(targetPos);
           }

    }

    )
    return(
        <>
            <OrbitControls
                target={[3.09, 0.5, -0.14]}
                enableDamping
                dampingFactor={0.05}
                rotateSpeed={0.3}
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 1.3}
                maxAzimuthAngle={Math.PI / -2.8}
            />
            <mesh position={[3, 0, 0]} ref={meshRef}>
                <sphereGeometry args={[0.1, 32, 32]} />
                <meshStandardMaterial visible={false}/>
            </mesh>
        </>

    )

};

const MouseScene = (() => {
    const mouseRef = useRef();
    useFrame((state) => {
        const { pointer } = state;
        let x = pointer.x;
        let y = pointer.y;
        let mX = 0.7 + (x * 0.3);
        let mY = 2.7 + (y * 0.35);

        if (mouseRef.current) {
            mouseRef.current.position.x = mY;
            mouseRef.current.position.y = -0.223;
            mouseRef.current.position.z = mX;
        }
    });
    return (
    <Mouse ref={mouseRef}
           scale={[0.1, 0.1, 0.1]}
           position={[2.7, -0.223, 0.7]}
           rotation={[0, 0.3, 0]}
    />

    );
})

function LightHelper(){
    const lightRef = useRef(null);
    useHelper(lightRef, PointLightHelper, 1, "yellow");

    return <pointLight ref={lightRef}
                       position={[0.5, 2.5, -2.5]}
                       color={"#FF954F"}
                       intensity={60} decay={2}
                       shadow-mapSize-width={2048}
                       shadow-mapSize-height={2048}
                       shadow-bias={-0.0005}
                       shadow-normalBias={0.02}
                       distance={10}
                       castShadow/>;
}
// Log camera with target function

// function LogCameraWithTarget({ controlsRef }) {
//     const pos = useRef(new Vector3())
//
//     useFrame(({ camera }) => {
//         camera.getWorldPosition(pos.current)
//
//         console.log("📍 position:", pos.current)
//         console.log("🎯 target:", controlsRef.current?.target)
//     })
//
//     return null
// }

const LandingPage = () => {
    const [active, setActive] = useState(true)
    const [lookingAt, setLookingAt] = useState(0);
    const controls = useRef()

    const escapePressed = useKeyboardControls(
        (state) => state[Controls.escape]
    )
    const [onFocus, setOnFocus] = useState(false);

   function cubeClick(){
       setLookingAt(2)
       setOnFocus(!onFocus);
   }
   function cubeClick2(){
       setLookingAt(3)
       setOnFocus(!onFocus);
   }

    useEffect(() => {
        if (!escapePressed) {
            setOnFocus(false)
        }
    }, [escapePressed])

    useEffect(() => {
        setOnFocus(!active)
    }, [active])


    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(!active) {
            setOpen(true);
        }
    },[active])

    return (
        <div className="w-full h-full absolute inset-0">
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert severity="info" >
                    Press Escape or touch the blue led to exit!
                </Alert>
            </Snackbar>
            <Canvas
                className="w-full h-full absolute inset-0"
                camera={{ position: [-0.37, 1, -0.1], fov: 40 }}
                shadows={true}
            >
                <ambientLight intensity={0.15} color={"#FF954F"}/>
                <LightHelper />
                <EffectComposer>
                    <Bloom  intensity={0.5}      // strength of glow
                            luminanceThreshold={0.8} // what glows
                            luminanceSmoothing={0.3}/>
                </EffectComposer>
                {/*<Perf position="top-left" />*/}
                <Environment files="./balcony_2k.exr" background={true} environmentIntensity={1} backgroundBlurriness={0.1} />
                <Scene onFocus={onFocus} lookingAt={lookingAt} setLookingAt={setLookingAt} />
                {/*<LogCameraWithTarget controlsRef={controls}/>*/}
                {/*<OrbitControls ref={controls} />*/}
                <Dell scale={[0.5, 0.5, 0.5]} position={[2.8, -1.25, 1.73]} rotation={[0, 1.63, 0]} castShadow receiveShadow/>
                <Keyboard scale={[1.3, 1.3, 1.3]} position={[2.8, -0.223, -1.14]} rotation={[0, -1.9, 0]} castShadow receiveShadow/>
                <MonitorScene onFocus={onFocus} setOnFocus={setOnFocus} escapePressed={escapePressed} setActive={setActive} active={active} lookingAt={lookingAt} setLookingAt={setLookingAt} />
                <MouseScene />
                <WoodCube scale={[0.5, 0.5, 0.5]} position={[2.72, -0.08, 1.74]} rotation={[0, 1.6, 0]} onClick={cubeClick} castShadow receiveShadow/>
                <WoodCube scale={[0.5, 0.5, 0.5]} position={[2.72, 1.055, 1.74]} rotation={[0, 1.6, 0]} onClick={cubeClick2} castShadow receiveShadow/>
                <Desk scale={[1.37, 1.2, 1.37]} position={[2.75, -0.7, -0.15]} rotation={[0, -1.57, 0]} castShadow receiveShadow/>
                <Subwoofer scale={[0.18, 0.18, 0.18]} position={[2.87, 0.12, -1.48]} rotation={[0, -3.1, 0]} castShadow receiveShadow />
                <Speaker scale={[1.5, 1.5, 1.5]} position={[3.15, -0.2, -1.05]} rotation={[0, -1.3, 0]}/>
                <Speaker scale={[1.5, 1.5, 1.5]} position={[3.1, -0.2, 1.17]} rotation={[0, -2, 0]}/>
                <Speaker scale={[1.5, 1.5, 1.5]} position={[3.106, 0.13, 1.176]} rotation={[0, -2, 0]}/>
                <Room position={[0, -2, 0.2]} receiveShadow/>
            </Canvas>
        </div>
    );
};

export default LandingPage;