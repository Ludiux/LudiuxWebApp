import React, {useState, useEffect} from 'react'
import {Html, useGLTF, useTexture, useVideoTexture} from '@react-three/drei'
import hammerStore from "../../services/store.js";


function Monitor({screenBroken, medievalMode, setMedievalMode, escapePressed, setActive, isMobile, active, ...props}) {
    const hammerVisible = hammerStore((state) => state.hammerVisible);
    const setHammerVisibility = hammerStore((state) => state.setHammerVisibility);
    const [shiny, setShiny] = useState(false);
    const [powerOn, setPower] = useState(false);

    let screenselect = <meshStandardMaterial color="#282828" metalness={0.96} roughness={0}/>;
    let power = <meshStandardMaterial color="#FF0000" emissive="red" emissiveIntensity={2}/>;
    const brokenTexture = useTexture("/assets/media/img/BreakIt.png")
    const brokenGlassTexture = useTexture("/assets/media/img/brokenGlassTexture2.png")
    const portal = useVideoTexture("/assets/media/webM/Portal2.webm")

    useEffect(() => {
        brokenTexture.repeat.y = -1
        brokenTexture.offset.y = 1
    }, [brokenTexture])

    if(active) {
        screenselect = shiny ? <meshStandardMaterial color="#282828" emissive="white" emissiveIntensity={1.3}/> :
            <meshStandardMaterial color="#282828" metalness={0.96} roughness={0}/>
    }else{
            screenselect = <meshBasicMaterial map={screenBroken ? brokenGlassTexture : brokenTexture } transparent color="#888888"/>
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
                position={[0, 0.232156, 0.009542]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.267375, 0.15038, 0.15038]}>

                {screenselect} {/*Dynamic Material Variable*/}

                { !hammerVisible && (<Html
                    zIndexRange={[zIndex, 0]}
                    position={[0.001, -0, 0]}
                    transform={true}
                    rotation={[-1.57, -0, 0]}
                    scale={[0.3015, 0.6, 1]}
                    distanceFactor={1.336}
                >
                    <div className={`w-480 h-245`}>
                        <iframe src="/Desktop"
                                className={`absolute left-0 top-0 w-480 h-245 ${!medievalMode ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
                        />
                        <iframe src="/MedievalScreen"
                                className={`absolute left-0 top-0 w-480 h-245 ${medievalMode ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
                        />
                    </div>
                </Html>) }


            </mesh>

            <mesh
                castShadow
                receiveShadow
                position={[0, 0.232156, 0.009042]}
                rotation={[0, 0, 0]}
                scale={[0.267375, 0.15038, 0.15038]}
                >
                <planeGeometry args={[1.9, 1.9]}/>
                <meshBasicMaterial map={portal} />
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
