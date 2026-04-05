

import React from 'react'
import { useGLTF } from '@react-three/drei'

 function Keyboard(props) {
    const { nodes, materials } = useGLTF('/scene.gltf')
    return (
        <group {...props} dispose={null}>
            <mesh
                name="Keycaps_Keycaps_0"
                castShadow
                receiveShadow
                geometry={nodes.Keycaps_Keycaps_0.geometry}
                material={materials.Keycaps}
                position={[-3.953, 1.646, -52.399]}
            />
            <mesh
                name="Stabilizers_Stabilizers_0"
                castShadow
                receiveShadow
                geometry={nodes.Stabilizers_Stabilizers_0.geometry}
                material={materials.Stabilizers}
                position={[-3.953, 1.646, -52.399]}
            />
            <mesh
                name="LED_LED_0"
                castShadow
                receiveShadow
                geometry={nodes.LED_LED_0.geometry}
                material={materials.material}
                position={[-3.953, 1.646, -52.399]}
            />
            <mesh
                name="Wire_Wire_0"
                castShadow
                receiveShadow
                geometry={nodes.Wire_Wire_0.geometry}
                material={materials.Wire}
                position={[-3.953, 1.646, -52.399]}
            />
            <mesh
                name="Stabilizer_slots_Stabilizer_slots_0"
                castShadow
                receiveShadow
                geometry={nodes.Stabilizer_slots_Stabilizer_slots_0.geometry}
                material={materials.Stabilizer_slots}
                position={[-3.953, 1.646, -52.399]}
            />
            <mesh
                name="Case_Case_0"
                castShadow
                receiveShadow
                geometry={nodes.Case_Case_0.geometry}
                material={materials.Case}
                position={[-3.953, 1.646, -52.399]}
            />
            <mesh
                name="6_Degrees_6_Degrees_0"
                castShadow
                receiveShadow
                geometry={nodes['6_Degrees_6_Degrees_0'].geometry}
                material={materials['6_Degrees']}
                position={[-3.953, 1.646, -52.399]}
            />
            <mesh
                name="9_Degrees_9_Degrees_0"
                castShadow
                receiveShadow
                geometry={nodes['9_Degrees_9_Degrees_0'].geometry}
                material={materials['9_Degrees']}
                position={[-3.953, 1.646, -52.399]}
            />
            <mesh
                name="Cable_Cable_0"
                castShadow
                receiveShadow
                geometry={nodes.Cable_Cable_0.geometry}
                material={materials.Cable}
                position={[-3.953, 1.646, -52.399]}
            />
            <mesh
                name="Stem_Stem_0"
                castShadow
                receiveShadow
                geometry={nodes.Stem_Stem_0.geometry}
                material={materials.Stem}
                position={[-3.953, 1.646, -52.399]}
            />
            <mesh
                name="Housing_Housing_0"
                castShadow
                receiveShadow
                geometry={nodes.Housing_Housing_0.geometry}
                material={materials.Housing}
                position={[-3.953, 1.646, -52.399]}
            />
        </group>
    )
}

useGLTF.preload('/scene.gltf')

export default Keyboard