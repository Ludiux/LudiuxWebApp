import React, {useRef} from 'react'
import { useGLTF } from '@react-three/drei'

function Keyboard({setLoading, ...props}) {
  const { nodes, materials } = useGLTF('./Keyboard.glb')
  const hasRendered = useRef(false);
  return (
      <group {...props} dispose={null}>
        <group
            position={[0.327, 0.074, 0.066]}
            rotation={[0.024, 0, 0]}
            scale={[0.278, 0.075, 0.106]}>
          <group
              position={[-0.002, -0.806, -0.141]}
              rotation={[0.004, 0, 0]}
              scale={[3.601, 13.356, 9.431]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_0.geometry}
                material={materials.Alumunium_Blue_Sky_Case}
                onAfterRender={() => {
                  if (hasRendered.current) return;

                  hasRendered.current = true;
                  setLoading(false);
                  console.log("SceneRender!");
                }}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_0_1.geometry}
                material={materials['Sticker.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_0_2.geometry}
                material={materials.Wavy_Keycaps}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_0_3.geometry}
                material={materials.Rubber_Feet}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_0_4.geometry}
                material={materials.Blue_RGB}
            />
          </group>
        </group>
      </group>
  )
}

useGLTF.preload('./Keyboard.glb')

export default Keyboard