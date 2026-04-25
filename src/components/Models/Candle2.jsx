import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Candle2(props) {
    const { nodes, materials } = useGLTF('/Candle2.glb')
    return (
        <group {...props} dispose={null}>
            <group
                name="candle_2_2"
                position={[0.004, 0.057, -0.002]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.238}>
                <group name="Object_8" position={[-0.017, 0.009, 0.241]}>
                    <mesh
                        name="Object_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_2.geometry}
                        material={materials.Candle_2}
                        morphTargetDictionary={nodes.Object_2.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_2.morphTargetInfluences}
                    />
                    <mesh
                        name="Object_2_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_2_1.geometry}
                        material={materials.Flame}
                        morphTargetDictionary={nodes.Object_2_1.morphTargetDictionary}
                        morphTargetInfluences={nodes.Object_2_1.morphTargetInfluences}
                    />
                    <pointLight
                        scale={[0.2, 0.2, 0.2]}
                        position={[0, -0, -0.5]}
                        color={"#fae446"}
                        intensity={2} decay={1}
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

useGLTF.preload('/Candle2.glb')

export default Candle2