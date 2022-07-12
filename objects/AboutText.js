import { Box, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import Button3D from "./Button3D";

export default function AboutText() {
  const el = useRef();
  const AnimatedText = animated(Text);

  const { scale, fillOpacity } = useSpring({
    to: { scale: 1, fillOpacity: 1 },
    from: { scale: 0.9, fillOpacity: 0 },

    config: config.molasses,
  });

  return (
    <group name="wtxt">
      <AnimatedText
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        fontSize={0.6}
        position={[2.8, 2.2, -1.2]}
        rotation={[0, -1.5, 0]}
        anchorX={"left"}
        name="wtxt"
        scale={scale}
        fillOpacity={fillOpacity}
      >
        About
      </AnimatedText>

      <AnimatedText
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        fontSize={0.6}
        position={[2.8, 1.6, -1.2]}
        rotation={[0, -1.5, 0]}
        anchorX={"left"}
        className="wtxt"
        scale={scale}
        fillOpacity={fillOpacity}
      >
        Me
      </AnimatedText>
      <Button3D
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        position={[2.8, 0.8, -0.6]}
        rotation={[1.58, 0, 1.5]}
        scale={0.4}
      />
    </group>
  );
}
