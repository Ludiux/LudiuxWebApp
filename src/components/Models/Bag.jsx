
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Bag(props) {
    const { nodes, materials } = useGLTF('/coin_bag.glb')
    return (
        <group {...props} dispose={null}>
            <group name="Object_3001" rotation={[-Math.PI, 0, 0]} scale={0.01}>
                <mesh
                    name="Object_1001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1001.geometry}
                    material={materials['Cowhide_Leather_FCL2PSL002_FRONT_3848.001']}
                />
                <mesh
                    name="Object_1001_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1001_1.geometry}
                    material={materials['Linen_FCL1PSH001_FRONT_3811.001']}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/coin_bag.glb')

export default Bag;