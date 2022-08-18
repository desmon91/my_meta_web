import Head from "next/head";
import styles from "../styles/Home.module.css";

import React, { Suspense, useEffect, useRef, useState } from "react";

import AboutModal from "../components/AboutModal";
import ProjectModal from "../components/ProjectModal";
import CreditsModal from "../components/CreditsModal";
import { Canvas } from "@react-three/fiber";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Preload,
  Shadow,
  Sky,
  Stars,
  Stats,
  useProgress,
} from "@react-three/drei";

import AboutText from "../objects/AboutText";
import WelcomeText from "../objects/WelcomeText";
import ProjectText from "../objects/ProjectText";
import ContactText from "../objects/ContactText";
import CreditsText from "../objects/CreditsText";
import Avatar from "../objects/Avatar";
import Button3D from "../objects/Button3D";
import Email3D from "../objects/Email3D";
import Linkedin3D from "../objects/Linkedin3D";
import MyLoader from "../components/MyLoader";
import Terrain from "../objects/Terrain";
import ErrorBoundary from "../components/ErrorBoundary";

const WelcomeModal = React.lazy(() => import("../components/WelcomeModal"));
const Footer360 = React.lazy(() => import("../components/Footer360"));

export default function Home(props) {
  const lightRef = useRef();
  const [hoveredButton, onHoverButton] = useState(null);
  const [hideAboutModal, setHideAboutModal] = useState(true);
  const [hideProjectModal, setHideProjectModal] = useState(true);
  const [hideCreditsModal, setHideCreditsModal] = useState(true);
  const [hideWelcomeModal, setHideWelcomeModal] = useState(true);
  const [waveHand, setWaveHand] = useState(false);
  const { active, progress, errors, item, loaded, total } = useProgress();

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    if (!active) {
      setHideWelcomeModal(false);
    }
  }, [progress]);

  return (
    <div className={styles.container}>
      {/* page title */}
      <Head>
        <title>Desmond&apos;s Metaverse</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Suspense fallback={<MyLoader />}>
        <ErrorBoundary>
          {/* modal area */}
          <AboutModal
            hideModal={hideAboutModal}
            setHideModal={setHideAboutModal}
          />
          <ProjectModal
            hideModal={hideProjectModal}
            setHideModal={setHideProjectModal}
            openInNewTab={openInNewTab}
          />
          <CreditsModal
            hideModal={hideCreditsModal}
            setHideModal={setHideCreditsModal}
          />
          <WelcomeModal
            hideModal={hideWelcomeModal}
            setHideModal={setHideWelcomeModal}
            setWaveHand={setWaveHand}
          />
          {/* canvas area */}

          <Canvas
            style={{
              width: "100vw",
              height: "100vh",
              position: "fixed",
            }}
            performance={{ min: 0.1 }}
          >
            {/* Performance component */}
            <Preload all />
            {/* <AdaptiveDpr pixelated /> */}
            <AdaptiveEvents />
            {/* Helper component */}
            {/* <Stats /> */}
            {/* <gridHelper args={[50, 50]} /> */}
            {/* <axesHelper /> */}
            {/* Sky component */}
            <Sky
              distance={1000}
              turbidity={0}
              rayleigh={1000}
              azimuth={0}
              inclination={0.1}
              mieCoefficient={0}
              mieDirectionalG={0}
            />
            <Stars
              radius={35}
              depth={50}
              count={5000}
              factor={4}
              saturation={10}
              fade
              speed={1}
            />
            {/* Camera component */}

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              //for locking the rotation only in sideways
              maxPolarAngle={1.5}
              //for locking the rotation only in sideways
              minPolarAngle={1.5}
              //for rotating camera up or down in x,y,z
              target={[0, 1.5, 0]}
              rotation={[0, 0, 0]}
              enableDamping={true}
              dampingFactor={0.5}
              regress
            />

            <PerspectiveCamera
              makeDefault
              //this is for moving camera position up or down in x,y,z
              far={100}
              position={[0, 3, 0]}
            />

            <Environment files="moonless_golf_2k.hdr" />
            <hemisphereLight
              ref={lightRef}
              color={"lightblue"}
              intensity={0.5}
              castShadow
            />
            <ambientLight color={"lightblue"} intensity={0.5} />
            {/* Bellow contains models to render */}
            <Terrain scale={1.5} />
            <WelcomeText />
            <AboutText />
            <ProjectText />
            <ContactText />
            <CreditsText />

            <Avatar
              position={[0, 0, -2.5]}
              rotation={[0, 0, 0]}
              waveHand={waveHand}
              setWaveHand={setWaveHand}
            />
            <Button3D
              name="about-button"
              hideModal={setHideAboutModal}
              onHoverButton={onHoverButton}
              position={[4.5, 0.8, -1.6]}
              rotation={[1.58, 0, 1.5]}
              scale={0.4}
            />
            <Button3D
              name="project-button"
              hideModal={setHideProjectModal}
              onHoverButton={onHoverButton}
              position={[3.38, 0.8, 4]}
              rotation={[1.58, 0, -3.5]}
              scale={0.4}
            />
            <Button3D
              name="credits-button"
              hideModal={setHideCreditsModal}
              onHoverButton={onHoverButton}
              position={[-7, 0.8, 0.35]}
              rotation={[-4.72, 0, -2]}
              scale={0.4}
            />
            <Email3D
              onHoverButton={onHoverButton}
              openInNewTab={openInNewTab}
              position={[-1.7, 0.8, 5.7]}
              rotation={[1.6, 0, 3.5]}
              scale={1}
            />
            <Linkedin3D
              onHoverButton={onHoverButton}
              openInNewTab={openInNewTab}
              position={[-2.4, 0.79, 5.8]}
              rotation={[1.6, 0, 3.5]}
              scale={0.4}
            />
            <fogExp2 attach="fog" color="orange" density={0.04} />

            {/* <EffectComposer autoClear={false}>
            <SelectiveBloom
              lights={[lightRef]}
              selection={selectedButton}
              selectionLayer={2} // selection layer
              intensity={1.0} // The bloom intensity.
              blurPass={undefined} // A blur pass.
              width={Resolution.AUTO_SIZE} // render width
              height={Resolution.AUTO_SIZE} // render height
              kernelSize={KernelSize.LARGE} // blur kernel size
              luminanceThreshold={0.08}
              luminanceSmoothing={0.025}
            />
          </EffectComposer> */}
          </Canvas>
        </ErrorBoundary>
      </Suspense>
      <Footer360 />
    </div>
  );
}
