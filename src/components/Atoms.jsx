import React from "react";
import { useFBX, useGLTF } from "@react-three/drei";

export default function Atoms({ color, ...props }) {
  const fbx = useFBX("/Cloud_3.fbx");

  return (
    <group>
    
      <primitive object={fbx} />
    </group>
  );
}

useFBX.preload("/Cloud_3.fbx");
