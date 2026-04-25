import React, { useRef } from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'

export function Candles(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/candles_set.glb')
    const { actions } = useAnimations(animations, group)

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group
                                name="candle_1_0"
                                position={[0.0546, 0.0923, 0.0054]}
                                rotation={[Math.PI / 2, 0, -0.9685]}
                                scale={0.2383}>
                                <mesh
                                    name="Object_4"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_4.geometry}
                                    material={materials.Candle_1}
                                />
                            </group>
                            <group
                                name="candle_wick_1_1"
                                position={[0.0563, 0.1719, 0.0001]}
                                rotation={[Math.PI / 2, 0, -0.9685]}
                                scale={0.2383}>
                                <mesh
                                    name="Object_6"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_6.geometry}
                                    material={materials.Candle_1}
                                />
                            </group>
                            <group
                                name="candle_2_2"
                                position={[-0.0351, 0.0574, -0.0459]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={0.2383}>
                                <mesh
                                    name="Object_8"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_8.geometry}
                                    material={materials.Candle_2}
                                />
                            </group>
                            <group
                                name="candle_wick_2_3"
                                position={[-0.037, 0.1028, -0.0457]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={0.2383}>
                                <mesh
                                    name="Object_10"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_10.geometry}
                                    material={materials.Candle_2}
                                />
                            </group>
                            <group
                                name="candle_3_4"
                                position={[-0.0544, 0.043, 0.0709]}
                                rotation={[Math.PI / 2, 0, 0.0932]}
                                scale={0.2383}>
                                <mesh
                                    name="Object_12"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_12.geometry}
                                    material={materials.Candle_3}
                                />
                            </group>
                            <group
                                name="candle_wick_3_5"
                                position={[-0.0557, 0.0713, 0.0682]}
                                rotation={[Math.PI / 2, 0, 0.0932]}
                                scale={0.2383}>
                                <mesh
                                    name="Object_14"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_14.geometry}
                                    material={materials.Candle_3}
                                />
                            </group>
                            <group
                                name="Flame_3_6"
                                position={[-0.0561, 0.0735, 0.0679]}
                                rotation={[0, -0.0932, 0]}
                                scale={[1.0137, 1.0879, 1.0137]}>
                                <mesh
                                    name="mesh_6"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.mesh_6.geometry}
                                    material={materials.Flame}
                                    morphTargetDictionary={nodes.mesh_6.morphTargetDictionary}
                                    morphTargetInfluences={nodes.mesh_6.morphTargetInfluences}
                                />
                            </group>
                            <group name="Flame_2_7" position={[-0.0371, 0.1038, -0.0455]} scale={1.1312}>
                                <mesh
                                    name="mesh_7"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.mesh_7.geometry}
                                    material={materials.Flame}
                                    morphTargetDictionary={nodes.mesh_7.morphTargetDictionary}
                                    morphTargetInfluences={nodes.mesh_7.morphTargetInfluences}
                                />
                            </group>
                            <group name="Flame_1_8" position={[0.0561, 0.1773, 0.0006]} rotation={[0, 0.9685, 0]}>
                                <mesh
                                    name="mesh_8"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.mesh_8.geometry}
                                    material={materials.Flame}
                                    morphTargetDictionary={nodes.mesh_8.morphTargetDictionary}
                                    morphTargetInfluences={nodes.mesh_8.morphTargetInfluences}
                                />

                                <pointLight
                                    scale={[0.02, 0.02, 0.02]}
                                    position={[-0.0, -0.05, -0.085]}
                                    color={"#fae446"}
                                    intensity={1} decay={1}
                                    shadow-mapSize-width={2048}
                                    shadow-mapSize-height={2048}
                                    shadow-bias={-0.0005}
                                    shadow-normalBias={0.02}
                                    distance={1}
                                    castShadow/>
                                <pointLight
                                    scale={[0.02, 0.02, 0.02]}
                                    position={[0, 0.015, 0.01]}
                                    color={"#fae446"}
                                    intensity={1} decay={1}
                                    shadow-mapSize-width={2048}
                                    shadow-mapSize-height={2048}
                                    shadow-bias={-0.0005}
                                    shadow-normalBias={0.02}
                                    distance={1}
                                    castShadow
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/candles_set.glb')

export default Candles