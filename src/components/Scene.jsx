

import React from 'react'
import { useGLTF } from '@react-three/drei'

function Monitor(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.032}>
        <mesh geometry={nodes.polySurface2_Monitor_M_0.geometry} material={materials.Monitor_M} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

export default Monitor