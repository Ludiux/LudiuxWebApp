import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Candle1(props) {
    const lightRef = useRef(null)

    const { nodes, materials } = useGLTF('/Candle1.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[0, 0.352, 0]} rotation={[1.574, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0001.geometry}
                    material={materials['Candle_1.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0001_1.geometry}
                    material={materials['Flame.001']}
                />
            </group>
            <pointLight
                ref={lightRef}
                position={[0, 0.82, 0]}
                color={"#FF954F"}
                intensity={2.4} decay={1}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.001}
                shadow-normalBias={0.1}
                distance={1.8}
            />
        </group>
    )
}

useGLTF.preload('/Candle1.glb')

export default Candle1