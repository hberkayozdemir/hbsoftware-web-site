import React, { Suspense } from "react";
import { OrbitControls, Stage, useFBX, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Dash({ color, ...props }) {
  const fbx = useFBX("/flutter_dash.fbx");

  return (
    <Canvas>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <group>
            <primitive object={fbx} />
          </group>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Suspense>
    </Canvas>
  );
}

useFBX.preload("/flutter_dash.fbx");
