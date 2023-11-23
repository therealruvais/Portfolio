import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computer = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor="black"
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.5}
        position={[0, 0, -0.5]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 2, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls enableZoom={false} />
        <Computer />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
