import * as THREE from 'three'
import React, {useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Banner(props) {
    const group = React.useRef()
    const { nodes, materials, animations } = useGLTF('/MedievalBanner.glb')
    const { actions, names } = useAnimations(animations, group)
    const action = actions[names[0]]
    console.log(names)
    console.log(actions)
    console.log(actions[names[0]])

    useEffect(() => {
        if (!actions || names.length === 0) return

        const action = actions[names[0]]
        if (!action) return

        action.reset()
        action.setLoop(THREE.LoopOnce, 1)
        action.repetitions = 1
        action.clampWhenFinished = true
        action.setEffectiveTimeScale(2)
        action.play()

    }, [actions, names])


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Spiral"
              castShadow
              receiveShadow
              geometry={nodes.Spiral.geometry}
              material={materials['Material.001']}
              morphTargetDictionary={nodes.Spiral.morphTargetDictionary}
              morphTargetInfluences={nodes.Spiral.morphTargetInfluences}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/MedievalBanner.glb')

export default Banner