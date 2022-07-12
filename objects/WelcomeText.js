import { Box, Text, Text3D } from "@react-three/drei";
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
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        fontSize={0.6}
        position={[-2.2, 2.45, -1.4]}
        rotation={[0, 1.2, 0]}
        anchorX={"left"}
        name="wtxt"
        scale={scale}
        fillOpacity={fillOpacity}
      >
        Welcome
      </AnimatedText>

      <AnimatedText
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        fontSize={0.6}
        position={[-2.2, 1.85, -1.4]}
        rotation={[0, 1.2, 0]}
        anchorX={"left"}
        className="wtxt"
        scale={scale}
        fillOpacity={fillOpacity}
      >
        To
      </AnimatedText>
      <AnimatedText
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        fontSize={0.6}
        position={[-2.2, 1.25, -1.4]}
        rotation={[0, 1.2, 0]}
        anchorX={"left"}
        className="wtxt"
        scale={scale}
        fillOpacity={fillOpacity}
      >
        My
      </AnimatedText>
      <AnimatedText
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        fontSize={0.6}
        position={[-2.2, 0.65, -1.4]}
        rotation={[0, 1.2, 0]}
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
