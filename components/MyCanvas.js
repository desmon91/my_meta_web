import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Avatar from "../objects/Avatar";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Shadow,
  Sky,
  SpotLight,
  useHelper,
} from "@react-three/drei";

import WelcomeText from "../objects/WelcomeText";
import AboutText from "../objects/AboutText";
import ProjectText from "../objects/ProjectText";
import ContactText from "../objects/ContactText";
import City3D from "../objects/City3D";

import { useSpring, animated, config } from "@react-spring/three";
import {
  EffectComposer,
  SelectiveBloom,
  Outline,
  DepthOfField,
} from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import Button3D from "../objects/Button3D";
import Email3D from "../objects/Email3D";
import Linkedin3D from "../objects/Linkedin3D";
import MyPointLight from "../objects/MyPointLight";

export default function MyCanvas() {
  const aboutButtonRef = useRef();
  const projectButtonRef = useRef();
  const emailIconRef = useRef();
  const linkedinIconRef = useRef();
  const lightRef1 = useRef();
  const [hoveredButton, onHoverButton] = useState(null);
  const selectedButton = hoveredButton ? hoveredButton : undefined;
  const [hoveredEmail, onHoverEmail] = useState(null);
  const selectedEmail = hoveredEmail ? hoveredEmail : undefined;
  const [hoveredLinkedin, onHoverLinkedin] = useState(null);
  const selectedLinkedin = hoveredLinkedin ? hoveredLinkedin : undefined;

  return (
    <>
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Suspense fallback={null}>
          <gridHelper />
          <axesHelper />
          <Sky
            distance={10000}
            turbidity={0}
            rayleigh={0.2}
            azimuth={0.1}
            inclination={0.5}
            mieCoefficient={0}
            mieDirectionalG={0}
          />
          <Shadow
            color="black"
            colorStop={0}
            opacity={0.5}
            fog={true} // Reacts to fog (default=false)
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
          <PerspectiveCamera
            makeDefault
            //this is for moving camera position up or down in x,y,z
            far={50}
            position={[0, 3, 0]}
          />

          {/* <Environment files="moonless_golf_2k.hdr" /> */}
          <hemisphereLight color={"lightblue"} intensity={0.8} />
          <MyPointLight
            position={[0, 8, 22]}
            intensity={0.1}
            sphereSize={2}
            castShadow
            color="yellow"
          />
          <MyPointLight
            position={[5.5, 8, 6]}
            intensity={0.1}
            sphereSize={2}
            castShadow
            color="yellow"
          />
          <MyPointLight
            position={[13, 8, -6.5]}
            intensity={0.1}
            sphereSize={2}
            castShadow
            color="yellow"
          />
          <City3D scale={2} position={[0, -0.55, -4]} rotation={[0, -2, 0]} />
          <AboutText />
          <WelcomeText />
          <ProjectText />
          <ContactText />
          <Avatar position={[1, 0, -2]} rotation={[0, -0.3, 0]} castShadow />
          <Button3D
            ref={aboutButtonRef}
            onHoverButton={onHoverButton}
            castShadow
            recieveShadow
            position={[2.8, 0.8, -0.6]}
            rotation={[1.58, 0, 1.5]}
            scale={0.4}
          />
          <Button3D
            ref={projectButtonRef}
            onHoverButton={onHoverButton}
            castShadow
            recieveShadow
            position={[2.38, 0.8, 3]}
            rotation={[1.58, 0, -3.5]}
            scale={0.4}
          />
          <Email3D
            ref={emailIconRef}
            onHoverEmail={onHoverEmail}
            castShadow
            recieveShadow
            position={[-2.8, 0.8, 3.7]}
            rotation={[1.5, 0, 3.7]}
            scale={1}
          />
          <Linkedin3D
            ref={linkedinIconRef}
            onHoverLinkedin={onHoverLinkedin}
            castShadow
            recieveShadow
            position={[-3.2, 0.79, 3.4]}
            rotation={[1.5, 0, 3.7]}
            scale={0.4}
          />
          <fogExp2 attach="fog" color="darkorange" density={0.03} />
          <EffectComposer autoClear={false}>
            <Outline
              selection={selectedButton}
              visibleEdgeColor="red"
              edgeStrength={2}
              blendFunction={BlendFunction.SCREEN}
              blur={true}
            />
            <Outline
              selection={selectedEmail}
              visibleEdgeColor="red"
              edgeStrength={2}
              blendFunction={BlendFunction.SCREEN}
              blur={true}
            />
            <Outline
              selection={selectedLinkedin}
              visibleEdgeColor="blue"
              edgeStrength={2}
              blendFunction={BlendFunction.SCREEN}
              blur={true}
            />
            <DepthOfField
              focusDistance={0} // where to focus
              focalLength={0.1} // focal length
              bokehScale={0.5} // bokeh size
              blendFunction={BlendFunction.Screen}
            />
            {/* <SelectiveBloom
              selection={selectedButton}
              intensity={1}
              luminanceThreshold={0.08}
              luminanceSmoothing={0.025}
            /> */}
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
}
