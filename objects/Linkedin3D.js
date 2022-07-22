/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Linkedin3D({ onHoverButton, openInNewTab, ...props }) {
  const outlineRef = useRef();
  const textRef = useRef();

  const { nodes, materials } = useGLTF("/linkedin.glb");
  return (
    <group
      {...props}
      dispose={null}
      onPointerOver={() => onHoverButton([outlineRef])}
      onPointerOut={() => onHoverButton(null)}
      onClick={() =>
        openInNewTab("https://www.linkedin.com/in/desmond-kristian-84aa92129/")
      }
      onTouchStart={() =>
        openInNewTab("https://www.linkedin.com/in/desmond-kristian-84aa92129/")
      }
    >
      <mesh
        ref={outlineRef}
        geometry={nodes.Plane.geometry}
        material={materials["Material.002"]}
        scale={0.51}
      />
      <mesh
        ref={textRef}
        geometry={nodes.Object.geometry}
        material={materials["Material.002"]}
        position={[0, 0.04, 0]}
        scale={0.7}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials["Material.001"]}
        position={[0, 0.01, 0.01]}
        scale={0.42}
      />
    </group>
  );
}

useGLTF.preload("/linkedin.glb");
