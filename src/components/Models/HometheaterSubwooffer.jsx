import React, { useRef, useState, useEffect } from "react";
import {useGLTF, Billboard, Html} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Subwoofer({musicRef, ...props}) {
    const { nodes, materials } = useGLTF("/HometheaterSubwooffer.glb");
    const modelRef = useRef();
    const [dragging, setDragging] = useState(false);
    const lastX = useRef(0);
    const velocity = useRef(0);
    const [popUp, setPopUp] = useState(false);
    const [usedPopUp, setUsedPopUp] = useState(0);

    const handlePointerDown = (e) => {
        e.stopPropagation();

        if (musicRef?.current) {
            musicRef.current.play();
        }

        setDragging(true);

        lastX.current = e.clientX;

        document.body.style.cursor = "grabbing";
    };

    useEffect(() => {
        console.log(popUp)
    }, [popUp]);

    const popUpHandler = () => {
        setUsedPopUp((prev) => {
            const next = prev + 1;

            if (next === 1) {
                setPopUp(true);

                setTimeout(() => {
                    setPopUp(false);
                }, 5000);
            }

            return next;
        });
    };

    const handlePointerMove = (e) => {
        if (!dragging) return;

        const deltaX = e.clientX - lastX.current;

        velocity.current = deltaX * -0.01;

        lastX.current = e.clientX;
    };

    useEffect(() => {
        const stopDragging = () => {
            setDragging(false);

            document.body.style.cursor = "default";
        };

        window.addEventListener("pointerup", stopDragging);

        return () => {
            window.removeEventListener("pointerup", stopDragging);
        };
    }, []);



    useEffect(() => {
        if (modelRef.current) {
            modelRef.current.rotation.z = -Math.PI / 2;
        }
    }, []);

    useFrame(() => {
        if (!modelRef.current) return;

        modelRef.current.rotation.x += velocity.current;

        modelRef.current.rotation.x = Math.max(
            -1,
            Math.min(1, modelRef.current.rotation.x)
        );

        const normalized =
            (modelRef.current.rotation.x + 1) / 2;

        if (musicRef?.current) {
            musicRef.current.volume = 1 - normalized;
        }

        velocity.current *= 0.92;
    });

    return (
        <group
            {...props}
            dispose={null}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerOver={popUpHandler}
        >
            <group
                ref={modelRef}

                position={[2.12, 1.13, 0]}
                scale={0.24}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_1.geometry}
                    material={materials["Material.003"]}
                />


                <Billboard position={[2.12, 1.6, 0]}>
                    <Html center>
                        <div
                            className={` px-4 py-2 rounded-xl bg-black/80 text-white whitespace-nowrap pointer-events-none transition-all duration-300
                            ${popUp ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2" } `}
                        >
                            Drag to adjust volume
                        </div>
                    </Html>
                </Billboard>


                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_2.geometry}
                    material={nodes.Cylinder_2.material}
                />
            </group>

            <group
                position={[0, 0, -1.42]}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_1.geometry}
                    material={materials["Material.001"]}
                />

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_2.geometry}
                    material={materials.Material}
                />
            </group>

            <group
                position={[2.12, 0.53, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.24}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_1.geometry}
                    material={materials["Material.005"]}
                />

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_2.geometry}
                    material={nodes.Cylinder001_2.material}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/HometheaterSubwooffer.glb");