import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Avatar from "../objects/Avatar";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Shadow,
} from "@react-three/drei";

import WelcomeText from "../objects/WelcomeText";
import AboutText from "../objects/AboutText";
import ProjectText from "../objects/ProjectText";
import ContactText from "../objects/ContactText";
import City3D from "../objects/City3D";

import { useSpring, animated, config } from "@react-spring/three";
import {
  EffectComposer,
  Bloom,
  SelectiveBloom,
  Outline,
  DepthOfField,
} from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import Button3D from "../objects/Button3D";

export default function MyCanvas() {
  const aboutButtonRef = useRef();
  const projectButtonRef = useRef();
  const lightRef = useRef();
  const [hovered, onHover] = useState(null);
  const selected = hovered ? hovered : undefined;
  return (
    <>
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          background: "grey",
        }}
      >
        <Suspense fallback={null}>
          <gridHelper />
          <axesHelper />
          <Shadow
            color="black"
            colorStop={0}
            opacity={0.5}
            fog={false} // Reacts to fog (default=false)
          />
          <OrbitControls
            // enableZoom={false}
            enablePan={false}
            //for locking the rotation only in sideways
            maxPolarAngle={1.5}
            //for locking the rotation only in sideways
            minPolarAngle={1.5}
            //for rotating camera up or down in x,y,z
            target={[0, 1.5, 0]}
          />
          <fogExp2 attach="fog" color="grey" density={0.05} />
          <PerspectiveCamera
            makeDefault
            //this is for moving camera position up or down in x,y,z
            far={100}
            position={[0, 3, 0]}
          />

          <Environment files="moonless_golf_2k.hdr" />
          <hemisphereLight color={"lightyellow"} intensity={0.8} />
          <City3D scale={2} position={[0, -0.55, -4]} rotation={[0, -2, 0]} />
          <AboutText />
          <WelcomeText />
          <ProjectText />
          <ContactText />
          <Avatar position={[1, 0, -2]} rotation={[0, -0.3, 0]} castShadow />
          <Button3D
            ref={aboutButtonRef}
            onHover={onHover}
            castShadow
            recieveShadow
            position={[2.8, 0.8, -0.6]}
            rotation={[1.58, 0, 1.5]}
            scale={0.4}
          />
          <Button3D
            ref={projectButtonRef}
            onHover={onHover}
            castShadow
            recieveShadow
            position={[2.38, 0.8, 3]}
            rotation={[1.58, 0, -3.5]}
            scale={0.4}
          />
          {/* <ambientLight intensity={0.5} ref={lightRef} /> */}
          <EffectComposer autoClear={false}>
            <Outline
              selection={selected}
              visibleEdgeColor="red"
              edgeStrength={10}
              blendFunction={BlendFunction.SCREEN}
              blur={true}
            />
            {/* <DepthOfField
              focusDistance={0.2} // where to focus
              focalLength={1} // focal length
              bokehScale={0.1} // bokeh size
            /> */}
            {/* <SelectiveBloom
          selection={selected}
          intensity={2}
          luminanceThreshold={0.08}
          luminanceSmoothing={0.025}
        /> */}
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
}
