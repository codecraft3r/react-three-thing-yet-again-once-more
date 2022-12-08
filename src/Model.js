/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
        
        import React, { useRef  } from 'react'
        import { useGLTF,  
        
         } from '@react-three/drei'
        
        

        

        export function Model(props) {
            const { nodes, materials } = useGLTF('/posis-actually-correct.gltf') 
          return (
            <group  {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Reed.geometry} material={materials['SVGMat.001']} position={[-4.61, -2.76, -8.39,]} scale={308.52}   />
<mesh castShadow receiveShadow geometry={nodes.bigger_eye.geometry} material={materials['SVGMat.001']} position={[0.83, -2.76, -7.42,]} scale={308.52}   />
<mesh castShadow receiveShadow geometry={nodes.bird.geometry} material={materials['SVGMat.001']} position={[6.26, -2.76, -2.33,]} scale={308.52}   />
<mesh castShadow receiveShadow geometry={nodes['bird\'s_eye'].geometry} material={materials['SVGMat.001']} position={[4.91, -2.76, -6.02,]} scale={308.52}   />
<mesh castShadow receiveShadow geometry={nodes.Chin.geometry} material={materials['SVGMat.001']} position={[2.96, -2.76, 2.08,]} scale={308.52}   />

            </group>
          )
        }

useGLTF.preload('/posis-actually-correct.gltf')