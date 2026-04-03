import React, {useState, useEffect} from 'react'
import { Html, useGLTF, useKeyboardControls } from '@react-three/drei'
import { Controls } from '../Controls.jsx'


function Monitor(props) {
    const escapePressed = useKeyboardControls(
        (state) => state[Controls.escape]
    )
    const [shiny, setShiny] = useState(false);
    let screenselect = <meshStandardMaterial color="#282828" metalness={0.96} roughness={0}/>;
    const [active, setActive] = useState(true)
    if(active) {
        screenselect = shiny ? <meshStandardMaterial color="#282828" emissive="cyan" emissiveIntensity={0.8}/> :
            <meshStandardMaterial color="#282828" metalness={0.96} roughness={0}/>
    }
    const zIndex = active ? -100 : 0


    useEffect(() => {
        if (escapePressed) {
            setActive(true)
        }
    }, [escapePressed])

    const { nodes, materials } = useGLTF('/monitor.glb')


    return (
        <group {...props} dispose={null}>
            <mesh
                name="Plane"
                onPointerEnter={() => setShiny(true)}
                onPointerLeave={() => setShiny(false)}
                onClick={() => setActive(false)}
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials['Material.002']}
                position={[0, 0.232156, 0.009542]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.267375, 0.15038, 0.15038]}>
                {screenselect}
                <Html
                    zIndexRange={[zIndex, 0]}
                    position={[0, -0, 0]}
                    transform={true}
                    rotation={[-1.57, -0, 0]}
                    scale={[0.3, 0.6, 1]}
                    distanceFactor={1.338}
                >
                    <iframe src="/embed" className={"w-480 h-245"} />
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
