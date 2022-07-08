import { Box, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { useSpring, animated, config } from "@react-spring/three";

export default function WelcomeText() {
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
        position={[-2.8, 2.2, -2]}
        rotation={[0, 0.3, 0]}
        anchorX={"left"}
        name="wtxt"
        scale={scale}
        fillOpacity={fillOpacity}
      >
        Welcome
      </AnimatedText>

      <AnimatedText
        color="black"
        fontSize={0.6}
        position={[-2.8, 1.6, -2]}
        rotation={[0, 0.3, 0]}
        anchorX={"left"}
        className="wtxt"
        scale={scale}
        fillOpacity={fillOpacity}
      >
        To
      </AnimatedText>
      <AnimatedText
        color="black"
        fontSize={0.6}
        position={[-2.8, 1, -2]}
        rotation={[0, 0.3, 0]}
        anchorX={"left"}
        className="wtxt"
        scale={scale}
        fillOpacity={fillOpacity}
      >
        My
      </AnimatedText>
      <AnimatedText
        color="black"
        fontSize={0.6}
        position={[-2.8, 0.4, -2]}
        rotation={[0, 0.3, 0]}
        anchorX={"left"}
        className="wtxt"
        scale={scale}
        fillOpacity={fillOpacity}
      >
        Metaverse
      </AnimatedText>
    </group>
  );
}
