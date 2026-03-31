import { useGLTF } from '@react-three/drei'

export default function Room(props) {
    const { nodes, materials } = useGLTF('/room.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials['Beige Painted Plaster Wall']}
                position={[0, 2.5, 0]}
                scale={[3.54, 2.5, 1.92]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Window_with_sliding_door.geometry}
                material={materials['Window with sliding door 220x10x210']}
                position={[0.626, 2.112, 1.926]}
                scale={1.921}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sliding_door.geometry}
                    material={materials['Window with sliding door 220x10x210']}
                    position={[-0.841, -0.078, -0.046]}
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('/room.glb')