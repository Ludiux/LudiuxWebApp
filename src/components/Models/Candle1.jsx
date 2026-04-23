import React from 'react'
import {useGLTF} from '@react-three/drei'

export function Candle1(props) {
    const { nodes, materials } = useGLTF('/Candle1.glb')
    return (
        <group {...props} dispose={null}>
            <group
                name="candle_1_0"
                position={[-0.002, 0.092, 0.005]}
                rotation={[Math.PI / 2, 0, -0.969]}
                scale={0.238}>
                <group name="Object_4" position={[0.023, -0.007, 0.387]}>
                    <mesh
                        name="Object_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_0.geometry}
                        material={materials.Candle_1}
                        morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
                    />
                    <mesh
                        name="Object_0_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_0_1.geometry}
                        material={materials.Flame}
                        morphTargetDictionary={nodes.Object_0_1.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_0_1.morphTargetInfluences}
                    />

                    <pointLight
                        scale={[0.2, 0.2, 0.2]}
                        position={[0, -0, -1]}
                        color={"#F0B904"}
                        intensity={4} decay={2}
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                        shadow-bias={-0.0005}
                        shadow-normalBias={0.02}
                        distance={6}
                        castShadow
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/Candle1.glb')

export default Candle1;