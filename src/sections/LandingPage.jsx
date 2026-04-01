import {Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Speaker from "../components/HometheaterSubwooffer.jsx";
import Room from "../components/Room.jsx";
import Desk from "../components/Desk.jsx";
import {useRef} from "react";
import Monitor from "../components/Scene.jsx";
import Keyboard from "../components/Keyboard.jsx";
import Mouse from "../components/Mouse.jsx";



//
const Scene = (() => {
    const controls = useRef()
    useFrame((state) => {
        const { pointer, camera } = state
        const deadzone = 0.6
        let x = pointer.x

        if (Math.abs(x) < deadzone) {
            x = 0
        } else {
            // reescalar para que no haya salto
            x = (x - Math.sign(x) * deadzone) / (1 - deadzone)
        }
        const baseZ = 0;
        const targetZ = baseZ + x * -1.4

        camera.position.z += (targetZ - camera.position.z) * 0.1
    })

    return (
        <OrbitControls
            ref={controls}
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
    );
});

const MouseScene = (() => {
    const mouseRef = useRef();
    useFrame((state) => {
        const { pointer } = state;
        let x = pointer.x;
        let y = pointer.y;
        let mX = 0.7 + (x * 0.3);
        let mY = 2.7 + (y * 0.35);

        console.log(mY, mX)
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

const LandingPage = () => {
    return (
        <div className="w-full h-full absolute inset-0">
            <Canvas
                className="w-full h-full absolute inset-0"
                camera={{ position: [-0.37, 1, -0.10], fov: 40 }}
            >
                <hemisphereLight />
                <directionalLight  position={[-2, 2, 0]} />
                <Scene />
                <Keyboard scale={[0.025, 0.025, 0.025]} position={[2.6, -0.223, -0.8]} rotation={[0, -1.9, 0]} />
                <Monitor position={[3, -0.22, -0.1]} rotation={[0, -1.55, 0]} />
                <MouseScene />
                <Desk scale={[1.37, 1.2, 1.37]} position={[2.7, -0.7, -0.15]} rotation={[0, -1.57, 0]}/>
                <Speaker scale={[0.2, 0.2, 0.2]} position={[2.87, 0.1, -1.48]} />
                <Room position={[0, -2, 0]} />
            </Canvas>
        </div>
    );
};

export default LandingPage;