
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function HammerModel(props) {
    const { nodes, materials } = useGLTF('/hammer.glb')
    return (
        <group {...props} dispose={null}>
            <group
                name="Sketchfab_model"
                position={[0.007, 0.036, -0.073]}
                rotation={[1.015, -0.457, -0.208]}>
                <group
                    name="d15d186e132a4ab7be2bfa8a0a4341d1fbx"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}>
                    <mesh
                        name="pCylinder5_lambert1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCylinder5_lambert1_0.geometry}
                        material={materials.lambert1}
                        position={[-0.22, -30.666, 0]}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/hammer.glb')

export default HammerModel;