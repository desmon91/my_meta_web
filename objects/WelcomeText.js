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
        position={[2, 2.45, -7]}
        rotation={[0, -0.3, 0]}
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
        position={[2, 1.85, -7]}
        rotation={[0, -0.3, 0]}
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
        position={[2, 1.25, -7]}
        rotation={[0, -0.3, 0]}
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
        position={[2, 0.65, -7]}
        rotation={[0, -0.3, 0]}
        anchorX={"left"}
        className="wtxt"
      >
        Metaverse
      </Text>
    </group>
  );
}
