

import React from 'react'
import { useGLTF } from '@react-three/drei'

function WoodCube(props) {
  const { nodes, materials } = useGLTF('/WoodCubes.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.139, 0]} scale={[0.513, 1.139, 1.139]}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials['White Painted Wood']} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials['MDF Board']} />
      </group>
    </group>
  )
}

useGLTF.preload('/WoodCubes.glb')

export default WoodCube