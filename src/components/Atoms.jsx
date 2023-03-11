import React from "react";
import { useFBX, useGLTF } from "@react-three/drei";

export default function Atoms({ color, ...props }) {
  const fbx = useFBX("/atom.fbx");

  return (
    <group>
      <primitive object={fbx} />
    </group>
  );
}

useFBX.preload("/atom.fbx");
