import React, { useEffect, useRef, forwardRef } from 'react';
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/HometheaterSubwooffer.jsx";
import Room from "../components/Room.jsx";
import * as THREE from "three";


//
const Scene = (() => {
    const {camera} = useThree();
    const raycaster = useRef(new THREE.Raycaster());
    const { pointer } = useThree();


    useFrame((state) => {

        const { pointer, camera } = state

        const deadzone = 0.45

        let x = pointer.x

        if (Math.abs(x) < deadzone) {
            x = 0
        } else {
            x = (x - Math.sign(x) * deadzone) / (1 - deadzone)
        }

        const targetZ = x * -1.4

        camera.position.z += (targetZ - camera.position.z) * 0.1


    });

    return (
        <OrbitControls
            target={[3.2, 0.5, 0.1]}
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

const LandingPage = () => {
    return (
        <div className="w-full h-full absolute inset-0">
            <Canvas
                className="w-full h-full absolute inset-0"
                camera={{ position: [-0.4, 1, -1], fov: 35 }}
            >
                <ambientLight />
                <Scene />
                <Model scale={[0.2, 0.2, 0.2]} position={[1, -1, 1]} />
                <Room position={[0, -2, 0]} />
            </Canvas>
        </div>
    );
};

export default LandingPage;