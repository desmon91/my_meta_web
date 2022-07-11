/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/email.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Curve001.geometry} material={nodes.Curve001.material} position={[0, 0, 0.01]} scale={3.44} />
    </group>
  )
}

useGLTF.preload('/email.glb')
