
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function HammerModel(props) {
    const { nodes, materials } = useGLTF('/hammer.glb')
    return (
        <group {...props} dispose={null}>
            <group name="d15d186e132a4ab7be2bfa8a0a4341d1fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <group name="pCylinder5" position={[-0.22, -30.666, 0]}>
                    <mesh
                        name="pCylinder5_lambert1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.pCylinder5_lambert1_0.geometry}
                        material={materials['lambert1.001']}
                        position={[1.595, 31.125, -78.755]}
                        rotation={[Math.PI, -1.565, Math.PI]}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/hammer.glb')

export default HammerModel;