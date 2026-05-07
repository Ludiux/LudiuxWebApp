import React, { useEffect, useRef } from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Candles(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/candles_set.glb')
    const { actions } = useAnimations(animations, group)
    const lightRef = useRef(null)


    useEffect(() => {
        if (materials.Flame) {
            materials.Flame.emissive = new THREE.Color('#ff9900')
            materials.Flame.emissiveIntensity = 2
            materials.Flame.morphTargets = true
        }
    }, [materials])

    useFrame(({ clock }) => {
        const t = clock.elapsedTime
        if (materials.Flame) {
            materials.Flame.emissiveIntensity = 1.5 + Math.sin(t * 8) * 0.5
        }
    })


    return (
        <group {...props} dispose={null}>
            <group position={[0.055, 0.092, 0.005]} rotation={[Math.PI / 2, 0, -0.969]} scale={0.238}>
                <group position={[-0.111, -0.202, 0.387]}>
                    <mesh

                        geometry={nodes.Object_0001.geometry}
                        material={materials['Candle_1.001']}
                    />
                    <mesh
                        geometry={nodes.Object_0001_1.geometry}
                        material={materials.Candle_2}
                    />
                    <mesh
                        geometry={nodes.Object_0001_2.geometry}
                        material={materials.Candle_3}
                    />
                    <mesh
                        geometry={nodes.Object_0001_3.geometry}
                        material={materials['Flame.001']}
                    />
                </group>
            </group>
            <pointLight
                ref={lightRef}
                position={[0.04, 0.2, 0.0]}
                color={"#FF954F"}
                intensity={2} decay={1}
                distance={1}
            />
            <pointLight
                ref={lightRef}
                position={[-0.04, 0.15, -0.03]}
                color={"#FF954F"}
                intensity={2} decay={1}
                distance={1}
            />
            <pointLight
                ref={lightRef}
                position={[-0.04, 0.13, 0.07]}
                color={"#FF954F"}
                intensity={2} decay={1}
                distance={1}
            />
        </group>
    )
}

useGLTF.preload('/candles_set.glb')

export default Candles