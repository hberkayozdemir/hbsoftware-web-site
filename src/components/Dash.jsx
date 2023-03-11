import React from "react";
import { useFBX, useGLTF } from "@react-three/drei";

export default function Dash({ color, ...props }) {
  const fbx = useFBX("/flutter_dash.fbx");

  return (
    <group>
      <primitive object={fbx} />
    </group>
  );
}

useFBX.preload("/flutter_dash.fbx");
