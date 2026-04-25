import React, {useRef, useState} from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export function D20({setMedievalMode, medievalMode, ...props}) {
    const [shiny, setShiny] = useState(false);
    const [intensity, setIntensity] = useState(0);
    const diceRef = useRef(null);


    const ShinyHandle = () => {
        useFrame((state) => {
            const t = state.clock.getElapsedTime()
            let x = Math.sin(t * 20) * 0.1;


            if (shiny) {
                if(intensity <= 2) {
                    setIntensity(intensity + 0.1);
                }
                diceRef.current.rotation.set(x, x, 0)
            }else{
                if(intensity >= 0.3) {
                    setIntensity(intensity - 0.1);
                    diceRef.current.rotation.set(0, 0, 0)
                }
            }
        })

        return (
            <pointLight
                scale={[0.2, 0.2, 0.2]}
                position={[0, 0, 0]}
                intensity={intensity} decay={2}
                color={"#860111"}
            />
        )
    }

    const HandleClick = () => {
        const timer = setTimeout(() => {
            setMedievalMode(!medievalMode)
        }, 1200)
    }

    const { nodes, materials } = useGLTF('/d20.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                name="Dice_D20_low007_Bake_0"
                ref={diceRef}
                onClick={HandleClick}
                onPointerEnter={() => {
                    setShiny(true)
                }}
                onPointerLeave={() => {
                    setShiny(false)
                }}
                castShadow
                rotation={[0, 0, 0]}
                receiveShadow
                geometry={nodes.Dice_D20_low007_Bake_0.geometry}
                material={materials['Bake.001']}
            />
            <ShinyHandle/>
        </group>
    )
}

useGLTF.preload('/d20.glb')

export default D20;