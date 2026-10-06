import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial, Object3D } from "three";

import CanvasLoader from "../layout/Loader";
import { createScreen, TOTAL_CHARS } from "./screenTexture";

const SCREEN_MATERIAL = "Material.074_30";

// Replaces the monitor's static screenshot with a live, typing code editor.
const useLiveScreen = (scene: Object3D) => {
  const { invalidate, gl } = useThree();

  useEffect(() => {
    let material: MeshStandardMaterial | undefined;
    scene.traverse((obj) => {
      const mesh = obj as Mesh;
      if (mesh.isMesh && (mesh.material as MeshStandardMaterial).name === SCREEN_MATERIAL) {
        material = mesh.material as MeshStandardMaterial;
      }
    });
    if (!material) return;

    const { texture, draw } = createScreen();
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();
    material.map = texture;
    material.emissiveMap = texture;
    material.needsUpdate = true;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let chars = reduceMotion ? TOTAL_CHARS : 0;
    let tick = 0;
    let onScreen = true;
    draw(chars, true);
    invalidate();
    if (reduceMotion) return () => texture.dispose();

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
    });
    observer.observe(gl.domElement);

    const timer = window.setInterval(() => {
      if (!onScreen || document.hidden) return;
      tick += 1;
      if (chars < TOTAL_CHARS) {
        chars = Math.min(TOTAL_CHARS, chars + 2);
        draw(chars, true);
      } else if (tick % 12 === 0) {
        draw(chars, (tick / 12) % 2 === 0); // blink roughly twice a second
      } else {
        return;
      }
      invalidate();
    }, 45);

    return () => {
      window.clearInterval(timer);
      observer.disconnect();
      texture.dispose();
    };
  }, [scene, gl, invalidate]);
};

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.glb");
  useLiveScreen(computer.scene);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -4.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 1.5]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{
            preserveDrawingBuffer: true,
            antialias: false,
            alpha: true,
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </>
  );
};

export default ComputersCanvas;
