import { Box, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { useSpring, animated, config } from "@react-spring/three";

export default function ContactText() {
  return (
    <group name="wtxt">
      <Text
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        fontSize={0.6}
        position={[-1.5, 2.2, 6]}
        rotation={[0, 3, 0]}
        anchorX={"left"}
        name="wtxt"
      >
        Contact
      </Text>

      <Text
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        fontSize={0.6}
        position={[-1.5, 1.6, 6]}
        rotation={[0, 3, 0]}
        anchorX={"left"}
        className="wtxt"
      >
        Me
      </Text>
    </group>
  );
}
