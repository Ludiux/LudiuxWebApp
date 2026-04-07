
import React from 'react'
import { useGLTF } from '@react-three/drei'

function Subwoofer(props) {
    const { nodes, materials } = useGLTF('./HometheaterSubwooffer.glb')
    return (
        <group {...props} dispose={null}>
            <group position={[1.922, 1.119, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.244}>
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
            <group position={[1.922, 0.433, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.244}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003_1.geometry}
                    material={materials['Material.004']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003_2.geometry}
                    material={nodes.Cylinder003_2.material}
                />
            </group>
        </group>
    )
}

useGLTF.preload('./HometheaterSubwooffer.glb')

export default Subwoofer