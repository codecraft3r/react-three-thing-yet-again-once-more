import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { EffectComposer, Glitch, Bloom } from '@react-three/postprocessing'
export default function Experience()
{

    //make cube rotate slowly over time
    const cube = useRef()
    useFrame(() => {
        cube.current.rotation.x += 0.01
        cube.current.rotation.y += 0.01
        cube.current.material.color.setHSL(Math.sin(Date.now() * 0.0001), 0.5, 0.5)
    })

    // move cube around scene to points
    const points = [
        [ 0, 0, 0 ],
        [ 0, 0, 2 ],
        [ 0, 2, 2 ],
        [ 0, 2, 0 ],
        [ 2, 2, 0 ],
        [ 2, 2, 2 ],
        [ 2, 0, 2 ],
        [ 2, 0, 0 ]
    ]
    useFrame(() => {
        cube.current.position.set(...points[Math.floor(Date.now() * 0.0001) % points.length])
    })
    
    return <>
        <EffectComposer multisampling={4}>
            <Bloom mipmapBlur luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
            <Glitch delay={Date.now() * 0.0001 % 8} />
        </EffectComposer>
        <Perf position="top-left" />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        <planeGeometry args={ [ 10, 10 ] } />
        
        <mesh ref={cube} position={ [ 3, 0, 0 ] } rotation={ [ 0, 0, 0 ] } castShadow>
            <boxGeometry args={ [ 1, 1, 1 ] } />
            <meshPhongMaterial color={ 0xffffff } emissive={ 0x8a2be2 } emissiveIntensity={2} toneMapped={false}/>
        </mesh>
        


    </>
}