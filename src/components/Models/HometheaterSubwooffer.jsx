
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Subwoofer(props) {
    const { nodes, materials } = useGLTF('/HometheaterSubwooffer.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[2.12, 1.13, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.24}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_1.geometry}
                    material={materials['Material.003']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_2.geometry}
                    material={nodes.Cylinder_2.material}
                />
            </group>
            <group position={[0, 0, -1.42]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_1.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_2.geometry}
                    material={materials.Material}
                />
            </group>
            <group position={[2.12, 0.53, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.24}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_1.geometry}
                    material={materials['Material.005']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_2.geometry}
                    material={nodes.Cylinder001_2.material}
                />
            </group>
        </group>
    )
}



useGLTF.preload('./HometheaterSubwooffer.glb')

export default Subwoofer