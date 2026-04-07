import React from 'react'
import { useGLTF } from '@react-three/drei'

function Speaker(props) {
    const { nodes, materials } = useGLTF('./Speakers.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[-0.161, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes['panasonic_sa-pm02_speaker-l_panasonic_sa-pm02-speaker_0'].geometry}
                        material={materials['panasonic_sa-pm02-speaker']}
                        position={[0.16, 0, 0]}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('./Speakers.glb')

export default Speaker