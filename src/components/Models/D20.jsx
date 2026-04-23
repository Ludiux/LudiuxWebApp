import React from 'react'
import { useGLTF } from '@react-three/drei'

export function D20(props) {
    const { nodes, materials } = useGLTF('/d20.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                name="Dice_D20_low007_Bake_0"
                castShadow
                receiveShadow
                geometry={nodes.Dice_D20_low007_Bake_0.geometry}
                material={materials['Bake.001']}
            />
        </group>
    )
}

useGLTF.preload('/d20.glb')

export default D20;