import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Myrobot = ({ isMobile }) => {
  const rob = useGLTF("./planet/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor='black' />
      
      <pointLight intensity={1} />
      <spotLight position={[-20,50,10]}
      angle={[0.12]}
      penumbra={1}
      intensity={1}
      
      />
      <primitive
        object={rob.scene}
        scale={isMobile ?0.08:0.16}
        position={isMobile?[0,-2.8,-0.08]:[0,-2.15,-0.08]}
      />
    </mesh>
  );
};

const Robot = () => {
  const [isMobile,setIsMobile]=useState(false)
  useEffect(()=>{
    const mediaquery=window.matchMedia("(max-width:500px)");
    setIsMobile(mediaquery.matches);
    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches);
    }
    mediaquery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaquery.removeEventListener("change", handleMediaQueryChange);
    };
  },[]);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Myrobot isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default Robot;