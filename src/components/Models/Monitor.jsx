import React, {useState, useEffect} from 'react'
import { Html, useGLTF } from '@react-three/drei'


function Monitor({escapePressed, setActive, active, ...props}) {

    const [shiny, setShiny] = useState(false);
    const [powerOn, setPower] = useState(false);

    let screenselect = <meshStandardMaterial color="#282828" metalness={0.96} roughness={0}/>;
    let power = <meshStandardMaterial color="#FF0000" emissive="red" emissiveIntensity={2}/>;

    if(active) {
        screenselect = shiny ? <meshStandardMaterial color="#282828" emissive="white" emissiveIntensity={1.3}/> :
            <meshStandardMaterial color="#282828" metalness={0.96} roughness={0}/>
    }

    power = !powerOn ?
        <meshStandardMaterial color="#FF0000" emissive="red" emissiveIntensity={7}/> :
        <meshStandardMaterial color="#0000FF" emissive="#1F51FF" emissiveIntensity={10}/>

    const zIndex = active ? -100 : 0


    useEffect(() => {
        if (escapePressed) {
            setActive(true)
        }
    }, [escapePressed])
    useEffect(() => {
        setPower(!active)
    }, [active])

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

                {screenselect} {/*Dynamic Material Variable*/}
                <Html
                    zIndexRange={[zIndex, 0]}
                    position={[0.001, -0, 0]}
                    transform={true}
                    rotation={[-1.57, -0, 0]}
                    scale={[0.3015, 0.6, 1]}
                    distanceFactor={1.33}
                >
                    <iframe src="/embed" className={"w-480 h-245"} />
                </Html>

            </mesh>
            <mesh
                name="Твердое_тело1001"
                onPointerEnter={() => setShiny(true)}
                onPointerLeave={() => setShiny(false)}
                onClick={() => setActive(!active)}
                castShadow
                receiveShadow
                geometry={nodes.Твердое_тело1001.geometry}
                material={materials['Material.003']}
            >
                {power}
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
