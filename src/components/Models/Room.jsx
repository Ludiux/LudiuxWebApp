
import React from 'react'
import { useGLTF } from '@react-three/drei'

function Room(props) {
    const { nodes, materials } = useGLTF('/room.glb')
    return (
        <group {...props} dispose={null}>
            <group
                name="Sketchfab_model"
                position={[2.6073, 2.05, -0.2]}
                rotation={[-Math.PI / 2, 0, -1.5688]}
                scale={0.166}>
                <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        name="Plane001_0"
                        position={[0.0069, 2.1611, -0.0239]}
                        rotation={[1.5732, 0, 0]}
                        scale={[1.5028, 16.4513, 2.1121]}>
                        <mesh
                            name="Object_5"
                            receiveShadow
                            geometry={nodes.Object_5.geometry}
                            material={materials.Material}
                            position={[-0.372, -0.2329, -3.4643]}
                            scale={1.9455}
                        />
                    </group>
                </group>
            </group>
            <group name="Window_with_sliding_door" position={[0.6258, 2.1122, 1.9258]} scale={1.9212}>
                <mesh
                    name="Sliding_door001"
                    receiveShadow
                    geometry={nodes.Sliding_door001.geometry}
                    material={materials['Window with sliding door 220x10x210']}
                    position={[-0.8413, -0.0779, -0.0249]}
                />
            </group>
            <mesh
                name="Window_with_sliding_door001"
                receiveShadow
                geometry={nodes.Window_with_sliding_door001.geometry}
                material={materials['Window with sliding door 220x10x210']}
                position={[0.6258, 2.1122, 1.9667]}
                scale={1.9212}
            />
            <mesh
                name="Cube"
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials['Material.002']}
                position={[0, 0, -3]}
                scale={[3.52, 2.6, 5]}
            />
        </group>
    )
}

useGLTF.preload('/room.glb')

export default Room