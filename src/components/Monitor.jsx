import React from 'react'
import {Html, useGLTF} from '@react-three/drei'

function Monitor(props) {


    const { nodes, materials } = useGLTF('/monitor.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                name="Plane"
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials['Material.002']}
                position={[0, 0.232156, 0.009542]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.267375, 0.15038, 0.15038]}>

                <Html
                    position={[0, -0, 0]}
                    transform={true}
                    rotation={[-1.57, -0, 0]}
                    scale={[0.3, 0.6, 1]}
                    distanceFactor={1.338}
                >
                <iframe src="/*" className={"w-480 h-245"} />
                </Html>

            </mesh>
            <mesh
                name="Твердое_тело1_1"
                castShadow
                receiveShadow
                geometry={nodes.Твердое_тело1_1.geometry}
                material={materials['Material.001']}
            />
            <mesh
                name="Твердое_тело1_2"
                castShadow
                receiveShadow
                geometry={nodes.Твердое_тело1_2.geometry}
                material={nodes.Твердое_тело1_2.material}
            />
        </group>
    )
}

useGLTF.preload('/monitor.glb')

export default Monitor