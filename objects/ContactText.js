import { Box, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import Email3D from "./Email3D";

export default function ContactText() {
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
        position={[-2.8, 2.2, 4]}
        rotation={[0, 2.5, 0]}
        anchorX={"left"}
        name="wtxt"
        scale={scale}
        fillOpacity={fillOpacity}
      >
        Contact
      </AnimatedText>

      <AnimatedText
        color="black"
        fontSize={0.6}
        position={[-2.8, 1.6, 4]}
        rotation={[0, 2.5, 0]}
        anchorX={"left"}
        className="wtxt"
        scale={scale}
        fillOpacity={fillOpacity}
      >
        Me
      </AnimatedText>
      <Email3D
        color="black"
        position={[-2.8, 0.8, 3.7]}
        rotation={[1.5, 0, 3.7]}
        scale={1}
      />
    </group>
  );
}
