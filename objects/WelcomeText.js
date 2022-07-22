import { Box, Text, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";

export default function WelcomeText() {
  const el = useRef();

  return (
    <group name="wtxt">
      <Text
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        fontSize={0.6}
        position={[-4, 2.45, 1]}
        rotation={[0, 1.2, 0]}
        anchorX={"left"}
        name="wtxt"
      >
        Welcome
      </Text>

      <Text
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        fontSize={0.6}
        position={[-4, 1.85, 1]}
        rotation={[0, 1.2, 0]}
        anchorX={"left"}
        className="wtxt"
      >
        To
      </Text>
      <Text
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        fontSize={0.6}
        position={[-4, 1.25, 1]}
        rotation={[0, 1.2, 0]}
        anchorX={"left"}
        className="wtxt"
      >
        My
      </Text>
      <Text
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        fontSize={0.6}
        position={[-4, 0.65, 1]}
        rotation={[0, 1.2, 0]}
        anchorX={"left"}
        className="wtxt"
      >
        Metaverse
      </Text>
    </group>
  );
}
