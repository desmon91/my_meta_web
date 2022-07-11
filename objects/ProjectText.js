import { Box, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import Button3D from "./Button3D";

export default function ProjectText() {
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
        color="black"
        fontSize={0.6}
        position={[3, 2.2, 2.8]}
        rotation={[0, 3.5, 0]}
        anchorX={"left"}
        name="wtxt"
        scale={scale}
        fillOpacity={fillOpacity}
      >
        Recent
      </AnimatedText>

      <AnimatedText
        color="black"
        fontSize={0.6}
        position={[3, 1.6, 2.8]}
        rotation={[0, 3.5, 0]}
        anchorX={"left"}
        className="wtxt"
        scale={scale}
        fillOpacity={fillOpacity}
      >
        Project
      </AnimatedText>
      <Button3D
        color="black"
        position={[2.38, 0.8, 3]}
        rotation={[1.58, 0, -3.5]}
        scale={0.4}
      />
    </group>
  );
}
