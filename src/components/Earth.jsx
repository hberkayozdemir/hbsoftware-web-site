import React from "react";
import { useFBX, useGLTF } from "@react-three/drei";

export default function SunnyPark({ color, ...props }) {
  const fbx = useFBX("/earth.fbx");

  return (
    <group>
      <primitive object={fbx} />
    </group>
  );
}

useFBX.preload("/earth.fbx");
