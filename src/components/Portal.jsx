import React from 'react'
import {MeshPortalMaterial} from "@react-three/drei";

const Portal = () => {
    return (
        <>
            <mesh {...props}>
                <planeGeometry />
                <MeshPortalMaterial>
                    <mesh>
                        <sphereGeometry />
                    </mesh>
                </MeshPortalMaterial>
            </mesh>

        </>
    )
}
export default Portal
